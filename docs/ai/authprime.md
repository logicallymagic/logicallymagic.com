---
title: authPRIME — OAuth 2.0 / OIDC authorization server
sidebar_label: authPRIME
sidebar_position: 6
description: authPRIME is an OAuth 2.0 Authorization Server with support for OpenID Connect (OIDC), FAPI 1 / FAPI 2 profiles, PKCE, dynamic client registration, token revocation, and more.
image: /img/project-grid/auth-thumb.jpg
keywords: [oauth, oidc, fapi, authorization, identity, pkce, security]
---

# authPRIME

<div className="doc-image-frame">
  <img src="/img/project-grid/auth-thumb.jpg" alt="authPRIME" />
</div>

authPRIME is an OAuth 2.0 Authorization Server with support for OpenID
Connect (OIDC), FAPI 1 / FAPI 2 profiles, and many other additional features
and standards.

## The business case

- **Identity is the front door to every product.** Getting it wrong is
  front-page news; getting it right is invisible. authPRIME implements the
  full modern standards stack so your front door is boring in the best
  way.
- **FAPI profiles open the regulated market.** Financial-grade API (FAPI 1
  and FAPI 2) conformance is what banks and regulators expect from open
  banking and payments integrations. authPRIME ships with it — this is the
  same engine behind our [Open Banking platform](/products/ai/openbanking).
- **Dynamic client registration scales partnerships.** Partners onboard
  themselves through the standard DCR flow instead of an e-mail thread with
  your security team.
- **Every logout and revocation edge case, covered.** RP-initiated logout,
  back-channel logout, and token revocation are the details that decide
  whether an identity deployment survives a security review.

## Standards implemented

- [RFC 6749 — OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749) & [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OIDC Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)
- Dynamic Client Registration
  - [OIDC Dynamic Client Registration 1.0](https://openid.net/specs/openid-connect-registration-1_0.html)
  - [RFC 7591 — OAuth 2.0 Dynamic Client Registration Protocol](https://www.rfc-editor.org/rfc/rfc7591.html)
  - [RFC 7592 — OAuth 2.0 Dynamic Client Registration Management Protocol](https://www.rfc-editor.org/rfc/rfc7592.html)
- [OIDC RP-Initiated Logout 1.0](https://openid.net/specs/openid-connect-rpinitiated-1_0-final.html)
- [OIDC Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0-final.html)
- [RFC 7009 — OAuth 2.0 Token Revocation](https://www.rfc-editor.org/rfc/rfc7009.html)
- [RFC 7636 — Proof Key for Code Exchange (PKCE)](https://www.rfc-editor.org/rfc/rfc7636.html)
- [RFC 7662 — OAuth 2.0 Token Introspection](https://www.rfc-editor.org/rfc/rfc7662.html)
- [RFC 8252 — OAuth 2.0 for Native Apps BCP (AppAuth)](https://www.rfc-editor.org/rfc/rfc8252.html)
- [RFC 8628 — OAuth 2.0 Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html)
- FAPI 1 / FAPI 2 profiles

## Who it's for

- **Fintechs and banks** needing an FAPI-conformant authorization server.
- **Enterprises** replacing legacy SSO with a standards-complete OIDC
  provider.
- **Platform companies** issuing identity to partner ecosystems via dynamic
  client registration.