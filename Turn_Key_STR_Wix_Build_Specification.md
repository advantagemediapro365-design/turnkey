# Turn Key STR - Wix Website Build Specification
Prepared October 30, 2026 | America/New_York

This is the complete structure/content/integration handoff for the existing Wix site. It is not a deployed booking website or a connected payment service. Current user instructions select Wix and a preferred Green Payments relationship; this supersedes the earlier blueprint platform suggestion.

## Build status and Wix implementation choice

### Verified account context
Use existing site 3d2229a5-2c94-457e-b369-1efc6b92863b. It is published on a Free plan with Wix Hotels, Forms and Invoices V1. Velo is disabled; the time zone is America/Los_Angeles. No site, room calendar, payment setting or live page was changed while preparing this package.

### Recommended production shape
Keep Wix as the mobile-first presentation, content and blog layer. Use one verified hotel PMS/channel manager as the inventory authority. First establish whether the current Hotels app is the previous app or Hotels by HotelRunner. If the PMS cannot support the chosen ID and Green Payments flow without creating a second inventory ledger, use a compatible embedded booking engine with its own authoritative checkout.

### Native versus custom
Date-based rates and availability are documented HotelRunner capabilities. Competitor-based automated pricing, adult ID gating, dependent multi-room bundles and an unverified Green Payments gateway are separate integration work. They are not completed by adding Wix Bookings or a file-upload field. Wix Blog is not listed as installed on this site; add/configure it during implementation.

### No checkout simulation
This is a build specification, supplied photo package and implementation data. It does not take deposits, store IDs or confirm bookings. All supplied room records have sales_enabled=false until the required production connections and room facts are approved.

### Regional configuration
Use America/New_York, USD and consistent date-only lodging nights. Store event timestamps in UTC and render deadlines in property local time. Check daylight-saving transitions. Save a backup/export and existing future reservations before any app migration.

## Room facts, prices and what remains unverified

### Inventory identity
Create one physical resource each for TK-ALT-LOFT-01, TK-ALT-FULL-01 and TK-ALT-QUEEN-01. A descriptive room type for each has exactly one sellable unit. Manager Suite remains an unavailable future draft. Do not assume the existing Wix app has already been populated this way.

### Owner-requested longer-stay amounts
Full room: $1,300 plus $150 cleaning. Loft: $1,500 plus $150 cleaning. The owner called these monthly amounts; a proposed 28-day package at those figures is a draft that needs explicit approval. Queen longer-stay pricing is not confirmed. Do not convert monthly wording silently.

### Capacity and floor
The current photos identify the loft and shared areas, not every bedroom. Verify bed dimensions, bed count, room floor, egress and approved capacity before selling additional occupants. No five-worker loft claim, private-bath claim or fireplace feature may carry to other rooms.

### Photos
Eleven supplied assets are renamed in media/ and mapped in data/photo_manifest.csv. Full-room and queen-room shots are requests, not invented media files. The separate Ramada photographs are excluded from the property package.

### Priority owner decisions
Confirm the final public brand/domain, queen rate, monthly versus 28-day wording, safe occupancy, short-stay cleaning charge, reservation-credit policy, damage deposit schedule, cancellation plans and exact quiet hours. The plan makes these reviewable without publishing guessed settings.

## Page design and mobile conversion rules

### Visual direction
Use a clean lodging design: warm white background, charcoal body type, deep blue booking controls and one restrained accent color from the existing logo. Lead with the actual loft image. Use readable 16px body text, strong focus states and generous spacing. Avoid overlays that hide the room or promotional claims that are not established.

### Primary navigation
Rooms; Corporate Stays; Rates; Local Guides; Contact. Add Services as a short menu for Laundry, Car Requests, Parking and Transport. A persistent mobile Check Availability button opens the same authoritative date search; it must not imply availability before the search completes.

### Room cards
Show the actual room name and photo, bed information, shared/private bathroom fact, capacity once approved, cancellation choice and the total mandatory trip price for entered dates. Show refundable security separately. Until dates are entered, use a clear date prompt rather than an unqualified lowest-rate claim.

### Room detail template
Gallery; name/summary; exact private/shared features; verified beds/capacity; stairs/access; amenity list; dated quote; total and deposits; cancellation/rules summary; booking action; contact; related room. Never swap another room photograph into an empty gallery.

### Checkout usability
Keep room/dates/guests and price visible through the flow. Use mobile camera upload through the secure ID provider. Allow save-and-return for reviewed applications. Make errors specific, preserve non-sensitive progress and never force newsletter or text-marketing consent.

### Cross-business links
Use a relevant service card on /laundry linking to https://www.freshfoldaltoona.com/. Use a local-guide author/bio or editorial link to https://tonyslice.com only where useful. Post-booking service offers must not obscure confirmation. Avoid repeated pop-ups, link exchanges and duplicate articles across businesses.

## Variable pricing and owner adjustment controls

### What may change
The owner may set date-specific nightly rates, minimum stays, advance-booking windows, approved discounts and stop-sales for unsold inventory. Log actor, timestamp, room, date range, prior value, new value, reason and rule version. Confirmed reservations and unexpired accepted quotes keep their agreed amount.

### Draft nightly limits
Full room: $60 floor, $60 weekday/$75 weekend starting base, $175 ceiling. Queen: $75 floor, $75 weekday/$95 weekend base, $225 ceiling. Loft: $95 floor, $95 weekday/$125 weekend base, $400 ceiling. These are proposed configuration limits, not market-verified rates or live offers.

### Rule priority
Stop-sale/occupancy rules first. Then valid signed corporate rate or unexpired accepted quote; then owner date override; then approved event/season rule; then automated adjustment; then last approved base fallback. Close inventory overrides every sales rule. A contract never creates an extra room.

### Minimum stay
Draft normal minimum is two nights. Four- or five-night holiday/event minimums apply only to specific approved date ranges and arrival rules; never to an entire hunting season by assumption. Maximum booking window and any 24-36 month forward availability must match published rates and inventory.

### Comparable-price inputs
Use licensed data, permitted APIs or a manual comparison sheet. Record provider, capture time, identical stay dates, traveler count, bath arrangement, cancellation terms and total mandatory cost. Do not scrape Hotels.com, Airbnb or hotel sites without permission. State College demand is a signal; its hotel prices are not automatically Altoona comparables.

### Draft adjustment algorithm
For each unsold night: candidate = approved base x season factor x event factor x lead-time factor x occupancy factor, clamped to the room floor and ceiling. Avoid applying an event premium twice. A separate optional trip-cost target compares the complete stay cost with appropriate competitor offers; it never drives the stay below the approved contribution floor.

### Guardrails
Start in recommendation mode. If fewer than three usable comparables exist or data is older than 24 hours, use the last approved base and flag review. Ordinary automated changes are capped at 15% per run as a draft guardrail; bigger event moves need approval. Proposed review times are 7:30 AM, noon and 6:30 PM Eastern. No scheduled automation was created.

### Quote lifecycle
Create an immutable quote snapshot with dates, room, occupants, line items, policy version and expiry. A ten-minute checkout quote/hold is a draft starting point. Expiry triggers revalidation and a newly accepted price; never charge a newly raised amount under an old acceptance. Repricing availability does not revise paid bookings.

## Reservation payments, refundable security and price examples

### Reservation payment
Recommended draft: $250 or the full total if the total is below $250, credited toward the lodging booking. Do not represent the same $250 as both a payment credit and an additional fee. Owner approval is required because earlier notes also requested a nonrefundable $250 fee.

### Damage deposit
Separate from revenue and the lodging balance. Draft standard security: $200, with a consistent written room/stay/add-on schedule inside the requested $100-$1,000 range. Avoid arbitrary individualized amounts. Label whether it is a temporary authorization or a collected refundable charge, with inspection, documentation and release/refund rules.

### Other charges
Owner requested $150 cleaning per booking/month; the precise scope is unresolved. A $25 reviewed-stay application fee is a draft and needs scope, refund policy and consent. Optional parking, laundry, transport, console or car charges require actual inventory, terms and approved current prices. Tax mapping must be verified for the property and each charge before live checkout.

### Discounts
Proposed 5% eligible-worker/veteran/first-responder discount applies to approved accommodation charges only; verify eligibility consistently. A proposed 10% prepaid multi-period discount requires approved future dates and a written contract. No automatic discount stacking, no reduction of refundable security, and no changing existing reservations without agreement.

### The short-stay fee problem
At $60 x two nights plus a mandatory $150 cleaning fee, the price is $270 before taxes, or $135 per night. At seven nights it is $570 before taxes, or $81.43 per night. This cannot support an unconditional cheaper-than-hotels claim. Consider approving a lower short-stay cleaning fee while keeping $150 for a longer stay; that choice is not applied in this package.

### 28-day illustrations
If the owner approves the same price for a 28-day package: full room $1,300 + $150 = $1,450 before tax ($51.79/night); loft $1,500 + $150 = $1,650 before tax ($58.93/night). A $250 reservation payment leaves $1,200/$1,400 of those totals respectively, before any taxes and separate security. These illustrations are not public quotes.

