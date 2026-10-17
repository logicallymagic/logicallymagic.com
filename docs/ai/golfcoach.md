---
title: AI Golf Coach — inverse-kinematics RNN
sidebar_label: AI Golf Coach
sidebar_position: 5
description: A non-intrusive AI golf coaching system — inverse kinematics and a recurrent neural network that adapts to your body's physics using three tiny sensors.
image: /img/project-grid/golf-thumb.jpg
keywords: [ai, sports, golf, biomechanics, inverse kinematics, rnn, sensors]
---

# AI Golf Coach

<div className="doc-image-frame">
  <img src="/img/project-grid/golf-thumb.jpg" alt="AI Golf Coach" />
</div>

The AI Golf Coach is a non-intrusive AI system that adapts to your body's
physics. It captures and checks your moves every millisecond using three
tiny sensors — hand, hip, and shoulder.

## How it works

- **Three sensors, zero wearables in your face.** Hand, hip, and shoulder
  sensors stream motion data continuously. No camera rigs, no full-body
  suits, no instrumented club.
- **Inverse kinematics.** From three points, the system reconstructs the
  full kinematic chain of your swing — joint angles, planes, and timing —
  and compares it against your own optimal model.
- **A recurrent neural network that learns you.** The RNN models your
  swing as a time series, capturing the sequencing (x-factor, transition,
  release) that single-frame analysis fundamentally misses.
- **Feedback every millisecond.** Because the model runs continuously,
  coaching feedback arrives during the swing cycle — not after a video
  review.

## Why it matters

- **Sports biomechanics as a showcase of applied ML.** The same
  architecture — sensor fusion, inverse kinematics, recurrent sequence
  models — transfers directly to industrial monitoring, physical therapy,
  and human-factors engineering.
- **Non-intrusive beats high-friction.** Adoption of any coaching tech is
  won or lost on friction. Three tiny sensors mean real adoption — and a
  real data pipeline — instead of a demo video.

## Read more

- [AI Golf Coach: inverse kinematics & recurrent neural network — LinkedIn article](https://www.linkedin.com/pulse/ai-golf-coach-inverse-kinematics-recurrent-neural-network-jahanzad/)