# Turn Key STR

Responsive React + Vite website for furnished stays in Altoona, Pennsylvania.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Stop the development server with **Ctrl+C**.

Create and preview a production build:

```powershell
npm.cmd run build
npm.cmd run preview
```

## Current scope

The first release focuses on one mobile-first landing page:

- Photo-led introduction using the supplied Loft Suite photo.
- Responsive navigation and an accessible date-planning form.
- Room overview with truthful photo and verification status.
- Ordered gallery of all 11 supplied photos with captions and an accessible full-size viewer.
- Shared-home information, practical FAQs and a quote-preparation form.
- Individual or company/crew inquiry mode, including optional interest in parking, laundry pickup, car rental, and shuttle/errands.
- Clear pre-confirmation checklist for room assignment, approved guests, complete charges, separate refundable security, cancellation terms, and house rules.
- Search metadata and structured data for the lodging business, candidate room descriptions, and visible FAQs. Live rates, `Offer` data, a public address, and booking availability are intentionally omitted until verified.
- Search copy for weekly and extended stays, healthcare assignments, and contractor crews, without promising UPMC affiliation, commute times, monthly pricing, or availability.
- Plain-language space and access notes: bedrooms are private; the bathroom, kitchen and designated common areas are shared; the loft is reached by stairs. Exact accessibility details and other rooms' access are unverified.
- Copy/share inquiry summary; no form data is transmitted or stored.

This is not a booking engine. It does not show real availability or approved live rates, take payment, verify IDs, reserve rooms, or deliver inquiries to the operator. Inquiry data is only held in the visitor's current page while they use the form. Do not enter payment information or ID documents.

## Phased implementation plan

1. **Landing page and planning (current):** establish the brand presentation, mobile layout, room overview, date inquiry, individual/company request modes, add-on interest capture, and shared-stay disclosures.
2. **Customer inquiry delivery:** confirm the public business contact details, then connect a form endpoint or CRM with appropriate privacy notice, consent, spam protection and error handling.
3. **Room and guide pages:** confirm room capacity, floors, access, amenities and new room-specific photos; then publish individual room details, rates/fees and useful local guides.
4. **Booking readiness:** choose one authoritative PMS/booking engine, confirm legal terms and approved pricing, connect secure ID verification and payment, then test inventory holds, cancellations, refunds and channel synchronization before enabling bookings.

The supplied specifications and source content remain in `Turn_Key_STR_Wix_Build_Specification.md`, `data/`, and `content/`. In particular, draft prices and proposed 28-day packages are not approved offers; the other bedrooms have no supplied photos; and no live booking system is configured.

The SEO metadata does not include a canonical URL or social-sharing image because no public domain or approved image URL has been supplied. Structured room information is preliminary and does not imply availability or a confirmed offer.

The photo gallery follows the supplied filename list. It identifies the vanity close-up as a detail reference and the branded vanity artwork as a promotional graphic, not as room photographs. Room-specific facts and current condition still need confirmation.

## Agreement and blueprint review notes

The marketplace blueprint recommends starting with the property's own rooms and a clear corporate inquiry before expanding to marketplace listings or a native app. The current prototype follows that narrower approach; optional parking, laundry, car, and shuttle interests are inquiry-only and are not represented as available services.

The DOCX is explicitly an incomplete master agreement template. It contains blank reservation fields and terms that must not be copied to the public site as approved policy without reconciliation and appropriate legal review. For example, its $100 cleaning fee for reservations of three or more nights differs from the separate draft $150 cleaning amount; it uses Room 1–4 labels while the current inventory contains three candidate sellable rooms and one future draft; and it names payment methods although the payment integration is unverified. Room capacity, check-in/out, visitor/quiet-hour terms, taxes, and applicable lodging/tenancy requirements also need confirmation. The prototype therefore does not present those template terms as current policy, accept signatures, or collect payment or identification.