### Cancellation plan design
Offer clear plans such as Standard Flexible and Advance Purchase only after actual deadlines/refund amounts are set. Use an exact Eastern-time deadline. State the treatment of screening fees, no-shows, early departures and operator cancellations. Damage security is not automatically forfeited merely because a guest cancels.

## Preventing double bookings across every sales channel

### Inventory invariant
For any physical room and occupied night, there may be at most one active inventory claim. A claim can be a timed hold, confirmed reservation, owner block or maintenance block. Two visitors can view a room at the same time, but only one may acquire its dates for checkout.

### Authoritative calendar
Website, phone, corporate, walk-in and OTA reservations all use one PMS/channel manager. Enter manual reservations and owner/maintenance blocks through that same authority before confirming. Never create a parallel Wix CMS room calendar or a separate spreadsheet that can sell independently.

### Atomic reservation
Use the PMS native atomic reservation/hold mechanism where verified. If a custom booking authority is required, use transactional storage with a unique physical-room/night claim and all-or-nothing acquisition across the date range. A check-then-insert availability query without a transaction is insufficient. Wix CMS is not assumed to provide the required multi-record reservation transaction.

### Night boundaries
Use [check-in date, check-out date) so the departure date is not charged as a sleeping night. A same-day arrival can use that room only after the configured turnover window. Early check-in, late checkout and maintenance can create additional blocks and must recheck the following booking.

### Whole-house and crew dependencies
A crew bundle references the same underlying physical rooms. Lock/claim all requested rooms in stable order and roll back everything if one is unavailable. Selling a bundle blocks each child room; selling any child prevents a conflicting bundle. The manager suite is excluded while owner-occupied or unavailable.

### Cross-channel risk
Use verified two-way API/channel-manager integrations where supported. Periodic iCal polling has delay and must not be treated as a real-time guarantee. If a channel lacks adequate sync, keep that channel on request/approval or stop selling its conflicting stock. API sync also needs monitoring; no multi-platform system should promise zero overselling under every outage.

### Fail closed
If the PMS or sync is unhealthy, disable instant confirmation and paid checkout; offer a request form with no payment. A stale successful search never authorizes a sale. If integration is unavailable, do not silently collect money and promise the room.

### Acceptance evidence
Run simultaneous last-room attempts; overlapping date attempts; separate adjacent nights; crew-bundle versus individual-room attempts; phone block versus online checkout; expired hold retry; delayed payment webhook; duplicate webhook; OTA import conflict; DST/turnover scenarios. The losing reservation must not be charged and confirmed as a second sale.

## ID, payment and inventory as one booking flow

### Booking states
DRAFT -> HELD -> ID_VERIFIED/APPROVED -> PAYMENT_PENDING -> CONFIRMED -> CHECKED_IN -> CHECKED_OUT. Separate terminal states include EXPIRED, REJECTED and CANCELLED. ID, payment, inventory, booking and security-deposit states must be tracked separately, so a payment event cannot overwrite a rejected ID state.

### Short-stay sequence
Search dates; atomically hold the selected physical room; capture guest details; run hosted adult ID verification; accept quote and rules; process the required reservation payment; verify payment server-side; finalize inventory and send confirmation. If a review outlasts the hold, release it and recheck dates before payment.

### Reviewed stay sequence
Application and ID review can happen without a hard inventory promise. After approval, issue a dated quote and acquire a fresh limited hold when the guest is ready to pay. An application fee or approval notice alone never reserves a room. Corporate coordinators receive the same clear status.

### Payment verification
Do not trust a browser success redirect or a client-supplied amount. Validate webhook signatures, provider transaction, currency, amount, merchant identity, quote reference and idempotency key. Process a repeated webhook once. Verify current inventory claim and required approvals before setting CONFIRMED.

### Late and failed payment
If a payment arrives after hold expiry and the room is now claimed, do not create a second booking. Void an authorization or refund a capture as appropriate, open an operator exception and notify the customer of the actual status. Reconciliation must detect paid-but-unconfirmed and confirmed-but-unpaid records.

### Balances and holds
A booking can be confirmed with the disclosed reservation payment if the chosen plan permits a later balance. Record the precise balance due date and reminder/collection rules. Damage-card authorizations have provider-defined expiry; do not assume a card hold lasts a 28-day stay. Long stays may need a separately approved refundable charge or permitted reauthorization.

### Cancellation and changes
Compute the refund against the accepted policy snapshot. Cancel/update the authoritative PMS inventory with an auditable payment operation and retry handling. Do not reopen dates on a browser action alone. An extension claims its additional nights before confirming; a room move changes both resources consistently.

## Secure ID upload and privacy implementation

### Required guest identity
Require each adult occupant to complete an approved government-issued ID check before paid confirmation, with a support route if verification fails. A company booking does not automatically verify every traveler. Collect the minimum necessary information; do not put identity documents into an ordinary public form or gallery.

### Preferred route
Use a vetted hosted ID-verification provider with a booking-bound session. The website receives a verification reference and status rather than exposing document images to normal site editors. Choose a provider, supported documents, review process and data-processing terms before implementation.

### If direct upload is necessary
Use private storage with authenticated server authorization, short-lived signed upload/read access, random object names, encryption, audit logging and restricted reviewers. Permit only required image/PDF types and size limits; validate actual content, scan files and strip unnecessary location metadata. Test denied access across unrelated guest accounts and unauthenticated requests.

### Wix limitation to verify
Wix supports file-upload fields, and its media APIs document temporary private download URLs. That does not prove that the current Forms setup is suitable for IDs. Do not use public media URLs, broad collaborator access or noindex as access control. Establish the whole private-upload and review design before collecting real documents.

### Application data
Use a separate vetted screening provider for any credit/background check and its consent process. Do not collect Social Security numbers, online-banking credentials or complete payment-card data in Wix inquiry forms. Request employment or references only for the approved stay policy.

### Retention and disclosure
Before launch, publish actual vendors, purposes, access roles and a documented retention/deletion schedule. A proposed minimization approach is to delete raw ID copies promptly after verification unless a documented requirement justifies retention. Do not invent a mandatory legal retention period. Keep verification reference/status and necessary audit records under the approved policy.

### Staff access
Owner/admin can manage bookings; approved manager can review identity only when necessary; content editor can edit room copy but cannot see IDs; cleaning staff see turnover/room status without financial or identity documents. Use MFA and separate accounts. Public schema, logs and marketing tools never receive raw ID data.

## Green Payments / Jim integration brief

### Current status
Green Payments is the preferred merchant relationship, but Jim's identity, exact gateway, merchant approval, credentials and Wix compatibility are not verified. Do not assume a processor/reseller name is a usable software gateway. No account was connected and no payment was run.

### What Jim must identify
Provide the gateway product/name and current API/hosted-checkout documentation; whether a supported Wix connector already exists for this US lodging merchant; tokenization/hosted fields; sandbox access; signed webhooks; sale/auth/capture/void/refund; deposit and delayed-balance support; security-hold duration; card-on-file consent; Apple/Google Pay and ACH if available; settlement, reserves, fees and supported lodging operations.

### Integration choice A
If the gateway is actually available to this site in the appropriate payment settings and works with the verified hotel app, use that supported connector. Confirm deposit, tax, balance, refund and inventory behavior end to end. Availability in a provider marketing list is not a completed integration.

### Integration choice B
If an appropriate Velo/site custom-provider route exists for the chosen gateway and hotel flow, scope and test it from current official documentation. Enable/configure custom development only after confirming compatibility. The Wix PSP service-plugin route also describes provider onboarding; it is not a promise that any individual merchant can instantly add any gateway.

### Integration choice C
Use a compatible external PMS/booking checkout that supports the actual Green Payments gateway. Embed or link it from Wix, with server-verified payment and the same inventory authority. A generic Green payment link followed by an unrelated room calendar does not meet the no-double-booking requirement.

### Data and security
Credentials belong in the backend secrets facility and approved provider configuration, never in page code, CSV imports, screenshots or this package. Hosted payment UI handles card entry. Webhook secrets and signature verification must be tested with retries, fraud/decline cases and refund reversals.

### Copy/paste request to Jim
Jim, we are building the Turn Key STR lodging website on Wix. Please identify our exact Green Payments gateway and send its Wix integration and developer documentation. We need secure online reservation payments, refundable damage deposits or supported authorizations, later balances, refunds and signed payment webhooks. Please confirm lodging approval, sandbox access, hold duration, fees and whether HotelRunner or a compatible booking engine is supported. Please provide credentials through a secure setup method, not ordinary email.

## SEO, blog structure and competing for local bookings

### Competitive position
Compete for local direct-booking intent with factual room photos, complete prices, clear shared-house descriptions and quick corporate quotes. Hotels.com is a distribution marketplace; copying its page volume or interface will not establish equivalent inventory or trust. Do not claim the cheapest room, a hotel classification or a number-one ranking without evidence.

