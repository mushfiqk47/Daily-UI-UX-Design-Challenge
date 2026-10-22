export type Platform = "Mobile" | "Desktop"
export type TaskType = "Form" | "Card" | "Widget" | "Empty state" | "Onboarding" | "Settings" | "Hero" | "Short flow"

export const TASK_TYPES: TaskType[] = [
  "Form",
  "Card",
  "Widget",
  "Empty state",
  "Onboarding",
  "Settings",
  "Hero",
  "Short flow",
]

export interface TaskSeed {
  type: TaskType
  platform: Platform
  deliverable: string
  goal: string
  mustHaves: string[]
  success: string
  pains: string
  quote: string
}

export interface ProductSeed {
  name: string
  industry: string
  description: string
  value: string
  segment: string
  behaviors: string
  role: string
  age: [number, number]
  goals: string
  brand: string
  tones: {
    adjectives: string
    note: string
  }[]
  tasks: TaskSeed[]
}

export const PRODUCTS: ProductSeed[] = [
  {
    name: "Borrowbench",
    industry: "Community / Sharing",
    description:
      "A membership app for neighborhood tool libraries, letting residents borrow drills, ladders and pressure washers instead of buying them.",
    value:
      "Get the right tool for a weekend project without the cost or the storage.",
    segment:
      "Renters and first-time homeowners, 25–45, in dense urban neighborhoods with little storage space.",
    behaviors:
      "Borrow 1–2 times a month for single projects; return at a staffed shelf, phone in one hand, tool in the other.",
    role: "renting UX researcher",
    age: [26, 42],
    goals:
      "Finish small home projects cheaply and keep a clean borrowing record to reserve popular items.",
    brand:
      "Brand color Workshop Orange (#E8590C) is reserved for actions, never errors.",
    tones: [
      {
        adjectives: "Sturdy, neighborly",
        note: "Pegboard order, not a corporate dashboard - chunky type, warm off-white surfaces.",
      },
      {
        adjectives: "Practical, friendly",
        note: "Hand-labeled hardware-store feel with clear utilitarian iconography.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          'The "Return & Condition Check" screen for a borrowed cordless drill kit.',
        goal: "Confirm all parts, flag damage and receive an instant return receipt in under 60 seconds.",
        mustHaves: [
          "Item header with due date and on-time / overdue status",
          "Parts checklist (drill, 2 batteries, charger, bit case)",
          '"Report an issue" with photo upload and preset tags',
          "Missing-part warning that explains the fee before submit",
          "Loading, success receipt and failed-upload retry states",
        ],
        success:
          "One-thumb reachable primary action; no surprise fees; reporting damage feels protective, not accusatory.",
        pains:
          "Unsure whether every part is accounted for; fears being blamed for prior wear; paper forms slow returns.",
        quote: "I just want proof I brought it back the way I got it.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "An item detail card for a 24ft extension ladder, including the reservation module.",
        goal: "Help a member decide if the tool fits the job and reserve the next open slot.",
        mustHaves: [
          "Photo, specs that matter (reach, weight, car-fit note)",
          "Availability strip for the next 14 days",
          "Waitlist state when fully booked",
          "Safety-briefing requirement badge",
          "Reservation confirmed state",
        ],
        success:
          "A first-timer can tell within 5 seconds whether the ladder fits their car and their date.",
        pains:
          "Specs are written for contractors; never sure if bulky items fit a hatchback; waitlists feel like a black box.",
        quote: "Just tell me if it fits in my car and when I can get it.",
      },
    ],
  },
  {
    name: "Tidewell",
    industry: "Outdoors / Safety",
    description:
      "A tide, wind and swell planner built specifically for recreational sea kayakers.",
    value: "Turns five weather apps into one clear go / no-go paddling window.",
    segment:
      "Intermediate sea kayakers, 30–60, paddling coastal routes on weekends.",
    behaviors:
      "Check conditions the night before and again at the launch, often with gloves on and patchy signal.",
    role: "weekend sea kayaker and secondary-school teacher",
    age: [32, 58],
    goals:
      "Pick safe launch windows quickly and let someone onshore know the plan.",
    brand:
      "Must use the existing Tidewell tide-curve illustration style; no stock weather icons.",
    tones: [
      {
        adjectives: "Calm, nautical",
        note: "Chart-paper precision with generous breathing room; data first, decoration last.",
      },
      {
        adjectives: "Crisp, trustworthy",
        note: "Feels like a well-maintained marine instrument, not a lifestyle app.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Paddle Window" dashboard widget for a saved launch spot.',
        goal: "Show at a glance the best 3-hour window today and why.",
        mustHaves: [
          "Tide curve with the recommended window highlighted",
          "Wind speed/direction and swell height summary",
          "Go / caution / no-go verdict with a plain-language reason",
          "Stale data state (last updated 3h ago, offline)",
          "Loading skeleton",
        ],
        success:
          "Verdict readable at arm\u2019s length in sunlight; the reason is never hidden behind a tap.",
        pains:
          "Cross-referencing tide and wind apps; numbers without context; no idea if data is current at the beach.",
        quote:
          "I don\u2019t need more data. I need to know if it\u2019s smart to go.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          'A "Float Plan" share form sent to an onshore contact before launching.',
        goal: "Create and send a float plan in under a minute.",
        mustHaves: [
          "Route picker (saved routes) and expected return time",
          "Group size and boat color fields",
          "Emergency contact selection from phone contacts",
          "Validation error for return time in the past",
          'Sent confirmation with "I\u2019m back safe" reminder',
        ],
        success:
          "Fewer than 6 required inputs; smart defaults from the last trip; works offline and queues the send.",
        pains:
          "Forgets to tell anyone; typing long details at a windy launch; unsure if the message actually went out.",
        quote: "If something goes wrong, someone needs to know where to look.",
      },
    ],
  },
  {
    name: "Ledgerleaf",
    industry: "Fintech / Freelance",
    description:
      "Bookkeeping and tax set-aside software for freelance illustrators and designers.",
    value:
      "Know what you can actually spend after taxes, every time a client pays.",
    segment:
      "Self-employed creatives, 24–40, in their first three years of freelancing.",
    behaviors:
      "Avoid finance tasks until deadlines; check money on desktop between client projects.",
    role: "freelance editorial illustrator",
    age: [24, 39],
    goals:
      "Stop dreading tax season and keep receipts organized without a spreadsheet.",
    brand:
      'Product voice is warm and jargon-free; never use the words "liability" or "accrual" in UI copy.',
    tones: [
      {
        adjectives: "Reassuring, editorial",
        note: "Like a well-designed magazine page that happens to hold numbers.",
      },
      {
        adjectives: "Light, precise",
        note: "Airy layouts, tabular numerals, one confident accent color.",
      },
    ],
    tasks: [
      {
        type: "Empty state",
        platform: "Desktop",
        deliverable:
          'The empty "Receipt Inbox" view a new user sees, plus the first-upload moment.',
        goal: "Get a brand-new user to add their first receipt within the session.",
        mustHaves: [
          "Empty state explaining what the inbox does and why it matters",
          'Drag-and-drop zone plus "forward by email" address',
          "Uploading progress state",
          "Unreadable file error with fix guidance",
          "First receipt success state",
        ],
        success:
          "Empty state teaches without lecturing; first upload takes one action; error copy never blames the user.",
        pains:
          "Shoebox of crumpled receipts; overwhelm at blank finance tools; doesn\u2019t know what counts as deductible.",
        quote:
          "I became an illustrator so I wouldn\u2019t have to think about this stuff.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'A "Tax Set-Aside" dashboard widget for the current quarter.',
        goal: "Show how much to move to savings now and how the user is tracking against the quarterly estimate.",
        mustHaves: [
          "Amount to set aside from the latest payment",
          "Progress toward the quarterly estimate",
          "Due-date countdown",
          '"Behind" warning state with a recovery suggestion',
          "No-income-yet empty state",
        ],
        success:
          "The one number that matters is unmistakable; status works without color alone.",
        pains:
          "Spends money that was owed in tax; surprise bills each quarter; estimates feel like guesswork.",
        quote: "Just tell me what\u2019s mine to spend.",
      },
    ],
  },
  {
    name: "Crumbline",
    industry: "Food / Hobby",
    description:
      "A companion app for home bakers that tracks sourdough starter health and feeding schedules.",
    value: "Keep your starter alive and predictable, even on a chaotic week.",
    segment: "Hobby bakers, 22–50, who started baking in the last two years.",
    behaviors:
      "Interact in the kitchen with floury hands, usually morning and evening around feedings.",
    role: "hobby baker and hospital pharmacist",
    age: [25, 48],
    goals:
      "Bake consistent loaves and stop accidentally neglecting the starter.",
    brand:
      "Illustrations are hand-drawn ink; UI must leave room for them, not compete.",
    tones: [
      {
        adjectives: "Warm, tactile",
        note: "Flour-dusted neutrals, rounded forms, a little bit of humor.",
      },
      {
        adjectives: "Cozy, confident",
        note: "Recipe-card typography with a modern, airy grid.",
      },
    ],
    tasks: [
      {
        type: "Onboarding",
        platform: "Mobile",
        deliverable: 'Onboarding step 2 of 4: "Name & set up your starter".',
        goal: "Capture starter name, flour type and feeding ratio so reminders can be personalized.",
        mustHaves: [
          "Starter name field with playful suggestions",
          "Flour type selector (visual chips)",
          'Feeding ratio picker with a "not sure" option',
          "Progress indicator and skip affordance",
          "Validation for an empty name",
        ],
        success:
          "Completable in 30 seconds; beginners never feel quizzed on terms they don\u2019t know.",
        pains:
          'Doesn\u2019t know what "100% hydration" means; most apps assume expertise; onboarding feels endless.',
        quote: "I named her Doughlores. I just want her to survive.",
      },
      {
        type: "Settings",
        platform: "Mobile",
        deliverable: 'The "Feeding Reminders" settings panel.',
        goal: "Let bakers set reminder times that match their routine, including a vacation mode.",
        mustHaves: [
          "Morning/evening reminder time pickers",
          "Fridge (slow) mode toggle that adjusts frequency",
          "Vacation mode with return date",
          "Notifications-disabled-at-OS-level warning",
          "Saved confirmation toast",
        ],
        success:
          "Each setting explains its effect in plain words; the disabled-notifications state offers a one-tap fix.",
        pains:
          "Reminders arrive at the wrong time; forgets when traveling; can\u2019t tell if notifications are even on.",
        quote: "Remind me when I\u2019m actually in the kitchen, not at 6am.",
      },
    ],
  },
  {
    name: "Halfshift",
    industry: "Healthcare / Workforce",
    description:
      "A shift-swap marketplace for nurses within a single hospital network.",
    value:
      "Trade shifts in minutes without the group-chat chaos or manager bottleneck.",
    segment: "Registered nurses, 23–55, working rotating 12-hour shifts.",
    behaviors:
      "Use the app on breaks or right after a shift, tired, often in low light.",
    role: "ICU registered nurse",
    age: [26, 50],
    goals: "Protect personal time and swap fairly without awkward negotiation.",
    brand:
      "Must follow the hospital network\u2019s accessibility policy: AAA contrast for body text.",
    tones: [
      {
        adjectives: "Calm, efficient",
        note: "Quiet surfaces, strong hierarchy, nothing that feels like a game.",
      },
      {
        adjectives: "Supportive, clear",
        note: "Human copy, clinical clarity, generous spacing for tired eyes.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "The swap request review and confirmation screen.",
        goal: "Let a nurse review a proposed swap, see its impact and accept or decline confidently.",
        mustHaves: [
          'Side-by-side "you give / you get" shift comparison',
          "Overtime or rest-rule conflict warning",
          "Manager approval requirement indicator",
          "Pending approval state",
          "Declined-by-manager state with reason",
        ],
        success:
          "Conflicts are impossible to miss; the decision takes under 20 seconds.",
        pains:
          "Accidentally triggering overtime; unclear approval status; swaps lost in text threads.",
        quote:
          "After 12 hours, I can\u2019t do math. Just show me if it breaks a rule.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: 'A "My Next 7 Days" schedule widget on the home screen.',
        goal: "Show upcoming shifts, pending swaps and required rest at a glance.",
        mustHaves: [
          "Day strip with day/night shift distinction",
          "Pending swap badge on affected days",
          "Minimum rest gap indicator",
          "No-shifts-scheduled empty state",
          "Sync error state",
        ],
        success:
          "Day vs night shifts distinguishable without color; works in dark mode at low brightness.",
        pains:
          "Schedule lives in three places; misreading night shifts; not knowing a swap was approved.",
        quote: "I want to glance once and know my week.",
      },
    ],
  },
  {
    name: "Stoop",
    industry: "Civic / Community",
    description:
      "A platform that manages community garden plots, waitlists and harvest sharing for city parks departments.",
    value:
      "Makes getting a garden plot fair, transparent and a little less of a mystery.",
    segment: "Apartment dwellers, 28–70, without private outdoor space.",
    behaviors:
      "Check in seasonally; many are older residents with lower digital confidence.",
    role: "retired transit worker on a plot waitlist",
    age: [55, 72],
    goals:
      "Get a plot near home and understand where they stand without calling the parks office.",
    brand:
      "City brand requires the municipal typeface (a humanist sans) and the parks green.",
    tones: [
      {
        adjectives: "Earthy, civic",
        note: "Public-service clarity with the softness of a garden notice board.",
      },
      {
        adjectives: "Plainspoken, warm",
        note: "Large type, honest copy, organic but orderly shapes.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: 'The "Your Waitlist Status" card for a specific garden.',
        goal: "Explain the resident\u2019s position, expected wait and what they can do now.",
        mustHaves: [
          "Queue position and estimated season",
          "How the queue works (expandable)",
          "Option to join a second garden\u2019s waitlist",
          "Plot offered state with 7-day accept deadline",
          "Removed-from-list state with reason",
        ],
        success:
          "A 70-year-old can read and understand it without help; no anxiety-inducing ambiguity.",
        pains:
          "No idea if the waitlist is moving; misses offer emails; feels the system is unfair.",
        quote: "I\u2019ve been on this list two years. Am I even still on it?",
      },
    ],
  },
  {
    name: "Gridkeep",
    industry: "Energy / Smart home",
    description:
      "A monitoring app for homeowners with rooftop solar and a home battery.",
    value:
      "See exactly where your energy comes from and how long you\u2019d last in an outage.",
    segment: "Homeowners, 35–65, who recently installed solar plus storage.",
    behaviors:
      "Check daily out of curiosity; urgently during storms and grid outages.",
    role: "mechanical engineer and new solar owner",
    age: [36, 63],
    goals: "Maximize self-consumption and feel prepared for outages.",
    brand:
      "Chart colors are fixed: solar amber, battery teal, grid slate. Do not reassign.",
    tones: [
      {
        adjectives: "Technical, optimistic",
        note: "Instrument-panel precision with a sunny accent palette.",
      },
      {
        adjectives: "Clean, energetic",
        note: "Bold numerals, purposeful motion, ample negative space.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Energy Today" home widget showing solar, battery and grid flow.',
        goal: "Make the current energy flow understandable in one glance.",
        mustHaves: [
          "Live flow between solar, battery, home and grid",
          "Battery percentage and estimated backup hours",
          "Today\u2019s self-powered percentage",
          "Inverter offline error state",
          "Night state (no solar)",
        ],
        success:
          "Flow direction understood without a legend; numbers readable at a glance.",
        pains:
          "Installer app is cluttered; can\u2019t tell if the battery is charging; unclear outage readiness.",
        quote: "Am I running on the sun right now or paying the utility?",
      },
      {
        type: "Empty state",
        platform: "Mobile",
        deliverable:
          'The "Grid Outage Mode" screen shown when the home loses grid power.',
        goal: "Reassure and guide the homeowner to stretch battery life during an outage.",
        mustHaves: [
          "Clear outage banner with start time",
          "Estimated remaining backup time",
          "Suggested loads to turn off with savings in hours",
          "Battery critical (<10%) state",
          "Grid restored success state",
        ],
        success:
          "Calming, not alarming; the most impactful action is obvious; works offline.",
        pains:
          "Panic during storms; doesn\u2019t know which appliances drain fastest; no outage guidance.",
        quote: "The lights are on, but for how long?",
      },
    ],
  },
  {
    name: "Verso",
    industry: "Marketplace / Education",
    description:
      "A campus-only marketplace for buying and selling used textbooks between students.",
    value:
      "Buy the exact edition you need for half price from someone on your campus.",
    segment:
      "University students, 18–26, on tight budgets at the start of each term.",
    behaviors:
      "Shop in bursts during the first two weeks of term; sell at term\u2019s end; heavily mobile.",
    role: "second-year nursing student",
    age: [19, 24],
    goals: "Spend less on books and recoup money by selling last term\u2019s.",
    brand:
      "University partnerships require the Verso logo to stay separate from any school crest.",
    tones: [
      {
        adjectives: "Energetic, scrappy",
        note: "Bold color blocking, sticker-like tags, playful but legible.",
      },
      {
        adjectives: "Bright, honest",
        note: "Clear pricing, friendly microcopy, no marketplace clutter.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable: 'The "List a Textbook" form with ISBN barcode scan.',
        goal: "Get a book listed in under 90 seconds with accurate edition and condition.",
        mustHaves: [
          "Barcode scan with manual ISBN fallback",
          "Auto-filled title/edition preview to confirm",
          "Condition selector with visual examples",
          "Suggested price based on campus listings",
          "ISBN-not-found error and listing-live success state",
        ],
        success:
          "Most fields auto-fill; condition is described consistently; price suggestion feels trustworthy.",
        pains:
          'Typing ISBNs; unsure how to price; buyers dispute "good condition" descriptions.',
        quote:
          "If it takes longer than texting a friend, I\u2019m not doing it.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "A textbook listing card plus its expanded detail panel.",
        goal: "Help a buyer confirm it\u2019s the right edition and arrange pickup.",
        mustHaves: [
          "Edition match indicator against the course list",
          "Condition photos and notes",
          "Seller campus and pickup spot",
          '"Wrong edition" warning state',
          "Sold / reserved state",
        ],
        success:
          "Edition confidence is instant; price comparison vs bookstore is visible but not shouty.",
        pains: "Buying the wrong edition; vague condition; sketchy meetups.",
        quote: "Is this the one my professor actually wants?",
      },
    ],
  },
  {
    name: "Kinroll",
    industry: "Healthcare / Family",
    description:
      "A shared coordination app for siblings caring for an aging parent at home.",
    value:
      "Everyone knows who\u2019s doing what for Mom - no more dropped balls or guilt trips.",
    segment:
      "Adult children, 40–60, coordinating care across cities and time zones.",
    behaviors:
      "Quick check-ins between work tasks; anxious spikes after health events.",
    role: "project manager and eldest daughter",
    age: [41, 58],
    goals:
      "Share the care load fairly and never miss a medication or appointment.",
    brand:
      "Must avoid clinical hospital aesthetics; brand palette is muted plum and cream.",
    tones: [
      {
        adjectives: "Gentle, dependable",
        note: "Soft surfaces, steady structure, empathetic copy.",
      },
      {
        adjectives: "Warm, organized",
        note: "Feels like a well-kept family notebook.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Today\u2019s Medications" widget shared across the family.',
        goal: "Show which doses were given, by whom, and what\u2019s next.",
        mustHaves: [
          "Timeline of doses with given / due / missed status",
          "Who logged each dose",
          'One-tap "Mark given" with undo',
          "Missed dose alert state",
          "All-done-for-today state",
        ],
        success:
          "Missed doses cannot be overlooked; status never relies on color alone.",
        pains:
          "Double-dosing risk; unclear who handled what; anxiety when away.",
        quote:
          "I\u2019m 400 miles away. I just need to know she took her pills.",
      },
      {
        type: "Onboarding",
        platform: "Mobile",
        deliverable: 'Onboarding step: "Invite your care circle".',
        goal: "Get the organizer to invite at least one sibling with a defined role.",
        mustHaves: [
          "Invite via text or email",
          "Role selection (lead, helper, view-only)",
          "Preview of what invitees will see",
          "Invite pending state",
          "Invalid phone/email error",
        ],
        success:
          "Roles are understandable without a help article; inviting feels collaborative, not bossy.",
        pains:
          "Siblings resist new apps; unequal effort breeds resentment; privacy worries.",
        quote: "I can\u2019t keep being the only one who knows everything.",
      },
    ],
  },
  {
    name: "Benchmark",
    industry: "B2B / Life sciences",
    description: "A lightweight sample-tracking system for small biotech labs.",
    value:
      "Find any sample in any freezer in seconds, with a full chain of custody.",
    segment:
      "Lab technicians and research associates, 24–45, at 10–80 person biotechs.",
    behaviors:
      "Use a shared lab desktop, often wearing gloves; quick lookups before freezer runs.",
    role: "research associate",
    age: [25, 40],
    goals: "Locate and log samples quickly and keep audits painless.",
    brand:
      "Design system uses an 8px grid and IBM Plex; extend, don\u2019t replace.",
    tones: [
      {
        adjectives: "Precise, utilitarian",
        note: "Dense but calm data display, lab-label inspired details.",
      },
      {
        adjectives: "Clinical, modern",
        note: "High-clarity grids with one vivid signal color.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "An interactive freezer box map component (9×9 grid) with a sample detail panel.",
        goal: "Let a technician locate, check out and return samples in a box.",
        mustHaves: [
          "9×9 grid with occupied / empty / checked-out cells",
          "Search highlight for matching samples",
          "Sample detail panel (ID, owner, date, freeze-thaw count)",
          "Conflict state: slot already occupied",
          "Box full state",
        ],
        success:
          "Grid is keyboard-navigable; cell states are distinguishable in grayscale.",
        pains: "Handwritten box maps; samples misplaced; audits take days.",
        quote:
          "If I can\u2019t find it in 30 seconds, the sample is warming up.",
      },
    ],
  },
  {
    name: "Pawpost",
    industry: "Pets / Services",
    description:
      "A booking and reporting app connecting dog owners with vetted neighborhood walkers.",
    value: "Know exactly how your dog\u2019s walk went, every single time.",
    segment: "Working professionals, 27–45, with dogs and long office days.",
    behaviors: "Check reports during work breaks; book recurring walks weekly.",
    role: "architect and owner of an anxious rescue greyhound",
    age: [28, 44],
    goals: "Trust their walker and know their dog is happy and safe.",
    brand: "Photography of real dogs only; no cartoon mascots in product UI.",
    tones: [
      {
        adjectives: "Playful, trustworthy",
        note: "Bright but grounded; joy in the photos, calm in the UI.",
      },
      {
        adjectives: "Friendly, polished",
        note: "Rounded cards, crisp data, a touch of personality.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "The post-walk report card an owner receives.",
        goal: "Summarize the walk in a way that builds trust and invites a quick reaction.",
        mustHaves: [
          "Route map thumbnail, duration and distance",
          "Bathroom checkboxes and mood tag",
          "Walker note and photo",
          "Incident flag state (e.g. pulled leash, minor scrape)",
          "Report delayed state",
        ],
        success:
          "Readable in 5 seconds; incidents are transparent without being alarming.",
        pains:
          "Generic reports; no proof the walk happened; incident news by surprise.",
        quote: "A photo and a note - that\u2019s all it takes for me to relax.",
      },
    ],
  },
  {
    name: "Lumen Lane",
    industry: "Entertainment / Membership",
    description: "A membership app for a three-screen independent cinema.",
    value: "Members get the best seats and the stories behind every film.",
    segment: "Film lovers, 25–65, who visit the cinema 2–4 times a month.",
    behaviors: "Book on phone the day of; care deeply about seat choice.",
    role: "museum curator and cinema member",
    age: [29, 61],
    goals:
      "Grab their favorite seat quickly and discover repertory screenings.",
    brand:
      "Cinema identity is ink black, cream and a single marquee red; typographic logo only.",
    tones: [
      {
        adjectives: "Cinematic, intimate",
        note: "Dark, velvety surfaces with editorial serif headlines.",
      },
      {
        adjectives: "Elegant, nostalgic",
        note: "Ticket-stub details with modern restraint.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "The seat selection screen for a 92-seat auditorium.",
        goal: "Let members pick seats quickly, with member-only seats clearly marked.",
        mustHaves: [
          "Seat map with available / taken / member / accessible seats",
          "Selected seats summary with price",
          "Screen position and row labels",
          "Seat-just-taken conflict error",
          "Sold-out state with waitlist",
        ],
        success:
          "Seats are tappable at 44px equivalent with zoom; accessible seats are first-class.",
        pains:
          "Tiny seat maps; losing seats mid-checkout; can\u2019t tell sightlines.",
        quote: "Row F, seat 7. Every time. Don\u2019t make me hunt.",
      },
    ],
  },
  {
    name: "Ferrous",
    industry: "Fitness / Strength",
    description: "A training log built for powerlifters and barbell athletes.",
    value: "Logs a set in two taps and tells you what to lift next.",
    segment: "Recreational strength athletes, 20–45, training 3–5 days a week.",
    behaviors:
      "Use the phone between sets with chalky hands, sweaty screens and short rest timers.",
    role: "amateur powerlifter and software tester",
    age: [22, 40],
    goals: "Progress steadily and stop wasting rest time on math.",
    brand:
      "Strict dark UI; the brand accent is molten orange used only for PRs and primary actions.",
    tones: [
      {
        adjectives: "Raw, focused",
        note: "Industrial type, high contrast, oversized numerals.",
      },
      {
        adjectives: "Bold, minimal",
        note: "Gym-floor legibility; nothing decorative.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "A plate calculator component used during a set.",
        goal: "Show exactly which plates to load per side for a target weight.",
        mustHaves: [
          "Target weight input with kg/lb toggle",
          "Visual barbell with color-coded plates per side",
          "Bar weight and available-plate settings",
          "Unloadable weight error with nearest options",
          "Warm-up set suggestions",
        ],
        success:
          "Readable from 1 meter away; adjusts with one thumb; plate colors match competition standards.",
        pains:
          "Mental math mid-workout; wrong plates at commercial gyms; switching units.",
        quote: "I have 90 seconds. Tell me what goes on the bar.",
      },
    ],
  },
  {
    name: "Chorus",
    industry: "Music / Education",
    description:
      "A practice app for amateur choir singers to learn their individual vocal part.",
    value: "Hear your part, at your pace, until you nail it before rehearsal.",
    segment:
      "Community choir members, 30–75, most of whom don\u2019t read music fluently.",
    behaviors:
      "Practice at home 10–20 minutes, often the night before rehearsal.",
    role: "community choir alto and primary school librarian",
    age: [34, 70],
    goals: "Show up to rehearsal confident in their part.",
    brand:
      "Must include score excerpts; typography must pair with engraved music notation.",
    tones: [
      {
        adjectives: "Harmonious, encouraging",
        note: "Soft paper tones, generous spacing, gentle motion.",
      },
      {
        adjectives: "Classic, approachable",
        note: "Concert-program elegance minus the stuffiness.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "The part-practice player screen for one song.",
        goal: "Let singers loop a tricky passage and balance their part against the full choir.",
        mustHaves: [
          "Part solo / full-mix balance slider",
          "Loop section selector on the score",
          "Tempo control (50–100%)",
          "Audio loading and buffering state",
          "Offline-downloaded indicator",
        ],
        success:
          "Controls usable by a 70-year-old; looping a bar range takes two gestures.",
        pains:
          "Can\u2019t read notation; rehearsal recordings are full-choir mush; tiny controls.",
        quote: "If I could just hear the altos alone, I\u2019d have it.",
      },
    ],
  },
  {
    name: "Mortar",
    industry: "B2B / Construction",
    description:
      "Permit and inspection tracking for small residential contractors.",
    value: "Never lose a day on site because an inspection wasn\u2019t booked.",
    segment: "Owner-operators of 2–15 person renovation companies.",
    behaviors:
      "Plan at a desktop early morning, check on phone from job sites.",
    role: "owner of a five-person renovation company",
    age: [33, 58],
    goals: "Keep every job moving and avoid failed inspections.",
    brand:
      "High-visibility yellow is the brand; must pass contrast when used with dark text only.",
    tones: [
      {
        adjectives: "Rugged, organized",
        note: "Job-site signage meets a tidy spreadsheet.",
      },
      {
        adjectives: "Direct, no-nonsense",
        note: "Short labels, strong grid, status-forward.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: 'The "Permits Needing Attention" dashboard widget.',
        goal: "Surface which permits or inspections are blocking work this week.",
        mustHaves: [
          "List grouped by urgency (overdue / this week / upcoming)",
          "Job address and inspection type per row",
          "Quick action: book inspection",
          "Failed inspection state with notes",
          "All-clear empty state",
        ],
        success:
          "Most urgent item findable in 3 seconds; scannable at 1280px wide.",
        pains:
          "Tracking via sticky notes; missed inspection windows; city portals are painful.",
        quote: "One missed inspection costs me a crew-day. That\u2019s rent.",
      },
    ],
  },
  {
    name: "Steadfare",
    industry: "Mobility / Transit",
    description:
      "A monthly subscription bus pass for a regional rural transit network.",
    value: "One pass, every route in the county, no exact change needed.",
    segment:
      "Rural commuters, 18–70, many relying on the bus for work and medical visits.",
    behaviors: "Low-end Android phones, prepaid data, intermittent signal.",
    role: "care-home support worker without a car",
    age: [21, 62],
    goals:
      "Pay for transport predictably and never get stuck without a valid pass.",
    brand:
      "County transit green and white; must include the accessibility symbol on reduced fares.",
    tones: [
      {
        adjectives: "Dependable, plain",
        note: "Public-utility clarity; nothing that looks like an ad.",
      },
      {
        adjectives: "Friendly, sturdy",
        note: "Big tappable elements, honest pricing, calm color.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "The monthly pass checkout form.",
        goal: "Purchase a pass quickly with the right fare type and payment method.",
        mustHaves: [
          "Fare type selector (standard, student, senior, reduced) with eligibility hints",
          "Start date picker",
          "Payment: card, bank transfer, or pay-in-store code",
          "Card declined error with alternatives",
          "Pass activated success state",
        ],
        success:
          "Works on a 360px screen; total cost never surprises; an unbanked rider can complete it.",
        pains:
          "No credit card; unsure about reduced-fare eligibility; spotty signal mid-payment.",
        quote: "I can\u2019t afford to miss my shift because an app froze.",
      },
    ],
  },
  {
    name: "Saltbox Heat",
    industry: "E-commerce / DTC",
    description:
      "A small-batch hot sauce brand selling seasonal subscription boxes online.",
    value:
      "Four rare, farm-sourced sauces every season, made in batches of 300.",
    segment: "Food enthusiasts, 25–45, who buy gifts and follow chefs online.",
    behaviors:
      "Arrive from Instagram on desktop and mobile; decide within 10 seconds of landing.",
    role: "line cook and home hot-sauce collector",
    age: [26, 41],
    goals: "Discover genuinely interesting sauces, not supermarket rebrands.",
    brand: "Hand-painted label artwork must appear; brand red is #C1272D.",
    tones: [
      {
        adjectives: "Bold, crafty",
        note: "Big expressive type, label textures, confident color.",
      },
      {
        adjectives: "Fiery, editorial",
        note: "Magazine-style layout with full-bleed product photography.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable: "The landing-page hero section announcing the Autumn Box.",
        goal: "Convert curious Instagram visitors into subscribers or waitlist sign-ups.",
        mustHaves: [
          "Headline, supporting line and primary CTA",
          "Box contents preview (4 sauces, heat levels)",
          "Batch scarcity indicator (e.g. 112 of 300 left)",
          "Sold-out variant with waitlist email capture",
          "Email validation error and success state",
        ],
        success:
          "Value is clear in 5 seconds; scarcity feels honest, not manipulative.",
        pains:
          'Generic "craft" brands; unclear heat levels; fear of subscription traps.',
        quote: "Show me something I can\u2019t buy at the grocery store.",
      },
    ],
  },
  {
    name: "Relaybook",
    industry: "B2B / DevTools",
    description:
      "An on-call handoff notebook for site reliability engineering teams.",
    value:
      "No incident context lost between shifts - handoffs in 5 minutes, not 30.",
    segment:
      "SRE and platform engineers, 25–45, at 50–500 person software companies.",
    behaviors:
      "Evaluate tools on desktop after a painful incident; skeptical of marketing.",
    role: "senior site reliability engineer",
    age: [27, 44],
    goals: "Reduce on-call stress and repeated incident investigation.",
    brand: "Dark-first brand; monospace accents allowed only for code or data.",
    tones: [
      {
        adjectives: "Technical, candid",
        note: "Real product UI over illustration; zero buzzwords.",
      },
      {
        adjectives: "Sharp, calm",
        note: "Terminal-inspired details inside a refined layout.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable: "The marketing site hero section.",
        goal: "Get skeptical engineers to start a free trial or view a live demo.",
        mustHaves: [
          "Headline that names the problem precisely",
          "Product UI snippet showing a real handoff note",
          "Primary (start trial) and secondary (live demo) CTA",
          "Integration logos (PagerDuty, Slack, Grafana)",
          "Loading state for the animated product preview",
        ],
        success:
          "An engineer understands what it does without scrolling; no stock illustrations.",
        pains:
          "Hype-heavy landing pages; unclear integrations; demo-gated products.",
        quote: "Show me the product. Skip the adjectives.",
      },
    ],
  },
  {
    name: "Clearwell",
    industry: "Health / Home",
    description:
      "A water testing service for households on private wells, with mail-in kits.",
    value: "Lab-grade results explained in plain language, with next steps.",
    segment: "Rural homeowners, 30–70, responsible for their own well water.",
    behaviors:
      "Open results once, carefully, often worried; share with spouse or plumber.",
    role: "new rural homeowner and parent of an infant",
    age: [29, 46],
    goals: "Know if the water is safe for the family and what to fix.",
    brand:
      "Avoid alarming reds for minor issues; brand palette is slate, sky and sand.",
    tones: [
      {
        adjectives: "Clear, reassuring",
        note: "Medical-report clarity with a human, explanatory voice.",
      },
      {
        adjectives: "Fresh, grounded",
        note: "Airy layout, tonal blues, precise numbers.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "The test results summary screen for a single kit.",
        goal: "Explain overall safety and the one or two results that need action.",
        mustHaves: [
          "Overall verdict with plain-language summary",
          "Contaminant rows with value vs safe limit",
          "Action card for any exceedance (e.g. nitrate)",
          "Results pending / sample in lab state",
          "Sample rejected state with re-test path",
        ],
        success:
          "A worried parent understands the verdict in 10 seconds; numbers are present but secondary.",
        pains:
          "Lab PDFs full of jargon; can\u2019t tell what\u2019s dangerous; no next steps.",
        quote: "Can my baby drink this water or not?",
      },
    ],
  },
  {
    name: "Loftline",
    industry: "Creative / Booking",
    description:
      "An hourly booking platform for independent music rehearsal studios.",
    value: "Book a fully equipped room in two taps, even at 11pm.",
    segment: "Gigging musicians, 19–40, in bands of 3–6.",
    behaviors:
      "Book late at night, coordinate with bandmates in group chats, split costs.",
    role: "drummer in a four-piece indie band",
    age: [21, 36],
    goals: "Secure regular rehearsal time and split the cost fairly.",
    brand:
      "Uses a custom condensed display face; body copy must stay in a neutral sans.",
    tones: [
      {
        adjectives: "Gritty, vibrant",
        note: "Gig-poster energy, dark rooms with neon accents.",
      },
      {
        adjectives: "Loud, organized",
        note: "Bold type, clear time grids, quick actions.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "The time-slot picker and booking summary for one studio.",
        goal: "Select a date and 2–4 hour block, see the total and split it with the band.",
        mustHaves: [
          "Day selector and hourly slot grid",
          "Peak / off-peak pricing distinction",
          "Gear included vs add-on list",
          '"Split with band" option with per-person cost',
          "Slot-just-booked error and booking-confirmed state",
        ],
        success:
          "Booking a 3-hour block takes under 30 seconds; price changes are instant and visible.",
        pains:
          "Calling studios; surprise backline fees; chasing bandmates for money.",
        quote: "Tuesday, 8 to 11, split four ways. Done.",
      },
    ],
  },
  {
    name: "Ondeck",
    industry: "Sports / Social",
    description: "An app for finding pickup basketball games at public courts.",
    value:
      "Know which courts have a game running right now and how good the run is.",
    segment: "Recreational players, 18–40, in cities with many public courts.",
    behaviors:
      "Check right before leaving home; on-court check-ins from phone.",
    role: "logistics coordinator and weekend hooper",
    age: [20, 37],
    goals: "Find a competitive run nearby without wasting a trip.",
    brand: "Brand orange and asphalt gray; court-line motifs encouraged.",
    tones: [
      {
        adjectives: "Energetic, streetwise",
        note: "Sport-broadcast typography with court textures.",
      },
      {
        adjectives: "Punchy, social",
        note: "Live indicators, avatars, kinetic but legible.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "The court detail bottom sheet shown when tapping a court on the map.",
        goal: "Tell a player if it\u2019s worth going now.",
        mustHaves: [
          "Live player count and skill level of the current run",
          "Court condition tags (lights, nets, surface)",
          'Check-in button and "I\u2019m heading there"',
          "No recent check-ins empty state",
          "Court closed / weather state",
        ],
        success:
          "Go / don\u2019t-go decision in one glance; sheet works at peek and expanded heights.",
        pains:
          "Arriving to empty courts; mismatched skill levels; outdated court info.",
        quote: "I don\u2019t want to drive 20 minutes to shoot alone.",
      },
    ],
  },
  ,
  {
    name: "PulseRoute",
    industry: "Fintech / Cross-border Treasury",
    description:
      "A centralized liquidity and cross-border payment orchestration platform for global scale-ups paying suppliers in 40+ currencies.",
    value:
      "Eliminate foreign exchange markups and settle international wires with guaranteed 60-second delivery.",
    segment:
      "Corporate treasurers and CFOs, 30–55, managing distributed operations and multi-currency payroll.",
    behaviors:
      "Executes batch wire releases twice weekly; monitors FX market volatility on a second monitor while working.",
    role: "Founding Product Designer",
    age: [29, 52],
    goals:
      "Lock in predictable exchange rates and prevent multi-million dollar transfer delays caused by intermediary banks.",
    brand:
      "Brand color Liquid Emerald (#059669) signifies settled funds and verified liquidity.",
    tones: [
      {
        adjectives: "Precise, institutional",
        note: "Data-dense ledger typography with unambiguous tabular numerals and verified timestamps.",
      },
      {
        adjectives: "Resolute, reassuring",
        note: "Zero visual ambiguity around fees, intermediary routing, or regulatory holding windows.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "The Batch Wire Verification modal with FX rate lock countdown and dual-signoff authorization.",
        goal: "Review 14 queued international supplier wires, lock current mid-market FX rates for 90 seconds, and request second-officer biometric sign-off.",
        mustHaves: [
          "90-second animated rate lock countdown timer with live re-quote prompt on expiry",
          "Itemized wire recipient list with currency pairs, routing codes, and fee breakdown",
          "Discrepancy highlight badge for newly added beneficiary bank accounts",
          "Dual-authorization status tracker showing pending CFO approval key",
          "Instant settlement confirmation banner with printable SWIFT MT103 tracking code",
        ],
        success:
          "Treasurer can review $1.2M in foreign wires within 45 seconds without missing compliance warnings.",
        pains:
          "Hidden intermediary bank deductions; rate volatility expiring mid-review; accidental duplicate wire submissions.",
        quote:
          "If a wire is delayed even 2 hours, our manufacturing run in Shenzhen halts.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Real-time FX Swap Execution card with dynamic slippage guard and liquidity provider depth indicator.",
        goal: "Allow an on-the-go treasury analyst to approve an emergency $250k EUR/USD currency swap.",
        mustHaves: [
          "Live bid/ask ticker with directional micro-chart for the last 60 minutes",
          "Configurable slippage tolerance pill selector (0.05%, 0.1%, custom)",
          "Liquidity provider execution route badge (Tier 1 bank vs algorithmic MM)",
          "Slide-to-confirm gesture preventing accidental tap execution",
          "Post-execution transaction slip drawer with execution timestamp down to the millisecond",
        ],
        success:
          "Accidental executions impossible; slippage risk clearly visible before thumb swipe.",
        pains:
          "Fat-finger taps on high-value currency orders; invisible spread markup on mobile apps.",
        quote:
          "I need to know the exact cents we lose on the spread before I slide that button.",
      },
    ],
  },
  {
    name: "KubeWatch",
    industry: "B2B SaaS / Cloud Observability",
    description:
      "An automated root-cause detection platform for Kubernetes clusters that correlates crash loops with recent pull requests.",
    value:
      "Cut production incident triage time from 45 minutes to under 3 minutes with automated diff attribution.",
    segment:
      "DevOps and Site Reliability Engineers (SREs), 24–45, on active on-call rotation.",
    behaviors:
      "Woken up at 3 AM by PagerDuty alerts; navigates via keyboard shortcuts with terminal open side-by-side.",
    role: "Lead Systems UX Designer",
    age: [25, 46],
    goals:
      "Identify which commit broke production and execute an automated rollback with zero downtime.",
    brand:
      "Terminal Amber (#F59E0B) is strictly reserved for degraded performance before full outage.",
    tones: [
      {
        adjectives: "High-density, technical",
        note: "Monospace telemetry, compact line heights, and dark-theme first syntax highlighting.",
      },
      {
        adjectives: "Calm under pressure",
        note: "Suppresses non-actionable alert noise so engineers focus entirely on the critical path.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          "Pod Crash-Loop Cluster widget with root-cause log preview and one-click rollback CTA.",
        goal: "Give an on-call engineer an instant visual summary of crashing microservices and the offending git commit.",
        mustHaves: [
          "Visual cluster health ring diagram showing crash-looping vs healthy pods",
          "Offending commit author, SHA, and summary diff correlated with the initial error spike",
          "Live tailing log snippet (last 5 lines) with highlighted stack trace exception",
          "One-click 'Rollback to v2.14.1' primary action with confirmation modal preview",
          "Active incident Slack thread sync status indicator",
        ],
        success:
          "Engineer identifies root-cause commit in under 15 seconds without opening kubectl.",
        pains:
          "Drowning in 5,000 duplicate log errors; unsure whether to roll back or patch forward.",
        quote:
          "At 3 AM with 20% battery on my laptop, I need the diff that broke it, not 40 dashboard tabs.",
      },
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "Threshold-Based Alert Notification Rules matrix with interactive webhook payload simulator.",
        goal: "Configure alerting conditions for P99 latency spikes and test Slack/PagerDuty webhook formatting.",
        mustHaves: [
          "Metric condition builder (P99 Latency > 450ms for 3 consecutive 1-minute intervals)",
          "On-call escalation tier assignment dropdown (L1 SRE -> Team Lead -> VP Eng)",
          "Interactive JSON payload preview with syntax highlighting and copy button",
          "'Send Test Alert' trigger with simulated deliverability status (200 OK)",
          "Suppression rule scheduler for scheduled maintenance windows",
        ],
        success:
          "Complex boolean conditions configure without syntax errors; payload verified before saving.",
        pains:
          "Alert fatigue from noisy false alarms; misconfigured webhooks failing silently during outages.",
        quote:
          "If an alert fires, it better be something only a human can fix.",
      },
    ],
  },
  {
    name: "Synthia",
    industry: "AI / Prompt Engineering & Evaluation",
    description:
      "An evaluation and regression-testing benchmark suite for teams deploying enterprise LLM applications.",
    value:
      "Catch prompt regressions, model drift, and hallucinations before shipping AI features to customers.",
    segment:
      "AI Product Managers and Prompt Engineers, 24–40, balancing token cost against output quality.",
    behaviors:
      "Runs test suites over 500 gold-standard test cases before every production deployment.",
    role: "Senior AI Product Designer",
    age: [24, 42],
    goals:
      "Compare prompt versions side-by-side on latency, cost, and factual grounding.",
    brand:
      "Deep Violet (#7C3AED) signifies frontier model intelligence without cheap sci-fi tropes.",
    tones: [
      {
        adjectives: "Analytical, lucid",
        note: "Clean split-screens, semantic diff highlights, and benchmark scorecards.",
      },
      {
        adjectives: "Transparent, empirical",
        note: "No black-box mystery; every metric traces back to specific test case ground truth.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable:
          "Interactive Split-View Prompt Playground comparing response latency, token cost, and hallucination scores.",
        goal: "Compare Prompt v3.2 (GPT-4o) against Prompt v3.3 (Claude 3.5 Sonnet) across 10 evaluation runs.",
        mustHaves: [
          "Dual-pane side-by-side prompt and output comparison with colored text diffs",
          "Comparative metric summary bar: P90 Latency (ms), Total Cost ($), Grounding Score (%)",
          "Semantic hallucination detector highlighting ungrounded claims in pastel red",
          "Batch test runner progress indicator (e.g., 'Completed 8/10 test evaluations')",
          "'Promote to Production' primary action with version tagging",
        ],
        success:
          "Designer immediately spots whether new prompt saves cost without degrading output accuracy.",
        pains:
          "Prompts that work in one case breaking in edge cases; unexpected token price spikes.",
        quote:
          "We made the prompt 20 words longer and our API bill doubled overnight.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Model Drift Notification card with benchmark score degradation graph and instant rollback action.",
        goal: "Alert an AI team lead that the production classification accuracy dropped below 94% on live traffic.",
        mustHaves: [
          "Urgency indicator header: 'Critical Accuracy Drop (-6.2%) in Production'",
          "7-day rolling performance sparkline with dotted threshold failure line",
          "Top 3 failed user query categories with expandable prompt preview",
          "One-tap 'Revert to Baseline Model' primary button",
          "Dismiss button with mandatory reason dropdown (e.g. 'False alarm / Expected traffic shift')",
        ],
        success:
          "Team lead can diagnose and roll back a failing model version from a phone in 30 seconds.",
        pains:
          "Discovering model degradation from angry customer tweets days after a silent provider update.",
        quote:
          "OpenAI updated their weights on a Tuesday and our classifier went haywire.",
      },
    ],
  },
  {
    name: "HavenCare",
    industry: "HealthTech / Pediatric Telehealth",
    description:
      "An on-demand pediatric virtual urgent care app connecting worried parents with licensed pediatricians in under 10 minutes.",
    value:
      "Get verified medical guidance and prescriptions for sick children without stressful ER waiting rooms.",
    segment:
      "Parents of infants and toddlers, 22–42, dealing with acute late-night fevers and rashes.",
    behaviors:
      "Using the app at 2:00 AM while holding a crying baby in one arm and typing with the other.",
    role: "Staff Healthcare UX Designer",
    age: [25, 45],
    goals:
      "Connect with a pediatric doctor immediately and know exactly what warning signs warrant an ambulance.",
    brand:
      "Gentle Sage (#059669) creates a calming, clinical environment that soothes anxious parents.",
    tones: [
      {
        adjectives: "Reassuring, gentle",
        note: "Soft neutral backgrounds, generous tap targets, and clear non-technical medical language.",
      },
      {
        adjectives: "Urgent, protective",
        note: "Red flags for emergency symptoms are prominent, unambiguous, and impossible to overlook.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The 3-Step Urgent Triage Questionnaire with guided rash camera capture and queue wait estimator.",
        goal: "Help an anxious parent describe symptoms (fever, rash, breathing) and enter the urgent consultation room in under 90 seconds.",
        mustHaves: [
          "Red-flag emergency screen warning parent to call 911 if child exhibits labored breathing or lethargy",
          "Visual temperature and medication log (Tylenol/Motrin administered time and dosage)",
          "Guided camera viewfinder with lighting guide for photographing skin rashes",
          "Real-time queue tracker ('Dr. Sarah Kim is reviewing notes · Est. 4 mins')",
          "Single-thumb accessible navigation throughout the entire flow",
        ],
        success:
          "Parent completes triage with one hand without missing critical medication interaction questions.",
        pains:
          "Confusing medical jargon; fear of under-reacting or over-reacting; typing while soothing a sick child.",
        quote:
          "Her temperature spiked to 103.5°F at 3 AM. I was shaking and needed a doctor right away.",
      },
      {
        type: "Empty state",
        platform: "Mobile",
        deliverable:
          "First Appointment Preparation empty state with pediatrician intro video and parent readiness checklist.",
        goal: "Guide parents who just downloaded the app to input insurance, pharmacy, and child profile before an illness hits.",
        mustHaves: [
          "Friendly illustration of child doctor consultation with warm welcoming greeting",
          "3-item progressive setup checklist: Insurance card, Preferred 24h pharmacy, Pediatric history",
          "Short 30-second video snippet: 'How our late-night urgent care visits work'",
          "'Complete Child Profile in 2 Mins' high-contrast primary CTA",
          "Reassurance banner: 'Over 120,000 children treated with 4.9★ rating'",
        ],
        success:
          "Parent completes onboarding during calm daylight hours so emergency visits are frictionless.",
        pains:
          "Scrambling to find health insurance policy numbers and pharmacy addresses while a child is crying.",
        quote:
          "I'm glad I set up the account last month because tonight we needed it in 3 minutes.",
      },
    ],
  },
  {
    name: "ShelfGrid",
    industry: "E-Commerce / Automated Warehouse Logistics",
    description:
      "An inventory orchestration and automated fulfillment platform for direct-to-consumer micro-warehouses.",
    value:
      "Prevent stockouts and optimize bin-picking paths to achieve sub-4-hour order dispatch.",
    segment:
      "Warehouse managers and inventory controllers, 26–50, managing fast-moving consumer goods.",
    behaviors:
      "Walks concrete warehouse floors with a ruggedized tablet; monitors supplier lead-time fluctuations.",
    role: "Industrial Logistics UX Lead",
    age: [26, 49],
    goals:
      "Keep fast-moving SKUs in stock without tying up working capital in excess warehouse storage.",
    brand:
      "Hi-Vis Cobalt (#2563EB) provides maximum contrast under harsh warehouse LED high-bay lighting.",
    tones: [
      {
        adjectives: "Industrial, utilitarian",
        note: "Oversized tap buttons, heavy borders, and stark contrast designed for gloves and glare.",
      },
      {
        adjectives: "Direct, unambiguous",
        note: "Every SKU alert immediately states the quantity discrepancy and the exact bin location.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "SKU Restock Trigger Configuration form with supplier lead-time predictive buffer slider.",
        goal: "Configure dynamic safety stock rules for seasonal products based on shipping transit times.",
        mustHaves: [
          "SKU search input with thumbnail, barcode, and current warehouse aisle/bin coordinates",
          "Interactive safety stock threshold slider with forecasted runout date indicator",
          "Supplier lead-time buffer toggle (Sea freight 30d vs Air express 5d)",
          "Automated Purchase Order generator toggle with supplier price-break tiers",
          "Dry-run simulation chart showing expected cash outlay over the next 90 days",
        ],
        success:
          "Manager sets automated replenishment thresholds without risking warehouse overflow or stockouts.",
        pains:
          "Stockouts during flash sales; ordering too early and paying expensive third-party storage fees.",
        quote:
          "Our best-selling electrolyte powder went viral on TikTok and we ran dry for three weeks.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Real-time Picker Bin Discrepancy card when a physical bin count is short during order picking.",
        goal: "Empower a warehouse floor picker to log missing inventory, trigger replenishment, and continue their pick route.",
        mustHaves: [
          "Large bin coordinate display: 'Aisle 14 · Bay C · Level 2 · Bin 08'",
          "Item description with photo, barcode check digit, and expected count (12 units)",
          "Number stepper input for actual count found with one-tap 'Zero Stock' button",
          "Sub-route override button: 'Skip item & re-route to next order' to preserve pick speed",
          "Automated audit ticket notification dispatched to warehouse supervisor",
        ],
        success:
          "Picker logs discrepancy in under 10 seconds without stopping their route or holding up shipping.",
        pains:
          "Frozen pick routes waiting for a supervisor; incorrect counts causing downstream order cancellations.",
        quote:
          "I have 45 seconds per order. If a bin is empty, I need to log it and keep walking.",
      },
    ],
  },
  {
    name: "CarbonLedger",
    industry: "ClimateTech / Scope 3 Carbon Accounting",
    description:
      "An enterprise supply chain carbon accounting platform that calculates Scope 1, 2, and 3 greenhouse gas emissions from ERP data.",
    value:
      "Automate CSRD and SEC climate compliance reporting with audit-ready supplier emissions verification.",
    segment:
      "Chief Sustainability Officers and ESG compliance directors, 30–55, at publicly traded manufacturers.",
    behaviors:
      "Prepares quarterly ESG audit packs for external assurance firms; reconciles supplier emissions filings.",
    role: "Senior Enterprise Product Designer",
    age: [31, 54],
    goals:
      "Prove carbon reductions across 4,000 tier-1 and tier-2 suppliers with verifiable primary data.",
    brand:
      "Forest Pine (#15803D) represents verifiable ecological accountability.",
    tones: [
      {
        adjectives: "Rigorous, verifiable",
        note: "Audit-trail badges, emission factor source citations, and clear confidence intervals.",
      },
      {
        adjectives: "Structured, corporate",
        note: "Aligns with GHG Protocol standards and international financial audit reporting layouts.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "Supplier Emissions Audit Card with green certificate verification badge and peer benchmark.",
        goal: "Review a tier-1 steel supplier's annual carbon intensity filing and approve it for the annual sustainability disclosure.",
        mustHaves: [
          "Supplier header with verified SBTi (Science Based Targets) commitment badge",
          "Carbon intensity metric (tCO2e per ton of product) compared against industry benchmark",
          "Third-party audit certification attachment preview (ISO 14064 verified icon)",
          "Flagged anomaly alert if reported electricity emissions drop unexpectedly by >25%",
          "Action bar with 'Approve for SEC Filing', 'Request Methodology Clarification', and 'Flag for Audit'",
        ],
        success:
          "Sustainability manager can verify data provenance and flag uncertified claims in under 1 minute.",
        pains:
          "Suppliers greenwashing data with outdated emission factors; fear of regulatory SEC audit penalties.",
        quote:
          "If our suppliers submit junk data, our entire public net-zero disclosure is fraudulent.",
      },
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "Bulk Freight Shipment Emissions Reconciliation wizard with automated transport anomaly flagger.",
        goal: "Ingest 15,000 rows of air, ocean, and rail freight logistics data and convert ton-kilometers into audited Scope 3 CO2e.",
        mustHaves: [
          "CSV/ERP upload dropzone with column mapping validation (weight, origin/dest, transport mode)",
          "Interactive anomaly review table highlighting shipments assigned to high-emission air freight vs sea",
          "Emission factor library selector (GLEC Framework v3.0 vs EPA 2024)",
          "Batch calculation progress bar with live ton-CO2e tally accumulator",
          "Exportable audit assurance summary report in PDF/XLSX formats",
        ],
        success:
          "Converts 10,000 freight records with 99.8% auto-mapping accuracy without crashing the browser.",
        pains:
          "Messy spreadsheets with missing airport codes; slow calculation engines; unverified estimates.",
        quote:
          "Our logistics team uses 50 different freight forwarders. The data is complete chaos.",
      },
    ],
  },
  {
    name: "TraceLock",
    industry: "Cybersecurity / Zero-Trust Identity",
    description:
      "A just-in-time privileged access management (PAM) platform that grants temporary production infrastructure access.",
    value:
      "Eliminate static SSH keys and permanent admin credentials to stop ransomware lateral movement.",
    segment:
      "Cloud Security Engineers and IT compliance officers, 26–50, maintaining SOC 2 Type II compliance.",
    behaviors:
      "Responds to emergency break-glass access requests during production incidents; audits session recordings.",
    role: "Cybersecurity UX Specialist",
    age: [26, 48],
    goals:
      "Grant 30-minute scoped database access without leaving backdoor root credentials active.",
    brand:
      "Cyber Shield Slate (#0F172A) with Neon Amber warnings for elevated security posture.",
    tones: [
      {
        adjectives: "Strict, unyielding",
        note: "Every elevation of privilege is visibly time-boxed, monitored, and permanently audited.",
      },
      {
        adjectives: "Low-friction, rapid",
        note: "Emergency responders are never blocked by bureaucratic multi-hour ticket approvals.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "Step-Up Biometric Challenge flow for sensitive production database write access.",
        goal: "Authenticate an on-call engineer requesting 20 minutes of read/write access to customer payment tables.",
        mustHaves: [
          "Session parameters summary: Target DB cluster, duration countdown (20m), peer approval status",
          "Face ID / Biometric prompt with tamper-resistant hardware enclave check",
          "Mandatory incident ticket linkage input (e.g. 'Jira INC-4921')",
          "Real-time session recording warning: 'All SQL commands are keystroke-logged and audited'",
          "Instant access revocation red button: 'Terminate Session Immediately'",
        ],
        success:
          "Engineer securely authenticates within 10 seconds while maintaining complete compliance audit trails.",
        pains:
          "Engineers sharing static root passwords; standing credentials stolen via phishing.",
        quote:
          "Nobody should have permanent admin access to our production customer database. Period.",
      },
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "Session Lifetime and Geo-Fence Access Policy matrix with device trust tiers.",
        goal: "Define security rules restricting production access to MDM-enrolled hardware within approved countries.",
        mustHaves: [
          "Device health requirement checklist (Disk encryption enabled, OS patch < 14 days old, EDR active)",
          "Geographic perimeter map selector allowing access only from approved remote-work territories",
          "Session idle auto-kill timeout slider (5m, 15m, 30m, custom)",
          "Break-glass bypass configuration requiring minimum 2 VP-level simultaneous approvals",
          "Real-time policy impact simulation showing how many current engineers would be affected",
        ],
        success:
          "Admin updates access policies without inadvertently locking out legitimate on-call staff overseas.",
        pains:
          "Locking out an engineer traveling to a conference during an emergency outage.",
        quote:
          "We need our policy to be ironclad against hackers without suffocating our engineering team.",
      },
    ],
  },
  {
    name: "Veloce",
    industry: "Logistics / EV Last-Mile Fleet",
    description:
      "An electric vehicle fleet optimization and telematics platform for urban delivery vans and cargo bikes.",
    value:
      "Maximize daily package delivery density while preventing delivery vans from dying mid-route.",
    segment:
      "Fleet dispatchers and delivery drivers, 21–55, navigating congested metropolitan corridors.",
    behaviors:
      "Drivers glance at mounted phones on dashboards; dispatchers manage 80 active routes on wide screens.",
    role: "Senior Mobility Product Designer",
    age: [23, 52],
    goals:
      "Ensure every electric van returns to the depot with at least 10% battery reserve after finishing 120 stops.",
    brand:
      "Electric Volt (#0284C7) embodies clean kinetic energy and rapid urban transit.",
    tones: [
      {
        adjectives: "High-contrast, glanceable",
        note: "Designed for bright daylight dashboard glare; numbers readable at arm's length.",
      },
      {
        adjectives: "Dynamic, route-aware",
        note: "Visualizes battery consumption against terrain elevation, traffic, and cargo weight.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          "Depot Charging Queue Optimizer widget balancing fleet battery levels and morning departure times.",
        goal: "Schedule overnight charging for 40 delivery vans to minimize utility peak-demand electricity charges.",
        mustHaves: [
          "Gantt-style charging schedule matching van battery status against scheduled 6:00 AM route departures",
          "Electricity tariff cost tier overlay highlighting off-peak super-saver charging hours (12 AM–5 AM)",
          "Vehicle readiness status pills: 'Fully Charged (100%)', 'Charging (64%)', 'Pending Cable Plug-In'",
          "Overload risk warning badge if depot power draw exceeds 450 kW transformer capacity",
          "One-click 'Prioritize Fast Route Vans' auto-balancer CTA",
        ],
        success:
          "Dispatcher schedules fleet charging to save $4,000/month in peak utility surcharges without missed departures.",
        pains:
          "Drivers arriving in the morning to half-charged vans; blown depot electrical circuit breakers.",
        quote:
          "If our morning vans aren't at 90% charge by 6:30 AM, thousands of Amazon packages miss their window.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Driver Battery Drain Warning card recommending the optimal 15-minute DC fast charger on the current route.",
        goal: "Alert a delivery driver when unexpected winter heating drops battery range below route requirements.",
        mustHaves: [
          "Prominent warning badge: 'Range Warning: 14% remaining · 28 stops remaining'",
          "Recommended charger stop card: Station name, charger speed (150 kW), plug availability (3 open)",
          "Impact breakdown: '+12 mins charging will guarantee completing all 28 deliveries'",
          "'Reroute to Charger Now' primary navigation button syncing with Google Maps",
          "Dispatcher auto-notification banner: 'Dispatcher notified of 15m delay'",
        ],
        success:
          "Driver resolves low battery range before stranding a 4-ton delivery vehicle in traffic.",
        pains:
          "Getting stranded on a bridge with an empty battery; fear of reprimand for falling behind schedule.",
        quote:
          "In winter with the heater on, battery drops twice as fast. I need the app to warn me early.",
      },
    ],
  },
  {
    name: "CastForge",
    industry: "Creator Economy / Audio Mastering",
    description:
      "An AI-powered audio engineering workstation for podcasters that removes background noise, breath clicks, and room echo.",
    value:
      "Transform amateur bedroom recordings into broadcast-ready studio audio in under 2 minutes.",
    segment:
      "Solo podcasters and YouTube creators, 20–40, producing weekly shows without sound engineering budgets.",
    behaviors:
      "Records on USB microphones in untreated bedrooms; edits audio between day job hours.",
    role: "Audio Technology UX Designer",
    age: [21, 39],
    goals:
      "Master a 60-minute interview to -16 LUFS broadcast standard with clear vocal separation.",
    brand:
      "Deep Sonic Tangerine (#EA580C) brings recording studio warmth into a sleek modern UI.",
    tones: [
      {
        adjectives: "Tactile, responsive",
        note: "Analog audio console feel with buttery wave scrubbers and responsive VU meters.",
      },
      {
        adjectives: "Intelligent, non-destructive",
        note: "Every AI correction can be auditioned before/after and fine-tuned with precision dials.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "Noise Removal and Loudness Normalization preset builder with real-time before/after A/B scrubber.",
        goal: "Configure voice enhancement profiles for two co-hosts with different room acoustics.",
        mustHaves: [
          "Interactive dual-track waveform with color-coded speaker diarization (Host vs Guest)",
          "Before/After A/B audio toggle button with instant seamless playback switching",
          "Voice enhancement sliders: Room Reverb Removal, De-Esser Intensity, Voice Warmth EQ",
          "Target loudness standard preset dropdown (Spotify/Apple -16 LUFS, YouTube -14 LUFS)",
          "Processing preview button generating 10-second audition clip",
        ],
        success:
          "Creator removes AC hum and keyboard clicks without making host voices sound robotic or tinny.",
        pains:
          "Spent 4 hours manually cutting mouth clicks; listeners complaining about quiet audio on highways.",
        quote:
          "My guest was on a cheap laptop mic in an echoey kitchen. I needed magic to salvage that episode.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          "Audio Export & Distribution progress widget with one-tap syndication to podcast feeds.",
        goal: "Monitor cloud audio mastering progress and push the finalized MP3 to Spotify and Apple Podcasts.",
        mustHaves: [
          "Radial progress indicator showing mastering steps: 'De-noising -> Leveling -> ID3 Tagging'",
          "Episode metadata preview: Episode artwork thumbnail, title, season/episode numbers",
          "File size and bitrate verification pill (128 kbps stereo MP3 · 54.2 MB)",
          "'Publish to RSS Feeds' primary action with scheduled release date picker",
          "Instant playback preview with 15-second skip controls",
        ],
        success:
          "Creator can approve and publish a mastered episode directly from a coffee shop phone.",
        pains:
          "Exporting 200MB WAV files to a phone; manually uploading files to multiple podcast hosts.",
        quote:
          "I finished recording at midnight. I just wanted to tap 'Publish' and go to sleep.",
      },
    ],
  },
  {
    name: "Loomi",
    industry: "Fintech / Shared Household Accounts",
    description:
      "A collaborative digital banking app for roommates and unmarried couples sharing rent, groceries, and household bills.",
    value:
      "Stop awkward money conversations with automated expense splitting and shared virtual debit cards.",
    segment:
      "Young professionals, 21–34, renting apartments with 2–4 roommates in major cities.",
    behaviors:
      "Splits bills weekly; uses Venmo/Splitwise but hates manually chasing people for utility payments.",
    role: "Consumer Fintech UX Designer",
    age: [21, 33],
    goals:
      "Collect all roommates' rent shares automatically 3 days before the landlord's lease deadline.",
    brand:
      "Warm Honey & Terracotta (#D97706) feels communal, friendly, and non-confrontational.",
    tones: [
      {
        adjectives: "Transparent, considerate",
        note: "Neutral, friendly copy that eliminates friction between friends living together.",
      },
      {
        adjectives: "Fair, automated",
        note: "Clear mathematical equity without anyone feeling like an unpaid collection agent.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The Rent & Utility Settlement flow with automated debit and shared landlord wire release.",
        goal: "Collect $1,150 from each of 3 roommates and release the combined $3,450 rent to the landlord's portal.",
        mustHaves: [
          "Roommate contribution progress ring: '$2,300 of $3,450 collected (2 of 3 paid)'",
          "Unpaid roommate status pill with scheduled auto-debit timestamp",
          "Itemized utility attachment (Electric bill screenshot & breakdown)",
          "Slide-to-send payment release to landlord bank account",
          "Automated receipt distribution into shared apartment group chat",
        ],
        success:
          "All roommates pay their exact share without the leaseholder fronting thousands of dollars from personal savings.",
        pains:
          "Roommate forgetting to Venmo rent on the 1st; paying overdraft fees because someone was late.",
        quote:
          "I love my roommates, but I hate acting like their angry landlord on the first of every month.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Roommate Balance Card with pre-written respectful nudge SMS generator.",
        goal: "Remind a roommate about an outstanding $64 electric bill without damaging personal friendships.",
        mustHaves: [
          "Roommate avatar, name, and total outstanding debt balance ($64.20 for ConEd Power)",
          "Bill due date and elapsed days overdue counter",
          "Tone selector for nudge message: 'Casual', 'Direct', or 'Automated Loomi Bot'",
          "Pre-populated SMS preview with one-tap Apple Messages deep link",
          "One-tap 'Cover for now' button that adds the amount to next month's ledger",
        ],
        success:
          "Friendship preserved; overdue bill paid within 24 hours of friendly automated nudge.",
        pains:
          "Anxiety around confronting friends over small dollar amounts; feeling taken advantage of.",
        quote:
          "How do you tell your best friend they haven't paid for toilet paper in three months without making dinner weird?",
      },
    ],
  },
  {
    name: "DocuMind",
    industry: "AI / Legal Contract Redlining",
    description:
      "An AI-powered contract analysis assistant that flags dangerous indemnity, liability, and IP clauses in vendor agreements.",
    value:
      "Review 40-page enterprise software contracts in 10 minutes instead of 3 days of expensive outside counsel.",
    segment:
      "Corporate legal counsel, procurement managers, and agency founders, 28–55.",
    behaviors:
      "Redlines Word/PDF contracts against company legal playbook standards; negotiates terms over email.",
    role: "LegalTech Principal UX Designer",
    age: [29, 56],
    goals:
      "Identify uncapped liability clauses and generate market-standard fallback redline language instantly.",
    brand:
      "Oxford Navy (#1E293B) and Crimson Alert (#BE123C) for enterprise legal authority.",
    tones: [
      {
        adjectives: "Precise, authoritative",
        note: "Contract clause numbering, exact statutory terminology, and standard legal markup.",
      },
      {
        adjectives: "Decisive, risk-focused",
        note: "Color-codes risks by severity (High Risk Uncapped Liability vs Standard Commercial Terms).",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable:
          "Side-by-Side Clause Risk Comparator highlighting uncapped liability and indemnity deviations.",
        goal: "Review Vendor Clause 12.2 against company Master Services Agreement (MSA) standards and apply a suggested redline.",
        mustHaves: [
          "Split-pane view: Original vendor text on left vs Recommended redline on right",
          "Risk severity badge: 'High Risk: Uncapped Consequential Damages'",
          "Legal rationale explanation box citing company playbook guidelines",
          "One-click 'Accept Redline & Copy to Word' button with tracked-changes formatting",
          "Fallback alternative clause dropdown for tough negotiations",
        ],
        success:
          "Lawyer reviews and resolves high-risk clause in under 30 seconds with audit-ready justification.",
        pains:
          "Missing buried one-sentence liability clauses that expose the company to millions in lawsuits.",
        quote:
          "Vendors bury the most aggressive indemnity clauses on page 38 hoping nobody reads that far.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "Custom Playbook Rule Editor defining acceptable negotiation fallbacks for procurement teams.",
        goal: "Define acceptable liability caps (e.g. 12 months fees paid) for non-lawyer procurement staff.",
        mustHaves: [
          "Clause category selector (Limitation of Liability, Data Breach Indemnity, Governing Law)",
          "Standard preferred position text editor with variable tags (e.g. {{ContractValue}})",
          "Acceptable fallback positions list with escalation trigger thresholds",
          "Non-negotiable dealbreaker toggle preventing contract signature without GC approval",
          "Version history log with audit note tracking why policy was revised",
        ],
        success:
          "Procurement team can negotiate standard contracts independently without bottlenecking the General Counsel.",
        pains:
          "Legal team overwhelmed with 50 routine NDAs a week; inconsistent contract terms across sales teams.",
        quote:
          "I don't need to review every $5,000 SaaS contract if procurement follows our standard playbook rules.",
      },
    ],
  },
  {
    name: "AgriScan",
    industry: "AgTech / Drone Crop Health Analytics",
    description:
      "A precision agriculture platform translating drone multispectral imagery into prescription fertilizer and irrigation maps.",
    value:
      "Reduce nitrogen fertilizer runoff by 25% while increasing corn and soybean bushel yields.",
    segment:
      "Commercial farm managers and agronomists, 30–65, managing 2,000+ acres of row crops.",
    behaviors:
      "Checks crop vigor maps in farm truck; inspects problem areas on foot in muddy fields with offline phone.",
    role: "Field Agronomy UX Specialist",
    age: [28, 62],
    goals:
      "Pinpoint nitrogen-deficient field zones and generate variable-rate sprayer prescriptions for tractors.",
    brand:
      "Field Ochre (#CA8A04) and Crop Green (#16A34A) tailored for bright sunlight visibility.",
    tones: [
      {
        adjectives: "Rugged, geographic",
        note: "Satellite imagery overlays, distinct colorblind-safe vegetation index heatmaps.",
      },
      {
        adjectives: "Practical, offline-first",
        note: "Works seamlessly without 4G cellular data in remote rural farmland.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          "Multispectral NDVI Vegetation Index Map overlay with moisture deficit cluster alerts.",
        goal: "Identify a 15-acre nitrogen deficiency cluster in North Field 4 and export an auto-steer tractor prescription.",
        mustHaves: [
          "Interactive satellite field boundary map with NDVI false-color health overlay (red to dark green)",
          "Acreage health distribution histogram showing % of field in optimal vs stressed condition",
          "Automated prescription calculator: 'Apply +20 lbs/acre Nitrogen to stressed zones'",
          "Export button compatible with John Deere Operations Center and Trimble displays",
          "Historical yield comparison slider comparing today's drone pass against same week last year",
        ],
        success:
          "Agronomist designs variable-rate prescription in under 3 minutes and syncs directly to tractor cab.",
        pains:
          "Blanket-spraying expensive fertilizer on healthy crops; discovering crop disease after yield is damaged.",
        quote:
          "Fertilizer is our biggest input cost. If I can cut 15% without hurting yield, that's $40,000 in my pocket.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Offline Field Scouting Inspection card with GPS-pinned pest infestation camera capture.",
        goal: "Record a localized armyworm infestation while standing in a 200-acre cornfield without cellular service.",
        mustHaves: [
          "Offline GPS coordinate pin with high-accuracy field boundary indicator",
          "Pest/Weed quick-picker tag selector (Armyworm, Palmer Amaranth, Leaf Blight)",
          "Camera module with scale reference guide for photographing leaf damage",
          "Severity rating selector (Low, Moderate, Action Threshold Exceeded)",
          "Local cache sync badge: 'Stored offline · Will sync when connected to Wi-Fi'",
        ],
        success:
          "Farmer logs scout report in 20 seconds while walking through dense 7-foot corn stalks.",
        pains:
          "Apps crashing when cell service drops in remote fields; forgetting the exact location of crop damage.",
        quote:
          "There's zero cell service out in Section 12. If the app won't work offline, it's useless to me.",
      },
    ],
  },
  {
    name: "SubSpark",
    industry: "B2B SaaS / Subscription Churn Prevention",
    description:
      "An automated customer retention platform that predicts B2B subscription cancellation and deploys targeted retention offers.",
    value:
      "Save 18% of canceling SaaS accounts with tailored pause plans, usage credits, and executive check-ins.",
    segment:
      "Customer Success leaders and Growth Product Managers, 25–45, at recurring revenue SaaS companies.",
    behaviors:
      "Monitors daily churn rates; A/B tests cancellation flow exit surveys and concession incentives.",
    role: "Growth Design Lead",
    age: [25, 44],
    goals:
      "Intercept canceling high-value customers with personalized incentives before they remove their credit cards.",
    brand:
      "Retention Indigo (#4F46E5) with Warm Coral for high-value customer save highlights.",
    tones: [
      {
        adjectives: "Persuasive, empirical",
        note: "Conversion-rate focused metrics with clean funnel step drop-off visualizations.",
      },
      {
        adjectives: "Customer-centric, fair",
        note: "Never uses dark patterns; offers real value without hiding the final cancel button.",
      },
    ],
    tasks: [
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "Cancellation Deflection Flow builder with discount threshold rules and exit survey triggers.",
        goal: "Build a 3-step cancellation flow offering a 50% discount for 2 months to price-sensitive customers.",
        mustHaves: [
          "Visual drag-and-drop flow step sequence: Reason Survey -> Personalized Offer -> Confirmation",
          "Rule condition trigger: 'If ARR > $5,000 and Reason == Price, trigger Executive Review'",
          "Offer customization drawer: Discount %, Billing Pause Duration (30/60/90 days), Free Downgrade",
          "Clear, honest cancellation confirmation toggle (guaranteed zero dark patterns)",
          "Live interactive preview simulating the exact customer cancellation experience",
        ],
        success:
          "Growth manager configures and deploys an A/B tested deflection flow without writing engineering code.",
        pains:
          "Customers churning silently without feedback; sleazy cancellation flows that destroy brand trust.",
        quote:
          "We don't want to trap people. We want to ask what went wrong and offer a fair fix if price is the issue.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "High-Value Account Churn Risk card with leading warning indicators and customer health score.",
        goal: "Alert a Customer Success Manager that a $48,000/year enterprise client has stopped logging in.",
        mustHaves: [
          "Account header with ARR value ($48,000), Renewal Date (in 42 days), and Health Score (32/100)",
          "Key risk factors list: 'Admin login down 85%', '3 export errors logged', 'Champion left company'",
          "Recent seat activity sparkline comparing usage this month vs 90 days ago",
          "One-click action bar: 'Schedule Executive Review', 'Send Re-engagement Offer', 'Slack CSM'",
          "Automated churn probability estimation metric (82% High Risk)",
        ],
        success:
          "CSM intervenes 40 days before contract renewal while there is still time to save the relationship.",
        pains:
          "Finding out a major enterprise account is canceling the day before their annual renewal notice.",
        quote:
          "By the time they click 'Cancel Subscription', it's too late. I need to know when their usage drops off a cliff.",
      },
    ],
  },
  {
    name: "Nectar",
    industry: "Wellness / Continuous Glucose Monitoring",
    description:
      "A continuous glucose monitoring app for non-diabetics that analyzes blood sugar spikes to personalize nutrition and energy.",
    value:
      "Eliminate afternoon energy crashes and brain fog by understanding how specific meals impact your metabolism.",
    segment:
      "Health-conscious knowledge workers and endurance athletes, 24–48, optimizing focus and daily energy.",
    behaviors:
      "Checks app 6–8 times a day; logs meals immediately before eating; wears a waterproof sensor on arm.",
    role: "Principal Mobile Health Designer",
    age: [24, 46],
    goals:
      "Keep daily glucose variability within a stable 70–120 mg/dL target zone throughout workdays.",
    brand:
      "Bio Citrus (#EA580C) and Clean Slate (#0F172A) represent metabolic clarity.",
    tones: [
      {
        adjectives: "Insightful, non-judgmental",
        note: "Scientific bio-feedback without moralizing food choices as 'good' or 'bad'.",
      },
      {
        adjectives: "Dynamic, ambient",
        note: "Continuous smooth glucose curve that breathes and animates as fresh sensor data streams in.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          "Post-Meal Glucose Spike widget correlating blood sugar magnitude with recent meal photos.",
        goal: "Show a user how a bowl of ramen caused an 85 mg/dL glucose spike compared to their normal oatmeal breakfast.",
        mustHaves: [
          "Interactive 3-hour postprandial glucose curve with highlighted peak value (172 mg/dL)",
          "Meal photo thumbnail and timestamp anchored directly to the start of the glucose rise",
          "Metabolic spike score badge: '+58 mg/dL spike · 2.5 hours to recover baseline'",
          "Actionable insight callout: 'A 15-minute walk right after eating reduces this spike by 35%'",
          "Quick tag selector to add context: 'High Carb', 'Poor Sleep', 'Stress', 'Post-Workout'",
        ],
        success:
          "User understands the direct cause of their 3:00 PM fatigue without feeling shamed about eating noodles.",
        pains:
          "Cryptic medical numbers without actionable context; feeling guilty about enjoying food.",
        quote:
          "I thought oatmeal was healthy for me, but the sensor showed it spikes my sugar worse than ice cream.",
      },
      {
        type: "Onboarding",
        platform: "Mobile",
        deliverable:
          "Sensor Calibration 4-Screen Walkthrough with NFC tap scan animation and troubleshooting guide.",
        goal: "Guide a first-time user through applying their arm biosensor and completing their first NFC wireless scan.",
        mustHaves: [
          "Animated step-by-step applicator guide: Clean skin with alcohol -> Press applicator -> Tap phone",
          "Interactive NFC radar scan visual with haptic feedback confirmation on successful pairing",
          "60-minute sensor warm-up countdown clock with background notification toggle",
          "Troubleshooting drawer: 'Sensor not scanning? Check phone NFC position and case thickness'",
          "Safety reassurance disclaimer regarding painless micro-filament technology",
        ],
        success:
          "User successfully pairs their first sensor without needle anxiety or NFC timeout errors.",
        pains:
          "Fear of pain from inserting a sensor; confusion over where the NFC chip is located on their phone model.",
        quote:
          "I was terrified it was going to hurt. The clear animation made putting it on completely painless.",
      },
    ],
  },
  {
    name: "HangarOps",
    industry: "Aviation / Private Aircraft Maintenance",
    description:
      "An FAA-compliant digital maintenance logbook and work-order tracking system for business jet fleet operators.",
    value:
      "Eliminate paper maintenance binders and prevent aircraft groundings with predictive parts life cycle tracking.",
    segment:
      "FAA Part 145 certified aircraft mechanics and Director of Maintenance (DOM) officers, 30–62.",
    behaviors:
      "Inspects turbofan jet engines on hangar ladders holding an intrinsically safe rugged tablet.",
    role: "Aviation Systems Designer",
    age: [29, 60],
    goals:
      "Sign off scheduled 100-hour airframe inspections with legally binding FAA electronic digital signatures.",
    brand:
      "Aero Blue (#0284C7) and Caution Yellow (#EAB308) match official avionics cockpit standards.",
    tones: [
      {
        adjectives: "Compliant, immutable",
        note: "Every logged work order creates an indelible FAA-compliant tamper-proof audit entry.",
      },
      {
        adjectives: "Industrial, high-contrast",
        note: "Readable in dimly lit hangar bays or under direct tarmac apron sunlight.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "Airframe Work-Order Sign-Off form with FAA Part 145 digital signature and serialized parts traceability.",
        goal: "Certify that a Gulfstream G650 right-hand starter generator replacement is airworthy.",
        mustHaves: [
          "Aircraft tail number header (N842G) with current airframe total flight hours and engine cycles",
          "Removed vs Installed part comparison table (Part Number, Serial Number, FAA 8130-3 tag upload)",
          "Maintenance Manual task reference citation input (e.g. 'AMM 24-30-01-401')",
          "FAA A&P mechanic license certificate number and cryptographic digital signature block",
          "Return-to-Service legal airworthiness statement checkbox with warning penalty notice",
        ],
        success:
          "Mechanic signs off engine maintenance in 90 seconds while producing zero compliance audit discrepancies.",
        pains:
          "Lost paper 8130 airworthiness tags grounding a $65M jet; handwritten logbook errors failing FAA audits.",
        quote:
          "If a paper airworthiness tag goes missing, that aircraft cannot legally leave the hangar.",
      },
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "Ramp Technician Pre-Flight Walkaround checklist with photo annotation for surface damage.",
        goal: "Complete a 360-degree pre-flight safety inspection of a jet airframe 45 minutes prior to passenger boarding.",
        mustHaves: [
          "Visual aircraft silhouette map with sequential walkaround inspection zones (Nose, Gear, Wing, Tail)",
          "Tire pressure and brake wear pin gauge indicator inputs",
          "Defect photo camera with circular measuring reticle to record minor bird strike or rivet damage",
          "Immediate Grounding toggle: 'Unsafe for Flight - Alert Pilot in Command'",
          "One-thumb quick checkmarks for standard items (Pitot covers removed, static wicks intact)",
        ],
        success:
          "Technician documents complete exterior inspection in 8 minutes without missing critical safety pins.",
        pains:
          "Juggling paper clipboards in 25-knot wind and rain on the airport ramp; missing damaged de-icing boots.",
        quote:
          "Walking around a jet in pouring rain at 5 AM with a paper checklist is a nightmare. This tablet app saved us.",
      },
    ],
  },
  {
    name: "Tenderly",
    industry: "Fintech / Freelancer Smart Invoicing",
    description:
      "An automated cash-flow and invoice factoring platform for independent digital designers and boutique creative agencies.",
    value:
      "Get paid instantly on net-60 invoices and eliminate late payments with smart contractual escrow triggers.",
    segment:
      "Solo UX/UI contractors, design consultants, and small studios, 22–45, billing $5k–$30k/month.",
    behaviors:
      "Sends invoices via laptop; obsessively checks bank balance on phone while waiting for corporate client payment.",
    role: "Freelance Economy UX Designer",
    age: [23, 44],
    goals:
      "Eliminate 60-day corporate payment delays and protect against client scope creep without awkward arguments.",
    brand:
      "Violet Sage (#8B5CF6) feels premium, creative, and protective of independent talent.",
    tones: [
      {
        adjectives: "Empowering, professional",
        note: "Elevates independent creatives into authoritative commercial partners.",
      },
      {
        adjectives: "Crisp, frictionless",
        note: "One-click payment links for clients with instant bank transfer and credit card options.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Overdue Invoice Card with automated polite escalating reminder cadence toggles.",
        goal: "Manage a $8,500 enterprise invoice that is 14 days overdue without sounding desperate or angry.",
        mustHaves: [
          "Client company logo, invoice number, and prominent overdue dollar amount ($8,500 · 14 Days Overdue)",
          "Escalating reminder cadence pill selector: 'Polite Ping -> Accounts Payable Notice -> Pause Work Notice'",
          "View history tracker: 'Client opened invoice 4 times (last viewed today at 9:14 AM)'",
          "One-tap 'Advance Cash Now (-3% fee)' button to receive $8,245 into bank account in 60 seconds",
          "Manual custom message override button",
        ],
        success:
          "Designer knows client saw the invoice and receives funds instantly if cash flow is urgently needed.",
        pains:
          "Corporate clients ghosting invoices for 90 days; feeling embarrassed to ask for money already earned.",
        quote:
          "I finished the mobile app designs in November. It's January and their finance department still hasn't cut the check.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "Dynamic Project Milestone Invoice generator with escrow deposit release clauses.",
        goal: "Create a 3-stage milestone invoice for a $24,000 redesign project with 40% upfront deposit.",
        mustHaves: [
          "Client details input with automatic EU VAT / US EIN corporate tax verification",
          "Milestone breakdown builder: Phase 1 Wireframes (40%), Phase 2 Prototypes (30%), Phase 3 Handoff (30%)",
          "Automated Figma link deliverable attachment trigger releasing next payment stage",
          "Late fee interest clause toggle (+1.5% per month after 14 days overdue)",
          "Live invoice preview matching crisp high-end design agency aesthetic",
        ],
        success:
          "Designer creates rock-solid legal milestone contract in under 4 minutes.",
        pains:
          "Clients demanding full design files before paying final balance; spending hours building invoices in Word.",
        quote:
          "Milestone escrow changed my business. Clients pay before I release the production Figma components.",
      },
    ],
  },
  {
    name: "CortexDB",
    industry: "Developer Tools / Vector Database",
    description:
      "A serverless vector database management console for engineering teams building semantic search and RAG applications.",
    value:
      "Query billions of high-dimensional vector embeddings with single-digit millisecond latency.",
    segment:
      "Backend engineers and machine learning infrastructure leads, 25–48.",
    behaviors:
      "Writes Python/Rust code in IDE; monitors indexing memory consumption and P99 query latency on dashboard.",
    role: "Developer Experience (DX) Designer",
    age: [25, 47],
    goals:
      "Size a vector search index correctly to avoid out-of-memory crashes while keeping cloud costs under budget.",
    brand:
      "Matrix Cyan (#06B6D4) and Dark Terminal (#09090B) for high-performance developer focus.",
    tones: [
      {
        adjectives: "Precise, code-first",
        note: "Syntax-highlighted code snippets, memory telemetry, and instant copy buttons.",
      },
      {
        adjectives: "Performant, utilitarian",
        note: "Zero marketing fluff; immediately surfaces query latencies, index dimensions, and memory usage.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable:
          "Vector Cluster Sizing Calculator slider estimating query latency (P99) vs index memory requirements.",
        goal: "Help an engineer determine how many RAM gigabytes are required to index 10,000,000 OpenAI 1536-dim vectors.",
        mustHaves: [
          "Vector count logarithmic slider: 100k to 100 Million embeddings",
          "Embedding model dimension presets: OpenAI (1536), Cohere (1024), MiniLM (384), Custom",
          "Index quantization algorithm toggle (HNSW uncompressed vs Scalar 8-bit Quantization)",
          "Live output summary cards: Required RAM (GB), Estimated P99 Latency (ms), Monthly Cost ($)",
          "'Deploy Cluster with These Specs' primary action button",
        ],
        success:
          "Engineer selects correct hardware tier in 30 seconds without overpaying $2,000/month for idle memory.",
        pains:
          "Vector clusters running out of memory mid-indexing; unpredictable cloud pricing calculators.",
        quote:
          "We underestimated the memory footprint of our HNSW index and our search service crashed on launch day.",
      },
      {
        type: "Empty state",
        platform: "Desktop",
        deliverable:
          "Empty Vector Collection state with 1-click Python, TypeScript, and cURL ingestion starter snippets.",
        goal: "Guide an engineer who just created an empty vector index to insert their first embedding vectors.",
        mustHaves: [
          "Prominent collection header: 'collection_customer_docs (0 vectors · 1536 dims)'",
          "Multi-tab code snippet selector (Python SDK, TypeScript / Node.js, cURL API)",
          "Pre-populated code with actual cluster API key and connection endpoint injected",
          "One-click 'Generate Sample Vectors' test button that inserts 10 mock vectors instantly",
          "Live event listener badge waiting to detect the first incoming vector write",
        ],
        success:
          "Engineer executes first vector query in under 60 seconds from index creation.",
        pains:
          "Blank white screens after creating a database; hunting through external documentation for connection strings.",
        quote:
          "Give me the working Python snippet with my actual API key right there. Don't send me to a 50-page docs site.",
      },
    ],
  },
  {
    name: "BloomNest",
    industry: "Retail / Circular Apparel Resale",
    description:
      "A luxury circular fashion resale platform where consumers trade in authenticated designer clothing for instant store credit.",
    value:
      "Turn unworn luxury wardrobe pieces into instant designer credit with AI authentication from home.",
    segment:
      "Fashion-conscious professionals, 22–45, refreshing seasonal designer wardrobes sustainably.",
    behaviors:
      "Photographs designer handbags and coats in bedroom mirror; prefers instant store credit over waiting for sales.",
    role: "Luxury E-Commerce UX Lead",
    age: [22, 44],
    goals:
      "Get an instant, guaranteed cash or store credit valuation for an unworn designer trench coat.",
    brand:
      "Chic Mulberry (#9D174D) and Warm Pearl (#FAF9F6) represent curated luxury circularity.",
    tones: [
      {
        adjectives: "Curated, elevated",
        note: "Editorial fashion photography, restrained typography, and generous negative space.",
      },
      {
        adjectives: "Frictionless, rewarding",
        note: "Instant valuation guarantees eliminate the uncertainty and waiting of peer-to-peer marketplaces.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "Instant Garment Valuation flow analyzing uploaded brand tag, material condition, and style demand.",
        goal: "Submit 3 photos of an Acne Studios wool sweater and receive an instant $185 trade-in credit offer.",
        mustHaves: [
          "Guided camera frame: Brand tag close-up, care label wash instructions, full front silhouette",
          "Condition rating checklist: 'Pristine with tags', 'Excellent (no visible wear)', 'Gentle wear'",
          "Real-time market valuation calculator: Instant Credit ($185) vs Cash Payout ($145)",
          "Prepaid shipping label generation with scheduled home courier pickup toggle",
          "Price guarantee lock badge valid for 7 days",
        ],
        success:
          "User completes valuation in under 2 minutes and downloads a QR-code shipping label with zero printing required.",
        pains:
          "Items sitting unsold on eBay for 6 months; dealing with flaky buyers and lowball offers.",
        quote:
          "I don't have time to answer 40 messages from strangers asking for measurements. Just give me the credit.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Resale Payout Tracker card comparing instant brand credit bonus (+25%) against bank wire transfer.",
        goal: "Help a seller decide whether to redeem $320 in bank cash or $400 in partner luxury boutique shopping credit.",
        mustHaves: [
          "Total accumulated trade-in balance header: '$320.00 Available Balance'",
          "Comparative redemption options: 'Bank Direct Deposit ($320)' vs 'Partner Brand Credit ($400 · +25% Bonus)'",
          "Participating brand logos slider (Net-a-Porter, SSENSE, Selfridges)",
          "Instant digital gift card redemption button with Apple Wallet export",
          "Sustainability impact metric: 'You prevented 14.2 kg of CO2e and saved 4,200L of water'",
        ],
        success:
          "Seller clearly sees the 25% bonus incentive and seamlessly transfers funds to Apple Wallet in seconds.",
        pains:
          "Hidden payout withdrawal fees; waiting 10 business days for ACH transfers to clear.",
        quote:
          "Getting an extra $80 to spend at SSENSE made taking the store credit a no-brainer.",
      },
    ],
  },
  {
    name: "TheraTrack",
    industry: "HealthTech / Physical Therapy Rehabilitation",
    description:
      "A computer-vision guided physical therapy app that tracks joint angles and form during home injury rehabilitation.",
    value:
      "Recover from ACL, rotator cuff, and back injuries twice as fast with real-time audio biomechanical coaching.",
    segment:
      "Post-surgery patients and injured athletes, 18–65, prescribed home physical therapy exercises.",
    behaviors:
      "Props phone against a water bottle on the living room floor; performs 20-minute daily exercise routines.",
    role: "Digital Health Product Designer",
    age: [20, 64],
    goals:
      "Complete prescribed knee flexion exercises correctly without exceeding safe pain thresholds.",
    brand:
      "Recovery Turquoise (#0D9488) represents restorative physical vitality and clinical safety.",
    tones: [
      {
        adjectives: "Encouraging, disciplined",
        note: "Celebrates consistency and proper form over speed or brute strength.",
      },
      {
        adjectives: "Clear, clinical",
        note: "Joint angle degrees and reps are visible from 6 feet away while lying on an exercise mat.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Mobile",
        deliverable:
          "Daily Exercise Sequence hero with live camera rep counter, range-of-motion arc, and pain scale.",
        goal: "Perform 3 sets of 12 knee extensions while the phone camera tracks knee flexion angles in real time.",
        mustHaves: [
          "Split camera viewfinder showing user's body with overlaid skeletal joint tracking lines",
          "Oversized rep counter ('8 / 12 Reps') readable from 6 feet away",
          "Dynamic angle gauge highlighting optimal 90° extension target in bright green",
          "Audio voice prompt feedback indicator ('Keep your hips level · Great pace')",
          "One-tap 'Log Discomfort' floating button to flag sharp pain to physical therapist",
        ],
        success:
          "Patient completes exercise without straining and therapist receives verified compliance data.",
        pains:
          "Unsure if doing exercises correctly at home; fear of re-injuring surgically repaired ligaments.",
        quote:
          "Without the app's voice coaching, I had no idea my knee wasn't straightening all the way.",
      },
      {
        type: "Empty state",
        platform: "Mobile",
        deliverable:
          "Program Milestone Celebration empty state with clinician re-evaluation reminder.",
        goal: "Celebrate patient completing 30 consecutive days of shoulder rehab and schedule formal clinical discharge.",
        mustHaves: [
          "Joyful milestone badge: 'Phase 2 Rotator Cuff Strength Complete! 🎉'",
          "30-day mobility recovery chart showing range of motion progress from 45° to 110°",
          "Clinician review callout from assigned PT with personal celebratory note",
          "'Schedule Phase 3 Clinic Assessment' high-contrast primary CTA",
          "Exportable PDF progress summary to share with orthopedic surgeon",
        ],
        success:
          "Patient feels accomplished and books their medical check-up instead of abandoning therapy prematurely.",
        pains:
          "Losing motivation during months of tedious daily physical therapy; lack of visible progress.",
        quote:
          "Physical therapy is exhausting. Seeing that 110-degree mobility graph made every sore morning worth it.",
      },
    ],
  },
  {
    name: "GridSync",
    industry: "Energy / Virtual Power Plant Battery Arbitrage",
    description:
      "An automated energy trading platform coordinating commercial building batteries to export power during grid peak pricing.",
    value:
      "Turn commercial building backup batteries into a $60,000 annual recurring revenue stream.",
    segment:
      "Commercial real estate facilities directors and energy asset managers, 32–60.",
    behaviors:
      "Monitors daily wholesale kilowatt-hour electricity spot prices; manages HVAC and battery dispatch.",
    role: "Clean Energy UX Architect",
    age: [32, 58],
    goals:
      "Discharge 500 kWh of stored battery power when wholesale electricity spot prices spike to $9.00/kWh.",
    brand:
      "Volt Lime (#84CC16) and Grid Charcoal (#18181B) for high-efficiency power management.",
    tones: [
      {
        adjectives: "Financial, analytical",
        note: "Wholesale energy price tickers, revenue meters, and battery degradation projections.",
      },
      {
        adjectives: "Safety-first, resilient",
        note: "Guarantees 20% emergency reserve floor so buildings never suffer blackouts.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          "Grid Peak Demand Price Arbitrage widget showing live revenue generated from battery discharge.",
        goal: "Authorize an automated 2-hour battery export event during a regional heatwave grid emergency.",
        mustHaves: [
          "Real-time wholesale electricity spot price ticker ($/MWh) with historical 24h baseline curve",
          "Active battery discharge rate gauge (450 kW delivering power to municipal grid)",
          "Live revenue earnings counter updating in real-time ($1,420 earned today)",
          "Building emergency power reserve meter locked safely at 25% minimum floor",
          "Emergency 'Stop Export' manual override switch",
        ],
        success:
          "Facility manager earns thousands in grid grid-stabilization revenue without risking tenant power stability.",
        pains:
          "Missing high-price grid events; draining building batteries right before a storm blackout.",
        quote:
          "We made $4,200 during a single three-hour heatwave spike just by letting our basement battery feed the grid.",
      },
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "Backup Reserve Floor Percentage slider with severe weather automated override.",
        goal: "Set minimum battery reserve thresholds to balance financial arbitrage against hurricane emergency readiness.",
        mustHaves: [
          "Interactive reserve threshold slider (Default 20% emergency reserve, 80% available for arbitrage)",
          "National Weather Service severe storm auto-override toggle (Instantly locks battery to 100% on flood/storm watch)",
          "Battery cell cycle life degradation estimator showing expected pack replacement year",
          "Utility demand-response program tier selector (ISO-NE, PJM, ERCOT)",
          "Save changes button with confirmation dialog showing estimated annual revenue impact",
        ],
        success:
          "Manager locks in storm protection policies that automatically override revenue trading when storms approach.",
        pains:
          "Explaining to building owners why batteries were empty during a severe thunderstorm power cut.",
        quote:
          "I love making money on the energy market, but keeping the lights on in this hospital tower is job number one.",
      },
    ],
  },
  {
    name: "OmniDesk",
    industry: "B2B SaaS / Unified Customer Support",
    description:
      "An AI-augmented multi-channel inbox merging VIP customer conversations across WhatsApp, Email, and Slack.",
    value:
      "Resolve tier-1 customer inquiries in 45 seconds with AI suggested replies and unified ticket context.",
    segment:
      "Customer support agents and team leads, 20–38, handling 80+ customer conversations per shift.",
    behaviors:
      "Types rapidly on desktop keyboard; switches between 12 concurrent chats; values lightning-fast keyboard shortcuts.",
    role: "Senior Enterprise Product Designer",
    age: [21, 38],
    goals:
      "Review unified customer history across WhatsApp and Email and send an accurate refund confirmation in 30 seconds.",
    brand:
      "Support Violet (#6366F1) and Fresh Mint (#10B981) for calm, orderly communication.",
    tones: [
      {
        adjectives: "Compact, ergonomic",
        note: "Optimized for dense desktop layouts with minimal scrolling and instant hotkeys.",
      },
      {
        adjectives: "Contextual, empathetic",
        note: "Surfaces customer sentiment and lifetime spend right next to the message composer.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "VIP Customer Ticket Merge & Re-Assignment flow across WhatsApp and Email threads.",
        goal: "Merge a customer's frantic WhatsApp message with their pending email ticket into a single unified thread.",
        mustHaves: [
          "Side-by-side conversation preview comparing recent WhatsApp ping with open Email ticket",
          "Customer profile banner: 'Enterprise VIP · $24,000 ARR · 4 Active Seats'",
          "Conflict resolution toggle: 'Select primary channel for future replies (WhatsApp vs Email)'",
          "Team re-assignment selector routing thread to dedicated Enterprise Account Manager",
          "Internal team note composer with @mention capability",
        ],
        success:
          "Agent unifies fragmented conversations in 15 seconds without repeating questions to the customer.",
        pains:
          "Two agents unknowingly answering the same customer on different channels with conflicting answers.",
        quote:
          "Customers message us on WhatsApp while emailing support. We were giving them two different answers.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "Customer Sentiment History card with SLA breach countdown timer and CSAT trajectory.",
        goal: "Give a support agent immediate emotional context and urgency indicators before typing their first response.",
        mustHaves: [
          "Real-time SLA response countdown timer: '4m 12s remaining before SLA breach'",
          "AI sentiment analysis badge: 'Frustrated / High Churn Risk (Trending Negative)'",
          "Customer lifetime value pill and account tenure ('Customer for 3.2 years · $18k spent')",
          "Top 3 frequently raised issues tags ('Billing Error', 'API Timeout', 'Dashboard Slowdown')",
          "One-click 'Escalate to Tier 2 Engineer' priority trigger",
        ],
        success:
          "Agent adjusts tone appropriately and prioritizes high-risk enterprise tickets before breach.",
        pains:
          "Greeting a furious high-value enterprise client with cheerful generic support canned responses.",
        quote:
          "Knowing a customer is about to cancel before I type 'Hello' completely changes how I handle their issue.",
      },
    ],
  },
  {
    name: "VaultPay",
    industry: "Fintech / Global Contractor Payroll",
    description:
      "An automated cross-border payroll and tax compliance platform for fully remote engineering and design companies.",
    value:
      "Pay 50 international contractors in their local currencies with guaranteed tax withholding and localized contracts.",
    segment:
      "Startup founders, people operations managers, and international contractors, 22–50.",
    behaviors:
      "Runs monthly payroll on the 28th; generates W-8BEN and localized employment compliance documents.",
    role: "Fintech Growth Designer",
    age: [24, 49],
    goals:
      "Run monthly international payroll for 35 contractors in 14 countries with one click.",
    brand:
      "Deep Slate (#1E293B) and Mint (#059669) communicate institutional financial security.",
    tones: [
      {
        adjectives: "Compliant, trustworthy",
        note: "Transparent currency conversion rates, zero hidden bank fees, and clear tax audit trails.",
      },
      {
        adjectives: "Efficient, global",
        note: "Handles diverse currencies and national banking standards without clutter.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "International Contractor Tax Compliance form (W-8BEN / Local Equivalent) automated verification.",
        goal: "Onboard a software engineer based in Argentina and verify their tax identification and local bank details.",
        mustHaves: [
          "Country of tax residence selector with dynamic statutory form generator (W-8BEN vs Local VAT)",
          "Foreign Tax Identification Number (TIN/CUIT) input with real-time format regex validation",
          "Beneficiary bank routing picker (SWIFT / IBAN / Local clearing code)",
          "Cryptographic digital signature pad with legal perjury certification statement",
          "Instant automated compliance verification status checkmark",
        ],
        success:
          "Contractor completes tax verification in under 3 minutes without requiring manual HR review.",
        pains:
          "Wire transfers rejected due to typos in Brazilian CPF or Argentine CUIT tax numbers; IRS penalties.",
        quote:
          "Paying our engineer in Buenos Aires used to take 3 emails, 2 wire forms, and $65 in bank fees every month.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Contractor Payday Notification card with take-home pay breakdown, FX rate, and local bank delivery ETA.",
        goal: "Give a contractor complete clarity on their incoming monthly salary payment in their local currency.",
        mustHaves: [
          "Net payout amount header in local currency (e.g. '€4,250.00 EUR')",
          "Base currency conversion calculation display: '$4,620.00 USD @ 1.087 Mid-Market FX'",
          "Delivery status timeline: 'Sent by employer -> Cleared FX -> Arriving in Deutsche Bank account today by 5 PM'",
          "Downloadable PDF paystub receipt button",
          "One-tap 'Split into USD Savings' toggle",
        ],
        success:
          "Contractor feels celebrated on payday and understands the exact exchange rate applied without hidden cuts.",
        pains:
          "Mystery intermediary bank deductions eating 5% of monthly salary; wondering when money will clear.",
        quote:
          "Seeing the exact exchange rate and knowing my pay will hit my bank by 5 PM gives me total peace of mind.",
      },
    ],
  },
  {
    name: "NeuralForge",
    industry: "AI / Dataset Curation & Fine-Tuning",
    description:
      "A data preparation and synthetic generation studio for training and fine-tuning specialized domain-specific LLMs.",
    value:
      "Clean, deduplicate, and balance 500,000 instruction-tuning pairs to double model performance.",
    segment: "Machine learning engineers and AI research scientists, 24–45.",
    behaviors:
      "Inspects JSONL training datasets; cleans toxic outputs and semantic duplicates before running expensive GPU runs.",
    role: "ML Platform UX Designer",
    age: [24, 46],
    goals:
      "Identify and remove 12,000 near-duplicate training examples that cause model overfitting.",
    brand:
      "Cobalt Neural (#3B82F6) with Violet (#8B5CF6) highlights for deep learning infrastructure.",
    tones: [
      {
        adjectives: "Scientific, high-throughput",
        note: "Data density, cluster visualizations, and rapid keyboard tagging shortcuts.",
      },
      {
        adjectives: "Precise, transparent",
        note: "Shows exact cosine similarity scores and embedding distance clusters.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "Synthetic Training Pair Deduplication review flow with semantic similarity clustering slider.",
        goal: "Review 400 flagged duplicate question-answer pairs and prune redundant training rows with keyboard hotkeys.",
        mustHaves: [
          "Side-by-side prompt/completion comparison with highlighted semantic overlap",
          "Cosine similarity threshold slider (0.75 to 0.99) filtering duplicate sensitivity",
          "Rapid triage keyboard actions (J: Keep A, K: Keep B, D: Delete Both, S: Merge)",
          "Dataset quality balance metric updating in real time (+2.4% Estimated Eval Score)",
          "Batch prune confirmation dialog with undo grace window",
        ],
        success:
          "Engineer prunes 400 duplicate pairs in under 5 minutes using intuitive keyboard shortcuts.",
        pains:
          "Spending $20,000 on GPU cluster fine-tuning only for the model to memorize duplicate training rows.",
        quote:
          "Bad data in, bad model out. If our training pairs have duplicates, our fine-tuned model hallucinates loops.",
      },
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "PII & Toxic Content Sanitization ruleset configuration with live regex and entity previewer.",
        goal: "Configure automated redaction of customer phone numbers, credit cards, and confidential internal emails.",
        mustHaves: [
          "Entity redaction rule checklist: Names, Email addresses, Credit cards, SSNs, API keys",
          "Custom regex pattern builder with real-time test string matching preview",
          "Replacement strategy toggle (Replace with [REDACTED_TIN] vs Synthetic realistic substitution)",
          "Severity threshold score slider for toxic language filtering",
          "'Run Dry-Run on 1,000 Sample Rows' simulation button with flagged match highlights",
        ],
        success:
          "Safety engineer ensures zero customer PII leaks into the training dataset before fine-tuning begins.",
        pains:
          "Accidentally training a public model on private customer emails or confidential API secrets.",
        quote:
          "If our customer service bot repeats an employee's private phone number, we have a major privacy breach.",
      },
    ],
  },
  {
    name: "PortaMed",
    industry: "HealthTech / Emergency EMS Handover",
    description:
      "An emergency paramedic mobile app providing electronic patient care reporting (ePCR) and hospital trauma team handovers.",
    value:
      "Deliver critical patient trauma vitals to the receiving ER surgical team 10 minutes before the ambulance arrives.",
    segment:
      "Emergency Medical Technicians (EMTs), paramedics, and ER trauma charge nurses, 22–55.",
    behaviors:
      "Typing in a swaying ambulance traveling at 60 MPH with sirens blaring; wearing latex gloves.",
    role: "Critical Response UX Lead",
    age: [22, 54],
    goals:
      "Transmit Glasgow Coma Scale, oxygen saturation, and cardiac rhythm to the hospital trauma team in under 45 seconds.",
    brand:
      "Signal Red (#DC2626) and Clinical White (#FFFFFF) engineered for extreme high-adrenaline environments.",
    tones: [
      {
        adjectives: "Extreme-ergonomic, rapid",
        note: "Oversized tap targets (64px minimum), high contrast, zero unnecessary confirmation prompts.",
      },
      {
        adjectives: "Lifesaving, unambiguous",
        note: "Critical patient vitals are instantly legible from 4 feet away in a moving ambulance.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "45-Second Paramedic Trauma Vitals Handover summary for the receiving ER charge nurse.",
        goal: "Record a gunshot trauma victim's blood pressure, heart rate, and tourniquet application time while en route.",
        mustHaves: [
          "Giant numeric stepper keypad for Blood Pressure, Heart Rate, and O2 Saturation",
          "Glasgow Coma Scale (GCS) rapid tap calculator (Eye, Verbal, Motor scores)",
          "Tourniquet timer pill with prominent elapsed minutes warning indicator",
          "Hospital destination selector with live GPS ambulance ETA (e.g. 'Trauma Bay 2 · ETA 6 mins')",
          "One-tap 'Dispatch Pre-Arrival Trauma Alert to Hospital' primary action",
        ],
        success:
          "Paramedic transmits vital trauma parameters with gloved hands in 35 seconds without looking away from patient.",
        pains:
          "Clunky legacy software requiring tiny checkboxes while an ambulance bumps over potholes.",
        quote:
          "I have blood on my gloves, the siren is deafening, and the hospital needs to know the patient is in hemorrhagic shock.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "Real-time Patient ETA & Trauma Bay Readiness card for emergency department surgical teams.",
        goal: "Notify ER trauma surgeon of incoming penetrating chest trauma victim arriving in 4 minutes.",
        mustHaves: [
          "Incoming ambulance callsign and countdown timer: 'Medic 4 · ETA 3m 45s'",
          "Patient summary: '28M · Penetrating thoracic trauma · O2 Sat 88% · Intubated'",
          "Trauma Bay allocation banner: 'Assigned to Trauma Bay 1 · OR Team on standby'",
          "Blood bank prep checklist: '4 Units O-Negative requested and verified'",
          "Audio alert sound toggle for critical status changes",
        ],
        success:
          "Surgical team has blood units and ventilators in the trauma bay before the ambulance doors open.",
        pains:
          "Ambulances arriving unannounced with critical patients; scrambled hospital trauma responses.",
        quote:
          "Those four minutes of advance warning mean we have the blood warmed and the chest tube tray open.",
      },
    ],
  },
  {
    name: "ArtisanRow",
    industry: "E-Commerce / Bespoke Furniture Configurator",
    description:
      "A parametric 3D configurator and direct-to-consumer marketplace for custom solid wood dining tables and cabinetry.",
    value:
      "Customize heirloom solid walnut furniture to the exact inch and preview it in your living room in AR.",
    segment:
      "Homeowners and interior designers, 28–55, furnishing high-end residential spaces.",
    behaviors:
      "Measures dining room dimensions with tape measure; experiments with wood finishes and leg geometry.",
    role: "Principal 3D Commerce Designer",
    age: [27, 54],
    goals:
      "Configure a custom 96-inch black walnut dining table with live pricing and verified doorway delivery clearance.",
    brand:
      "Warm Timber Walnut (#78350F) and Linen Canvas (#F5F5F0) evoke master craftsmanship.",
    tones: [
      {
        adjectives: "Tactile, artisanal",
        note: "Rich wood grain textures, photorealistic lighting, and subtle tactile haptics.",
      },
      {
        adjectives: "Spatial, reassuring",
        note: "Clear dimensional callouts ensure expensive furniture fits through apartment stairwells.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable:
          "Parametric 3D Dining Table Customizer hero with timber grain picker, leg geometry, and live pricing.",
        goal: 'Customize table length (72" to 120"), edge profile (live edge vs beveled), and base steel geometry with instant price recalculation.',
        mustHaves: [
          "Interactive 3D viewport with 360-degree rotation and zoom on wood grain texture",
          "Timber species swatch selector: American Black Walnut, White Oak, Ash, Reclaimed Elm",
          "Dimension sliders (Length, Width, Height) with seating capacity indicator (e.g. 'Seats 8–10 people')",
          "Real-time price accumulator banner ($3,850 · Includes White Glove Delivery)",
          "'View in Your Room (AR)' QR code button for mobile handoff",
        ],
        success:
          "Customer customizes a $4,000 table with complete confidence in wood finish and room proportions.",
        pains:
          "Fear of spending thousands on a custom table only to dislike the wood stain; spatial uncertainty.",
        quote:
          "Ordering a $4,000 table online is terrifying if you can't see the exact wood grain and leg proportions.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "White-Glove Delivery Appointment Booking card with doorway clearance dimension verification.",
        goal: "Confirm a 2-hour delivery window and verify that a 96-inch table can clear the building elevator and hallway corners.",
        mustHaves: [
          "Scheduled delivery slot calendar picker (2-hour guaranteed arrival window)",
          "Doorway clearance checklist: 'Table boxed width: 42\" · Minimum hallway diagonal: 46\"'",
          "Elevator vs Stairs questionnaire toggle to allocate correct number of delivery personnel",
          "Special instructions text area for security gate codes and parking permit rules",
          "Delivery crew tracking status preview with day-of SMS reminder toggle",
        ],
        success:
          "Prevents failed deliveries caused by oversized furniture getting stuck in apartment stairwells.",
        pains:
          "Delivery truck arriving with a heavy table that can't fit into the freight elevator; rescheduled deliveries.",
        quote:
          "The delivery crew showed up with our table and it couldn't turn the corner in our stairwell. It was a nightmare.",
      },
    ],
  },
  {
    name: "TerraYield",
    industry: "Fintech / Farmland Fractional Investment",
    description:
      "An investment marketplace enabling retail and accredited investors to buy fractional shares in regenerative organic farmland.",
    value:
      "Hedge against inflation with farmland asset yields backed by audited water rights and organic crop harvests.",
    segment:
      "Retail investors, financial advisors, and eco-conscious savers, 25–58.",
    behaviors:
      "Invests $2,000–$50,000 per farm parcel; reviews quarterly harvest dividend distributions.",
    role: "Alternative Assets UX Designer",
    age: [25, 56],
    goals:
      "Invest $5,000 into an organic almond and pistachio orchard in California with verified senior water rights.",
    brand:
      "Terracotta Earth (#9A3412) and Sprout (#15803D) symbolize agricultural resilience.",
    tones: [
      {
        adjectives: "Grounded, analytical",
        note: "Soil quality indices, historical rainfall charts, and transparent dividend yield schedules.",
      },
      {
        adjectives: "Trustworthy, educational",
        note: "Demystifies agricultural lease structures and senior water rights for non-farmers.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "Farmland Crop Yield & Water Rights Projection card with historical quarterly dividend yield graphs.",
        goal: "Evaluate an 850-acre organic citrus farm's investment prospectus before committing $10,000.",
        mustHaves: [
          "Farm header: 'Kings River Organic Citrus · Fresno County, CA · Class 1 Senior Water Rights'",
          "Historical dividend return graph: 'Target Net IRR: 8.4% (4.2% Cash Yield + 4.2% Land Appreciation)'",
          "Senior water rights security score pill ('Tier 1 Surface Water + 2 On-Site Deep Solar Wells')",
          "Minimum investment requirement pill ($2,500) and funding progress bar (82% funded)",
          "'Invest in This Farm' high-contrast primary CTA button",
        ],
        success:
          "Investor understands the water risk and return mechanics in under 2 minutes without reading a 90-page PDF.",
        pains:
          "Drought and climate risk wiping out farmland value; complex legal agricultural leases.",
        quote:
          "In California farmland, water rights are everything. I need to know where the water comes from before I invest.",
      },
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "Accredited Investor Compliance Self-Certification flow with digital document verification.",
        goal: "Complete SEC accredited investor certification in under 90 seconds to unlock high-yield agricultural offerings.",
        mustHaves: [
          "Accreditation criteria selector (Net worth > $1M, Annual income > $200k, Series 7/65 license)",
          "Secure upload module for CPA letter or W-2 verification with end-to-end encryption badge",
          "Electronic legal disclosure checkbox regarding illiquid long-term real estate investments",
          "Automated identity verification status with green approved badge",
          "Direct redirect back to selected farmland investment allocation",
        ],
        success:
          "User passes regulatory compliance without waiting 3 days for back-office manual review.",
        pains:
          "Invasive, confusing financial questionnaires; uploading tax forms to untrusted web forms.",
        quote:
          "I've filled out accreditation forms that took 45 minutes and felt like an IRS audit. This took 60 seconds.",
      },
    ],
  },
]

