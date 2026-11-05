import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  House,
  Menu,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const photos = {
  bathShower: "/media/turn-key-str-altoona-shared-bath-shower-01.jpg",
  bathVanityDetail: "/media/turn-key-str-altoona-shared-bath-vanity-detail-02.jpg",
  loft: "/media/turn-key-str-altoona-loft-bed-wide-01.jpg",
  loftTv: "/media/turn-key-str-altoona-loft-bed-tv-02.jpg",
  loftFridge: "/media/turn-key-str-altoona-loft-fridge-microwave-storage-03.jpg",
  loftSeating: "/media/turn-key-str-altoona-loft-seating-bed-04.jpg",
  loftTvFridge: "/media/turn-key-str-altoona-loft-tv-fridge-area-05.jpg",
  sharedLounge: "/media/turn-key-str-altoona-shared-living-room-seating-01.jpg",
  sharedDining: "/media/turn-key-str-altoona-shared-living-dining-02.jpg",
  bathVanitySocial: "/media/turn-key-str-altoona-shared-bath-vanity-social-03.jpg",
  kitchenStorage: "/media/turn-key-str-altoona-shared-kitchen-storage-01.jpg",
};

const photoGallery = [
  {
    src: photos.bathShower,
    alt: "Shared bathroom with a shower curtain, vanity and floor mats",
    caption: "Shared bathroom",
    note: "Current condition should be confirmed.",
  },
  {
    src: photos.bathVanityDetail,
    alt: "Close-up of the white shared-bathroom sink and black faucet",
    caption: "Bathroom vanity detail",
    note: "Close-up reference image.",
  },
  {
    src: photos.loft,
    alt: "Loft bed beneath a sloped ceiling beside a window and storage drawers",
    caption: "Loft bedroom",
    note: "Owner reports one queen bed.",
  },
  {
    src: photos.loftTv,
    alt: "Loft sleeping area with a bed, wall-mounted television and chair",
    caption: "Loft sleeping area",
    note: "Seating is not an approved bed.",
  },
  {
    src: photos.loftFridge,
    alt: "Loft refrigerator and freezer beside a microwave and clothing rack",
    caption: "Loft storage and appliances",
    note: "Confirm included equipment.",
  },
  {
    src: photos.loftSeating,
    alt: "Loft bed and seating area beside the room door",
    caption: "Loft layout",
    note: "Shows seating beside the bed.",
  },
  {
    src: photos.loftTvFridge,
    alt: "Loft television, chair, small refrigerator and lighting under a sloped ceiling",
    caption: "Loft TV and refrigerator area",
    note: "Confirm included equipment.",
  },
  {
    src: photos.sharedLounge,
    alt: "Shared living-room seating beneath curtained windows",
    caption: "Shared living room",
    note: "Shared household space.",
  },
  {
    src: photos.sharedDining,
    alt: "Shared lounge seating and a round dining table",
    caption: "Shared living and dining",
    note: "Shared household space.",
  },
  {
    src: photos.bathVanitySocial,
    alt: "Branded Turn Key STR promotional graphic showing a bathroom vanity and mirror",
    caption: "Bathroom vanity graphic",
    note: "Branded promotional graphic, not a room photo.",
    isGraphic: true,
  },
  {
    src: photos.kitchenStorage,
    alt: "Shared kitchen cabinet and dish-storage area",
    caption: "Shared kitchen storage",
    note: "Appliance access and rules need confirmation.",
  },
];

const rooms = [
  {
    id: "loft",
    name: "Loft Suite",
    image: photos.loft,
    imageAlt: "Queen bed beneath the sloped ceiling in the Altoona loft",
    bed: "One queen bed reported",
    description:
      "A private loft bedroom with a sloped ceiling. Additional beds and approved capacity are not verified.",
    imageLabel: "Room photos available",
    photoAvailable: true,
  },
  {
    id: "full",
    name: "Full-Bed Room",
    bed: "One full-size bed reported",
    description:
      "A private room with a shared bathroom. Room-specific photos and other features are still to be confirmed.",
    imageLabel: "Room photos coming soon",
    photoAvailable: false,
  },
  {
    id: "queen",
    name: "Queen Room",
    bed: "One queen bed reported",
    description:
      "A private room with a shared bathroom. Floor, capacity, photos and longer-stay rate need confirmation.",
    imageLabel: "Room photos coming soon",
    photoAvailable: false,
  },
];