### Keyword map
Use one primary intent per substantive page: furnished rooms Altoona; rooms near UPMC Altoona; weekly furnished rooms; 28-day furnished stays; corporate crew lodging; construction crew stays; Penn State trips from Altoona. Add long-tail questions in useful paragraphs and supporting articles. Expansion pages stay unpublished until they have unique helpful content.

### Metadata and URLs
data/page_map.csv gives each route, H1, title, opening copy, keyword and indexing rule. Final titles and descriptions are human-editable. Use the final primary domain for canonical URLs; do not publish the provisional domain as schema. Meta-keywords tags are not part of the build requirement.

### Structured content
Use accurate LodgingBusiness/Accommodation descriptions where appropriate, room-specific offers only when current and bookable, BreadcrumbList and Article/BlogPosting for guides. Include factual FAQ text where useful. Do not force Hotel status, star ratings, fabricated review aggregates, stale prices or guaranteed rich-result claims.

### Technical indexing
Index substantive public pages and articles. Exclude checkout, applications, verification, confirmations, booking management, signed links, internal search/date filters and draft partner pages from the XML sitemap. noindex does not secure private data; authentication and authorization do. Add redirects for any replaced public routes and preserve working existing links.

### AI/search clarity
Use consistent business and room names, concise factual paragraphs, explicit private/shared features, current photo captions, real author information and update dates. Keep pages crawlable and answer practical questions. There is no guaranteed AIO/LLM ranking trick or fixed number of keyword types.

### Blog taxonomy and links
Categories: Work Travel; Medical Stays; Rates and Planning; Extended Stays; Local Services; Events. Each article links to one primary relevant landing page, one room/services page and a genuine contact/availability action. The three supplied drafts are original launch content; twenty topics form the pipeline.

### Evidence and local promotion
Verify official university/event calendars before event posts, actual local routes before commute claims and current provider terms before prices. Directory profiles should use consistent real business details only where eligible. Do not create fictitious offices or duplicate location listings. Invite honest reviews from actual guests without fabricated ratings.

## Data model, administration and measurement

### Public content records
Rooms; RoomMedia; Amenities; PublicPolicies; GuideArticles; ServiceLinks. Public content contains no live authoritative reservation ledger, raw IDs, door codes or card tokens. Import supplied CSV/JSON only after mapping fields in the chosen CMS; these are content handoff files, not guaranteed one-click hotel-app imports.

### Protected operational records
PhysicalUnit; InventoryClaim; Reservation; Guest; VerificationReference; QuoteSnapshot; PriceRule; RateCalendar; PaymentTransaction; SecurityDeposit; PolicyAcceptance; ChannelMapping; AuditEvent. Each reservation references the physical resource and frozen quote. Store booking states and payment states independently.

### Inventory data semantics
An inventory claim includes resource ID, local stay date, booking/hold reference, claim kind, expiry when applicable and state. Claims are enforced by the authoritative PMS or a transactional database. Expired holds must be released under a transactional check; time passing alone does not remove a stale database row.

### Owner dashboard
Calendar by physical room; arrivals/departures; held/confirmed/reviewed status; unsold rate changes; channel health; balance and security status; paid-unconfirmed exceptions; maintenance/owner blocks; requests; audit trail. A manual override never bypasses a conflicting confirmed reservation.

### Guest communications
Send confirmation only after the required booking state exists. Pre-arrival details follow approved identity/payment requirements. Check-out inspection drives security release/refund. Review invitations go to actual guests. A message failure creates a retry/alert, not a duplicate payment or reservation.

### Measurement
Track date-search success, room views, quote starts, ID starts/completions, payment success, confirmed reservations, cancellation rate, paid-but-unconfirmed count, average stay, room revenue, conversion and direct-booking acquisition cost. Exclude damage security from room revenue; suppress PII in analytics.

### Abandoned checkout
With appropriate consent, send a secure recovery link that rechecks dates, identity status and price. An abandoned hold expires. A recovery discount never revives sold inventory or bypasses the price floor. Track separate consent for marketing texts; no customer messages were sent from this task.

### Marketplace later
Other hosts need verified listing authority, tax/insurance/payment responsibilities, documented complaint/refund processes and a supported availability feed. Own-inventory placement should be disclosed if results favor it. Vehicle listings use their own resources and eligibility system. Native apps must call the same booking authority.

## Implementation sequence and launch acceptance

### 1. Stabilize the existing site
Export future reservations and site/content references; verify hotel app version; correct New York time zone; choose primary domain and actual operator details; confirm appropriate site and hotel subscriptions. Do not purchase subscriptions or migrate reservations without the owner accepting the concrete plan/cost.

### 2. Verify the sellable inventory
Confirm physical rooms, bed sizes, floor/access, safe occupancy, availability, current amenities and photographs. Stage and photograph the full/queen rooms. Establish owner/maintenance blocks and the source calendar. Keep unverified listings unavailable.

### 3. Build public pages
Implement the Launch pages using the supplied route map and copy. Add actual room media, gallery labels, full-price presentation, policies, mobile navigation and three blog drafts. Install/configure Wix Blog if selected. Add approved redirects and final-domain SEO.

### 4. Prove the booking engine
Choose the PMS authority; verify timed holds, per-room resources, manual/OTA synchronization and reviewed-stay flow. Resolve room-bundle dependencies. Execute the no-double-booking scenarios before live sales.

### 5. Connect identity and payment
Get Jim's actual gateway documentation and approved merchant setup. Implement secure ID and hosted/tokenized payment. Test deposit/balance, signature verification, duplicates, failures, late webhook compensation, refunds and security hold expiry using sandbox data.

### 6. Validate a real end-to-end reservation
After sandbox passes and owner approves the launch settings, run one authorized low-value production test through search, ID, payment, inventory, receipt, cancellation and refund. Check every other connected channel. Record references and reconciliation evidence, then remove test inventory cleanly.

### 7. Open and monitor
Enable only verified rooms and dates. Monitor sync and payment exceptions before adding channels or automating prices. Add event/nurse/contractor pages when unique verified content is ready. Expand marketplace and native apps after the operating flow is proven.

### Definition of done
A guest can see the exact room and full cost, submit ID securely, pay through the approved processor and receive a truthful booking status. Two competing attempts cannot confirm the same physical room/night. Owner edits future unsold rates without changing existing contracts. Operational staff can reconcile bookings, balances and refunds.

## Page-by-page implementation map

### P01 - Furnished Rooms in Altoona PA
Route: / | Stage: Launch | Indexable: True
Title tag: Furnished Rooms in Altoona PA | Turn Key STR
Meta description: Find owner-occupied furnished lodging for work trips, crew assignments and approved extended stays. See the room, shared spaces and full price before you.
H1: Furnished rooms. Simple work stays. Altoona, PA.
Primary keyword: furnished rooms Altoona PA

Find owner-occupied furnished lodging for work trips, crew assignments and approved extended stays. See the room, shared spaces and full price before you reserve.

Section order: Hero with loft photo and dates; shared-house disclosure; room cards; who stays here; verified amenities; full-price explanation; corporate quote; laundry and car request; FAQs; phone/footer
Primary CTA: Check availability
Data and controls: Do not show a live price until dates, guest count, inventory and the complete fee schedule are verified.
Fields: Check-in; check-out; adults; rooms needed

### P02 - Rooms & Suites
Route: /rooms | Stage: Launch | Indexable: True
Title tag: Rooms & Suites | Turn Key STR
Meta description: Compare the loft, full-bed room and queen room. Bedrooms are private; designated household spaces are shared. Every room has its own description and.
H1: Choose the room that fits your stay.
Primary keyword: private furnished rooms Altoona

Compare the loft, full-bed room and queen room. Bedrooms are private; designated household spaces are shared. Every room has its own description and booking calendar.

Section order: Date search; room cards; bed and bathroom comparison; shared amenities; total-price cards; accessibility questions; crew quote
Primary CTA: View room
Data and controls: One calendar per physical room; no generic inventory pool that can allocate the same room twice.

### P03 - Loft Suite in Altoona
Route: /rooms/loft-suite | Stage: Launch | Indexable: True
Title tag: Loft Suite in Altoona | Turn Key STR
Meta description: The loft offers a queen bed, TV areas, a microwave, refrigerator/freezer and space to settle in during a work trip. The bathroom and approved house.
H1: Room to work, rest and unpack.
Primary keyword: furnished loft Altoona PA

The loft offers a queen bed, TV areas, a microwave, refrigerator/freezer and space to settle in during a work trip. The bathroom and approved house amenities are shared.

Section order: Photo gallery P03-P07; factual amenity list; exact bed/capacity panel; stairs disclosure; shared bathroom panel; date picker; full quote; house rules; related rooms
Primary CTA: Check loft dates
Data and controls: Owner reports a queen bed. Additional beds, square footage and higher crew capacity require verification. Do not sell five beds from the current photos.

### P04 - Full-Bed Room in Altoona
Route: /rooms/full-bed-room | Stage: Launch | Indexable: True
Title tag: Full-Bed Room in Altoona | Turn Key STR
Meta description: A private full-bed room with an owner-reported TV, Wi-Fi and refrigerator/freezer. Shared bathroom and household amenities are explained before booking.
H1: A furnished full-bed room for your Altoona stay.
Primary keyword: full bed furnished room Altoona

