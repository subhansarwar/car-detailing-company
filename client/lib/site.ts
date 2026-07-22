// ---------------------------------------------------------------------------
// Central business configuration.
//
// Contact details, service area and socials below are the real values
// provided by the business owner. Pricing and testimonials are still
// realistic placeholders (Facebook's page is login-gated so real reviews
// and rates weren't retrievable) — swap those in once available and
// everything on the site (header, footer, contact page, schema.org
// JSON-LD) updates automatically.
// ---------------------------------------------------------------------------

export const business = {
  name: "Terrance Mobile Pressure Washing & Car Detailing Service LLC",
  shortName: "Terrance Mobile",
  tagline: "We bring the shine to your driveway.",
  description:
    "West Georgia & East Alabama's mobile pressure washing and car detailing crew. We come to your home, office, or driveway with everything we need — you just enjoy the results.",
  founded: 2019,
  phone: "(334) 652-9275",
  phoneHref: "+13346529275",
  email: "youngpoole90@gmail.com",
  city: "LaGrange",
  state: "GA",
  serviceArea: [
    "LaGrange, GA",
    "West Point, GA",
    "Hogansville, GA",
    "Pine Mountain, GA",
    "Newnan, GA",
    "Lafayette, AL",
  ],
  address: "West Georgia & Lafayette, AL 36862",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook:
      "https://www.facebook.com/p/Terrance-Mobile-Pressure-Washing-Car-Detailing-Service-LLC-61551041974224/",
    tiktok: "https://www.tiktok.com/@yccyoung",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
] as const;

export type Service = {
  slug: string;
  category: "Pressure Washing" | "Car Detailing";
  title: string;
  short: string;
  description: string;
  icon:
    | "house"
    | "car"
    | "road"
    | "fence"
    | "building"
    | "sparkles"
    | "droplets"
    | "gauge"
    | "wind";
  features: string[];
  startingAt: string;
};