const faqs = [
  {
    question: "What spaces are private and shared?",
    answer:
      "The booked bedroom is private. The bathroom, kitchen and designated household spaces are shared. Kitchen access and permitted appliances must be confirmed for the specific stay.",
  },
  {
    question: "Can I book online or see live availability?",
    answer:
      "Not yet. This first website release helps you plan a request. It is not connected to a live calendar, payment provider or booking system, so a request does not hold dates or confirm a stay.",
  },
  {
    question: "What are the quiet hours?",
    answer:
      "A confirmed quiet-hours schedule is not published on this website. Ask for the applicable hours and any event adjustments in writing before confirming a stay.",
  },
  {
    question: "Can I request a weekly or 28-day stay?",
    answer:
      "You can request weekly, approximately 28-day or monthly dates, including a monthly furnished loft request. Availability, minimum-stay rules and any longer-stay package must be confirmed in a written quote. An extension or rebooking is not automatic.",
  },
  {
    question: "Does the loft have step-free access?",
    answer:
      "The loft is accessed by stairs. Stair dimensions, handrails and step-free access to the other rooms have not been verified. Contact the property to discuss access needs before requesting; this website does not promise a step-free route.",
  },
  {
    question: "How do I know the complete price?",
    answer:
      "Request a written quote showing the lodging amount, all mandatory fees and taxes, optional services, payment schedule, cancellation terms and any refundable security separately. No rates on this website are live offers.",
  },
  {
    question: "Can a team reserve the whole home?",
    answer:
      "Booking all available guest rooms does not automatically mean exclusive use of the home. Any whole-home arrangement must be offered and approved in writing.",
  },
  {
    question: "Can I extend my stay?",
    answer:
      "Extensions are a separate availability and pricing decision. Ask for the full likely date range early; an extension is never automatic.",
  },
  {
    question: "Are laundry and parking included?",
    answer:
      "Do not assume either is included. Parking, laundry and transport need separate confirmation, including current availability and any applicable price.",
  },
];

const serviceInterests = [
  ["parking", "Parking"],
  ["laundry", "Laundry pickup"],
  ["car", "Car rental"],
  ["shuttle", "Shuttle or local errands"],
];

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

function getLocalDateInputValue() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
    .toISOString()
    .slice(0, 10);
}