A private full-bed room with an owner-reported TV, Wi-Fi and refrigerator/freezer. Shared bathroom and household amenities are explained before booking.

Section order: Verified full-room photos; bed and workspace details; bathroom disclosure; verified amenities; rate calendar; complete quote; stay rules
Primary CTA: Check full-room dates
Data and controls: Current reviewed photo set does not identify this room. Keep listing in draft until its own photos and availability are confirmed.

### P05 - Queen Room in Altoona
Route: /rooms/queen-room | Stage: Launch | Indexable: True
Title tag: Queen Room in Altoona | Turn Key STR
Meta description: An owner-reported queen room with a TV, workspace, Wi-Fi and refrigerator/freezer. Ask about dates and the layout that suits your trip.
H1: A queen room near the shared bathroom.
Primary keyword: queen furnished room Altoona PA

An owner-reported queen room with a TV, workspace, Wi-Fi and refrigerator/freezer. Ask about dates and the layout that suits your trip.

Section order: Verified queen-room gallery; bed and workspace; bathroom proximity; verified amenities; current rates; complete quote; house rules
Primary CTA: Check queen-room dates
Data and controls: Floor, capacity and 28-day rate remain unconfirmed. Do not label loft photos as the queen room.

### P06 - Rates, Fees & Deposits
Route: /rates-and-fees | Stage: Launch | Indexable: True
Title tag: Rates, Fees & Deposits | Turn Key STR
Meta description: Rates depend on room, dates, length of stay and approved occupants. Your quote separates lodging, mandatory fees, taxes, optional services and refundable.
H1: Understand the complete price before you book.
Primary keyword: Altoona furnished room rates

Rates depend on room, dates, length of stay and approved occupants. Your quote separates lodging, mandatory fees, taxes, optional services and refundable security.

Section order: Date-based quote; nightly/weekly/28-day explanation; cleaning; reservation payment credit; damage deposit; cancellation plans; discount eligibility; examples
Primary CTA: Price my dates
Data and controls: Future unsold nights may change. Confirmed reservations keep the agreed price. Final fee amounts require owner approval.

### P07 - Weekly Furnished Stays
Route: /weekly-stays-altoona | Stage: Expansion | Indexable: True
Title tag: Weekly Furnished Stays | Turn Key STR
Meta description: Compare a seven-night furnished stay with the total cost of a hotel. Check shared-space arrangements, cleaning, parking and the dates you actually need.
H1: A practical place to stay during your work week.
Primary keyword: weekly furnished rooms Altoona PA

Compare a seven-night furnished stay with the total cost of a hotel. Check shared-space arrangements, cleaning, parking and the dates you actually need.

Section order: Weekly use cases; seven-night total example; room comparison; laundry; extension process; FAQs
Primary CTA: Check seven-night dates
Data and controls: Publish only with useful unique weekly content. Availability for an extension is never assumed.

### P08 - 28-Day Furnished Stays
Route: /28-day-furnished-stays-altoona | Stage: Launch | Indexable: True
Title tag: 28-Day Furnished Stays | Turn Key STR
Meta description: Traveling for an assignment? Request a written furnished-room quote for up to 28 days, with dates, payment terms and any renewal process stated clearly.
H1: Request an approved extended-stay quote.
Primary keyword: 28 day furnished rooms Altoona

Traveling for an assignment? Request a written furnished-room quote for up to 28 days, with dates, payment terms and any renewal process stated clearly.

Section order: Assignment fit; room options; owner-requested package pricing marked draft; included services; application process; payment schedule; renewal explanation
Primary CTA: Request extended stay
Data and controls: Do not claim that 28-day cycles change legal status or remove guest rights. Rebooking requires new approval and available dates.

### P09 - Corporate & Crew Lodging
Route: /corporate-crew-lodging | Stage: Launch | Indexable: True
Title tag: Corporate & Crew Lodging | Turn Key STR
Meta description: Request room options for contractors, healthcare travelers, utility crews and other working visitors. Get a written quote for named travelers and exact.
H1: One lodging contact for your traveling team.
Primary keyword: corporate crew lodging Altoona PA

Request room options for contractors, healthcare travelers, utility crews and other working visitors. Get a written quote for named travelers and exact assignment dates.

Section order: Company use cases; rooms and verified capacities; quote form; invoice/card/ACH options subject to approval; parking/laundry; employer FAQs
Primary CTA: Request a crew quote
Data and controls: A quote is not a reservation. Company purchase orders alone do not reserve inventory.
Fields: Company; coordinator; business email; phone; dates; adults; rooms; worksite; payment preference; add-ons

### P10 - Stays Near UPMC Altoona
Route: /stays-near-upmc-altoona | Stage: Launch | Indexable: True
Title tag: Stays Near UPMC Altoona | Turn Key STR
Meta description: Compare furnished rooms for healthcare assignments or medical visits in Altoona. Ask about the location, shared bathroom, stairs and the schedule you need.
H1: A furnished base for an Altoona medical assignment.
Primary keyword: furnished rooms near UPMC Altoona

Compare furnished rooms for healthcare assignments or medical visits in Altoona. Ask about the location, shared bathroom, stairs and the schedule you need.

Section order: Medical traveler needs; exact location/map after verification; commute guidance; quiet-space details; Wi-Fi/workspace; rooms; FAQs
Primary CTA: Find medical-stay dates
Data and controls: No affiliation with UPMC is implied. Do not publish a two-minute drive claim without an actual checked route.

### P11 - Travel Nurse Housing
Route: /travel-nurse-housing-altoona | Stage: Expansion | Indexable: True
Title tag: Travel Nurse Housing | Turn Key STR
Meta description: Get a room quote that matches your assignment dates and budget. Review quiet hours, shared-space routines, laundry options and extension rules before.
H1: Plan your stay around your assignment.
Primary keyword: travel nurse housing Altoona PA

Get a room quote that matches your assignment dates and budget. Review quiet hours, shared-space routines, laundry options and extension rules before paying.

Section order: Assignment checklist; actual daytime-noise policy; workspaces; seven/28-day comparison; laundry; cancellation options; company quote
Primary CTA: Request assignment dates
Data and controls: Do not promise daytime silence, dedicated medical housing or agency partnerships without evidence.

### P12 - Contractor & Construction Stays
Route: /construction-crew-lodging | Stage: Expansion | Indexable: True
Title tag: Contractor & Construction Stays | Turn Key STR
Meta description: Coordinate a clean furnished stay for approved workers, with a written rooming list, arrival plan and optional laundry or parking where available.
H1: Simple room planning for traveling crews.
Primary keyword: construction crew lodging Altoona

Coordinate a clean furnished stay for approved workers, with a written rooming list, arrival plan and optional laundry or parking where available.

Section order: Worksite/shift needs; rooming list; safe occupancy; laundry handling; approved parking; billing; quote form
Primary CTA: Get a contractor quote
Data and controls: No equipment storage, oily laundry service or large-truck parking guarantee unless operations confirm it.

### P13 - Penn State Event Stays from Altoona
Route: /penn-state-event-stays-altoona | Stage: Expansion | Indexable: True
Title tag: Penn State Event Stays from Altoona | Turn Key STR
Meta description: Looking beyond State College for an event trip? Check actual travel distance, event dates and the complete room price before choosing an Altoona stay.
H1: Plan an Altoona stay for your Penn State trip.
Primary keyword: Altoona lodging Penn State events

Looking beyond State College for an event trip? Check actual travel distance, event dates and the complete room price before choosing an Altoona stay.

Section order: Altoona location disclosure; official event links; actual drive estimate; event minimums; rooms; cancellation; transport request
Primary CTA: Check event dates
Data and controls: Altoona is a different city. Do not claim campus proximity, shuttle inclusion or an official Penn State relationship.

### P14 - Amenities & Shared Spaces
Route: /amenities-shared-spaces | Stage: Launch | Indexable: True
Title tag: Amenities & Shared Spaces | Turn Key STR
Meta description: Your booked bedroom is private. The listing explains the shared bathroom, lounge, food-storage areas, approved appliances and optional services.
H1: Know what is private, shared and available.
Primary keyword: Altoona furnished lodging amenities

Your booked bedroom is private. The listing explains the shared bathroom, lounge, food-storage areas, approved appliances and optional services.

Section order: Private/shared matrix; room-specific TV/fridge/Wi-Fi; living area gallery; kitchen limitations; towels; stairs; optional services; camera disclosures
Primary CTA: Compare rooms
Data and controls: No stove, washer/dryer access, fireplace, private bath or premium bandwidth claim unless the booked room includes it in writing.

### P15 - Parking Options
Route: /parking | Stage: Launch | Indexable: True
Title tag: Parking Options | Turn Key STR
Meta description: Tell us your vehicle size and dates. Any paid off-street space must be confirmed separately and shown in your booking summary.
H1: Arrange parking before arrival.
Primary keyword: parking furnished rooms Altoona

