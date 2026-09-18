# Tangier Shore Excursions — World 2.0 Completion Report

**Date:** 26 July 2026  
**Domain:** tangiershoreexcursion.com  
**Template:** World 2.0 Starter Template (platform v1.4 editorial features; request referenced v1.3 Experience Cards)  
**QA:** **World 2.0 Gold PASS — 112/115**  
**Scope:** Localhost only — no deploy, no Cloudflare, no Stripe

---

## Configuration

| Item | Value |
|------|--------|
| Brand | Tangier Shore Excursions |
| Strapline | Where Europe Meets Africa |
| Domain / URL | tangiershoreexcursion.com |
| Booking prefix | TG |
| Currency | EUR |
| Country | Morocco |
| Region | europe (Mediterranean cruise network) |
| Contact mode | central (`info@wowatour.com`) |
| Pages project | tangier-shore-excursions |
| Payments worker | tangier-payments |
| D1 | tangier-bookings (placeholder id) |

Files: `src/config/destination.ts`, `completion.ts`, `footer.ts`, `AGENTS.md`, `public/_redirects`, World-2.0 `sites.json` entry (development).

---

## Editorial content

- **Opening message:** Tangier as one of the easiest places to experience Morocco on a cruise day.
- **Foundational distinction:** Walk Medina & Kasbah independently **or** travel beyond the walls to Cape Spartel & Hercules Caves.
- **Spirit of Place:** Original editorial on Europe/Africa, Mediterranean/Atlantic, cultural blend, Medina atmosphere.
- **Honest Advice:** Balanced — independence excellent for the city; organised excursion easier for Cape Spartel / Hercules / Chefchaouen.
- **Editorial Promise:** Present on homepage.
- **Tone:** Experienced local travel editor (British English), not OTA sales copy.

---

## Experience Cards

Featured pathways on the homepage:

1. **Editor's Choice** → Tangier Highlights, Cape Spartel & Hercules Caves  
2. **Walk It Yourself** → Historic Medina & Kasbah (`/guides/explore-independently`)  
3. **Moroccan Culture** → Markets, history and architecture  
4. **Food & Cafés** → Mint tea, pastries and local restaurants  
5. **Best Views** → Kasbah viewpoints, Café Hafa and Cape Spartel  

---

## Walk It Yourself

- **URL:** `/guides/explore-independently` (no parallel `/walk-it-yourself` route — v1.4 pattern)
- **Title:** Walk It Yourself
- Full `independentWalk`: arrival from cruise port, Grand Socco, Petit Socco, Medina, Kasbah, viewpoints, American Legation, traditional cafés, Café Hafa, shopping advice, practical tips, safe return to ship
- **No interactive maps** (Version 1)
- Soft link to Editor's Choice for beyond-the-walls days

---

## Editor's Choice

| Field | Value |
|-------|--------|
| Slug | `tangier-highlights-cape-spartel-hercules-caves` |
| Title | Tangier Highlights, Cape Spartel & Hercules Caves |
| Combines | Tangier · Kasbah · Medina · Cape Spartel · Hercules Caves |
| Flags | `editorChoice: true`, `featured: true`, `bookingStatus: comingSoon` |
| Trust | Full `whyWeChose`, EditorsChoice callout, return-to-ship messaging |

---

## Your Day Ashore

History · Culture · Markets · Walking · Photography · Food · Families · Walk It Yourself · Editor's Choice

---

## Choose Your Day

1. Explore Independently  
2. Discover Moroccan Culture  
3. Editor's Choice Adventure  

---

## Guides

| Guide | Slug |
|-------|------|
| Cruise Port / Walking from port | `walking-from-port` |
| Walk It Yourself | `explore-independently` |
| One Day in Tangier | `one-day-in-tangier` |
| Medina Guide | `medina-guide` |
| Kasbah Guide | `kasbah-guide` |
| Food Guide | `food-guide` |
| Shopping Guide | `shopping-guide` |
| Cruise Tips | `cruise-tips` |
| FAQ | `cruise-faq` + `/faq` |
| Best Viewpoints | `best-viewpoints` |

Plus highlights (Grand Socco, Café Hafa, Cape Spartel, Hercules Caves, Chefchaouen, etc.) and comparisons (tour-or-independent, medina-or-cape-spartel, best-shore-excursions, first-time-tangier-day).

---

## Products (SEG catalogue — original copy)

All `bookingStatus: "comingSoon"` — **no pricing**.

1. Tangier Highlights, Cape Spartel & Hercules Caves *(Editor's Choice)*  
2. Private Half Day Tangier Highlights and Hercules Caves  
3. Small Group Chefchaouen Blue Pearl  
4. Private Chefchaouen Discovery  
5. Tangier Medina Cultural Walk  
6. Tangier Food & Markets Tasting  

`bookable-products.ts` and Worker `catalogue.ts` empty until EUR prices verified.

---

## SEO

- Destination metadata, keywords, canonicals via `destinationConfig` / `buildMetadata`
- JSON-LD (TravelAgency, breadcrumbs, FAQs, travel guide)
- Internal linking across guides, comparisons, Day Ashore, Experience Cards
- Sitemap / robots inherited from template
- Duplicate booking-unavailable titles fixed; design-exploration removed

---

## Images

- Wikimedia Commons placeholders in `public/images/` + `image-sources/`
- Sources recorded in `public/images/sources.json`
- Optimisation pipeline active (`prebuild` / `optimize-images.mjs`)
- **Production images still required before launch**

---

## QA

```
TOTAL 112/115  PASS  World 2.0 Gold
```

All categories PASS. Remaining soft warnings only (optional image size polish; client-component count platform-wide).

---

## Outstanding items

- [ ] Verify EUR selling prices and fulfilment → set `bookingStatus: live` selectively  
- [ ] Populate Worker catalogue + D1 + Stripe secrets *(explicitly out of scope this run)*  
- [ ] Confirmed cruise ship schedules (none published — no fictitious calls)  
- [ ] Replace Wikimedia stand-ins with licensed production photography  
- [ ] Switch `contactMode` to `local` once email forwarding works  
- [ ] Cloudflare Pages, DNS, Search Console, analytics *(out of scope)*  
- [ ] Deploy *(out of scope)*  

---

## Production readiness

| Area | Status |
|------|--------|
| Editorial Gold destination | Ready for localhost review |
| Online booking / payments | Not ready — comingSoon |
| Production images | Not ready |
| Deploy / Cloudflare / Stripe | Not configured (by request) |

**Localhost:** `cd tangier-shore-excursion && npm run dev`
