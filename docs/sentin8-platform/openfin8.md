---
title: OpenFin8 — open finance
sidebar_label: OpenFin8
sidebar_position: 3
description: OpenFin8 is the open-finance vertical of the Sentin8 platform — a consent-first authority for sharing financial data under explicit, revocable, field-minimized consent across FDX and OBL jurisdictions.
image: /img/project-grid/openfin8.jpg
keywords: [open finance, open banking, fdx, obl, consent, data sharing, crd, csdf, fintech]
---

import Link from '@docusaurus/Link';

# OpenFin8

<div className="doc-image-frame">
  <img src="/img/project-grid/openfin8.jpg" alt="OpenFin8" />
</div>

OpenFin8 is the open-finance vertical of the Sentin8 platform — the consent
authority, recipient registry, and jurisdiction adapters that let an
institution share its customers' financial data with registered third
parties under explicit, revocable, field-minimized consent.

## What it is

The standards moved from open banking to open finance: FDX added payroll
data and targets agentic-AI data sharing in the US, the UK's Future Entity
is chartered for Open Finance and Smart Data, Brazil's phases 4–5 cover
investments, insurance, and pensions, the EU's successor standard is the
openFinance API Framework, and Australia's CDR is sector-agnostic by
legislation. OpenFin8 is the one home for every future data family —
banking is its first sector, not its container.

## Why it matters to your business

- **No consent, no data.** Every provider route passes consent middleware
  (valid, unexpired, scope-covered) on top of row-level security —
  revocation stops serving on the very next call. Structurally, no bypass
  exists.
- **Two ledgers, one truth per side.** The provider's grant ledger and the
  recipient's consent registry live in separate tenants; no cross-tenant
  SQL ever.
- **Data minimization by construction.** Responses are projected to the
  granted clusters before serialization — narrowed by scope, product
  category, and requested fields.
- **One kernel, zero forks.** The entire implementation lives in
  `openfin8-core`, shared byte-for-byte. Each jurisdiction adapter
  contributes its profile and registration data — adding a market is
  configuration, not a port.

## Jurisdictions

| Service | Jurisdiction | Standard | Status |
| --- | --- | --- | --- |
| OpenFin8:CA | Canada | FDX v6.x | Serving |
| OpenFin8:US | United States | FDX v6.x | Serving |
| OpenFin8:UK | United Kingdom | OBL Read/Write API v3.1.x | In design |
| OpenFin8:BR | Brazil | Open Finance Brasil | Designed |
| OpenFin8:EU | European Union | Berlin Group openFinance | Designed |
| OpenFin8:AU | Australia | CDR | Designed |

## Who it's for

- **Institutions** acting as data providers that need consent-checked
  sharing with an audit trail their regulator will believe.
- **Recipient fintechs** composing the recipient plane standalone —
  consent registry, notifications, and field-minimized reads.
- **Bank8 deployments** that want open-finance data sharing composed into
  their core, rather than bolted on.

## Product website

<Link to="https://openfin8.dev/">openfin8.dev</Link> — full technical
documentation for every jurisdiction adapter.