function Header({ onQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Turn Key STR home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          <House size={19} strokeWidth={2.2} />
        </span>
        <span className="brand-name">
          Turn Key <strong>STR</strong>
          <small>ALTOONA, PENNSYLVANIA</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={`primary-nav${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href="#rooms" onClick={closeMenu}>Rooms</a>
        <a href="#the-stay" onClick={closeMenu}>The stay</a>
        <a href="#faq" onClick={closeMenu}>FAQs</a>
        <button
          className="nav-text-button"
          type="button"
          onClick={() => {
            closeMenu();
            onQuote("company");
          }}
        >
          For employers
        </button>
        <button
          className="button button-small button-dark nav-quote"
          type="button"
          onClick={() => {
            closeMenu();
            onQuote();
          }}
        >
          Request a quote <ArrowUpRight size={16} />
        </button>
      </nav>
    </header>
  );
}

function DatePlanner({ onSearch }) {
  const todayLocal = getLocalDateInputValue();
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState("1");
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    if (!arrival || !departure) {
      setError("Choose both arrival and departure dates to continue.");
      return;
    }
    if (departure <= arrival) {
      setError("Departure must be after arrival.");
      return;
    }
    setError("");
    onSearch({ arrival, departure, adults });
  }

  return (
    <form className="date-planner" onSubmit={submit} noValidate>
      <div className="planner-heading">
        <div>
          <span className="planner-kicker"><Sparkles size={14} /> START PLANNING</span>
          <h2>When are you coming to Altoona?</h2>
        </div>
        <span className="planner-step">A quick trip overview</span>
      </div>
      <div className="planner-fields">
        <label className="planner-field" htmlFor="planner-arrival">
          <span>Check-in</span>
          <input
            id="planner-arrival"
            type="date"
            value={arrival}
            min={todayLocal}
            onChange={(event) => {
              setArrival(event.target.value);
              setError("");
            }}
            required
          />
        </label>
        <label className="planner-field" htmlFor="planner-departure">
          <span>Check-out</span>
          <input
            id="planner-departure"
            type="date"
            value={departure}
            min={arrival || todayLocal}
            onChange={(event) => {
              setDeparture(event.target.value);
              setError("");
            }}
            required
          />
        </label>
        <label className="planner-field planner-guests" htmlFor="planner-adults">
          <span>Adults</span>
          <select id="planner-adults" value={adults} onChange={(event) => setAdults(event.target.value)}>
            <option value="1">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4+">4+ adults</option>
          </select>
        </label>
        <button className="button button-primary planner-submit" type="submit">
          Explore rooms <ArrowRight size={17} />
        </button>
      </div>
      <div className="planner-foot">
        {error ? (
          <p className="form-error" role="alert">{error}</p>
        ) : (
          <p><ShieldCheck size={14} /> No payment or commitment. We’ll use this to prepare your inquiry.</p>
        )}
        <span>Not a live availability search</span>
      </div>
    </form>
  );
}

function RoomCard({ room, onQuote }) {
  return (
    <article className={`room-card${room.photoAvailable ? "" : " room-card-pending"}`}>
      {room.photoAvailable ? (
        <div className="room-image-wrap">
          <img className="room-image" src={room.image} alt={room.imageAlt} loading="lazy" />
          <span className="image-badge"><Check size={13} /> {room.imageLabel}</span>
        </div>
      ) : (
        <div className="room-image-placeholder" role="img" aria-label={room.imageLabel}>
          <BedDouble size={30} strokeWidth={1.4} />
          <span>{room.imageLabel}</span>
        </div>
      )}
      <div className="room-card-content">
        <div className="room-card-title">
          <h3>{room.name}</h3>
          <span className="room-fact"><BedDouble size={15} /> {room.bed}</span>
        </div>
        <p>{room.description}</p>
        <div className="room-card-bottom">
          <span className="bathroom-fact"><House size={14} /> Shared bathroom</span>
          <button className="arrow-link" type="button" onClick={() => onQuote(room.name)}>
            Ask about this room <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

function QuotePanel({ search, selectedRoom, selectedAudience }) {
  const todayLocal = getLocalDateInputValue();
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "",
    arrival: search?.arrival || "",
    departure: search?.departure || "",
    adults: search?.adults || "1",
    room: selectedRoom || "",
    audience: selectedAudience || "individual",
    company: "",
    worksite: "",
    serviceInterest: [],
    notes: "",
  });
  const [result, setResult] = useState("");
  const [copyError, setCopyError] = useState(false);

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setResult("");
  }

  function toggleService(service) {
    setForm((current) => {
      const selected = current.serviceInterest.includes(service);
      return {
        ...current,
        serviceInterest: selected
          ? current.serviceInterest.filter((item) => item !== service)
          : [...current.serviceInterest, service],
      };
    });
    setResult("");
  }

  function inquiryText() {
    return [
      "Turn Key STR — stay inquiry",
      `Request type: ${form.audience === "company" ? "Company / crew" : "Individual"}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Trip purpose: ${form.purpose || "Not specified"}`,
      ...(form.audience === "company" ? [`Company: ${form.company || "Not provided"}`, `Worksite / assignment: ${form.worksite || "Not provided"}`] : []),
      `Room of interest: ${form.room || "Not sure yet"}`,
      `Arrival: ${formatDate(form.arrival)}`,
      `Departure: ${formatDate(form.departure)}`,
      `Adults: ${form.adults}`,
      `Additional service questions: ${form.serviceInterest.length ? form.serviceInterest.join(", ") : "None"}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "This is an inquiry, not a confirmed booking.",
    ].join("\n");
  }

  async function prepare(event) {
    event.preventDefault();
    if (form.audience === "company" && !form.company.trim()) {
      setResult("Add a company or organization name to prepare a crew inquiry.");
      return;
    }
    if (form.departure <= form.arrival) {
      setResult("Departure must be after arrival.");
      return;
    }
    setResult("Your inquiry is ready. It has not been sent to the property.");
    setCopyError(false);
  }

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiryText());
      setCopyError(false);
      setResult("Copied. Your inquiry has not been sent yet.");
    } catch {
      setCopyError(true);
      setResult("Copy wasn’t available in this browser. You can select and copy the inquiry details below.");
    }
  }

  async function shareInquiry() {
    if (!navigator.share) {
      await copyInquiry();
      return;
    }
    try {
      await navigator.share({ title: "Turn Key STR stay inquiry", text: inquiryText() });
      setResult("Shared from your device. This is not a confirmed booking.");
    } catch (error) {
      if (error.name !== "AbortError") {
        setResult("Sharing wasn’t available. Try copying your inquiry instead.");
      }
    }
  }

  return (
    <form className="quote-form" onSubmit={prepare}>
      <div className="quote-form-grid">
        <fieldset className="form-field form-field-wide audience-field">
          <legend>Who are you arranging a stay for?</legend>
          <div className="audience-options">
            <label htmlFor="audience-individual">
              <input
                id="audience-individual"
                type="radio"
                name="audience"
                value="individual"
                checked={form.audience === "individual"}
                onChange={update}
              />
              <span>Myself / another traveler</span>
            </label>
            <label htmlFor="audience-company">
              <input
                id="audience-company"
                type="radio"
                name="audience"
                value="company"
                checked={form.audience === "company"}
                onChange={update}
              />
              <span>Company / crew</span>
            </label>
          </div>
        </fieldset>
        <label className="form-field" htmlFor="quote-name">
          <span>Your name</span>
          <input
            id="quote-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            required
          />
        </label>
        <label className="form-field" htmlFor="quote-email">
          <span>Email address</span>
          <input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            required
          />
        </label>
        <label className="form-field" htmlFor="quote-purpose">
          <span>Trip purpose <small>Optional</small></span>
          <select id="quote-purpose" name="purpose" value={form.purpose} onChange={update}>
            <option value="">Select a purpose</option>
            <option value="Healthcare assignment or medical visit">Healthcare assignment or medical visit</option>
            <option value="Construction or contractor project">Construction or contractor project</option>
            <option value="Utility, energy or traveling crew">Utility, energy or traveling crew</option>
            <option value="Other work trip">Other work trip</option>
            <option value="Personal travel">Personal travel</option>
          </select>
        </label>
        {form.audience === "company" && (
          <>
            <label className="form-field" htmlFor="quote-company">
              <span>Company / organization</span>
              <input
                id="quote-company"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={update}
                required
              />
            </label>
            <label className="form-field" htmlFor="quote-worksite">
              <span>Worksite / assignment area <small>Optional</small></span>
              <input id="quote-worksite" name="worksite" value={form.worksite} onChange={update} />
            </label>
          </>
        )}
        <label className="form-field" htmlFor="quote-arrival">
          <span>Arrival</span>
          <input
            id="quote-arrival"
            name="arrival"
            type="date"
            min={todayLocal}
            value={form.arrival}
            onChange={update}
            required
          />
        </label>
        <label className="form-field" htmlFor="quote-departure">
          <span>Departure</span>
          <input
            id="quote-departure"
            name="departure"
            type="date"
            min={form.arrival}
            value={form.departure}
            onChange={update}
            required
          />
        </label>
        <label className="form-field" htmlFor="quote-adults">
          <span>Adults</span>
          <select id="quote-adults" name="adults" value={form.adults} onChange={update}>
            <option value="1">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4+">4+ adults</option>
          </select>
        </label>
        <label className="form-field" htmlFor="quote-room">
          <span>Room of interest</span>
          <select id="quote-room" name="room" value={form.room} onChange={update}>
            <option value="">Not sure yet</option>
            {rooms.map((room) => <option key={room.id} value={room.name}>{room.name}</option>)}
          </select>
        </label>
        <fieldset className="form-field form-field-wide service-interest">
          <legend>Would you like information about any extras? <small>Optional · subject to confirmation</small></legend>
          <div className="service-options">
            {serviceInterests.map(([value, label]) => (
              <label htmlFor={`service-${value}`} key={value}>
                <input
                  id={`service-${value}`}
                  type="checkbox"
                  checked={form.serviceInterest.includes(label)}
                  onChange={() => toggleService(label)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <small className="service-help">Asking about an add-on does not reserve it. Availability, provider, terms and price must be confirmed separately.</small>
        </fieldset>
        <label className="form-field form-field-wide" htmlFor="quote-notes">
          <span>Anything else we should know? <small>Optional</small></span>
          <textarea
            id="quote-notes"
            name="notes"
            value={form.notes}
            onChange={update}
            rows="3"
            placeholder="For example: work trip, crew room needs, or arrival timing."
          />
        </label>
      </div>
      <p className="privacy-note">
        Please don’t include payment details or ID documents. This form does not transmit or store your information.
      </p>
      <button className="button button-primary quote-submit" type="submit">
        Prepare my inquiry <ArrowRight size={17} />
      </button>
      {result && (
        <div className="quote-result" role="status" aria-live="polite">
          <p>{result}</p>
          <pre className={copyError ? "copy-fallback" : ""}>{inquiryText()}</pre>
          <div className="quote-result-actions">
            <button type="button" className="button button-light" onClick={copyInquiry}>
              <Copy size={15} /> Copy details
            </button>
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button type="button" className="button button-light" onClick={shareInquiry}>
                <ArrowUpRight size={15} /> Share
              </button>
            )}
          </div>
        </div>
      )}
    </form>
  );
}

function PhotoGallery({ activePhoto, setActivePhoto }) {
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (activePhoto === null) {
      triggerRef.current?.focus();
      triggerRef.current = null;
      return undefined;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") {
        setActivePhoto((index) => (index + 1) % photoGallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActivePhoto((index) => (index - 1 + photoGallery.length) % photoGallery.length);
      }
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll("button:not([disabled])");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, setActivePhoto]);

  return (
    <>
      <section className="gallery-section page-shell" aria-labelledby="gallery-title">
        <div className="section-intro">
          <div>
            <span className="eyebrow">A LOOK AROUND</span>
            <h2 id="gallery-title">Photos of the rooms and shared spaces.</h2>
            <p>Browse the supplied photos in the order provided. Loft and shared-space images are labeled separately.</p>
          </div>
          <span className="section-side-note"><House size={16} /> 11 supplied images</span>
        </div>
        <div className="photo-gallery-grid">
          {photoGallery.map((photo, index) => (
            <button
              className="gallery-tile"
              type="button"
              key={photo.src}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActivePhoto(index);
              }}
              aria-label={`View photo ${index + 1}: ${photo.caption}. ${photo.note}`}
            >
              <span className="gallery-image-wrap">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                {photo.isGraphic && <span className="gallery-kind">Promotional graphic</span>}
              </span>
              <span className="gallery-caption">
                <strong>{photo.caption}</strong>
                <small>{photo.note}</small>
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-disclaimer">
          Images document the loft and shared areas, not every bedroom. Verify current condition and room-specific inclusions before arranging a stay.
        </p>
      </section>
      {activePhoto !== null && (
        <div
          className="lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(null);
          }}
        >
          <section
            className="lightbox-panel"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${activePhoto + 1} of ${photoGallery.length}: ${photoGallery[activePhoto].caption}`}
          >
            <button
              className="lightbox-close"
              ref={closeButtonRef}
              type="button"
              aria-label="Close photo"
              onClick={() => setActivePhoto(null)}
            >
              <X size={21} />
            </button>
            <button
              className="lightbox-arrow lightbox-prev"
              type="button"
              aria-label="Previous photo"
              onClick={() => setActivePhoto((index) => (index - 1 + photoGallery.length) % photoGallery.length)}
            >
              <ChevronLeft size={22} />
            </button>
            <img
              className="lightbox-image"
              src={photoGallery[activePhoto].src}
              alt={photoGallery[activePhoto].alt}
            />
            <button
              className="lightbox-arrow lightbox-next"
              type="button"
              aria-label="Next photo"
              onClick={() => setActivePhoto((index) => (index + 1) % photoGallery.length)}
            >
              <ChevronRight size={22} />
            </button>
            <div className="lightbox-caption">
              <span>{activePhoto + 1} / {photoGallery.length}</span>
              <div><strong>{photoGallery[activePhoto].caption}</strong><small>{photoGallery[activePhoto].note}</small></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function App() {
  const [search, setSearch] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("individual");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  function goToQuote(roomName = "", audience = "") {
    if (roomName) setSelectedRoom(roomName);
    if (audience) setSelectedAudience(audience);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => document.getElementById("quote-name")?.focus({ preventScroll: true }), 400);
  }

  function handleSearch(request) {
    setSearch(request);
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header onQuote={(audience) => goToQuote("", audience)} />
      <main id="main-content">
        <section className="hero" id="home">
          <img
            className="hero-photo"
            src={photos.loft}
            alt=""
            fetchPriority="high"
            aria-hidden="true"
          />
          <div className="hero-overlay" />
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> FURNISHED STAYS IN ALTOONA, PA</span>
              <h1>Furnished rooms in Altoona for traveling workers.</h1>
              <p>
                        Owner-occupied furnished guest bedrooms for work trips, healthcare assignments and crews. Private bedrooms, shared household spaces, and clear details before you make plans.
              </p>
              <a className="hero-text-link" href="#rooms">
                Find the right room <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon"><House size={18} /></span>
              <span><strong>Private room. Shared home.</strong><small>Know what to expect before you arrive.</small></span>
            </div>
          </div>
          <div className="planner-wrap page-shell">
            <DatePlanner onSearch={handleSearch} />
          </div>
        </section>

        <div className="prototype-note">
          <div className="prototype-note-inner">
            <Clock3 size={16} />
            <p><strong>Planning a stay?</strong> This site is not connected to live availability, pricing or booking yet. A request does not reserve a room.</p>
          </div>
        </div>

        <section className="section section-rooms page-shell" id="rooms">
          <div className="section-intro">
            <div>
              <span className="eyebrow">THE ROOMS</span>
              <h2>Weekly and extended-stay lodging in Altoona.</h2>
              <p>Looking for furnished rooms in Altoona, PA, weekly stays or temporary housing for a work assignment? You can request approximately 28-day dates or a monthly furnished loft stay; minimum nights, availability and longer-stay pricing must be confirmed in a written quote.</p>
            </div>
            <span className="section-side-note"><UsersRound size={17} /> Room capacity must be confirmed</span>
          </div>
          {search && (
            <div className="search-summary" role="status">
              <Check size={16} />
              <span>
                Planning for <strong>{formatDate(search.arrival)}</strong> – <strong>{formatDate(search.departure)}</strong>, {search.adults} {search.adults === "1" ? "adult" : "adults"}.
                {" "}No live availability has been checked.
              </span>
              <button type="button" onClick={() => goToQuote()}>Add to inquiry <ArrowRight size={15} /></button>
            </div>
          )}
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} onQuote={goToQuote} />
            ))}
          </div>
          <p className="room-disclaimer">
            Room rates, maximum occupancy, dates and complete fees need to be confirmed in a written quote. No prices shown here are live offers.
          </p>
        </section>

        <section className="stay-section" id="the-stay">
          <div className="stay-inner page-shell">
            <div className="stay-copy">
              <span className="eyebrow eyebrow-light">A CLEARER KIND OF STAY</span>
              <h2>Good to know before<br />you make plans.</h2>
              <p className="stay-lead">Turn Key STR offers owner-occupied furnished lodging in Altoona, Pennsylvania. Your booked bedroom is private; the bathroom, kitchen and designated lounge areas are shared. Kitchen access and permitted appliances must be confirmed for your stay.</p>
              <div className="stay-points">
                <div className="stay-point"><span><BedDouble size={18} /></span><div><strong>Your own bedroom</strong><small>Room details and photos are specific to the room where available.</small></div></div>
                <div className="stay-point"><span><House size={18} /></span><div><strong>Shared household spaces</strong><small>The bathroom and designated common areas are shared.</small></div></div>
                <div className="stay-point"><span><ShieldCheck size={18} /></span><div><strong>Clear details up front</strong><small>Ask about access, amenities and total price before accepting a quote.</small></div></div>
                <div className="stay-point"><span><BedDouble size={18} /></span><div><strong>Loft access includes stairs</strong><small>Stair details and step-free access to other rooms are unverified. Contact the property about access needs before requesting.</small></div></div>
              </div>
              <button className="button button-white" type="button" onClick={() => goToQuote()}>
                Ask a question <ArrowRight size={16} />
              </button>
            </div>
            <div className="stay-photo-grid">
              <img src={photos.sharedLounge} alt="Shared living-room seating beneath curtained windows" loading="lazy" />
              <img src={photos.loftTv} alt="Loft sleeping area with a bed, wall-mounted television and chair" loading="lazy" />
              <span className="photo-caption"><House size={14} /> Shared spaces are part of the home</span>
            </div>
          </div>
        </section>

        <PhotoGallery activePhoto={activePhoto} setActivePhoto={setActivePhoto} />

        <section className="section quote-section page-shell" id="quote">
          <div className="quote-panel">
            <div className="quote-copy">
              <span className="eyebrow">LET’S START WITH A CONVERSATION</span>
              <h2>Tell us what your stay needs.</h2>
              <p>Searching for travel nurse housing in Altoona, PA, furnished rooms near UPMC Altoona, or contractor crew lodging in Blair County? Turn Key STR offers owner-occupied private furnished bedrooms with shared household spaces. The property is not affiliated with UPMC, and commute details are not verified; confirm the route to your destination.</p>
              <p>Prepare an inquiry to copy or share from your device. Your details are not sent or stored by this prototype.</p>
              <p className="quote-legal-note">A request is not a reservation. The agreement, final price, cancellation terms, accepted guests and any separate security amount must be confirmed for your specific stay.</p>
              <div className="quote-promise"><ShieldCheck size={18} /><span>No payment details or ID documents needed to ask a question.</span></div>
            </div>
            <div className="quote-form-wrap">
              {search && (
                <div className="prefilled-note">
                  <Check size={15} /> Your requested dates are prefilled. You can change them below.
                </div>
              )}
              <QuotePanel
                key={`${search?.arrival || ""}-${selectedRoom}-${selectedAudience}`}
                search={search}
                selectedRoom={selectedRoom}
                selectedAudience={selectedAudience}
              />
            </div>
          </div>
        </section>

        <section className="confirmation-guide page-shell" aria-labelledby="confirmation-title">
          <div className="confirmation-heading">
            <span className="eyebrow">CLEAR BEFORE CONFIRMING</span>
            <h2 id="confirmation-title">Know the details before you commit.</h2>
            <p>A good lodging proposal should make the specific arrangement easy to review.</p>
          </div>
          <div className="confirmation-steps">
            <article>
              <span className="step-number">01</span>
              <div><h3>Share your trip</h3><p>Give the dates, adult traveler count, room preference and any service questions.</p></div>
            </article>
            <article>
              <span className="step-number">02</span>
              <div><h3>Review the written details</h3><p>Check the assigned room, approved guests, dates, complete charges, cancellation terms and house rules. Any refundable security should be listed separately.</p></div>
            </article>
            <article>
              <span className="step-number">03</span>
              <div><h3>Wait for confirmation</h3><p>An inquiry or payment request alone is not confirmation. The approved booking process must confirm the reservation and next steps.</p></div>
            </article>
          </div>
          <p className="confirmation-note">This website is an early prototype; proposals and reservations are not processed here.</p>
        </section>

        <section className="faq-section">
          <div className="faq-inner page-shell" id="faq">
            <div className="faq-heading">
              <span className="eyebrow">GOOD QUESTIONS</span>
              <h2>Before you settle in.</h2>
              <p>Still wondering about something? Prepare an inquiry and include your question.</p>
              <button className="text-button" type="button" onClick={() => goToQuote()}>
                Ask us directly <ArrowRight size={15} />
              </button>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                    >
                      {faq.question}
                      <ChevronDown size={18} />
                    </button>
                    {isOpen && <p>{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="local-service page-shell">
          <div className="service-icon"><Sparkles size={20} /></div>
          <div>
            <span className="eyebrow">A LOCAL SERVICE</span>
            <h2>Need to plan laundry, too?</h2>
            <p>Laundry pickup and delivery may be requested separately through Fresh Fold Altoona. Confirm current service, timing and price directly.</p>
          </div>
          <a className="button button-outline" href="https://www.freshfoldaltoona.com/" target="_blank" rel="noopener noreferrer">
            Visit Fresh Fold <ArrowUpRight size={16} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main page-shell">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true"><House size={19} /></span>
            <span className="brand-name">Turn Key <strong>STR</strong><small>ALTOONA, PENNSYLVANIA</small></span>
          </a>
          <p>Furnished lodging for work trips and extended stays. Private bedrooms; designated household spaces are shared.</p>
          <button className="footer-link" type="button" onClick={() => goToQuote()}>
            Prepare a stay inquiry <ArrowRight size={15} />
          </button>
        </div>
        <div className="footer-bottom page-shell">
          <span>© {new Date().getFullYear()} Turn Key STR</span>
          <span>Altoona, Pennsylvania</span>
          <span>Prototype · No live booking or availability</span>
        </div>
      </footer>
    </>
  );
}

export default App;