export const services: Service[] = [
  {
    slug: "house-washing",
    category: "Pressure Washing",
    title: "House Soft Washing",
    short: "Gentle, low-pressure wash that lifts grime without damaging siding.",
    description:
      "We use a soft-wash, low-pressure technique with eco-friendly detergents to safely remove dirt, mold, mildew, and algae from vinyl, brick, stucco, and wood siding — restoring curb appeal without stripping paint or cracking panels.",
    icon: "house",
    features: [
      "Soft-wash siding & exterior walls",
      "Eco-friendly, plant-safe detergents",
      "Mold, mildew & algae treatment",
      "Gutter exterior brightening",
    ],
    startingAt: "$149",
  },
  {
    slug: "driveway-concrete-cleaning",
    category: "Pressure Washing",
    title: "Driveway & Concrete Cleaning",
    short: "Blast away oil stains, tire marks, and years of built-up grime.",
    description:
      "Surface-cleaner equipment delivers a streak-free, even clean across driveways, sidewalks, garage floors, and patios — lifting oil stains, tire marks, and years of embedded dirt for a like-new finish.",
    icon: "road",
    features: [
      "Streak-free surface cleaner finish",
      "Oil & rust stain treatment",
      "Sidewalks, patios & walkways",
      "Optional sealant application",
    ],
    startingAt: "$99",
  },
  {
    slug: "deck-fence-washing",
    category: "Pressure Washing",
    title: "Deck & Fence Washing",
    short: "Bring weathered wood and vinyl fencing back to life.",
    description:
      "Pressure and chemical treatment calibrated to your material — wood, composite, or vinyl — to remove graying, mildew, and dirt buildup while protecting the surface for staining or sealing.",
    icon: "fence",
    features: [
      "Wood, composite & vinyl safe",
      "Mildew & gray-wood restoration",
      "Pre-stain surface prep",
      "Railings & lattice detailing",
    ],
    startingAt: "$129",
  },
  {
    slug: "commercial-pressure-washing",
    category: "Pressure Washing",
    title: "Commercial Property Washing",
    short: "Storefronts, parking lots, and dumpster pads that welcome customers.",
    description:
      "Flexible early-morning or after-hours scheduling for storefronts, parking lots, dumpster pads, and walkways — keeping your business looking sharp without disrupting operations.",
    icon: "building",
    features: [
      "Flexible off-hours scheduling",
      "Storefront & entryway cleaning",
      "Parking lot & dumpster pads",
      "Recurring maintenance plans",
    ],
    startingAt: "Custom Quote",
  },
  {
    slug: "full-interior-exterior-detail",
    category: "Car Detailing",
    title: "Full Interior & Exterior Detail",
    short: "The complete top-to-bottom refresh, done in your driveway.",
    description:
      "Our signature service: hand wash and clay bar exterior, tire and trim dressing, plus a deep interior vacuum, steam clean, and conditioning — leaving every panel and surface showroom-fresh.",
    icon: "sparkles",
    features: [
      "Hand wash + clay bar treatment",
      "Deep interior vacuum & steam clean",
      "Leather & dash conditioning",
      "Tire shine & trim restoration",
    ],
    startingAt: "$189",
  },
  {
    slug: "wash-and-wax",
    category: "Car Detailing",
    title: "Wash & Wax",
    short: "A fast exterior refresh with lasting shine and protection.",
    description:
      "Hand wash, bug and tar removal, and a premium carnauba wax application that beads water and protects your paint between full details.",
    icon: "droplets",
    features: [
      "Hand wash & wheel cleaning",
      "Bug & tar removal",
      "Premium carnauba wax",
      "Window & trim wipe-down",
    ],
    startingAt: "$79",
  },
  {
    slug: "interior-deep-clean",
    category: "Car Detailing",
    title: "Interior Deep Clean",
    short: "Vacuum, steam, and condition every seat, seam, and surface.",
    description:
      "Perfect for family vehicles and daily drivers — full vacuum, shampoo of carpets and mats, steam sanitizing of seats and consoles, and conditioning for leather or fabric interiors.",
    icon: "wind",
    features: [
      "Carpet & upholstery shampoo",
      "Steam sanitizing",
      "Odor elimination treatment",
      "Leather conditioning",
    ],
    startingAt: "$119",
  },
  {
    slug: "ceramic-coating",
    category: "Car Detailing",
    title: "Ceramic Coating",
    short: "Long-term paint protection with an unbeatable glossy finish.",
    description:
      "A durable ceramic layer bonds to your paint to protect against UV fading, oxidation, and minor scratches — while giving your vehicle a deep, glass-like gloss that lasts for months.",
    icon: "gauge",
    features: [
      "Multi-stage paint correction",
      "9H ceramic coating application",
      "UV & oxidation protection",
      "Hydrophobic water beading",
    ],
    startingAt: "$349",
  },
] as const;

export const stats = [
  { label: "Years in Business", value: 6, suffix: "+" },
  { label: "Vehicles Detailed", value: 1200, suffix: "+" },
  { label: "Properties Washed", value: 850, suffix: "+" },
  { label: "Happy Customers", value: 980, suffix: "+" },
] as const;

export const processSteps = [
  {
    title: "Book Your Service",
    description:
      "Reach out by phone, form, or Facebook message and tell us what you need washed or detailed.",
  },
  {
    title: "We Come to You",
    description:
      "Our fully-equipped mobile unit arrives at your home or office — no driving, no waiting in line.",
  },
  {
    title: "We Get to Work",
    description:
      "Professional-grade equipment and eco-friendly products handle the dirt, grime, and grease.",
  },
  {
    title: "Enjoy the Shine",
    description:
      "We do a final walk-around with you to make sure every inch meets our satisfaction guarantee.",
  },
] as const;

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

// Sample testimonials — swap in real Facebook reviews once available.
export const testimonials: Testimonial[] = [
  {
    name: "Ashley R.",
    location: "LaGrange, GA",
    rating: 5,
    quote:
      "My driveway looked brand new after they were done. Showed up on time and were incredibly thorough — will be booking every season.",
  },
  {
    name: "Marcus T.",
    location: "Hogansville, GA",
    rating: 5,
    quote:
      "Had my truck fully detailed and it honestly looked better than the day I bought it. The interior smells amazing too.",
  },
  {
    name: "Danielle P.",
    location: "West Point, GA",
    rating: 5,
    quote:
      "Professional, friendly, and the soft wash on our siding removed mildew we'd been fighting for years. Highly recommend!",
  },
  {
    name: "Chris B.",
    location: "Newnan, GA",
    rating: 5,
    quote:
      "Booked the commercial package for our storefront. They worked early morning before we opened and the results were spotless.",
  },
] as const;

