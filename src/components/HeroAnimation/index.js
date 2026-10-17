import React, {useEffect, useRef} from 'react';

/**
 * The signature logically MAGIC hero animation — a faithful port of the
 * original `js/3d/sphere.js` (three.js Projector + CanvasRenderer pipeline),
 * implemented directly on the Canvas 2D API with no dependencies.
 *
 * Exactly like the original:
 *  - 300 radial line segments: a point on a radius-450 sphere shell, plus a
 *    second point 1.0–1.3x further out on the same ray.
 *  - Flat color 0x353535, linewidth 1, per-line random opacity.
 *  - PerspectiveCamera: fov 75deg, z = 1000, always lookAt(origin) — the
 *    camera orbits the sphere, which stays centered.
 *  - Camera eases toward (mouseX, -mouseY + 200) at 0.05 per frame and
 *    self-drifts ±1px per frame, bouncing at ±500px.
 *  - Transparent canvas over the light hero background.
 */
export default function HeroAnimation({className}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let width = 0;
    let height = 0;

    // ---- Scene ------------------------------------------------------------
    const RADIUS = 450;
    const LINE_COUNT = 300;
    const lines = [];

    for (let i = 0; i < LINE_COUNT; i++) {
      // Random point on the unit sphere (normalized cube-sample).
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      let z = Math.random() * 2 - 1;
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      x /= len;
      y /= len;
      z /= len;

      const inner = {x: x * RADIUS, y: y * RADIUS, z: z * RADIUS};
      const stretch = Math.random() * 0.3 + 1; // 1.0 – 1.3
      const outer = {
        x: inner.x * stretch,
        y: inner.y * stretch,
        z: inner.z * stretch,
      };

      lines.push({a: inner, b: outer, alpha: Math.random()});
    }

    // ---- Camera -----------------------------------------------------------
    // THREE.PerspectiveCamera(75, aspect, 1, 10000) at z = 1000.
    const CAMERA_Z = 1000;
    const FOV_Y = (75 * Math.PI) / 180;
    const FOCAL = 1 / Math.tan(FOV_Y / 2);

    let cameraX = 0; // camera.position.x
    let cameraY = 0; // camera.position.y
    let mouseX = 0;
    let mouseY = 0;
    let directionX = 1;
    let directionY = -1;

    // ---- Projection (camera.lookAt(origin) view basis + perspective) ------
    let basis = null;

    const updateBasis = () => {
      // zAxis = normalize(cameraPos - target); target is the origin.
      const zx = cameraX;
      const zy = cameraY;
      const zz = CAMERA_Z;
      const zlen = Math.sqrt(zx * zx + zy * zy + zz * zz);
      const nzx = zx / zlen;
      const nzy = zy / zlen;
      const nzz = zz / zlen;

      // xAxis = normalize(cross(up, zAxis)); up = (0, 1, 0).
      const xx = nzz;
      const xz = -nzx;
      const xlen = Math.sqrt(xx * xx + xz * xz) || 1;

      // yAxis = cross(zAxis, xAxis).
      const yx = nzy * xz / xlen - nzz * 0;
      const yy = nzz * xx / xlen - nzx * xz / xlen;
      const yz = nzx * 0 - nzy * xx / xlen;

      basis = {
        xx: xx / xlen,
        xy: 0,
        xz: xz / xlen,
        yx,
        yy,
        yz,
        zx: nzx,
        zy: nzy,
        zz: nzz,
      };
    };

    const project = (p, halfW, halfH, aspect) => {
      const d = {
        x: p.x - cameraX,
        y: p.y - cameraY,
        z: p.z - CAMERA_Z,
      };

      // World → camera space.
      const xCam =
        basis.xx * d.x + basis.xy * d.y + basis.xz * d.z;
      const yCam =
        basis.yx * d.x + basis.yy * d.y + basis.yz * d.z;
      const zCam =
        basis.zx * d.x + basis.zy * d.y + basis.zz * d.z;

      // In front of the near plane? (near = 1)
      if (zCam > -1) return null;

      // Perspective divide into NDC.
      const xNdc = ((FOCAL / aspect) * xCam) / -zCam;
      const yNdc = (FOCAL * yCam) / -zCam;

      // NDC → canvas pixels (y axis points down).
      return {
        sx: halfW + xNdc * halfW,
        sy: halfH - yNdc * halfH,
      };
    };

    // ---- Resize -----------------------------------------------------------
    const resize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // ---- Interaction ------------------------------------------------------
    const onDocumentMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = event.clientX - rect.left - width / 2;
      mouseY = event.clientY - rect.top - height / 2;
    };

    const onWindowResize = () => {
      resize();
    };

    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    // ---- Render loop ------------------------------------------------------
    let frame = 0;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const render = () => {
      frame = requestAnimationFrame(render);

      if (!prefersReducedMotion) {
        // camera.position.x/y ease toward (mouseX, -mouseY + 200).
        cameraX += (mouseX - cameraX) * 0.05;
        cameraY += (-mouseY + 200 - cameraY) * 0.05;

        // Idle self-drift, bouncing at ±500 — as in the original.
        if (mouseX < -500 || mouseX > 500) {
          directionX *= -1;
          mouseX = mouseX > 0 ? 500 : -500;
        }
        if (mouseY < -500 || mouseY > 500) {
          directionY *= -1;
          mouseY = mouseY > 0 ? 500 : -500;
        }
        mouseX += directionX;
        mouseY += directionY;
      }

      updateBasis();

      const halfW = width / 2;
      const halfH = height / 2;
      const aspect = width / height;

      context.clearRect(0, 0, width, height);

      context.lineWidth = 1;
      for (const line of lines) {
        const a = project(line.a, halfW, halfH, aspect);
        const b = project(line.b, halfW, halfH, aspect);
        if (!a || !b) continue;

        context.strokeStyle = `rgba(53, 53, 53, ${line.alpha})`;
        context.beginPath();
        context.moveTo(a.sx, a.sy);
        context.lineTo(b.sx, b.sy);
        context.stroke();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}