Tell us your vehicle size and dates. Any paid off-street space must be confirmed separately and shown in your booking summary.

Section order: Verified space photos; map; vehicle limits; price; accessibility questions; arrival instructions; request form
Primary CTA: Request parking
Data and controls: Sell only controlled, lawful, insured spaces. Neighbor-yard carports and public-street spaces are not confirmed inventory.
Fields: Dates; vehicle type; dimensions; number of spaces; room reference

### P16 - Laundry Pickup & Delivery
Route: /laundry | Stage: Launch | Indexable: True
Title tag: Laundry Pickup & Delivery | Turn Key STR
Meta description: Ask about pickup, wash-and-fold and return delivery from Fresh Fold Altoona. Service availability, turnaround and the current laundry price are confirmed.
H1: Spend less of your trip doing laundry.
Primary keyword: laundry for traveling workers Altoona

Ask about pickup, wash-and-fold and return delivery from Fresh Fold Altoona. Service availability, turnaround and the current laundry price are confirmed separately.

Section order: How pickup works; link to FreshFoldAltoona.com; guest instructions; special-soil handling; separate order terms; room return link
Primary CTA: See Fresh Fold services
Data and controls: Do not reuse unverified historical laundry prices. A laundry order does not reserve a room.

### P17 - Car Rental Requests
Route: /car-rentals | Stage: Launch | Indexable: True
Title tag: Car Rental Requests | Turn Key STR
Meta description: Submit your trip dates and intended use. A car is offered only after vehicle availability, driver eligibility, insurance and payment terms are approved.
H1: Need a car during your stay?
Primary keyword: car rental request Altoona PA

Submit your trip dates and intended use. A car is offered only after vehicle availability, driver eligibility, insurance and payment terms are approved.

Section order: Date/use request; verified vehicles when available; personal versus approved delivery use; license requirements; deposit; separate agreement; room cross-link
Primary CTA: Request a car
Data and controls: Lead-only at launch. No claim that any vehicle is automatically approved for Uber, DoorDash or Grubhub.
Fields: Dates; driver age eligibility confirmation; intended use; contact; room reference; pickup preference

### P18 - Transport & Errand Requests
Route: /shuttle-errands | Stage: Launch | Indexable: True
Title tag: Transport & Errand Requests | Turn Key STR
Meta description: Request a pickup, drop-off or shopping errand for your stay. Routes, times, operator availability and the total price are confirmed before payment.
H1: Ask about a scheduled ride or errand.
Primary keyword: Altoona transport request

Request a pickup, drop-off or shopping errand for your stay. Routes, times, operator availability and the total price are confirmed before payment.

Section order: Service area; schedule request; passenger/bag limits; quote; cancellation; accessibility inquiry
Primary CTA: Request transport
Data and controls: No automatic $65 daily shuttle promise until operator, licensing/insurance, route and schedule are approved.
Fields: Route; dates/times; passengers; bags; mobility needs volunteered; contact

### P19 - Property Photo Gallery
Route: /gallery | Stage: Launch | Indexable: True
Title tag: Property Photo Gallery | Turn Key STR
Meta description: Browse labeled property photos. Each image belongs to a specific room or shared area, so you can understand the layout before booking.
H1: See the room and the spaces you will share.
Primary keyword: Turn Key STR Altoona room photos

Browse labeled property photos. Each image belongs to a specific room or shared area, so you can understand the layout before booking.

Section order: Room tabs; shared areas; image captions; room links; photo date; missing-photo suppression
Primary CTA: Choose a room
Data and controls: Only photos of this property; exclude the separate Ramada photos. Internal inspection photos are not marketing images.

### P20 - Altoona Travel Guide
Route: /altoona-travel-guide | Stage: Expansion | Indexable: True
Title tag: Altoona Travel Guide | Turn Key STR
Meta description: Find useful planning notes for work assignments, local errands, laundry, transport and event trips. Check linked operators for current hours and terms.
H1: Plan the practical details of your Altoona trip.
Primary keyword: Altoona work travel guide

Find useful planning notes for work assignments, local errands, laundry, transport and event trips. Check linked operators for current hours and terms.

Section order: Work travel; medical trips; eating/shopping; laundry; State College travel; recent guides; room CTA
Primary CTA: Read the guides
Data and controls: Only list real destinations and checked links. Disclose paid placements and business ownership where relevant.

### P21 - Altoona Stay Guides
Route: /blog | Stage: Launch | Indexable: True
Title tag: Altoona Stay Guides | Turn Key STR
Meta description: Straightforward guides to furnished rooms, work trips, longer stays and the total cost of lodging in Altoona.
H1: Useful answers before you book.
Primary keyword: Altoona furnished stay guide

Straightforward guides to furnished rooms, work trips, longer stays and the total cost of lodging in Altoona.

Section order: Featured guide; categories; recent articles; author/update dates; related rooms; subscription optional
Primary CTA: Read a guide
Data and controls: Use original locally useful articles. No spun city pages, fabricated reviews or claimed hotel price averages.

### P22 - Booking Questions
Route: /faq | Stage: Launch | Indexable: True
Title tag: Booking Questions | Turn Key STR
Meta description: Find answers about private rooms, shared spaces, ID verification, payments, deposits, cancellations and extensions.
H1: Get the details before you reserve.
Primary keyword: Turn Key STR booking questions

Find answers about private rooms, shared spaces, ID verification, payments, deposits, cancellations and extensions.

Section order: Rooms/shared areas; bookings/ID; costs; deposits/refunds; arrivals; accessibility; services; contact
Primary CTA: Check dates or ask a question
Data and controls: Answers must match checkout and the accepted policy version. FAQ content does not guarantee search rich results.

### P23 - About Turn Key STR
Route: /about | Stage: Launch | Indexable: True
Title tag: About Turn Key STR | Turn Key STR
Meta description: Turn Key STR focuses on furnished stays for people traveling through Altoona for work and other approved visits. Ask questions before choosing your room.
H1: Furnished lodging with a local point of contact.
Primary keyword: Turn Key STR Altoona

Turn Key STR focuses on furnished stays for people traveling through Altoona for work and other approved visits. Ask questions before choosing your room.

Section order: Real operator story; owner-occupied disclosure; actual service area; verified credentials only; contact; rooms
Primary CTA: Talk about your stay
Data and controls: Use the registered operating/contracting entity where required. Do not publish the private holding company as marketing copy by default.

### P24 - Contact & Corporate Quotes
Route: /contact | Stage: Launch | Indexable: True
Title tag: Contact & Corporate Quotes | Turn Key STR
Meta description: Call or text 570-494-7523, or send your dates and room needs. A message or quote request does not hold a room.
H1: Tell us what your trip needs.
Primary keyword: contact Turn Key STR Altoona

Call or text 570-494-7523, or send your dates and room needs. A message or quote request does not hold a room.

Section order: Click-to-call/text; simple inquiry; response expectations; corporate quote; location disclosure; emergency distinction
Primary CTA: Send a stay request
Data and controls: Publish only monitored contact channels. Do not promise 24/7 staffing.
Fields: Name; email; phone; dates; guests; question; communication consent

### P25 - House Rules & Shared Living
Route: /house-rules | Stage: Launch | Indexable: True
Title tag: House Rules & Shared Living | Turn Key STR
Meta description: Review quiet hours, registered visitors, shared-bathroom care, approved appliances, smoking restrictions and assigned access before accepting your booking.
H1: Clear rules for a considerate stay.
Primary keyword: Turn Key STR house rules

Review quiet hours, registered visitors, shared-bathroom care, approved appliances, smoking restrictions and assigned access before accepting your booking terms.

Section order: Plain-language summary; private/shared use; quiet hours; visitors; kitchen/appliances; bathroom; linens; monitoring; damage; support
Primary CTA: Review booking terms
Data and controls: Proposed 11 PM-7 AM quiet hours. Final rules must be consistent and accepted before payment; no arbitrary removal or automatic undisclosed penalties.

### P26 - Cancellation & Deposit Policy
Route: /cancellation-and-deposits | Stage: Launch | Indexable: True
Title tag: Cancellation & Deposit Policy | Turn Key STR
Meta description: Your selected rate plan states the cancellation deadline, reservation-payment treatment and damage-deposit process before you pay.
H1: Know what can be refunded and when.
Primary keyword: Turn Key STR cancellation deposit policy

Your selected rate plan states the cancellation deadline, reservation-payment treatment and damage-deposit process before you pay.

Section order: Flexible versus advance purchase; local time deadline; reservation credit; damage hold/refund; operator cancellation; no-show; processing timelines
Primary CTA: Review your rate plan
Data and controls: No default nonrefundable claim before the final policy is approved. Operator unavailability or booking error must trigger refund/remedy handling.

### P27 - Privacy & ID Verification
Route: /privacy | Stage: Launch | Indexable: True
Title tag: Privacy & ID Verification | Turn Key STR
Meta description: Read what information is needed to arrange your stay, who handles ID checks and payments, and how to request help with your information.
H1: How your booking information is handled.
Primary keyword: Turn Key STR privacy policy