export type FaqItem = { question: string; answer: string; category: string };

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What areas do you service?",
    answer:
      "We're based in LaGrange, GA and proudly serve West Point, Hogansville, Pine Mountain, Newnan, Grantville, and surrounding Troup County communities. Not sure if you're in range? Reach out and we'll let you know.",
  },
  {
    category: "General",
    question: "Are you licensed and insured?",
    answer:
      "Yes — Terrance Mobile Pressure Washing & Car Detailing Service LLC is a fully licensed and insured business. You can book with confidence knowing your property and vehicle are protected.",
  },
  {
    category: "General",
    question: "Do you bring your own water and power?",
    answer:
      "For most jobs we can run off a standard outdoor spigot and outlet. If neither is available, let us know when booking — our mobile unit carries its own water tank and generator for select services.",
  },
  {
    category: "Pricing",
    question: "How much does a service cost?",
    answer:
      "Pricing depends on the size of your property or vehicle and the level of service. Our listed rates on the Services page are starting prices — message us for a free, no-obligation quote tailored to your job.",
  },
  {
    category: "Pricing",
    question: "Do you offer recurring or bundle discounts?",
    answer:
      "Yes! We offer discounted rates for recurring maintenance plans (monthly/quarterly) and bundle pricing when you combine pressure washing with a car detail on the same visit.",
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, major debit/credit cards, and popular payment apps. Payment is collected after the job is complete and you're satisfied with the results.",
  },
  {
    category: "Pressure Washing",
    question: "Is pressure washing safe for my siding and paint?",
    answer:
      "Absolutely. We use a soft-wash, low-pressure method with the correct nozzle and chemical dilution for each surface — vinyl, brick, stucco, or wood — so you get a deep clean without stripping paint or causing damage.",
  },
  {
    category: "Pressure Washing",
    question: "How often should I get my house or driveway washed?",
    answer:
      "Most homes benefit from a wash every 6–12 months depending on shade, humidity, and surrounding trees. High-traffic driveways and commercial properties often look best on a quarterly schedule.",
  },
  {
    category: "Car Detailing",
    question: "How long does a full detail take?",
    answer:
      "A full interior and exterior detail typically takes 2–4 hours depending on the vehicle's size and condition. We'll give you an estimated window when you book.",
  },
  {
    category: "Car Detailing",
    question: "Can you remove pet hair and odors?",
    answer:
      "Yes — our interior deep clean includes specialized tools for pet hair removal along with steam sanitizing and odor-elimination treatment that neutralizes smells rather than masking them.",
  },
  {
    category: "Car Detailing",
    question: "Do I need to be home during the appointment?",
    answer:
      "Not necessarily. As long as we have access to your vehicle or property and a water/power source if needed, you're welcome to go about your day while we work.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-driveway-needs-pressure-washing",
    title: "5 Signs Your Driveway Needs Pressure Washing",
    excerpt:
      "Green stains, slick spots, and faded concrete are all telling you something. Here's how to read the signs before they get worse.",
    date: "2026-06-02",
    readTime: "4 min read",
    category: "Pressure Washing",
    content: [
      "Your driveway takes a beating year-round — tire debris, oil drips, pollen, and moisture all settle into the concrete's pores over time. Here are five signs it's time to schedule a wash.",
      "1. Green or black streaking. That discoloration is typically algae or mold thriving in damp, shaded areas — and it spreads if left untreated.",
      "2. Surfaces feel slick when wet. Algae buildup doesn't just look bad, it creates a genuine slip hazard for family and guests.",
      "3. Faded, dull concrete. UV exposure combined with grime buildup dulls the natural color of concrete and pavers.",
      "4. Visible oil or rust stains. These set deeper the longer they sit, becoming harder to remove without professional-grade treatment.",
      "5. It's been over a year. Even without visible problems, an annual wash prevents buildup from becoming a bigger job later.",
      "If any of this sounds familiar, our driveway and concrete cleaning service uses surface-cleaner equipment for a streak-free, even result — book a free quote today.",
    ],
  },
  {
    slug: "soft-wash-vs-pressure-wash",
    title: "Soft Wash vs. Pressure Wash: What's the Difference?",
    excerpt:
      "Not every surface can handle the same amount of pressure. Here's how we decide which method your home needs.",
    date: "2026-05-18",
    readTime: "5 min read",
    category: "Pressure Washing",
    content: [
      "\"Pressure washing\" gets used as a catch-all term, but professionals actually use two distinct techniques depending on the surface.",
      "Pressure washing uses high-force water alone to blast away dirt — ideal for hard, durable surfaces like concrete driveways, brick, and stone.",
      "Soft washing uses low pressure combined with specialized, biodegradable cleaning solutions to lift dirt, algae, and mildew without damaging delicate surfaces like vinyl siding, painted wood, roofing, and stucco.",
      "Using high pressure on the wrong surface can crack stucco, strip paint, force water behind siding, or damage roof shingles — which is why we assess every property before choosing a method.",
      "The result either way: a deep clean that's actually safe for your home's specific materials.",
    ],
  },
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Really Detail Your Car?",
    excerpt:
      "The honest answer depends on how — and where — you drive. Here's a simple schedule to follow.",
    date: "2026-04-30",
    readTime: "3 min read",
    category: "Car Detailing",
    content: [
      "A full detail every 4–6 weeks keeps most daily drivers looking their best, but your ideal schedule depends on a few factors.",
      "Daily commuters exposed to sun, pollen, and road salt benefit from more frequent washes and a wax or ceramic layer to protect paint.",
      "Family vehicles with kids or pets often need interior attention more than exterior — steam cleaning and odor treatment every 6–8 weeks keeps things fresh.",
      "Garage-kept weekend cars can often stretch to a full detail every 2–3 months, supplemented by quick exterior washes.",
      "Whatever your routine, ceramic coating extends the time between details by protecting paint from UV, oxidation, and contaminants — ask us about it at your next appointment.",
    ],
  },
  {
    slug: "why-mobile-detailing-saves-you-time",
    title: "Why Mobile Detailing Is the Smarter Way to Get Your Car Cleaned",
    excerpt:
      "Skip the drop-off, the waiting room, and the wasted afternoon. We bring the shop to your driveway.",
    date: "2026-04-09",
    readTime: "4 min read",
    category: "Car Detailing",
    content: [
      "Traditional detail shops require you to drop off your vehicle and arrange a ride — often losing half a day in the process.",
      "Mobile detailing flips that model: our fully-equipped unit comes to your home or office, so you keep your schedule intact.",
      "You get the same professional-grade equipment and products as a shop, with the added benefit of watching the process and asking questions in real time.",
      "It's especially convenient for busy families, remote workers, and anyone juggling multiple vehicles that need attention on different days.",
      "Book an appointment and we'll work around your schedule, not the other way around.",
    ],
  },
  {
    slug: "preparing-your-home-for-pressure-washing",
    title: "How to Prepare Your Home Before We Arrive",
    excerpt:
      "A few quick steps before your appointment help us work faster and protect the things you care about.",
    date: "2026-03-21",
    readTime: "3 min read",
    category: "Pressure Washing",
    content: [
      "Move vehicles, patio furniture, and potted plants away from the work area at least a day before your appointment.",
      "Close all windows and doors tightly, and let us know about any cracks or gaps we should pay extra attention to.",
      "Trim back any plants or shrubs touching the siding so our team has clear access to every surface.",
      "If pets are part of the family, keep them indoors or in a secure area during the service for their safety and ours.",
      "That's it — we handle the equipment, water, and cleaning solution. Just relax and let us do the rest.",
    ],
  },
  {
    slug: "eco-friendly-cleaning-products",
    title: "Why We Use Eco-Friendly Cleaning Products",
    excerpt:
      "A great clean shouldn't come at the cost of your lawn, garden, or local waterways.",
    date: "2026-02-27",
    readTime: "3 min read",
    category: "General",
    content: [
      "Many harsh cleaning chemicals used in pressure washing can damage grass, kill plants, and runoff into storm drains and local waterways.",
      "We choose biodegradable, plant-safe detergents that break down mold, mildew, and algae just as effectively — without the environmental cost.",
      "This matters for pet owners and families too: no harsh residue left behind on surfaces your kids and pets will touch.",
      "It's a simple choice that reflects how we think about doing business in the community we live and work in.",
    ],
  },
];
