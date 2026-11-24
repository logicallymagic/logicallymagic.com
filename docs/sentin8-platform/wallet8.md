---
title: Wallet8 — the digital wallet vertical
sidebar_label: Wallet8
sidebar_position: 9
description: Wallet8 is the wallet vertical of the Sentin8 platform — an OID4VCI/OID4VP wallet with a sealed credential vault, device-bound proofs, and consent on every presentation.
image: /img/project-grid/wallet8.png
keywords: [digital wallet, oid4vci, oid4vp, verifiable credentials, eudi, eidas, sd-jwt, mdoc, haip, dcql]
---

import Link from '@docusaurus/Link';

# Wallet8

<div className="doc-image-frame">
  <img src="/img/project-grid/wallet8.png" alt="Wallet8" />
</div>

Wallet8 is the wallet vertical of the Sentin8 platform: the reusable wallet
platform that other verticals — Bank8, Hotel8, Health8, and beyond — build
their own branded wallets on.

## What it is

The wallet role of the digital-credential stack, as a first-class product.
A user scans an issuer's credential offer, the wallet completes issuance and
seals the credential, and later scans a verifier's request, reviews the exact
claim set being asked for, and presents only that — consent first, every
time.

It ships as the pieces a vertical actually needs:

| Component | What it does |
| --- | --- |
| **wallet8-sdk** | The Rust SDK: the OID4VCI issuance client, the OID4VP presentation client, and the holder-service contracts. |
| **wallet8-flutter** | The Flutter wallet SDK: credential store, issuance/presentation drivers, and status sync. |
| **wallet8-holder** | The holder backend: the sealed credential vault, device-key registration, presentation history, and the status sync. |
| **wallet8-wallet** | The reference Flutter web wallet: scan intake, the vault, the consent preview, and the Digital Credentials API shim. |

## Why it matters to your business

- **Ship a branded wallet without building credential protocols.** A bank's
  identity wallet, a hotel's guest wallet, a health plan's member card — each
  embeds the same hardened SDKs instead of reimplementing OID4VCI and OID4VP.
- **Consent before data.** No presentation leaves the wallet without an
  explicit consent step showing the exact requested claims — never the whole
  credential.
- **A sealed vault.** Credentials are stored as AES-256-GCM envelopes in the
  holder service; plaintext credentials never sit in an application table.
- **Stolen credentials are inert.** One device key per wallet means issuance
  proofs and DPoP tokens are sender-constrained.
- **Regulatory alignment by construction.** Every flow is built from the
  normative standards the EUDI wallet (eIDAS 2.0), national mDL programs, and
  HAIP-based ecosystems mandate.

## Core capabilities

| Capability | Why it matters |
| --- | --- |
| **Credential intake** | Scan an issuer's offer (QR or deep link) and complete issuance — authorization code with PAR + PKCE, or pre-authorized with a transaction code. |
| **Sealed credential vault** | AES-256-GCM at rest, listed per user, with secret references only on the API surface. |
| **Selective disclosure** | DCQL-driven selection presents the minimum claim set the verifier asked for. |
| **Device binding** | One device key per wallet; proofs and tokens are sender-constrained. |
| **Revocation awareness** | The status sync walks the Token Status List, so a revoked credential stops presenting. |
| **Presentation history** | Every verification event recorded — who saw what, and when. |

## Standards

Wallet8 is spec-first — every protocol function cites the section it
implements:

- **OpenID for Verifiable Credential Issuance (OID4VCI) 1.0** (Final) — the
  issuance client.
- **OpenID for Verifiable Presentations (OID4VP) 1.0** (Final) — the
  presentation client, including DCQL, `direct_post`, encrypted responses,
  and the Digital Credentials API.
- **ISO/IEC 18013-5/-7** (`mso_mdoc`) and **IETF SD-JWT VC** (`dc+sd-jwt`) —
  the credential formats the vault holds.
- **OAuth/JOSE substrate** — PKCE, PAR, JAR, DPoP, and the IETF Token Status
  List for revocation.
- **OIDF HAIP 1.0** and the **W3C Digital Credentials API** — the interop
  targets, with **eIDAS 2.0 / EUDI** on the same protocol layer.

## Who it's for

- **Verticals and platform teams** that need a compliant wallet as a
  component rather than a project.
- **Banks, hotels, and health plans** issuing branded credentials to their
  customers.
- **Ecosystems and trust frameworks** pursuing OIDF wallet-role conformance
  with a real client under test.

## Product website

<Link to="https://wallet8.dev/">wallet8.dev</Link> — the wallet's own site,
plus the technical documentation behind it.