Read what information is needed to arrange your stay, who handles ID checks and payments, and how to request help with your information.

Section order: Operator contact; data purposes; ID provider; payment provider; sharing; retention; cookies; requests; camera location policy
Primary CTA: Contact privacy support
Data and controls: Privacy text must identify actual vendors and retention periods at launch. No raw IDs in public CMS or analytics.

### P28 - Accessibility & Room Access
Route: /accessibility | Stage: Launch | Indexable: True
Title tag: Accessibility & Room Access | Turn Key STR
Meta description: Ask about stairs, entrances, bathroom arrangements, parking and the features of the specific room you plan to book.
H1: Ask about access before choosing your room.
Primary keyword: Turn Key STR accessibility room access

Ask about stairs, entrances, bathroom arrangements, parking and the features of the specific room you plan to book.

Section order: Room-by-room stairs; measured doorway/access details when checked; bathroom layout; assistance contact; website feedback
Primary CTA: Ask an access question
Data and controls: Do not label a room accessible without a verified feature list. A loft is not a step-free room.

### P29 - Lodging Booking Terms
Route: /lodging-terms | Stage: Launch | Indexable: True
Title tag: Lodging Booking Terms | Turn Key STR
Meta description: The final agreement identifies the room, travelers, dates, full price, payment schedule, cancellation policy and applicable house rules.
H1: The terms for your specific booked stay.
Primary keyword: Turn Key STR lodging terms

The final agreement identifies the room, travelers, dates, full price, payment schedule, cancellation policy and applicable house rules.

Section order: Contracting entity; booked dates; occupancy; fees; payment; privacy/monitoring; conduct; damage; changes; lawful termination; applicable law
Primary CTA: Review before acceptance
Data and controls: Use locally reviewed terms. Do not rely on a 28-day label, no-mail clause or agreement title to decide legal rights.

### P30 - Room Availability
Route: /availability | Stage: Booking flow | Indexable: False
Title tag: Room Availability | Turn Key STR
Meta description: See rooms available for your selected dates, including the full mandatory price and any refundable security amount.
H1: Search your exact dates and guest count.
Primary keyword: Operational page; no SEO target

See rooms available for your selected dates, including the full mandatory price and any refundable security amount.

Section order: Date/party search; available rooms; full-trip totals; rate plan choice; request alternative dates; corporate quote
Primary CTA: Select this room
Data and controls: Live inventory read; no result caching that can commit a sale. Sold-out results offer new dates without charging.
Fields: Dates; adults; selected room

### P31 - Guest & Stay Details
Route: /book/details | Stage: Booking flow | Indexable: False
Title tag: Guest & Stay Details | Turn Key STR
Meta description: Enter the traveler and contact details needed for this reservation. We will show the exact room, dates and complete quote throughout checkout.
H1: Confirm who is staying.
Primary keyword: Operational page; no SEO target

Enter the traveler and contact details needed for this reservation. We will show the exact room, dates and complete quote throughout checkout.

Section order: Timed hold; room/date summary; lead guest; adult occupants; trip purpose optional except approved work packages; optional add-ons
Primary CTA: Continue to ID verification
Data and controls: Server creates expiring hold on physical room before checkout. Required details and inventory are checked on the server.
Fields: Legal lead name; contact; adult occupant names; arrival preference; billing party

### P32 - Secure Guest ID Check
Route: /book/verify-id | Stage: Booking flow | Indexable: False
Title tag: Secure Guest ID Check | Turn Key STR
Meta description: Each adult traveler must complete the approved ID check. Use the secure upload flow; please do not email an ID or send it in an ordinary contact form.
H1: Verify your ID securely.
Primary keyword: Operational page; no SEO target

Each adult traveler must complete the approved ID check. Use the secure upload flow; please do not email an ID or send it in an ordinary contact form.

Section order: Purpose/privacy notice; hosted secure verification; supported ID guidance; upload status; manual-review help; return to booking
Primary CTA: Verify my ID
Data and controls: Provider session binds to booking and guest. Verification required before paid confirmation; review does not hold dates indefinitely.
Fields: Verification session; consent; provider reference; status only in booking record

### P33 - Review Price & Rules
Route: /book/review | Stage: Booking flow | Indexable: False
Title tag: Review Price & Rules | Turn Key STR
Meta description: Check the room, dates, travelers, full price, refund terms and amount due today. Your reservation payment counts toward the stay total.
H1: Review your stay before you pay.
Primary keyword: Operational page; no SEO target

Check the room, dates, travelers, full price, refund terms and amount due today. Your reservation payment counts toward the stay total.

Section order: Room/private-shared facts; nightly breakdown; mandatory total; refundable deposit separate; balance date; selected policy; required acceptance
Primary CTA: Accept and continue
Data and controls: Record quote ID/version, accepted policy versions and timestamp. A changed expired quote needs clear new acceptance.
Fields: Terms/house rules; cancellation acceptance; payment consent; optional marketing consent

### P34 - Secure Reservation Payment
Route: /book/payment | Stage: Booking flow | Indexable: False
Title tag: Secure Reservation Payment | Turn Key STR
Meta description: Use the approved payment provider to complete your reservation payment. A payment return page alone is not proof that a room is booked.
H1: Pay the amount due for this reservation.
Primary keyword: Operational page; no SEO target

Use the approved payment provider to complete your reservation payment. A payment return page alone is not proof that a room is booked.

Section order: Hosted payment fields/redirect; due today; remaining balance; security authorization separate; processing; failure/retry help
Primary CTA: Pay and reserve
Data and controls: Signed server-side webhook/API verification plus valid held inventory is required. No PAN/CVV stored in Wix collections.
Fields: Provider token/reference; never card details in site forms

### P35 - Booking Confirmation
Route: /book/confirmation | Stage: Booking flow | Indexable: False
Title tag: Booking Confirmation | Turn Key STR
Meta description: A confirmed reservation shows its reference, room, dates, accepted total and payment record. Pending reviews are labeled clearly.
H1: Your booking status and next steps.
Primary keyword: Operational page; no SEO target

A confirmed reservation shows its reference, room, dates, accepted total and payment record. Pending reviews are labeled clearly.

Section order: Confirmed or pending state; room/dates; receipt; balance/deposit; rules; check-in next steps; manage booking; laundry offer
Primary CTA: View my booking
Data and controls: Only display CONFIRMED after inventory commit, identity requirements and required payment succeed. Pending is not confirmed.

### P36 - Manage My Booking
Route: /my-booking | Stage: Booking flow | Indexable: False
Title tag: Manage My Booking | Turn Key STR
Meta description: View your reservation, payment schedule and accepted terms. Request a change, cancellation, add-on or extension from your secure booking link.
H1: Manage the stay you have booked.
Primary keyword: Operational page; no SEO target

View your reservation, payment schedule and accepted terms. Request a change, cancellation, add-on or extension from your secure booking link.

Section order: Authenticated booking summary; documents/status; balance; change/cancel; rebook; deposit status; support
Primary CTA: Request a booking change
Data and controls: Signed short-lived login link or authenticated account; server checks ownership on every request. Changes reprice only with agreement.

### P37 - Pre-Arrival & Check-In
Route: /check-in | Stage: Booking flow | Indexable: False
Title tag: Pre-Arrival & Check-In | Turn Key STR
Meta description: Complete any remaining requirements and receive the approved arrival instructions for your room.
H1: Prepare for your arrival.
Primary keyword: Operational page; no SEO target

Complete any remaining requirements and receive the approved arrival instructions for your room.

Section order: Identity/payment checklist; confirmed arrival window; assigned entrance/parking; guide; emergency contact; access instructions
Primary CTA: Complete pre-arrival
Data and controls: Release door/access details only to authorized confirmed travelers; never put entry codes in analytics, public pages or calendar feeds.

### P38 - Extended-Stay Application
Route: /extended-stay-application | Stage: Booking flow | Indexable: False
Title tag: Extended-Stay Application | Turn Key STR
Meta description: Submit the information needed for a reviewed stay. An application, screening fee or approval does not reserve dates without the required reservation step.
H1: Request approval for an extended stay.
Primary keyword: Operational page; no SEO target

Submit the information needed for a reviewed stay. An application, screening fee or approval does not reserve dates without the required reservation step.

Section order: Dates/room needs; employment/assignment where relevant; screening notice; secure ID; references if needed; application fee disclosure; status
Primary CTA: Submit for review
Data and controls: Any $25 fee must have a disclosed scope/refund policy. Credit/background consent and sensitive data go through a vetted separate provider.
Fields: Contact; dates; assignment/company; references if needed; separate screening consent

### P39 - Corporate Quote Request
Route: /corporate-quote | Stage: Booking flow | Indexable: False
Title tag: Corporate Quote Request | Turn Key STR
Meta description: Give us assignment dates, traveler counts and room needs. We will confirm the rooms, approved services and payment terms in writing.
H1: Get a written lodging proposal for your team.
Primary keyword: Operational page; no SEO target