export const NAMES = [
  "Dana Okafor",
  "Mateo Ruiz",
  "Priya Raman",
  "Jonah Feld",
  "Amara Mensah",
  "Luca Bianchi",
  "Hana Sato",
  "Theo Marsh",
  "Ines Duarte",
  "Kwame Asante",
  "Sofia Lindqvist",
  "Ravi Kulkarni",
  "Maya Cohen",
  "Omar Haddad",
  "Grace Whitfield",
  "Tomás Herrera",
  "Yuki Morita",
  "Nadia Petrov",
  "Elena Vasquez",
  "Samuel Adeyemi",
  "Freya Nilsen",
  "Arjun Mehta",
  "Clara Dubois",
  "Malik Johnson",
  "Rosa Castillo",
  "Benedikt Kraus",
  "Leilani Kahale",
  "Chidi Okeke",
  "Zara Hussain",
  "Owen Gallagher",
  "Mei Lin",
  "Isabel Moreno",
  "Felix Wagner",
  "Aiyana Redcloud",
  "Noor Khalil",
  "Ruth Abernathy",
]

export interface ConstraintSeed {
  text: string
  platform?: Platform
}

export const CONSTRAINTS: ConstraintSeed[] = [
  { text: "Must meet WCAG 2.1 AA contrast; no color-only status indicators." },
  {
    text: "Minimum 44×44px touch targets; primary action within the bottom third of the screen.",
    platform: "Mobile",
  },
  {
    text: "Must target low-end Android devices: avoid heavy blur, large shadows and video.",
    platform: "Mobile",
  },
  {
    text: "Layout must work at both 1280px and 1920px widths without empty dead zones.",
    platform: "Desktop",
  },
  {
    text: "Fully keyboard operable with visible focus states.",
    platform: "Desktop",
  },
  { text: "Text must survive 200% scaling without truncating key data." },
  {
    text: "Engineering ships with an existing component library - no bespoke form controls.",
  },
  {
    text: "Strings will be localized; allow ~35% longer copy for German and French.",
  },
  { text: "Dark mode ships on day one; avoid pure black backgrounds." },
  {
    text: "Motion must respect prefers-reduced-motion; no essential info conveyed by animation.",
  },
  { text: "Time-box: one day. Deliver one primary frame plus state variants." },
  {
    text: "Limit to 2 typefaces and a single icon set for a fast dev handoff.",
  },
]