Give us assignment dates, traveler counts and room needs. We will confirm the rooms, approved services and payment terms in writing.

Section order: Company details; rooming needs; worksite; invoice/ACH preference; add-ons; quote status
Primary CTA: Request written quote
Data and controls: Quote validity and hold expiry must be explicit. No automatic hold for an unanswered quote.
Fields: Company; coordinator; traveler count; dates; rooms; billing contact; PO reference optional

### P40 - Multiple-Room Crew Booking
Route: /crew-room-bundle | Stage: Expansion | Indexable: True
Title tag: Multiple-Room Crew Booking | Turn Key STR
Meta description: Ask for a coordinated booking of available guest rooms. Private and shared areas, owner occupancy and total capacity will be stated in the quote.
H1: Request all available guest rooms for your team.
Primary keyword: multiple room crew booking Altoona

Ask for a coordinated booking of available guest rooms. Private and shared areas, owner occupancy and total capacity will be stated in the quote.

Section order: Room bundle choices; occupancy; shared-house disclosure; exact rooming list; full quote; corporate terms
Primary CTA: Request a room bundle
Data and controls: Bundle consumes the same physical room inventory. Never advertise exclusive whole-house use while the owner remains in the house.

### P41 - Manager Suite
Route: /rooms/manager-suite | Stage: Future draft | Indexable: False
Title tag: Manager Suite | Turn Key STR
Meta description: This option is a planning draft. It is not available to reserve until the room, private bathroom, access and operating availability are verified.
H1: Premium suite details to be confirmed.
Primary keyword: Operational page; no SEO target

This option is a planning draft. It is not available to reserve until the room, private bathroom, access and operating availability are verified.

Section order: Verified future photos; private bath/access evidence; final amenities; capacity; rates; availability
Primary CTA: Ask about future availability
Data and controls: Do not sell the owner-occupied suite or reuse its features on other rooms.

### P42 - List Your Property
Route: /list-your-property | Stage: Future | Indexable: False
Title tag: List Your Property | Turn Key STR
Meta description: Interested in a future lodging marketplace? Share your business details for a possible listing after partner onboarding opens.
H1: Join the future property-partner list.
Primary keyword: Operational page; no SEO target

Interested in a future lodging marketplace? Share your business details for a possible listing after partner onboarding opens.

Section order: Partner criteria; ownership/authorization; insurance; availability integration; fees not finalized; waitlist
Primary CTA: Join the partner waitlist
Data and controls: No paid listing or inventory promise before marketplace operations, contracts and payment responsibility are ready.

### P43 - Future Vehicle Partners
Route: /rent-your-car | Stage: Future | Indexable: False
Title tag: Future Vehicle Partners | Turn Key STR
Meta description: Vehicle partner listings are a future feature. Submit an expression of interest without paying or uploading sensitive driver documents here.
H1: Ask about a future vehicle listing.
Primary keyword: Operational page; no SEO target

Vehicle partner listings are a future feature. Submit an expression of interest without paying or uploading sensitive driver documents here.

Section order: Eligibility concept; commercial/rental coverage; maintenance; availability; future terms; waitlist
Primary CTA: Register interest
Data and controls: Separate vehicle resources, agreements, tax and insurance; never count cars as room inventory.

## Supplied photo naming and captions

### P01 - turn-key-str-altoona-shared-bath-shower-01.jpg
Room/area: Shared bathroom
Bathroom view with shower curtain, vanity and floor mats.
Alt text: Shared bathroom with a shower curtain and vanity at Turn Key STR in Altoona.
Use: Marketing candidate after current-condition and cleaning review
Source: tmp/embedded/image1.jpeg

### P02 - turn-key-str-altoona-shared-bath-vanity-detail-02.jpg
Room/area: Shared bathroom
Close-up inspection image of the white sink and black faucet.
Alt text: White shared-bathroom sink and black faucet.
Use: Internal quality reference; replace with a staged wide photograph before marketing
Source: tmp/embedded/image2.jpeg

### P03 - turn-key-str-altoona-loft-bed-wide-01.jpg
Room/area: TK-ALT-LOFT-01
Loft bed under the sloped ceiling beside a window and storage drawers.
Alt text: Loft bed beneath a sloped ceiling beside a window and storage drawers in Altoona.
Use: Lead room photo candidate after current-condition review
Source: tmp/embedded/image3.jpeg

### P04 - turn-key-str-altoona-loft-bed-tv-02.jpg
Room/area: TK-ALT-LOFT-01
Wider loft view showing the bed, wall-mounted TV and chair.
Alt text: Loft sleeping area with a bed, wall-mounted television and chair.
Use: Secondary room photo candidate; tidy visible cables before a new shoot
Source: tmp/embedded/image4.jpeg

### P05 - turn-key-str-altoona-loft-fridge-microwave-storage-03.jpg
Room/area: TK-ALT-LOFT-01
Refrigerator/freezer, microwave on a cabinet and clothing storage rack.
Alt text: Loft refrigerator and freezer beside a microwave and clothing rack.
Use: Amenity detail candidate; confirm all photographed equipment is included
Source: tmp/embedded/image5.jpeg

### P06 - turn-key-str-altoona-loft-seating-bed-04.jpg
Room/area: TK-ALT-LOFT-01
Loft angle showing the bed, door and seating near a small table.
Alt text: Loft bed and seating area beside the room door.
Use: Layout photo candidate; do not count seating as an approved bed
Source: tmp/embedded/image6.jpeg

### P07 - turn-key-str-altoona-loft-tv-fridge-area-05.jpg
Room/area: TK-ALT-LOFT-01
TV wall, small refrigerator, chair and LED lighting under a sloped ceiling.
Alt text: Loft television, chair, small refrigerator and LED lighting under the sloped ceiling.
Use: Secondary layout candidate; verify relation to the booked loft and stage cables
Source: tmp/embedded/image7.jpeg

### P08 - turn-key-str-altoona-shared-living-room-seating-01.jpg
Room/area: Shared living room
Shared living room with brown and gray seating beneath curtained windows.
Alt text: Shared living-room seating beneath curtained windows at Turn Key STR.
Use: Shared-space photo candidate; never label as a private room lounge
Source: tmp/embedded/image8.jpeg

### P09 - turn-key-str-altoona-shared-living-dining-02.jpg
Room/area: Shared living and dining
Living area with seating and a small round dining table.
Alt text: Shared lounge seating and a round dining table in Altoona.
Use: Shared-space wide photo candidate
Source: tmp/embedded/image9.jpeg

### P10 - turn-key-str-altoona-shared-bath-vanity-social-03.jpg
Room/area: Shared bathroom
Vertical branded graphic of a vanity, mirror and towel shelf.
Alt text: Shared bathroom vanity and mirror shown in a Turn Key STR promotional graphic.
Use: Social graphic only; use a clean original photo for the main room gallery
Source: tmp/embedded/image10.jpeg

### P11 - turn-key-str-altoona-shared-kitchen-storage-01.jpg
Room/area: Shared kitchen
Open food-storage cabinet and a dish rack in the shared kitchen.
Alt text: Shared kitchen cabinet and dish-storage area at Turn Key STR.
Use: Retake with cabinet closed and counters staged; use only after appliance/access rules are verified
Source: source/F223DA50-786C-42E7-B2BF-FC9811DDCA93.jpeg

## Photo requests - do not fill with photos of another room

- turn-key-str-altoona-full-room-bed-wide-01.jpg: Full room wide shot from doorway; bed, windows and usable floor visible (TK-ALT-FULL-01).
- turn-key-str-altoona-full-room-desk-fridge-02.jpg: Full room desk, chair, TV and refrigerator/freezer (TK-ALT-FULL-01).
- turn-key-str-altoona-queen-room-bed-wide-01.jpg: Queen room wide shot; photograph the actual room (TK-ALT-QUEEN-01).
- turn-key-str-altoona-queen-room-desk-fridge-02.jpg: Queen room workspace, recliner if included, TV and refrigerator (TK-ALT-QUEEN-01).
- turn-key-str-altoona-loft-entry-stairs-06.jpg: Stairs and entrance to the loft; show access honestly (TK-ALT-LOFT-01).
- turn-key-str-altoona-assigned-guest-entrance-01.jpg: Assigned guest entrance without visible keys or entry codes (Property).
- turn-key-str-altoona-approved-parking-01.jpg: Only the actual controlled and approved parking spaces (Property).
- turn-key-str-altoona-shared-bath-clean-wide-04.jpg: Bright, clean bathroom wide shot with no personal items (Shared bathroom).
- turn-key-str-altoona-shared-kitchen-approved-appliances-02.jpg: Approved shared appliances and food-storage area (Shared kitchen).
- turn-key-str-altoona-exterior-arrival-01.jpg: Actual property exterior with current appearance and arrival context (Property).

## Blog content pipeline

- Furnished Rooms Near UPMC Altoona: What to Check Before You Book | /blog/furnished-rooms-near-upmc-altoona | Medical stays | Launch draft | Main link: /stays-near-upmc-altoona
- Weekly Furnished Rooms vs Hotels in Altoona: Compare the Full Cost | /blog/weekly-furnished-room-vs-hotel-altoona | Rates and planning | Launch draft | Main link: /rates-and-fees
- Crew Lodging in Altoona: A Checklist for Contractors and Coordinators | /blog/contractor-crew-lodging-checklist-altoona | Work travel | Launch draft | Main link: /corporate-crew-lodging
- Planning a 28-Day Furnished Stay in Altoona | /blog/28-day-stay-planning-altoona | Extended stays | Week 2 | Main link: /28-day-furnished-stays-altoona
- Private Bedroom, Shared Bathroom: What to Expect | /blog/shared-bathroom-private-room-guide | Rooms | Week 2 | Main link: /amenities-shared-spaces
- A Practical Packing List for an Altoona Work Trip | /blog/altoona-work-trip-packing-list | Work travel | Week 3 | Main link: /rooms
- Questions to Ask Before Booking Travel Nurse Housing in Altoona | /blog/travel-nurse-room-questions-altoona | Medical stays | Week 3 | Main link: /travel-nurse-housing-altoona
- Laundry Planning for Traveling Workers in Altoona | /blog/laundry-for-traveling-workers-altoona | Local services | Week 4 | Main link: /laundry
- What to Include in a Corporate Rooming List | /blog/corporate-rooming-list-template | Corporate | Week 4 | Main link: /corporate-crew-lodging
- Ask These Parking Questions Before Bringing a Work Vehicle | /blog/altoona-parking-work-vehicle-guide | Local services | Week 5 | Main link: /parking
- Considering Altoona for a Penn State Event Trip | /blog/penn-state-trip-staying-in-altoona | Events | Week 5; verify official calendar first | Main link: /penn-state-event-stays-altoona
- Holiday Stay Planning: Dates, Minimum Nights and Cancellation Terms | /blog/thanksgiving-christmas-stay-planning-altoona | Seasonal | Week 6; publish verified date rules | Main link: /rates-and-fees
- How to Request an Extension Without Losing Your Room | /blog/extend-furnished-stay-altoona | Extended stays | Week 6 | Main link: /28-day-furnished-stays-altoona
- Why the Lowest Nightly Rate May Not Be the Lowest Total | /blog/hotel-price-vs-total-booking-cost | Rates and planning | Week 7 | Main link: /rates-and-fees
- Arriving for a Shift-Work Assignment: Ask About Quiet Hours | /blog/arriving-for-night-shift-assignment | Medical stays | Week 7 | Main link: /house-rules
- Car Rental for a Work Trip: Check Eligibility and Insurance First | /blog/car-rental-work-trip-questions | Travel services | Week 8; verified rental program required | Main link: /car-rentals
- Planning an Altoona to State College Day Trip | /blog/altoona-state-college-trip-planning | Local guide | Week 8; check route/operator | Main link: /shuttle-errands
- Crew Laundry and Housekeeping: Agree on the Details Before Arrival | /blog/construction-laundry-housing-planning | Work travel | Week 9 | Main link: /laundry
- A Lodging Checklist for an Altoona Medical Visit | /blog/family-medical-visit-lodging-checklist | Medical stays | Week 9 | Main link: /stays-near-upmc-altoona
- A Direct-Booking Checklist for Furnished Rooms in Altoona | /blog/direct-room-booking-checklist-altoona | Booking | Week 10 | Main link: /rooms

## Booking-engine acceptance scenarios

- INV-01: Two users attempt the last available room for identical nights. Expected: Exactly one claim/confirmation; loser is not captured and confirmed.
- INV-02: Reservations overlap by one night. Expected: Second overlapping claim rejected; no partial multi-night booking.
- INV-03: Departure and new arrival on the same day. Expected: Allowed only with configured turnover and no conflicting late checkout.
- INV-04: Crew bundle races with a single-room booking. Expected: All bundle resources lock together or bundle fails; no duplicated child room.
- INV-05: Manual phone/maintenance block is entered during checkout. Expected: Authority resolves the conflicting claim consistently; no second confirmation.
- INV-06: External channel event arrives late or sync becomes unhealthy. Expected: Alert/stop-sale or request-only fallback; no blind paid instant confirmation.
- PAY-01: Payment declined or customer leaves checkout. Expected: No confirmed reservation; hold expires/releases without duplicate charge.
- PAY-02: Same signed payment webhook is delivered repeatedly. Expected: One transaction and one booking state transition.
- PAY-03: Browser success URL is opened without valid payment. Expected: No confirmed booking.
- PAY-04: Payment clears after hold expiry and room is sold. Expected: No second reservation; void/refund/reconciliation exception.
- PAY-05: Webhook amount/currency/merchant/signature is wrong. Expected: Reject/quarantine event; do not confirm.
- PAY-06: Guest pays reservation credit then balance. Expected: Credit deducted once; remaining amount accurate; security tracked separately.
- PAY-07: Security authorization expires during longer stay. Expected: Expiry detected; only approved lawful reauthorization/alternative process; no indefinite-hold promise.
- PAY-08: Cancellation and partial/full refund require retry. Expected: Accepted policy applied once; auditable refund and inventory state.
- ID-01: Guest attempts to fetch another guest ID/booking. Expected: Denied on server; no private document or personal data disclosed.
- ID-02: ID verification requires manual review past hold expiry. Expected: Dates released; fresh inventory and quote acceptance required before payment.
- ID-03: Unsupported or malicious file is uploaded. Expected: Rejected/isolated; no executable public asset and no leaked ID URL.
- RATE-01: Owner changes unsold rates after a confirmed booking. Expected: New shopping quote changes; confirmed booking amount does not.
- RATE-02: Quote expires and automatic rate changes. Expected: Show and accept new quote before any charge.
- RATE-03: Competitor feed is missing/stale or lacks enough comparable rooms. Expected: Use last approved rate and alert; never scrape or guess a live comparison.
- TIME-01: DST transition, local midnight, event minimum and max stay. Expected: Property-local nights and exact deadlines remain correct.
- WEB-01: Mobile screen reader, keyboard, camera upload and form errors. Expected: Usable labels/focus/errors; no sensitive values leak to analytics.
- SEO-01: Crawler visits checkout, draft, room and guide pages. Expected: Only substantive approved public pages index; no PII or false availability markup.

## Source and capability notes

- Wix site context read, 2026-10-30: https://advantagemediapro3.wixsite.com/turn-key-str
  Existing site; Free plan; Wix Hotels installed; Velo disabled; America/Los_Angeles time zone. Exact installed Hotels version is not established solely by the app label.
- Wix Hotels version comparison: https://support.wix.com/en/article/wix-hotels-by-hotelrunner-the-difference-between-the-new-and-previous-wix-hotels
  New and previous hotel apps differ. Verify version and migration before choosing features.
- HotelRunner inventory calendar: https://support.wix.com/en/article/wix-hotels-by-hotelrunner-managing-prices-and-availability-with-the-inventory-calendar
  Date-specific rates, inventory and restrictions in the new app.
- HotelRunner rate plans: https://support.wix.com/en/article/wix-hotels-by-hotelrunner-creating-and-managing-your-rate-plans
  Rate-plan types; pricing changes also need inventory/bulk updates. This is not an automatic competitor-price engine.
- Legacy channel-manager checklist: https://support.wix.com/en/article/checklist-for-connecting-wix-hotels-to-the-channel-manager-hotelrunner
  Legacy-specific multiple-unit, blocking and sync caveats. Do not apply blindly to the new app.
- Current hotel payment providers: https://support.wix.com/en/article/request-additional-payment-methods-for-wix-hotels
  New HotelRunner app supports providers available in the site Accept Payments section. Green Payments compatibility is not established by this statement.
- Legacy hotel deposits: https://support.wix.com/en/article/adding-a-deposit-fee-to-reservations-in-wix-hotels
  Older deposit choices and balance limitations apply only to the original app.
- Wix payment provider plugin: https://dev.wix.com/docs/api-reference/business-management/payments/payment-service-provider-service-plugin/introduction
  PSP integration is an implementation path, not proof that a particular merchant gateway is supported. PSP onboarding is described here.
- Wix file upload field: https://support.wix.com/en/article/wix-forms-adding-a-file-upload-field
  File uploads exist and require the applicable premium Forms feature. A file upload field alone does not establish suitable private ID handling.
- Private file download URLs: https://dev.wix.com/docs/api-reference/assets/media/media-manager/files/generate-file-download-url
  Authenticated generation of temporary private-file download links is documented. Full upload/storage permissions must still be designed and tested.
- Upgrade new Wix Hotels: https://support.wix.com/en/article/wix-hotels-by-hotelrunner-upgrading-wix-hotels-by-hotelrunner
  Upgrade is required to enable the documented online reservation/payment features; no current subscription price was verified.
- Owner source document: Turn_Key_STR_WorkStay_Marketplace_Blueprint.docx
  Current source blueprint and embedded property photos reviewed; newer user instruction selects Wix and Green Payments as preferred direction.