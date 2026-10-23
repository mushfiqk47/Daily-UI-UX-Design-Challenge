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
  {
    name: "Canopy",
    industry: "Real Estate / Co-living",
    description:
      "A co-living space management app handling room assignments, shared amenity bookings and community events.",
    value:
      "Find your room, book the rooftop and know your neighbors before move-in day.",
    segment:
      "Young professionals, 22–35, relocating to a new city and choosing co-living for affordability and social connection.",
    behaviors:
      "Browse listings on phone during commute; book laundry and gym slots weekly; attend 1–2 community events a month.",
    role: "recently relocated marketing coordinator",
    age: [23, 34],
    goals:
      "Settle into a new city quickly with minimal friction around housing logistics.",
    brand:
      "Brand palette is Sage Green (#6B8E6B) and Warm Sandstone; illustrations are flat and textured.",
    tones: [
      {
        adjectives: "Inviting, communal",
        note: "Warm tones, rounded corners, community board aesthetic.",
      },
      {
        adjectives: "Practical, modern",
        note: "Clean scheduling grids with friendly microcopy.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The amenity booking flow for a shared rooftop terrace with time-slot selection and guest limits.",
        goal: "Reserve a 2-hour rooftop slot for a small dinner gathering of 6 people.",
        mustHaves: [
          "Calendar date picker with available slots highlighted",
          "Guest count stepper with building max capacity indicator",
          "Quiet hours notice for bookings after 9 PM",
          "Booking confirmed state with calendar export",
          "Slot-taken conflict error with alternative suggestions",
        ],
        success:
          "Booking completes in under 20 seconds; quiet hour rules are clear before confirmation.",
        pains:
          "Double-booked amenities; unclear guest policies; noise complaints from neighbors.",
        quote:
          "I just want the rooftop for two hours without a spreadsheet war.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A community event card for an upcoming building potluck with RSVP and dish sign-up.",
        goal: "Show event details and let residents RSVP with a dish commitment in one tap.",
        mustHaves: [
          "Event photo, date, time and location within the building",
          "RSVP button with attendee count and capacity",
          "Dish sign-up categories (appetizer, main, dessert, drinks)",
          "Event full waitlist state",
          "Event cancelled state with refund/credit note",
        ],
        success:
          "Residents see who else is going and what dishes are covered before committing.",
        pains:
          "Events with 20 desserts and no mains; not knowing how many people are coming.",
        quote: "Sign me up, but tell me if someone's already bringing hummus.",
      },
    ],
  },
  {
    name: "Driftwood",
    industry: "Travel / Surf forecasting",
    description:
      "A surf trip planning app combining swell forecasts, crowd density predictions and local board rental availability.",
    value:
      "Pick the right beach, the right day, and show up with a board waiting.",
    segment:
      "Intermediate surfers, 20–45, planning weekend surf trips within a 3-hour drive radius.",
    behaviors:
      "Check swell charts Thursday night to plan Saturday trips; book board rentals at dawn.",
    role: "graphic designer and weekend longboarder",
    age: [22, 42],
    goals:
      "Catch clean waves without driving to a crowded break or arriving at the wrong tide.",
    brand:
      "Ocean Blue (#1E6091) and Dune Sand; photography-first with minimal chrome.",
    tones: [
      {
        adjectives: "Fluid, coastal",
        note: "Watercolor gradients, tide-line motifs, large imagery.",
      },
      {
        adjectives: "Precise, current",
        note: "Real-time data presented with weather-station authority.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Weekend Forecast" comparison widget ranking 5 nearby breaks by conditions.',
        goal: "Help a surfer pick the best break for Saturday morning in under 10 seconds.",
        mustHaves: [
          "Break name, distance, swell height and wind direction summary",
          "Crowd prediction indicator (empty / moderate / packed)",
          "Tide chart thumbnail for the surfable window",
          "Best-pick highlight with plain-language reason",
          "Data stale warning when offline or forecast aged",
        ],
        success:
          "The best option is obvious at a glance; crowd prediction sets realistic expectations.",
        pains:
          "Driving an hour to a blown-out break; parking lot packed by 7 AM; checking four apps.",
        quote:
          "Tell me where to go. I have one morning and three hours of daylight.",
      },
    ],
  },
  {
    name: "Quorum",
    industry: "Civic / HOA Management",
    description:
      "A homeowner association management platform handling dues, maintenance requests and community votes.",
    value:
      "Pay dues, report issues and vote on proposals without attending a 3-hour board meeting.",
    segment:
      "Condo and townhome owners, 30–70, in communities of 50–500 units.",
    behaviors:
      "Check monthly for dues; submit maintenance requests sporadically; vote during election season.",
    role: "condo owner and pediatric dentist",
    age: [33, 68],
    goals:
      "Stay informed about community decisions and get maintenance issues resolved quickly.",
    brand:
      "Civic Navy (#1E3A5F) and clean white; must feel institutional but approachable.",
    tones: [
      {
        adjectives: "Transparent, democratic",
        note: "Voting results are public; financials are readable by non-accountants.",
      },
      {
        adjectives: "Structured, respectful",
        note: "Formal enough for legal decisions, warm enough for community.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          "The maintenance request submission form with photo upload and urgency selector.",
        goal: "Report a leaking hallway ceiling with photos and get a tracking number in 30 seconds.",
        mustHaves: [
          "Category picker (plumbing, electrical, common area, landscaping)",
          "Urgency selector with response-time expectations",
          "Photo upload with annotation capability",
          "Unit number auto-fill from profile",
          "Submitted confirmation with tracking number and estimated response time",
        ],
        success:
          "A resident can file a report one-handed while pointing at the leak with the other.",
        pains:
          "Emailing the board and getting no response; not knowing if anyone saw the request.",
        quote: "There's water dripping from the ceiling. Who do I even tell?",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "A community proposal voting card with arguments for/against and current tally.",
        goal: "Let an owner review a pool renovation proposal and cast an informed vote.",
        mustHaves: [
          "Proposal title, sponsor and submission date",
          "Cost impact per unit per month",
          "Arguments for and against (submitted by residents)",
          "Current vote tally with quorum progress indicator",
          "Voting closed state with outcome and next steps",
        ],
        success:
          "An owner understands the financial impact and community sentiment before voting.",
        pains:
          "Decisions made by the 12 people who attend meetings; no transparency on costs.",
        quote:
          "I missed the meeting. Did they really vote to spend $80,000 on a fountain?",
      },
    ],
  },
  {
    name: "Patchwork",
    industry: "Fashion / Alteration Services",
    description:
      "A platform connecting customers with local tailors and seamstresses for clothing alterations and repairs.",
    value:
      "Get your favorite jeans hemmed or a vintage jacket repaired by a vetted local tailor.",
    segment:
      "Fashion-conscious adults, 22–55, who value garment longevity and proper fit.",
    behaviors:
      "Search for tailors after a purchase or seasonal wardrobe refresh; compare reviews and prices.",
    role: "management consultant who travels for work",
    age: [27, 48],
    goals:
      "Find a reliable tailor nearby and get alterations done within the week.",
    brand:
      "Stitch Copper (#B87333) and Linen White; tactile, handmade quality feel.",
    tones: [
      {
        adjectives: "Artisanal, personal",
        note: "Showcases tailor craftsmanship; each profile feels like a workshop visit.",
      },
      {
        adjectives: "Efficient, local",
        note: "Quick booking, clear pricing, neighborhood-centric.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A tailor profile card with specialties, pricing, turnaround time and reviews.",
        goal: "Help a customer choose between three nearby tailors for a suit jacket sleeve shortening.",
        mustHaves: [
          "Tailor photo, name, distance and rating",
          "Specialty tags (suits, denim, bridal, leather)",
          "Starting price for common alterations",
          "Average turnaround time",
          "Booking availability indicator (next open slot)",
        ],
        success:
          "A customer can compare and pick a tailor in under 30 seconds based on specialty and availability.",
        pains:
          "No idea what alterations cost; fear of ruining an expensive garment; long wait times.",
        quote:
          "I need someone who actually knows how to work with wool, not just hemming jeans.",
      },
    ],
  },
  {
    name: "Nimbus",
    industry: "EdTech / Language Learning",
    description:
      "A conversational language learning app that uses AI voice partners for 10-minute daily speaking practice.",
    value:
      "Practice speaking Spanish with a patient AI partner who adjusts to your level, anytime.",
    segment:
      "Adult language learners, 25–55, who can read but freeze when speaking.",
    behaviors:
      "Practice during commute or lunch break; 10–15 minutes daily; track streaks.",
    role: "accountant learning Spanish for an upcoming relocation",
    age: [28, 52],
    goals:
      "Hold a basic conversation in Spanish within 3 months of daily practice.",
    brand:
      "Conversation Purple (#7E57C2) and warm cream; playful but grown-up.",
    tones: [
      {
        adjectives: "Encouraging, patient",
        note: "Never corrects harshly; celebrates attempts, not just accuracy.",
      },
      {
        adjectives: "Conversational, alive",
        note: "Feels like talking to a friend, not taking a test.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Daily Conversation" practice session widget with pronunciation feedback.',
        goal: "Complete a 10-minute roleplay ordering coffee in Spanish with real-time pronunciation scoring.",
        mustHaves: [
          "AI partner speech bubble with audio playback",
          "Microphone input with waveform visualization",
          "Pronunciation accuracy score per phrase",
          "Hint system for when the learner is stuck",
          "Session complete summary with streak count",
        ],
        success:
          "A nervous beginner feels safe to speak and sees measurable improvement.",
        pains:
          "Too embarrassed to practice with real people; apps that only teach reading, not speaking.",
        quote: "I can read a menu in Spanish. I just can't order from it.",
      },
      {
        type: "Settings",
        platform: "Mobile",
        deliverable:
          "The practice preferences panel with difficulty, topic and voice partner settings.",
        goal: "Customize conversation topics and AI partner speaking speed for a beginner level.",
        mustHaves: [
          "Difficulty level selector (beginner, intermediate, advanced)",
          "Topic category chips (travel, food, work, medical, shopping)",
          "AI voice speed slider (slow, natural, fast)",
          "Daily practice reminder time picker",
          "Saved confirmation with tomorrow's topic preview",
        ],
        success:
          "Settings feel like personalizing a study buddy, not configuring software.",
        pains:
          "AI speaking too fast; irrelevant conversation topics; forgetting to practice.",
        quote:
          "Slow down. I'm not fluent yet. And stop asking me about quantum physics.",
      },
    ],
  },
  {
    name: "Ironclad",
    industry: "Insurance / Home Warranty",
    description:
      "A home warranty claims and contractor dispatch app for homeowners with appliance and systems coverage.",
    value:
      "File a claim for your broken AC and get a vetted technician dispatched within hours, not days.",
    segment:
      "Homeowners, 30–65, with home warranty plans covering HVAC, plumbing and appliances.",
    behaviors:
      "File claims during emergencies (AC fails in July, water heater bursts); track repair status anxiously.",
    role: "dual-income parent with a house built in the 1980s",
    age: [32, 62],
    goals:
      "Get a broken appliance repaired quickly without paying out of pocket beyond the service fee.",
    brand:
      "Shield Blue (#2B4C7E) and warm white; trustworthy, insurance-grade solidity.",
    tones: [
      {
        adjectives: "Reassuring, direct",
        note: "Claim status is always visible; no corporate runaround language.",
      },
      {
        adjectives: "Urgent, responsive",
        note: "Emergency claims feel prioritized, not queued behind routine requests.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The emergency AC claim filing flow with symptom selector and technician dispatch tracker.",
        goal: "File a claim for a dead air conditioner on a 100-degree day and see when help arrives.",
        mustHaves: [
          "Appliance/system category picker (HVAC, plumbing, electrical, appliance)",
          "Symptom checklist (not cooling, strange noise, leaking, won't turn on)",
          "Coverage confirmation with service fee amount",
          "Technician dispatched state with name, photo and ETA",
          "Claim denied state with clear reason and appeal option",
        ],
        success:
          "A sweating homeowner files a claim in 60 seconds and knows exactly when the tech arrives.",
        pains:
          "Hour-long hold times; unclear coverage; technicians who no-show.",
        quote:
          "It's 102 degrees, my AC is dead, and I've been on hold for 45 minutes.",
      },
    ],
  },
  {
    name: "Fieldnote",
    industry: "Research / Qualitative Data",
    description:
      "A qualitative research tool for UX researchers to capture, tag and synthesize interview notes in the field.",
    value:
      "Turn scattered interview notes into organized insights without retyping a single word.",
    segment:
      "UX researchers and design strategists, 25–45, conducting 5–15 user interviews per project.",
    behaviors:
      "Take notes during 45-minute interviews; synthesize across sessions; present findings to stakeholders.",
    role: "senior UX researcher at a health-tech startup",
    age: [26, 44],
    goals:
      "Capture rich interview data in real time and surface patterns across 12 participant sessions.",
    brand:
      "Research Teal (#0D7377) and warm paper tones; academic rigor meets modern tooling.",
    tones: [
      {
        adjectives: "Focused, fluid",
        note: "Minimalist capture mode during interviews; rich analysis mode after.",
      },
      {
        adjectives: "Rigorous, visual",
        note: "Affinity clustering and theme extraction feel tactile and spatial.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The real-time interview capture form with timestamped notes, tags and highlight markers.",
        goal: "Capture key quotes and observations during a 45-minute user interview without breaking flow.",
        mustHaves: [
          "Timestamped note entry with auto-advancing timestamps",
          "Quick-tag chips (pain point, workaround, feature request, quote)",
          "Highlight marker for key moments",
          "Participant info header (pseudonym, segment, session number)",
          "Session saved confirmation with transcript link",
        ],
        success:
          "Researcher captures 30+ tagged notes without looking away from the participant for more than 2 seconds.",
        pains:
          "Trying to type and maintain eye contact; losing context between sessions; messy sticky notes.",
        quote:
          "I need to listen, not transcribe. But I also can't lose that quote.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Emerging Themes" synthesis widget showing tag frequency and quote clusters across sessions.',
        goal: "Surface the top 5 recurring pain points across 10 completed interviews.",
        mustHaves: [
          "Tag frequency bar chart sorted by occurrence",
          "Quote cluster preview grouped by theme",
          "Session coverage indicator (10 of 12 interviews analyzed)",
          "Export to presentation format button",
          "No-data-yet empty state with import prompt",
        ],
        success:
          "Researcher identifies the top theme in 10 seconds; stakeholders get a clear data trail.",
        pains:
          "Manually re-reading 10 transcripts to find patterns; presentation prep taking longer than research.",
        quote:
          "I spent more time organizing my notes than actually analyzing them.",
      },
    ],
  },
  {
    name: "Meridian",
    industry: "Travel / Airport Lounge Access",
    description:
      "A digital pass app providing pay-per-visit access to premium airport lounges without airline status or annual memberships.",
    value:
      "Walk into any partner lounge worldwide for a flat fee, no elite status required.",
    segment:
      "Occasional business travelers, 25–50, who fly 4–10 times a year and want lounge access without a premium credit card.",
    behaviors:
      "Buy lounge access at the gate 30 minutes before boarding; compare lounge amenities and reviews.",
    role: "freelance consultant who flies monthly for client work",
    age: [27, 48],
    goals:
      "Find a quiet lounge with Wi-Fi and a shower during a 4-hour layover.",
    brand:
      "First Class Charcoal (#2D2D2D) and Champagne Gold; luxury without pretension.",
    tones: [
      {
        adjectives: "Premium, accessible",
        note: "Luxury lounge quality in copy and design, but pricing feels democratic.",
      },
      {
        adjectives: "Swift, confident",
        note: "QR entry in seconds; no fumbling with confirmation emails at the door.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A lounge detail card with amenities, photos, real-time capacity and entry price.",
        goal: "Help a traveler choose between two lounges in Terminal 2 during a layover.",
        mustHaves: [
          "Lounge name, terminal location and walking time from gate",
          "Amenity icons (shower, Wi-Fi, food, bar, quiet zone)",
          "Real-time occupancy indicator (quiet / moderate / crowded)",
          "Entry price with any member discount applied",
          "Entry QR code state after purchase",
        ],
        success:
          "Traveler picks the better lounge in 10 seconds based on capacity and shower availability.",
        pains:
          "Showing up to a packed lounge; paying $60 for stale sandwiches; no shower information.",
        quote:
          "I have a 5-hour layover and I smell like a redeye. Is there a shower?",
      },
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "The lounge entry purchase and QR code generation flow.",
        goal: "Buy lounge access and present a scannable QR code at the reception desk in under 30 seconds.",
        mustHaves: [
          "Lounge summary with price and validity window",
          "Saved payment method selector with Apple Pay option",
          "Guest add-on option with per-person pricing",
          "QR code display optimized for scanner readability",
          "Entry expired state with re-purchase option",
        ],
        success:
          "Traveler pays and enters without stopping to check email for a confirmation PDF.",
        pains:
          "Fumbling with credit cards at the desk; expired digital passes; slow checkout.",
        quote: "They're boarding in 40 minutes. I just want in.",
      },
    ],
  },
  {
    name: "Grainline",
    industry: "Food / Specialty Coffee",
    description:
      "A specialty coffee subscription and brew guide app for single-origin coffee enthusiasts.",
    value:
      "Discover roasters, learn brew methods and dial in your grind for every new bag.",
    segment:
      "Home coffee brewers, 24–50, who own a pour-over or espresso setup and buy specialty beans monthly.",
    behaviors:
      "Brew every morning; adjust grind size experimentally; rate coffees and track favorites.",
    role: "product manager and home espresso tinkerer",
    age: [25, 47],
    goals:
      "Brew cafe-quality coffee at home and discover interesting new origins.",
    brand:
      "Roast Brown (#5D3A1A) and Cream; coffee-shop warmth with precise typography.",
    tones: [
      {
        adjectives: "Craft, knowledgeable",
        note: "Tasting notes feel earned, not pretentious; brew guides are practical.",
      },
      {
        adjectives: "Warm, precise",
        note: "Timer and ratio displays are legible in a steamy kitchen.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Brew Timer" widget with pour-over recipe steps, ratio calculator and countdown.',
        goal: "Guide a brewer through a 4-pour V60 recipe with precise timing and water amounts.",
        mustHaves: [
          "Step-by-step pour instructions with water amount per pour",
          "Countdown timer with haptic pulse at each pour interval",
          "Coffee-to-water ratio calculator based on dose input",
          "Brew complete state with tasting note prompt",
          "Recipe saved state with grind adjustment suggestion",
        ],
        success:
          "A beginner follows the recipe and produces a balanced cup on the first try.",
        pains:
          "Guessing water amounts; forgetting which pour they're on; inconsistent results.",
        quote:
          "Was that my third pour or my fourth? My coffee tastes different every time.",
      },
    ],
  },
  {
    name: "Sailthread",
    industry: "B2B / Recruitment CRM",
    description:
      "A lightweight candidate relationship management tool for in-house recruiters at mid-size tech companies.",
    value:
      "Track every candidate touchpoint from first outreach to offer acceptance in one timeline.",
    segment:
      "In-house recruiters and talent partners, 25–45, at 100–1000 person tech companies.",
    behaviors:
      "Process 30–50 active candidates per role; send personalized outreach on LinkedIn; coordinate interview panels.",
    role: "senior technical recruiter",
    age: [26, 43],
    goals:
      "Fill engineering roles in 45 days while keeping every candidate warm and informed.",
    brand:
      "Talent Indigo (#4338CA) and light gray; professional but not corporate-stuffy.",
    tones: [
      {
        adjectives: "Organized, human",
        note: "Pipeline views that remind recruiters these are people, not tickets.",
      },
      {
        adjectives: "Fast, contextual",
        note: "Every candidate card shows the last interaction and next action.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "A candidate pipeline card with interview stage, last touchpoint and next action indicator.",
        goal: "Give a recruiter instant context on a candidate before a follow-up call.",
        mustHaves: [
          "Candidate name, role applied, current stage (screening, onsite, offer)",
          "Last interaction type and date (email sent 3 days ago)",
          "Next action badge (schedule onsite, send offer, check references)",
          "Days in current stage counter with SLA warning",
          "Candidate withdrew state with reason tag",
        ],
        success:
          "Recruiter picks up context in 3 seconds without opening the full profile.",
        pains:
          "Losing track of where 40 candidates are; candidates ghosted because follow-up slipped.",
        quote:
          "Did I email her back after the phone screen? I honestly can't remember.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The interview scorecard submission form for a panel interviewer.",
        goal: "Capture structured interview feedback within 10 minutes of the session ending.",
        mustHaves: [
          "Candidate name, role and interview type header",
          "Competency rating grid (technical, communication, culture, problem-solving)",
          "Strengths and concerns free-text fields",
          "Hire / No hire / Strong hire recommendation selector",
          "Submitted confirmation with debrief calendar link",
        ],
        success:
          "Interviewer submits meaningful feedback before their next meeting starts.",
        pains:
          "Interviewers forgetting details by end of day; inconsistent feedback formats.",
        quote:
          "If I don't write it down in 10 minutes, the interview is a blur.",
      },
    ],
  },
  {
    name: "Hearthstone",
    industry: "Insurance / Renters",
    description:
      "A mobile-first renters insurance app with instant quotes, claims filing and personal property inventory.",
    value:
      "Get covered in 3 minutes and file a claim from your phone if something goes wrong.",
    segment:
      "Renters, 20–40, in urban apartments who have never purchased insurance before.",
    behaviors:
      "Sign up when a landlord requires proof of insurance; file claims after theft or water damage.",
    role: "graduate student renting their first apartment",
    age: [21, 35],
    goals:
      "Get affordable coverage quickly and understand what is actually covered.",
    brand:
      "Hearth Orange (#E07B39) and soft white; approachable, not corporate insurance.",
    tones: [
      {
        adjectives: "Simple, honest",
        note: "Plain-language policy explanations; no insurance jargon.",
      },
      {
        adjectives: "Quick, reassuring",
        note: "Claims feel supported, not adversarial.",
      },
    ],
    tasks: [
      {
        type: "Onboarding",
        platform: "Mobile",
        deliverable:
          "The 3-step quote flow: coverage amount, deductible selection and instant price.",
        goal: "Get a first-time renter from zero to an active policy in under 4 minutes.",
        mustHaves: [
          "Personal property coverage slider with common-item value examples",
          "Deductible selector with monthly price impact shown live",
          "Liability coverage explanation in plain language",
          "Instant quote summary with monthly cost",
          "Policy activated state with proof-of-insurance PDF download",
        ],
        success:
          "A 22-year-old who has never bought insurance understands what they're paying for.",
        pains:
          "Insurance jargon; unclear what's covered; slow paper-based sign-up processes.",
        quote:
          "My landlord needs proof of insurance by Friday. I don't even know where to start.",
      },
    ],
  },
  {
    name: "Trellis",
    industry: "Productivity / Project Planning",
    description:
      "A lightweight project planning tool for small creative studios managing 3–8 concurrent client projects.",
    value:
      "See every project's health, deadlines and team workload on one screen.",
    segment:
      "Creative directors and project managers, 28–50, at boutique design, video or branding studios.",
    behaviors:
      "Check project status in Monday morning standup; reassign work when someone is overloaded.",
    role: "creative director at a 12-person branding studio",
    age: [30, 50],
    goals:
      "Keep projects on schedule without micromanaging and spot overloaded team members early.",
    brand:
      "Studio Slate (#3E4C59) and accent Coral; professional creative energy.",
    tones: [
      {
        adjectives: "Visual, spatial",
        note: "Timeline views and workload heat maps over spreadsheet rows.",
      },
      {
        adjectives: "Calm, strategic",
        note: "Surfaces risks early without panic; status is always current.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Team Workload" heat map widget showing capacity across the next 2 weeks.',
        goal: "Spot that one designer is at 140% capacity next week and redistribute work.",
        mustHaves: [
          "Team member rows with daily capacity bars (green / amber / red)",
          "Project color coding on each allocation block",
          "Drag-to-reassign interaction between team members",
          "Overloaded team member warning badge",
          "No-assignments empty state for new hires",
        ],
        success:
          "Creative director spots the bottleneck and fixes it in 30 seconds with a drag.",
        pains:
          "Finding out someone is drowning when they miss a deadline; invisible workload imbalances.",
        quote:
          "Maria has been working weekends and nobody noticed until she burned out.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A project health summary card for the Monday standup view.",
        goal: "Give a 10-second status read on a project's timeline, budget and blockers.",
        mustHaves: [
          "Project name, client and phase (discovery, design, production, QA)",
          "Timeline progress bar with deadline date",
          "Budget burn indicator (% spent vs % complete)",
          "Active blocker count with top blocker preview",
          "Project completed state with final metrics",
        ],
        success:
          "The team knows which projects need attention before the standup starts.",
        pains:
          "30-minute standups to figure out what everyone already knows; surprise scope creep.",
        quote:
          "I need the five-second version. Is this project healthy or not?",
      },
    ],
  },
  {
    name: "Radiant",
    industry: "Beauty / Skincare Routine",
    description:
      "A personalized skincare routine builder that recommends products based on skin type, concerns and ingredient compatibility.",
    value:
      "Build a routine that actually works for your skin and stop wasting money on products that clash.",
    segment:
      "Skincare enthusiasts, 18–40, overwhelmed by product choices and conflicting advice online.",
    behaviors:
      "Research ingredients on Reddit; buy 2–3 new products monthly; track skin progress with selfies.",
    role: "college student with acne-prone combination skin",
    age: [18, 38],
    goals:
      "Clear up hormonal acne without over-drying skin or causing ingredient conflicts.",
    brand:
      "Glow Pink (#E8A0BF) and clean white; dermatologist credibility with beauty editorial style.",
    tones: [
      {
        adjectives: "Scientific, approachable",
        note: "Ingredient explanations feel like a smart friend, not a textbook.",
      },
      {
        adjectives: "Personal, progressive",
        note: "Routines evolve with skin changes; never one-size-fits-all.",
      },
    ],
    tasks: [
      {
        type: "Onboarding",
        platform: "Mobile",
        deliverable:
          "The skin profile quiz (step 3 of 5): concerns, sensitivities and current routine.",
        goal: "Capture skin concerns and ingredient sensitivities to personalize product recommendations.",
        mustHaves: [
          "Concern multi-select chips (acne, dark spots, fine lines, redness, texture)",
          "Known sensitivity tags (fragrance, retinol, salicylic acid)",
          "Current routine complexity indicator (none, basic, multi-step)",
          "Progress bar and back navigation",
          "Validation for selecting at least one concern",
        ],
        success:
          "A beginner feels guided, not quizzed; an advanced user can be precise about sensitivities.",
        pains:
          "Generic product recommendations; applying retinol and AHA on the same night; wasted money.",
        quote: "I bought $200 in serums from TikTok and my face got worse.",
      },
    ],
  },
  {
    name: "Lockstep",
    industry: "B2B / Compliance Training",
    description:
      "A compliance training and certification tracker for regulated industries like finance, healthcare and food safety.",
    value:
      "Know exactly who needs to recertify and when, before the auditor asks.",
    segment:
      "Compliance officers and HR managers, 30–55, at companies with 50–500 employees in regulated sectors.",
    behaviors:
      "Run quarterly compliance reports; chase employees to complete training; prepare for annual audits.",
    role: "compliance manager at a regional bank",
    age: [32, 54],
    goals:
      "Achieve 100% training completion rates and pass regulatory audits without findings.",
    brand:
      "Audit Green (#2D6A4F) and neutral gray; institutional trust without being dull.",
    tones: [
      {
        adjectives: "Authoritative, clear",
        note: "Dashboards that an auditor would trust; status never ambiguous.",
      },
      {
        adjectives: "Motivating, fair",
        note: "Nudges employees toward completion without shame.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Compliance Dashboard" widget showing organization-wide training completion and upcoming expirations.',
        goal: "Give a compliance officer a 10-second health check on training status across all departments.",
        mustHaves: [
          "Overall completion percentage with department breakdown",
          "Expiring-soon count (certifications due in next 30 days)",
          "Overdue employees list with days past due",
          "One-click bulk reminder send for overdue group",
          "Audit-ready export button (PDF/CSV)",
        ],
        success:
          "Compliance officer identifies the 8 overdue employees and sends reminders in one click.",
        pains:
          "Tracking certifications in spreadsheets; surprise audit findings; employees ignoring training emails.",
        quote:
          "The auditor asked for proof of anti-money-laundering training. I had 6 hours to produce it.",
      },
    ],
  },
  {
    name: "Pinecone",
    industry: "Outdoor / Camping Reservations",
    description:
      "A campsite reservation platform for state and national parks with real-time availability and trip planning tools.",
    value:
      "Find and book the perfect campsite months in advance, even at the most popular parks.",
    segment:
      "Weekend campers and families, 25–55, planning 2–6 camping trips per year.",
    behaviors:
      "Book 3–6 months ahead for popular parks; compare campsites by shade, proximity to water and hookups.",
    role: "elementary school teacher planning family camping trips",
    age: [28, 52],
    goals:
      "Secure a good campsite at a popular park without refreshing a website at midnight on release day.",
    brand:
      "Forest Pine (#355E3B) and Campfire Amber; outdoorsy and trustworthy.",
    tones: [
      {
        adjectives: "Natural, informative",
        note: "Trail-map aesthetics with practical campsite details.",
      },
      {
        adjectives: "Helpful, patient",
        note: "Guides first-time campers without condescension.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A campsite detail card with photos, amenities, terrain info and availability calendar.",
        goal: "Help a family choose between three campsites at Yosemite based on shade, restroom proximity and RV fit.",
        mustHaves: [
          "Campsite photos and map pin location",
          "Amenity icons (water, electric, restroom distance, shade level)",
          "Vehicle size compatibility (tent only, car, RV with max length)",
          "Availability calendar for the next 3 months",
          "Reserved state with cancellation policy",
        ],
        success:
          "A parent can pick the right site for their tent and two kids in 30 seconds.",
        pains:
          "No campsite photos; discovering the site is next to a noisy generator area; no shade information.",
        quote:
          "We drove 5 hours and our 'shaded' campsite was in full sun next to the dumpster.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The reservation checkout form with party size, vehicle type and add-on options.",
        goal: "Complete a 3-night campsite reservation with a firewood bundle and extra vehicle pass.",
        mustHaves: [
          "Date range selector with nightly rate display",
          "Party size and vehicle count inputs",
          "Add-on options (firewood, extra vehicle, bear canister rental)",
          "Total cost summary updating in real time",
          "Booking confirmed state with check-in instructions and gate code",
        ],
        success:
          "Reservation completes without confusion about what's included vs extra cost.",
        pains:
          "Hidden fees at checkout; no gate code information until arrival day; unclear cancellation terms.",
        quote:
          "I booked the site but nobody told me I needed a separate bear canister reservation.",
      },
    ],
  },
  {
    name: "Embark",
    industry: "HR / Employee Onboarding",
    description:
      "A new-hire onboarding platform that guides employees through paperwork, equipment setup and team introductions in their first week.",
    value:
      "Make day one feel organized and welcoming, not overwhelming and bureaucratic.",
    segment:
      "HR coordinators at 50–500 person companies and new hires across all departments.",
    behaviors:
      "New hires complete tasks in bursts between orientation sessions; HR tracks completion dashboards.",
    role: "new software engineer starting at a mid-size SaaS company",
    age: [22, 45],
    goals:
      "Complete all first-week paperwork, get equipment set up and meet the team without feeling lost.",
    brand:
      "Welcome Blue (#4A90D9) and warm white; professional but genuinely warm.",
    tones: [
      {
        adjectives: "Welcoming, structured",
        note: "Checklist progress feels accomplishing, not bureaucratic.",
      },
      {
        adjectives: "Human, celebratory",
        note: "Milestones are acknowledged; the new hire feels expected and valued.",
      },
    ],
    tasks: [
      {
        type: "Onboarding",
        platform: "Desktop",
        deliverable:
          'The "Your First Week" checklist dashboard for a new hire.',
        goal: "Guide a new engineer through 12 onboarding tasks across their first 5 days.",
        mustHaves: [
          "Day-by-day task grouping (Day 1: paperwork, Day 2: tools, Day 3: team)",
          "Task completion checkboxes with estimated time per task",
          "Required vs optional task distinction",
          "Progress bar with completion percentage",
          "All-complete celebration state with team welcome message",
        ],
        success:
          "New hire knows exactly what to do next at every point in their first week.",
        pains:
          "20 emails on day one with conflicting instructions; not knowing who to ask for help.",
        quote:
          "My first day was so chaotic I didn't even know where the bathroom was until 3 PM.",
      },
    ],
  },
  {
    name: "Volterra",
    industry: "Education / Museum Audio Guide",
    description:
      "A self-guided museum tour app with audio narration, AR artifact overlays and skip-the-line ticketing.",
    value:
      "Explore at your own pace with expert commentary and never wait in a ticket line.",
    segment:
      "Museum visitors, 18–70, ranging from casual tourists to art history students.",
    behaviors:
      "Download the guide on museum Wi-Fi; listen to 60-second clips per exhibit; skip rooms they find less interesting.",
    role: "retired high school history teacher visiting a new city",
    age: [22, 70],
    goals:
      "Learn deeply about 10–15 key pieces without the exhaustion of a 3-hour guided tour.",
    brand:
      "Gallery Charcoal (#333333) and Marble White; minimal, letting the art be the color.",
    tones: [
      {
        adjectives: "Scholarly, accessible",
        note: "Expert knowledge delivered conversationally; no art-world gatekeeping.",
      },
      {
        adjectives: "Quiet, immersive",
        note: "UI disappears when audio plays; the art commands attention.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          "The audio guide player widget with exhibit info, narration controls and next-stop wayfinding.",
        goal: "Play a 90-second narration about a painting and guide the visitor to the next highlight.",
        mustHaves: [
          "Exhibit title, artist and year with thumbnail",
          "Audio progress bar with 15-second skip controls",
          "Playback speed toggle (0.75x, 1x, 1.25x)",
          "Next stop wayfinding arrow with room name and distance",
          "Audio download failed state with retry",
        ],
        success:
          "A visitor can listen and navigate without pulling the phone out of their pocket.",
        pains:
          "Missing context on what they're looking at; rental audio guides with dead batteries; wayfinding confusion.",
        quote:
          "I was standing in front of a masterpiece and had no idea what I was looking at.",
      },
    ],
  },
  {
    name: "Watershed",
    industry: "Civic / Water Utility",
    description:
      "A municipal water utility customer portal for billing, usage tracking and leak alerts.",
    value:
      "Understand your water bill, spot leaks early and pay without mailing a check.",
    segment:
      "Residential water utility customers, 25–75, across income levels and digital literacy.",
    behaviors:
      "Check bills monthly; react to unusually high bills; set up autopay and forget.",
    role: "homeowner who just received a $400 water bill",
    age: [28, 72],
    goals:
      "Understand why the bill spiked and fix the issue before next month.",
    brand:
      "Utility Blue (#1565C0) and accessible white; municipal trust with modern clarity.",
    tones: [
      {
        adjectives: "Transparent, civic",
        note: "Usage data is the customer's right; never obscure billing math.",
      },
      {
        adjectives: "Helpful, patient",
        note: "Guides older customers through digital billing without condescension.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A monthly bill summary card with usage comparison and leak detection alert.",
        goal: "Explain why this month's bill is 3x higher than normal and suggest a leak check.",
        mustHaves: [
          "Bill amount with comparison to same month last year",
          "Daily usage chart with spike highlight",
          "Leak alert banner with plain-language explanation",
          "Pay now button with autopay setup option",
          "Bill disputed state with case number",
        ],
        success:
          "A 70-year-old homeowner understands the spike without calling customer service.",
        pains:
          "Confusing bills with unexplained charges; discovering a leak months after it starts.",
        quote:
          "My bill went from $45 to $400. Nobody told me my toilet was running for a month.",
      },
    ],
  },
  {
    name: "Strata",
    industry: "Architecture / 3D Model Review",
    description:
      "A collaborative 3D model review tool for architects and clients to annotate building designs in the browser.",
    value:
      "Walk through your building design with your architect and leave comments right on the model.",
    segment:
      "Architects at small firms and their clients (homeowners, developers), reviewing residential and commercial designs.",
    behaviors:
      "Architects share review links before client meetings; clients navigate models on tablets and desktops.",
    role: "homeowner renovating a mid-century modern house",
    age: [30, 60],
    goals:
      "Understand the design, flag concerns about kitchen layout and approve the plan confidently.",
    brand:
      "Blueprint Blue (#1A73E8) and warm concrete gray; architectural precision meets approachability.",
    tones: [
      {
        adjectives: "Spatial, precise",
        note: "3D navigation is intuitive for non-architects; annotations are pinned to exact locations.",
      },
      {
        adjectives: "Collaborative, clear",
        note: "Client and architect comments are visually distinct; resolution status is tracked.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "The model annotation flow: navigate to a room, place a pin and leave a comment.",
        goal: "Let a client flag that the kitchen island feels too close to the back door.",
        mustHaves: [
          "3D model viewport with orbit, pan and zoom controls",
          "Click-to-place annotation pin on any surface",
          "Comment text field with photo attachment option",
          "Priority tag (question, concern, change request)",
          "Annotation submitted state with architect notification",
        ],
        success:
          "A non-technical client places a precise comment in the right location without 3D modeling experience.",
        pains:
          "Pointing at a PDF and saying 'somewhere around here'; feedback lost in email threads.",
        quote:
          "I told them the window felt too small but I couldn't explain where.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "An annotation resolution card in the review sidebar.",
        goal: "Show the status of a client concern and the architect's proposed solution.",
        mustHaves: [
          "Original client comment with room location and screenshot",
          "Architect response with revision description",
          "Status badge (open, in progress, resolved, deferred)",
          "View-in-model button to navigate to the annotation",
          "Resolved state with client approval checkbox",
        ],
        success:
          "Both parties track every design decision with a clear audit trail.",
        pains:
          "Forgetting what was agreed upon; re-opening settled decisions; no paper trail.",
        quote:
          "We agreed to move the door last month. Now they're saying we didn't.",
      },
    ],
  },
  {
    name: "Provenance",
    industry: "Food / Farm-to-Table Traceability",
    description:
      "A consumer-facing food traceability app that scans product QR codes to show the farm, harvest date and supply chain journey.",
    value:
      "Know exactly where your food came from, when it was harvested and how it reached your store.",
    segment:
      "Health-conscious grocery shoppers, 25–55, willing to pay more for transparency and sustainability.",
    behaviors:
      "Scan QR codes at the grocery store; compare sourcing between brands; share findings on social media.",
    role: "parent with food allergy concerns shopping at a farmers market",
    age: [27, 52],
    goals:
      "Verify that 'organic' and 'local' claims are real and make informed purchasing decisions.",
    brand:
      "Harvest Green (#4CAF50) and Earth Brown; authentic agricultural aesthetic.",
    tones: [
      {
        adjectives: "Transparent, factual",
        note: "Data-driven claims with source citations; no greenwashing.",
      },
      {
        adjectives: "Visual, storytelling",
        note: "Farm photos and journey maps make the supply chain tangible.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "The product origin card shown after scanning a QR code on a carton of eggs.",
        goal: "Show the farm name, location, certification and journey from farm to shelf.",
        mustHaves: [
          "Farm name, location and photo",
          "Certification badges (USDA Organic, Free Range, Non-GMO)",
          "Harvest/pack date and days since harvest",
          "Journey timeline (farm, distributor, store) with dates",
          "Verification failed state for unrecognized QR codes",
        ],
        success:
          "A shopper confirms the eggs are genuinely local and decides to buy in 10 seconds.",
        pains:
          "Marketing labels like 'natural' meaning nothing; no way to verify farm claims.",
        quote: "These say 'farm fresh' but the farm could be 2,000 miles away.",
      },
    ],
  },
  {
    name: "Ridgeback",
    industry: "Outdoor / Trail Running",
    description:
      "A trail running app with elevation-aware pace coaching, terrain alerts and emergency SOS for backcountry runs.",
    value:
      "Run mountain trails with pace coaching that accounts for elevation and an SOS if you're in trouble.",
    segment:
      "Trail runners, 22–50, running technical trails 2–4 times per week with varying elevation.",
    behaviors:
      "Run alone on remote trails early morning; wear GPS watches; check conditions before heading out.",
    role: "veterinarian and ultra-marathon trainee",
    age: [24, 48],
    goals:
      "Train for a 50-mile ultra with proper elevation-adjusted pacing and stay safe on remote trails.",
    brand:
      "Trail Granite (#5A5A5A) and Signal Orange for safety; rugged and functional.",
    tones: [
      {
        adjectives: "Rugged, trustworthy",
        note: "Instrument-grade data with expedition-level reliability.",
      },
      {
        adjectives: "Encouraging, tough",
        note: "Coaching that respects effort and doesn't sugarcoat.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          "The active run dashboard widget with elevation-adjusted pace, climb remaining and SOS button.",
        goal: "Show a runner their current effort level, upcoming climb and provide one-tap emergency access.",
        mustHaves: [
          "Current pace with elevation-adjusted effort indicator",
          "Elevation profile with current position marker",
          "Climb remaining and descent remaining stats",
          "Persistent SOS button with GPS coordinates",
          "GPS signal lost warning state",
        ],
        success:
          "Runner glances at their phone mount and knows their effort level and what's coming next.",
        pains:
          "Flat-ground pace being useless on hills; getting lost on unmarked trails; no cell service for emergencies.",
        quote:
          "My flat pace means nothing when I'm climbing 3,000 feet. Tell me my effort, not my speed.",
      },
    ],
  },
  {
    name: "Oasis",
    industry: "Wellness / Corporate Mental Health",
    description:
      "An employer-sponsored mental health platform offering therapy matching, crisis support and anonymous mood tracking.",
    value:
      "Access therapy, crisis support and mood tools through your employer, completely confidentially.",
    segment:
      "Employees at mid-to-large companies, 22–55, dealing with burnout, anxiety or life transitions.",
    behaviors:
      "Explore during a rough week; book therapy sessions after hours; use mood tracking sporadically.",
    role: "account executive going through a divorce",
    age: [25, 50],
    goals:
      "Find a therapist who takes their employer plan and start sessions without HR knowing.",
    brand:
      "Calm Lavender (#9B8EC4) and soft white; warm, private and never clinical.",
    tones: [
      {
        adjectives: "Gentle, private",
        note: "Privacy is the first promise; employer never sees individual data.",
      },
      {
        adjectives: "Warm, non-judgmental",
        note: "Entry points feel like a friend's recommendation, not a corporate program.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          "The therapist matching intake form with concern areas, preferences and scheduling.",
        goal: "Match an employee with a therapist based on specialty, gender preference and evening availability.",
        mustHaves: [
          "Concern area multi-select (anxiety, depression, relationships, work stress, grief)",
          "Therapist preference options (gender, language, modality)",
          "Availability selector (mornings, evenings, weekends)",
          "Insurance/employer plan auto-verification",
          "Match results state with 3 therapist profiles",
        ],
        success:
          "An employee finds a matching therapist in under 3 minutes without worrying about privacy.",
        pains:
          "Calling 10 therapists to check availability; worry that HR will see their usage.",
        quote:
          "I need someone who specializes in anxiety and has evening slots. That search took me two weeks.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Daily Check-in" mood tracking widget with optional journaling prompt.',
        goal: "Log daily mood in 5 seconds and optionally reflect with a guided prompt.",
        mustHaves: [
          "5-point mood selector with emoji and word labels",
          "Optional one-line journal prompt related to selected mood",
          "Weekly mood trend mini-chart",
          "Streak indicator for consecutive check-ins",
          "Share-with-therapist toggle for upcoming session prep",
        ],
        success:
          "Tracking mood feels like a 5-second habit, not a clinical assessment.",
        pains:
          "Forgetting what triggered a bad week by the time the therapy session arrives.",
        quote:
          "My therapist asked how my week was and I honestly couldn't remember.",
      },
    ],
  },
  {
    name: "Whittaker",
    industry: "Craft / Woodworking Plans",
    description:
      "A digital woodworking plan marketplace with interactive cut lists, 3D assembly previews and material calculators.",
    value:
      "Buy a plan, generate your cut list and see the build in 3D before picking up a saw.",
    segment:
      "Hobbyist woodworkers, 25–65, building furniture projects in home workshops on weekends.",
    behaviors:
      "Browse plans on tablet in the workshop; reference cut lists on phone at the lumber yard.",
    role: "high school chemistry teacher building a dining table",
    age: [28, 62],
    goals:
      "Build a farmhouse dining table from a clear plan without wasting expensive hardwood on wrong cuts.",
    brand:
      "Workshop Walnut (#5D4037) and Sawdust Cream; craft authenticity with digital precision.",
    tones: [
      {
        adjectives: "Hands-on, precise",
        note: "Measurements are unambiguous; 3D views resolve what flat drawings can't.",
      },
      {
        adjectives: "Encouraging, practical",
        note: "Skill level is honestly stated; tool requirements are specific.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "A project plan detail card with difficulty, tool requirements, materials estimate and 3D preview.",
        goal: "Help a woodworker decide if a farmhouse table plan matches their skill level and tool collection.",
        mustHaves: [
          "Project photo, name and builder rating",
          "Difficulty level and estimated build time",
          "Required tools checklist with owned/needed toggle",
          "Material cost estimate based on local lumber prices",
          "3D assembly preview with exploded view toggle",
        ],
        success:
          "A hobbyist knows in 20 seconds if they can build this and what it'll cost.",
        pains:
          "Plans that assume tools you don't own; vague material lists; no sense of difficulty.",
        quote:
          "The plan said 'intermediate' but it needed a $2,000 jointer I don't have.",
      },
    ],
  },
  {
    name: "Beacon",
    industry: "Nonprofit / Donor Management",
    description:
      "A donor relationship management platform for small nonprofits to track donations, send acknowledgments and manage campaigns.",
    value:
      "Know every donor by name, send timely thank-yous and never lose track of a pledge.",
    segment:
      "Development directors and executive directors, 28–60, at nonprofits with 100–5,000 donors.",
    behaviors:
      "Send year-end appeal emails; process donations during galas; prepare board reports quarterly.",
    role: "development director at a community food bank",
    age: [30, 58],
    goals:
      "Increase donor retention by 15% through timely, personalized acknowledgments.",
    brand:
      "Mission Gold (#D4A843) and deep navy; dignified generosity without flashiness.",
    tones: [
      {
        adjectives: "Grateful, organized",
        note: "Every donor interaction is tracked; gratitude is systematic, not accidental.",
      },
      {
        adjectives: "Clear, accountable",
        note: "Board reports are one click away; campaign results are transparent.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable:
          "A donor profile card with giving history, engagement timeline and stewardship status.",
        goal: "Prepare for a phone call with a major donor by reviewing their history in 30 seconds.",
        mustHaves: [
          "Donor name, total lifetime giving and donor tier",
          "Giving history chart (annual totals for last 5 years)",
          "Last interaction log (thank-you call, event attendance, email open)",
          "Stewardship status (thanked, lapsed, upgrade candidate)",
          "Next action reminder with due date",
        ],
        success:
          "Development director walks into a call knowing the donor's history and last touchpoint.",
        pains:
          "Forgetting who gave what; generic thank-you letters; donors lapsing silently.",
        quote:
          "She gave us $5,000 last year and we forgot to call her. She didn't give this year.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Campaign Progress" dashboard widget for an active fundraising drive.',
        goal: "Track real-time progress toward a $500,000 annual fund goal.",
        mustHaves: [
          "Thermometer-style progress bar with dollar amount and percentage",
          "Donor count and average gift size",
          "Daily donations trend line",
          "Top 5 recent gifts with optional anonymization",
          "Goal reached celebration state",
        ],
        success:
          "The board sees momentum at a glance; the team knows if they're ahead or behind pace.",
        pains:
          "Manual spreadsheet tallying; no real-time visibility; board asking for numbers mid-gala.",
        quote:
          "The board chair asked how close we are to goal. I had to say 'let me check the spreadsheet.'",
      },
    ],
  },
  {
    name: "Linework",
    industry: "Creative / Tattoo Studio",
    description:
      "A booking and design consultation app for tattoo studios, handling appointments, deposits and design approval workflows.",
    value:
      "Book your tattoo artist, approve the design and pay the deposit, all before walking in.",
    segment:
      "Tattoo clients, 18–45, getting custom or flash pieces at independent studios.",
    behaviors:
      "Browse artist portfolios on Instagram; book consultations weeks in advance; pay deposits online.",
    role: "software engineer getting their first large custom piece",
    age: [20, 42],
    goals:
      "Find the right artist for a Japanese-style sleeve and know exactly what to expect on appointment day.",
    brand:
      "Ink Black (#1A1A1A) and Parchment; dark, editorial, artist-portfolio-first.",
    tones: [
      {
        adjectives: "Bold, curated",
        note: "Artist portfolios feel like gallery exhibitions, not Yelp listings.",
      },
      {
        adjectives: "Clear, respectful",
        note: "Pricing, deposits and cancellation policies are upfront; no surprises.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The design approval flow where a client reviews and approves a custom tattoo sketch before the appointment.",
        goal: "Let a client view the design, request revisions or approve it with a clear revision count.",
        mustHaves: [
          "Full-screen design image with zoom and rotate",
          "Revision request form with markup annotation",
          "Revision count indicator (revision 2 of 3 included)",
          "Approve design button with appointment confirmation",
          "Additional revision fee notice after included revisions",
        ],
        success:
          "Client and artist agree on the design before the appointment; no day-of surprises.",
        pains:
          "Seeing the design for the first time in the chair; unclear revision limits; deposit confusion.",
        quote:
          "I showed up and the design was nothing like what I described. But I'd already paid the deposit.",
      },
    ],
  },
  {
    name: "Pelagic",
    industry: "Marine / Boat Maintenance",
    description:
      "A maintenance log and service scheduling app for recreational boat owners tracking engine hours, haul-outs and inspections.",
    value:
      "Keep your boat running and hold its resale value with a complete digital maintenance history.",
    segment:
      "Recreational boat owners, 30–65, with powered vessels 20–50 feet in length.",
    behaviors:
      "Log engine hours after each trip; schedule seasonal maintenance; document for insurance and resale.",
    role: "dentist and weekend sailor with a 32-foot cabin cruiser",
    age: [33, 64],
    goals:
      "Stay on top of oil changes, bottom paint and impeller replacements based on actual engine hours.",
    brand:
      "Marine Blue (#003366) and Teak Warm; nautical tradition with modern precision.",
    tones: [
      {
        adjectives: "Shipshape, reliable",
        note: "Maintenance schedules feel like a captain's log, not a car dealer upsell.",
      },
      {
        adjectives: "Practical, documented",
        note: "Every service entry creates resale and insurance value.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Maintenance Due" dashboard widget showing upcoming service items by engine hours or calendar date.',
        goal: "Alert an owner that an oil change is due in 15 engine hours and a bottom paint haul-out is due in October.",
        mustHaves: [
          "Service items sorted by urgency (overdue, due soon, upcoming)",
          "Engine hours and calendar date triggers",
          "Last service date and provider for each item",
          "Schedule service button linking to local marine shops",
          "All-current empty state with next service preview",
        ],
        success:
          "Owner knows what's due before their next trip without checking a paper logbook.",
        pains:
          "Forgetting impeller changes; no records for insurance claims; guessing when the last oil change was.",
        quote:
          "I know the oil needs changing but I can't remember if I did it 50 hours ago or 150.",
      },
    ],
  },
  {
    name: "Capsule",
    industry: "Retail / Wardrobe Management",
    description:
      "A digital closet and outfit planning app that helps users build a capsule wardrobe and reduce decision fatigue.",
    value:
      "See everything you own, plan outfits in seconds and stop buying duplicates.",
    segment:
      "Professionals, 22–45, tired of standing in front of a full closet with nothing to wear.",
    behaviors:
      "Photograph new purchases; plan outfits the night before; track cost-per-wear on favorites.",
    role: "product marketing manager who wants to simplify mornings",
    age: [24, 42],
    goals:
      "Build a 30-piece capsule wardrobe and get dressed in under 5 minutes every morning.",
    brand:
      "Minimalist Beige (#D5C4A1) and Charcoal; clean, editorial, fashion-magazine quality.",
    tones: [
      {
        adjectives: "Curated, minimal",
        note: "Quality over quantity; celebrates restraint, not excess.",
      },
      {
        adjectives: "Practical, visual",
        note: "Outfit grids are the interface; text is secondary to imagery.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          "The garment capture form for adding a new piece to the digital closet.",
        goal: "Add a new blazer with photo, category, color, season and brand in under 30 seconds.",
        mustHaves: [
          "Camera capture with automatic background removal",
          "Category selector (tops, bottoms, outerwear, shoes, accessories)",
          "Color tag and season tag selectors",
          "Brand and purchase price fields (optional)",
          "Added-to-closet success state with outfit suggestion prompt",
        ],
        success:
          "Adding a garment is faster than hanging it up; background removal works on the first try.",
        pains:
          "Photographing clothes is tedious; messy backgrounds; forgetting what's already in the closet.",
        quote:
          "I bought another black blazer because I forgot I already had three.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Today\'s Outfit" suggestion widget based on weather, calendar and recent wear history.',
        goal: "Suggest an outfit from the user's closet for a Tuesday meeting day with rain forecasted.",
        mustHaves: [
          "Outfit preview with layered garment thumbnails",
          "Weather context (55°F, rain) and calendar event tag (client meeting)",
          "Last-worn date for each piece to avoid repeats",
          "Swap individual pieces with alternatives",
          "No-outfit-possible state when weather gaps exist in the wardrobe",
        ],
        success:
          "User gets dressed confidently in 2 minutes without opening the closet first.",
        pains:
          "Decision fatigue every morning; wearing the same 5 items; weather surprises ruining outfits.",
        quote: "I have 60 pieces and wear 10. Just tell me what to wear today.",
      },
    ],
  },
  {
    name: "Aqueduct",
    industry: "B2B / Data Pipeline Monitoring",
    description:
      "A real-time data pipeline observability platform for analytics engineering teams monitoring ETL/ELT workflows.",
    value:
      "Know when a data pipeline breaks before the CFO opens a wrong dashboard.",
    segment:
      "Analytics engineers and data platform leads, 25–45, at data-driven companies with 50+ pipelines.",
    behaviors:
      "Monitor pipeline runs every morning; investigate failures before 9 AM standup; on-call for data SLAs.",
    role: "senior analytics engineer at an e-commerce company",
    age: [26, 44],
    goals:
      "Ensure all 200 daily pipeline runs complete successfully and stakeholders have fresh data by 8 AM.",
    brand:
      "Pipeline Cyan (#0891B2) and Dark Terminal; developer-grade observability with clean hierarchy.",
    tones: [
      {
        adjectives: "Technical, status-forward",
        note: "Pipeline health is the first thing visible; details are one click deep.",
      },
      {
        adjectives: "Calm, actionable",
        note: "Failures surface with root cause hints, not just error codes.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Pipeline Health" morning dashboard widget showing run status, freshness and SLA compliance.',
        goal: "Give an analytics engineer a 10-second status check on all 200 pipelines before standup.",
        mustHaves: [
          "Pass/fail/running summary counts with percentage",
          "Failed pipeline list with error category and last success time",
          "Data freshness SLA indicator per critical table",
          "One-click re-run button for failed pipelines",
          "All-green celebration state",
        ],
        success:
          "Engineer knows which pipelines need attention before opening Slack.",
        pains:
          "CFO reporting wrong numbers because a pipeline silently failed; 30-minute morning triage.",
        quote:
          "The revenue dashboard was wrong all day because a pipeline failed at 2 AM and nobody noticed.",
      },
    ],
  },
  {
    name: "Brimstone",
    industry: "Gaming / Tabletop RPG",
    description:
      "A digital character sheet and campaign manager for tabletop RPG groups playing D&D, Pathfinder and other systems.",
    value:
      "Keep your character sheet, inventory and session notes in one place that syncs with your game master.",
    segment:
      "Tabletop RPG players, 16–45, playing weekly sessions in person or online.",
    behaviors:
      "Update character sheets between sessions; reference during play; track session-to-session story progress.",
    role: "college student running a weekly D&D 5e campaign as dungeon master",
    age: [17, 42],
    goals:
      "Manage a party of 5 characters with real-time HP tracking and shared initiative order.",
    brand:
      "Dragon Red (#8B0000) and Parchment Gold; fantasy tavern atmosphere with readable game data.",
    tones: [
      {
        adjectives: "Immersive, functional",
        note: "Fantasy aesthetic that never sacrifices readability for theme.",
      },
      {
        adjectives: "Quick, tactile",
        note: "HP changes, dice rolls and inventory updates are one-tap actions during play.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A character status card showing HP, conditions, spell slots and key stats during combat.",
        goal: "Let a player track their character's combat state without flipping through paper sheets.",
        mustHaves: [
          "Current HP bar with temp HP and max HP",
          "Active conditions list (poisoned, prone, concentrating)",
          "Spell slot tracker by level with used/remaining",
          "Key combat stats (AC, initiative, speed)",
          "Death saving throws tracker state",
        ],
        success:
          "A player knows their exact combat state in 2 seconds during a tense encounter.",
        pains:
          "Erasing and rewriting HP on paper; forgetting active conditions; losing track of spell slots.",
        quote:
          "Wait, am I still poisoned? And how many 3rd-level slots do I have left?",
      },
    ],
  },
  {
    name: "Greenfield",
    industry: "Real Estate / Land Survey",
    description:
      "A property boundary visualization and survey report viewer for rural land buyers and real estate agents.",
    value:
      "See your property boundaries on a satellite map and understand the survey report before closing.",
    segment:
      "Rural land buyers, 28–65, purchasing 5–200 acre parcels for homesteading, recreation or investment.",
    behaviors:
      "Review surveys during due diligence; walk property lines with GPS; compare multiple parcels.",
    role: "remote worker buying 40 acres for a homestead",
    age: [30, 60],
    goals:
      "Understand exactly where the property boundaries are and what easements or encroachments exist.",
    brand:
      "Land Survey Green (#2E7D32) and Topo Brown; topographic map precision with modern clarity.",
    tones: [
      {
        adjectives: "Precise, geographic",
        note: "Survey data presented on real satellite imagery; no abstract diagrams.",
      },
      {
        adjectives: "Educational, protective",
        note: "Explains survey terms (easement, right-of-way, setback) for non-experts.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          "The property boundary overlay widget on satellite imagery with GPS walking guide.",
        goal: "Help a buyer walk the property boundary using their phone's GPS and see corner markers.",
        mustHaves: [
          "Satellite map with boundary lines and corner pin markers",
          "GPS position dot showing proximity to boundary line",
          "Distance and bearing to next corner marker",
          "Easement and utility right-of-way overlays",
          "GPS signal weak warning state",
        ],
        success:
          "A buyer walks the property line confidently and finds the corner markers in the field.",
        pains:
          "Paper surveys that don't match the actual land; can't find corner markers; unclear easements.",
        quote:
          "The neighbor says the fence is the boundary. The survey says otherwise.",
      },
    ],
  },
  {
    name: "Kettle",
    industry: "Hospitality / Restaurant Waitlist",
    description:
      "A digital waitlist and table management system for restaurants that replaces paper lists and buzzer pagers.",
    value:
      "Join the waitlist from your phone, get a text when your table is ready and stop hovering at the host stand.",
    segment:
      "Restaurant diners, 18–70, and front-of-house staff at casual to upscale dining establishments.",
    behaviors:
      "Check wait times before arriving; join the list remotely; want accurate time estimates.",
    role: "couple arriving at a popular brunch spot without a reservation",
    age: [22, 55],
    goals:
      "Know the real wait time and get notified when their table is ready so they can walk around the block.",
    brand: "Bistro Burgundy (#722F37) and warm cream; hospitable, not techie.",
    tones: [
      {
        adjectives: "Hospitable, honest",
        note: "Wait times are realistic, not optimistic; the experience starts before the table.",
      },
      {
        adjectives: "Simple, ambient",
        note: "Guest-facing UI is minimal; staff-facing UI is speed-optimized.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The guest waitlist join flow with party size, seating preference and estimated wait time.",
        goal: "Join a restaurant waitlist remotely and receive an accurate wait estimate.",
        mustHaves: [
          "Party size selector",
          "Seating preference (indoor, patio, bar, no preference)",
          "Estimated wait time display based on current queue",
          "Position in queue indicator with live updates",
          "Table-ready notification state with 10-minute check-in window",
        ],
        success:
          "A couple joins the list from across the street and arrives exactly when their table is ready.",
        pains:
          "Being told '20 minutes' and waiting 50; losing the buzzer pager; hovering at the entrance.",
        quote:
          "They said 15 minutes an hour ago. I'm standing here like an idiot.",
      },
    ],
  },
  {
    name: "Bulwark",
    industry: "Cybersecurity / Password Management",
    description:
      "A team password manager for small businesses with shared vaults, access controls and breach monitoring.",
    value:
      "Share credentials securely across the team and know immediately if a password was compromised.",
    segment:
      "IT administrators and team leads, 25–55, at 10–200 person companies without dedicated security teams.",
    behaviors:
      "Onboard new employees to shared accounts; rotate passwords quarterly; respond to breach alerts.",
    role: "office manager doubling as IT admin at a 30-person agency",
    age: [28, 52],
    goals:
      "Stop the team from sharing passwords in Slack and get alerted when a credential appears in a breach.",
    brand:
      "Vault Steel (#4A5568) and secure green; fortress-grade security without intimidation.",
    tones: [
      {
        adjectives: "Secure, approachable",
        note: "Security features are powerful but explained for non-security professionals.",
      },
      {
        adjectives: "Organized, vigilant",
        note: "Shared vaults are tidy; breach alerts are urgent but not panicky.",
      },
    ],
    tasks: [
      {
        type: "Settings",
        platform: "Desktop",
        deliverable:
          "The shared vault access control settings panel with role-based permissions.",
        goal: "Set up a vault for the marketing team's social media passwords with view-only access for interns.",
        mustHaves: [
          "Vault name and description",
          "Team member list with role assignment (admin, editor, view-only)",
          "Invite new member by email with role pre-selection",
          "Auto-revoke toggle for contractors after end date",
          "Saved confirmation with audit log entry",
        ],
        success:
          "An office manager sets up team access in 2 minutes without understanding IAM terminology.",
        pains:
          "Passwords shared in DMs; ex-employees still having access; no audit trail.",
        quote:
          "The intern left three months ago and still has the company Twitter password.",
      },
    ],
  },
  {
    name: "Foxglove",
    industry: "Wellness / Plant Care",
    description:
      "A houseplant care app with species identification, watering reminders and health diagnostics from leaf photos.",
    value:
      "Keep your plants alive with personalized care schedules and instant health diagnoses.",
    segment:
      "Urban plant owners, 20–45, with 5–30 houseplants of varying care difficulty.",
    behaviors:
      "Water on weekends; photograph yellowing leaves for diagnosis; buy new plants monthly.",
    role: "product designer with a growing collection of tropical plants",
    age: [22, 42],
    goals:
      "Stop killing plants by overwatering and diagnose leaf problems before they spread.",
    brand:
      "Leaf Green (#3B7A2A) and Terracotta Pot; botanical garden catalog aesthetic.",
    tones: [
      {
        adjectives: "Nurturing, educational",
        note: "Care instructions feel like advice from a patient plant-shop owner.",
      },
      {
        adjectives: "Visual, diagnostic",
        note: "Plant health is assessed through photos, not text questionnaires.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A plant health diagnosis card after photographing a yellowing leaf.",
        goal: "Identify whether yellow leaves are from overwatering, underwatering or nutrient deficiency.",
        mustHaves: [
          "Uploaded leaf photo with annotated problem areas",
          "Diagnosis result with confidence level",
          "Cause explanation in plain language",
          "Recommended action steps (adjust watering, repot, fertilize)",
          "Inconclusive state with expert consultation option",
        ],
        success:
          "A worried plant parent gets actionable advice in 10 seconds without Googling symptoms.",
        pains:
          "Conflicting advice online; can't tell overwatering from underwatering; plant dying slowly.",
        quote:
          "The leaves are yellow but the internet says it could be 15 different things.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Today\'s Care" widget showing which plants need watering, misting or rotating today.',
        goal: "Give a plant owner a daily to-do list for their collection without checking each plant individually.",
        mustHaves: [
          "Plants needing water today with last-watered date",
          "Plants needing misting or rotation",
          "Overdue plants highlighted with days overdue",
          "One-tap 'watered' confirmation per plant",
          "All-done-today celebration state",
        ],
        success:
          "A 30-plant collection gets proper care in a 10-minute Sunday routine.",
        pains:
          "Forgetting which plants were watered; overwatering some and neglecting others.",
        quote:
          "Did I water the fiddle-leaf fig last Sunday or the Sunday before?",
      },
    ],
  },
  {
    name: "Parallel",
    industry: "EdTech / Study Groups",
    description:
      "A study group coordination app for university students to find study partners, share notes and book study rooms.",
    value:
      "Find classmates studying the same material, share notes and grab a quiet room together.",
    segment:
      "University students, 18–26, studying for exams and working on group projects.",
    behaviors:
      "Form study groups before midterms; share lecture notes; compete for library study rooms.",
    role: "pre-med sophomore preparing for organic chemistry finals",
    age: [18, 25],
    goals:
      "Find a study partner who's ahead on the material and book a library room for Thursday night.",
    brand:
      "Campus Blue (#1976D2) and chalk white; academic but social, not corporate.",
    tones: [
      {
        adjectives: "Social, academic",
        note: "Study groups feel collaborative, not competitive; sharing is rewarded.",
      },
      {
        adjectives: "Quick, student-paced",
        note: "Everything works between classes; no multi-step bureaucracy.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A study group card for an open organic chemistry study session with member list and room info.",
        goal: "Help a student decide whether to join a Thursday night study group for an upcoming exam.",
        mustHaves: [
          "Course name, exam date and topics being covered",
          "Member count and names with major/year",
          "Study room location and time slot",
          "Join button with automatic calendar add",
          "Group full state with waitlist option",
        ],
        success:
          "A student finds a relevant, non-intimidating study group in 10 seconds and joins.",
        pains:
          "Studying alone; not knowing anyone in the class; library rooms already booked.",
        quote:
          "I've been in this class for 3 months and I don't know a single person to study with.",
      },
    ],
  },
  {
    name: "Cobalt",
    industry: "B2B / Invoice Factoring",
    description:
      "A receivables financing platform where small manufacturers sell outstanding invoices for immediate working capital.",
    value:
      "Turn a net-60 invoice into cash today so you can buy materials for the next order.",
    segment:
      "Small manufacturers and distributors, 30–60, with $500K–$10M annual revenue and cash flow gaps.",
    behaviors:
      "Submit invoices when cash is tight; compare factoring rates; track funded vs unfunded receivables.",
    role: "owner of a 20-person custom packaging company",
    age: [34, 58],
    goals:
      "Get $85,000 in working capital from outstanding invoices to fund a raw materials purchase this week.",
    brand:
      "Industrial Steel (#374151) and Cash Green (#16A34A); solid, trustworthy, no-gimmick financial tooling.",
    tones: [
      {
        adjectives: "Transparent, commercial",
        note: "Factoring fees and advance rates are visible before submission; no surprises.",
      },
      {
        adjectives: "Fast, dignified",
        note: "Factoring is a financial tool, not a sign of desperation; UI respects the business owner.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "The invoice submission and advance offer flow with fee breakdown and funding timeline.",
        goal: "Submit 3 outstanding invoices totaling $120,000 and receive an 85% advance offer within minutes.",
        mustHaves: [
          "Invoice upload or ERP sync with auto-populated details",
          "Advance rate and fee breakdown per invoice",
          "Customer credit check status indicator",
          "Total advance amount summary with estimated funding date",
          "Accepted and funded confirmation state with wire details",
        ],
        success:
          "Business owner submits invoices and sees exact advance amounts in under 5 minutes.",
        pains:
          "Waiting 60 days for payment; bank loans taking weeks; hidden factoring fees.",
        quote:
          "My customer pays in 60 days but my supplier wants payment in 10. The math doesn't work.",
      },
    ],
  },
  {
    name: "Perch",
    industry: "Real Estate / Rental Application",
    description:
      "A streamlined rental application platform for apartment seekers to apply to multiple listings with a single, reusable profile.",
    value:
      "Apply to 10 apartments with one profile. No more filling out the same form 10 times.",
    segment:
      "Apartment seekers, 22–40, in competitive urban rental markets applying to multiple units.",
    behaviors:
      "Apply to 5–15 apartments per search; gather documents (pay stubs, references) once; track application status.",
    role: "junior data analyst relocating to a new city for work",
    age: [23, 38],
    goals:
      "Get approved for an apartment before starting the new job without taking time off for each application.",
    brand:
      "Key Blue (#2196F3) and warm white; trustworthy, hopeful, home-finding optimism.",
    tones: [
      {
        adjectives: "Efficient, hopeful",
        note: "The stress of apartment hunting is acknowledged; the tool reduces it.",
      },
      {
        adjectives: "Organized, transparent",
        note: "Application status is always visible; rejection reasons are honest.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          "The one-time renter profile form with employment, income and document uploads.",
        goal: "Build a reusable rental profile with income verification and references in under 10 minutes.",
        mustHaves: [
          "Employment details with income and employer contact",
          "Document upload for pay stubs, ID and previous lease",
          "Reference contacts (current landlord, personal)",
          "Credit check consent with score preview option",
          "Profile complete state with shareable link",
        ],
        success:
          "A renter builds their profile once and applies to every apartment with one tap.",
        pains:
          "Filling out identical forms for every apartment; faxing pay stubs; no application status updates.",
        quote:
          "I applied to 8 apartments last week and filled out basically the same form 8 times.",
      },
    ],
  },
  {
    name: "Summit",
    industry: "Events / Conference Management",
    description:
      "A conference attendee app with schedule builder, speaker profiles, networking tools and live session Q&A.",
    value:
      "Build your perfect conference schedule, find the right people to meet and ask questions during talks.",
    segment:
      "Conference attendees, 25–55, at industry events with 500–5,000 participants.",
    behaviors:
      "Build schedule the night before; navigate between sessions; scan badges for contact exchange.",
    role: "marketing director attending a SaaS industry conference",
    age: [27, 52],
    goals:
      "Attend the most relevant sessions and make 5 meaningful business connections.",
    brand:
      "Event Purple (#6A1B9A) and white; energetic, professional, conference-grade polish.",
    tones: [
      {
        adjectives: "Energetic, navigational",
        note: "Wayfinding and scheduling are primary; social features are secondary.",
      },
      {
        adjectives: "Social, professional",
        note: "Networking feels organic, not forced; badge scanning is instant.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A session detail card with speaker bio, time, room and live Q&A join button.",
        goal: "Help an attendee decide whether to attend a session and find the room.",
        mustHaves: [
          "Session title, time, room number and floor",
          "Speaker name, photo, title and company",
          "Session description and key takeaways",
          "Add-to-schedule button with conflict detection",
          "Session full state with overflow room option",
        ],
        success: "An attendee decides to go and finds the room in 15 seconds.",
        pains:
          "Wrong room; session already full; no speaker context before deciding.",
        quote:
          "I walked into the wrong room and sat through 20 minutes of the wrong talk.",
      },
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The contact exchange flow via badge QR scan with note and follow-up reminder.",
        goal: "Exchange contact info with someone at a booth and set a follow-up reminder for next week.",
        mustHaves: [
          "QR badge scanner with instant profile preview",
          "Quick note field for conversation context",
          "Follow-up reminder date picker",
          "Contact saved confirmation with LinkedIn profile link",
          "Scan failed state with manual search fallback",
        ],
        success:
          "A 10-second badge scan replaces fumbling with business cards.",
        pains:
          "Lost business cards; forgetting who someone was; no follow-up because life got busy.",
        quote:
          "I met someone great at the conference and lost their card. Never followed up.",
      },
    ],
  },
  {
    name: "Quarry",
    industry: "B2B / Construction Materials",
    description:
      "An online ordering and delivery tracking platform for bulk construction materials like gravel, sand and concrete.",
    value:
      "Order 20 tons of crushed gravel online and track the dump truck to your job site.",
    segment:
      "General contractors and site foremen, 28–60, managing residential and commercial construction projects.",
    behaviors:
      "Order materials days before pour dates; need exact delivery windows to coordinate crews.",
    role: "site foreman building a subdivision of 12 homes",
    age: [30, 58],
    goals:
      "Get the right material to the right job site at the right time without phone-tag with suppliers.",
    brand:
      "Aggregate Gray (#616161) and Construction Orange; industrial utility with zero decoration.",
    tones: [
      {
        adjectives: "Direct, industrial",
        note: "Tonnage, pricing and delivery windows are the entire interface.",
      },
      {
        adjectives: "Reliable, trackable",
        note: "Delivery ETAs are accurate; order changes are confirmed instantly.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The bulk material order form with product selection, tonnage calculator and delivery scheduling.",
        goal: "Order 25 tons of 3/4-inch crushed gravel for delivery to a job site on Thursday morning.",
        mustHaves: [
          "Material type selector with spec details (size, gradation, source)",
          "Tonnage calculator based on area and depth inputs",
          "Delivery date and time window selector",
          "Job site address with map pin confirmation",
          "Order confirmed state with dump truck ETA and driver phone number",
        ],
        success:
          "A foreman orders material in 3 minutes and has a confirmed delivery window for crew scheduling.",
        pains:
          "Phone orders with busy suppliers; wrong material delivered; trucks arriving when the crew isn't ready.",
        quote:
          "I ordered 3/4 inch and they delivered 3/8. I lost an entire day waiting for the right load.",
      },
    ],
  },
  {
    name: "Solstice",
    industry: "Energy / Community Solar",
    description:
      "A community solar subscription platform letting renters and homeowners without rooftop access buy shares in local solar farms.",
    value:
      "Get solar savings on your electric bill without owning a roof or installing panels.",
    segment:
      "Renters and condo owners, 22–60, who want solar savings but can't install panels.",
    behaviors:
      "Compare plans during utility bill review; check monthly credits on their electric statement.",
    role: "apartment renter frustrated by rising electricity costs",
    age: [24, 55],
    goals:
      "Reduce monthly electricity costs by 10–15% through a community solar subscription.",
    brand:
      "Solar Gold (#F9A825) and Sky Blue; optimistic, democratic energy access.",
    tones: [
      {
        adjectives: "Accessible, sunny",
        note: "Solar benefits explained without engineering jargon or confusing utility terminology.",
      },
      {
        adjectives: "Transparent, savings-focused",
        note: "Monthly savings are the hero metric; environmental benefits are secondary.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable:
          "The landing page hero explaining community solar with savings calculator and sign-up CTA.",
        goal: "Convert a curious renter into a community solar subscriber by showing their estimated savings.",
        mustHaves: [
          "Plain-language headline explaining community solar in one sentence",
          "Monthly bill input slider with instant savings estimate",
          "How-it-works 3-step visual (Subscribe, We generate, You save)",
          "No-contract and cancel-anytime badges",
          "Sign-up CTA with ZIP code input to check availability",
        ],
        success:
          "A renter understands community solar and their potential savings in 15 seconds.",
        pains:
          "Thinking solar requires owning a home; confusing utility bill credits; fear of long contracts.",
        quote:
          "I want solar but I rent an apartment. I didn't know I could do this.",
      },
    ],
  },
  {
    name: "Cadence",
    industry: "Health / Medication Adherence",
    description:
      "A medication reminder and refill management app for patients with chronic conditions taking multiple daily prescriptions.",
    value:
      "Never miss a dose, never run out of refills and share medication logs with your doctor.",
    segment:
      "Patients with chronic conditions, 35–80, taking 3–12 daily medications.",
    behaviors:
      "Take medications at specific times; refill monthly; bring medication lists to doctor appointments.",
    role: "retiree managing diabetes, hypertension and cholesterol medications",
    age: [45, 78],
    goals:
      "Take every medication on time and have an up-to-date list ready for every doctor visit.",
    brand:
      "Calm Blue (#4682B4) and large, accessible white; medical clarity for aging eyes.",
    tones: [
      {
        adjectives: "Gentle, reliable",
        note: "Reminders are helpful, not nagging; large text and simple interactions.",
      },
      {
        adjectives: "Medical, trustworthy",
        note: "Medication data is presented with clinical accuracy; no wellness-app fluff.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable:
          'The "Today\'s Medications" widget showing doses due, taken and upcoming.',
        goal: "Show a patient which medications they've taken today and what's coming next.",
        mustHaves: [
          "Medication list with dose time, name and pill image",
          "Taken/due/missed status per medication",
          "One-tap 'Taken' confirmation with undo",
          "Refill-soon warning when supply is low (5 days remaining)",
          "All-taken-for-today celebration state",
        ],
        success:
          "A 70-year-old with 8 medications knows their status in 3 seconds.",
        pains:
          "Forgetting whether a dose was taken; running out of refills unexpectedly; paper med lists at doctor visits.",
        quote: "Did I take my morning pills or am I thinking of yesterday?",
      },
      {
        type: "Empty state",
        platform: "Mobile",
        deliverable:
          "The first-time medication entry empty state with prescription label camera scan.",
        goal: "Get a new user to add their first medication by scanning their prescription bottle label.",
        mustHaves: [
          "Welcoming explanation of what the app does",
          "Camera scan option for prescription label with OCR auto-fill",
          "Manual entry fallback with common medication search",
          "Dose time and frequency setup",
          "First medication added success state with reminder preview",
        ],
        success:
          "A non-technical patient adds their first medication in under 2 minutes.",
        pains:
          "Tiny text on prescription labels; complicated medication names; setting up reminders is too technical.",
        quote:
          "I can barely read the label. Just let me scan it with my phone.",
      },
    ],
  },
  {
    name: "Ridgeline",
    industry: "Finance / Personal Tax Filing",
    description:
      "A guided personal tax filing app for straightforward W-2 filers who want to file accurately without paying a preparer.",
    value:
      "File your federal and state taxes for free with plain-language guidance and maximum refund guarantee.",
    segment:
      "Individual W-2 employees, 22–55, with straightforward tax situations (standard deduction, no business income).",
    behaviors:
      "File once a year in March/April; gather documents reluctantly; compare refund estimates anxiously.",
    role: "teacher filing taxes with a W-2 and student loan interest deduction",
    age: [24, 50],
    goals:
      "File accurately, maximize the refund and finish in under 30 minutes.",
    brand:
      "Tax Green (#2E7D32) and clean white; IRS-grade accuracy with consumer-friendly warmth.",
    tones: [
      {
        adjectives: "Reassuring, guided",
        note: "Each question is explained in plain language; the filer is never left confused.",
      },
      {
        adjectives: "Precise, celebratory",
        note: "Refund amount grows visibly as deductions are found; filing completion is celebrated.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "The W-2 import and income verification step with photo scan and employer EIN lookup.",
        goal: "Import W-2 data by photographing the form and verify the numbers before proceeding.",
        mustHaves: [
          "W-2 photo capture with OCR auto-population of all fields",
          "Field-by-field verification with original document side-by-side",
          "Employer EIN validation check",
          "Multiple W-2 support for filers with two jobs",
          "OCR failed state with manual entry fallback",
        ],
        success:
          "A filer imports their W-2 in 60 seconds and verifies all numbers are correct.",
        pains:
          "Manually typing 20 fields from a W-2; transposing numbers; not knowing what each box means.",
        quote:
          "I stared at Box 12a for 10 minutes last year. What even is code DD?",
      },
    ],
  },
  {
    name: "Anvil",
    industry: "B2B / Hardware Procurement",
    description:
      "A procurement platform for machine shops to source custom CNC-machined parts from vetted manufacturers with instant quoting.",
    value:
      "Upload a CAD file and get competitive quotes from verified shops within hours, not weeks.",
    segment:
      "Mechanical engineers and procurement managers, 28–55, at hardware startups and contract manufacturers.",
    behaviors:
      "Upload STEP files; compare quotes on tolerance, lead time and surface finish; re-order proven parts.",
    role: "mechanical engineer at a robotics startup",
    age: [26, 50],
    goals:
      "Source 500 custom aluminum brackets with tight tolerances delivered in 2 weeks.",
    brand:
      "Machined Steel (#4A4A4A) and Blueprint Blue; engineering precision with modern marketplace polish.",
    tones: [
      {
        adjectives: "Technical, efficient",
        note: "Specs and tolerances are first-class data; marketing fluff is absent.",
      },
      {
        adjectives: "Trustworthy, verified",
        note: "Every supplier shows certification badges (ISO 9001, AS9100) and past job history.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The RFQ (request for quote) submission form with CAD upload, material selection and tolerance specs.",
        goal: "Submit a quoting request for 500 anodized aluminum brackets with ±0.005-inch tolerance.",
        mustHaves: [
          "STEP/IGES file upload with 3D preview render",
          "Material selector with grade specifics (6061-T6, 7075, 304 SS)",
          "Tolerance and surface finish requirements",
          "Quantity tiers with unit price recalculation",
          "RFQ submitted state with estimated quote delivery time",
        ],
        success:
          "Engineer submits a complete RFQ in under 5 minutes with all specs unambiguous.",
        pains:
          "Emailing drawings to 8 shops; inconsistent quote formats; 2-week response times.",
        quote:
          "I spent more time chasing quotes than designing the actual part.",
      },
    ],
  },
  {
    name: "Mosaic",
    industry: "EdTech / Portfolio Builder",
    description:
      "A portfolio website builder for design students and junior designers with templated case study layouts.",
    value:
      "Build a stunning design portfolio in an afternoon without writing code or buying hosting.",
    segment:
      "Design students and junior designers, 18–30, applying for their first design jobs.",
    behaviors:
      "Build portfolio before job season; iterate based on recruiter feedback; share links in applications.",
    role: "senior design student preparing for internship applications",
    age: [19, 28],
    goals:
      "Present 3–4 case studies professionally and land interviews at product design teams.",
    brand:
      "Creative Coral (#FF6B6B) and dark charcoal; bold, youthful, portfolio-grade polish.",
    tones: [
      {
        adjectives: "Expressive, structured",
        note: "Templates enable creativity within proven case study frameworks.",
      },
      {
        adjectives: "Professional, aspirational",
        note: "The portfolio looks like it belongs to a mid-career designer, not a student.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable:
          "The case study builder form with section templates, image upload and narrative structure.",
        goal: "Build a case study page for a mobile app redesign project with problem, process and outcome sections.",
        mustHaves: [
          "Section template selector (problem, research, wireframes, final design, results)",
          "Rich text editor with design-portfolio typography",
          "Image and video upload with gallery layout options",
          "Section reordering via drag and drop",
          "Live preview with mobile/desktop toggle",
        ],
        success:
          "A student builds a polished case study in under 2 hours with structured storytelling.",
        pains:
          "Blank-page anxiety; inconsistent case study formats; spending weeks on portfolio instead of designing.",
        quote:
          "I'm a designer, not a web developer. I just need my work to look good online.",
      },
    ],
  },
  {
    name: "Timberline",
    industry: "Insurance / Commercial Property",
    description:
      "A commercial property insurance platform for small business owners with instant coverage quotes and digital claims.",
    value:
      "Get your shop, office or warehouse insured in minutes with a quote that makes sense.",
    segment:
      "Small business owners, 28–60, insuring commercial spaces under 10,000 square feet.",
    behaviors:
      "Shop for insurance when signing a lease; compare quotes from multiple carriers; file claims after weather events.",
    role: "bakery owner opening a second location",
    age: [30, 58],
    goals:
      "Get the right coverage for a new retail space before the lease signing deadline.",
    brand:
      "Policy Navy (#1B3A4B) and trust green; institutional insurance credibility without broker overhead.",
    tones: [
      {
        adjectives: "Clear, protective",
        note: "Coverage details explained in business-owner language, not insurance legalese.",
      },
      {
        adjectives: "Fast, reliable",
        note: "Quotes are instant; certificates of insurance are downloadable on demand.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable:
          "The instant quote flow with business type, square footage and coverage selection.",
        goal: "Get a general liability and property coverage quote for a 2,000 sq ft bakery in 3 minutes.",
        mustHaves: [
          "Business type selector with industry-specific coverage suggestions",
          "Address and square footage inputs",
          "Coverage options with plain-language explanations",
          "Instant premium quote with monthly/annual toggle",
          "Bind coverage button with certificate of insurance download",
        ],
        success:
          "A bakery owner understands their coverage and has a COI for the landlord in 5 minutes.",
        pains:
          "Insurance brokers taking a week to return calls; not understanding what's covered.",
        quote:
          "My landlord needs a COI by Friday. My broker hasn't called me back in three days.",
      },
    ],
  },
  {
    name: "Wingspan",
    industry: "Nonprofit / Volunteer Management",
    description:
      "A volunteer scheduling and hour-tracking platform for community nonprofits managing event-based and recurring volunteers.",
    value:
      "Fill volunteer shifts, track hours and send thank-yous without spreadsheets or email chains.",
    segment:
      "Volunteer coordinators, 25–60, at food banks, shelters, animal rescues and community organizations.",
    behaviors:
      "Post shifts weekly; send reminder texts; compile hours for grant reporting.",
    role: "volunteer coordinator at a regional animal shelter",
    age: [27, 55],
    goals:
      "Fill 40 weekly volunteer shifts and produce accurate hour reports for grant applications.",
    brand:
      "Volunteer Orange (#E65100) and warm white; energetic community spirit.",
    tones: [
      {
        adjectives: "Grateful, organized",
        note: "Volunteers feel appreciated; coordinators feel in control.",
      },
      {
        adjectives: "Simple, actionable",
        note: "Signing up for a shift takes one tap; no accounts required for basic volunteering.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "A volunteer shift card with role description, time, location and sign-up button.",
        goal: "Help a volunteer find and sign up for a Saturday morning dog walking shift.",
        mustHaves: [
          "Shift date, time and duration",
          "Role description and requirements (age, training, physical ability)",
          "Current sign-up count vs needed count",
          "Sign-up button with confirmation and calendar add",
          "Shift full state with waitlist or alternative shift suggestion",
        ],
        success:
          "A volunteer finds a shift matching their availability and signs up in 10 seconds.",
        pains:
          "Group texts asking who can come; shifts understaffed because sign-up is confusing.",
        quote: "I want to help but I never know when they need me.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "Weekly Coverage" dashboard widget showing shift fill rates and gaps.',
        goal: "Show a coordinator which shifts are understaffed so they can target outreach.",
        mustHaves: [
          "Day-by-day shift grid with fill percentage per shift",
          "Understaffed shifts highlighted in red with gap count",
          "One-click 'Send reminder to regulars' action per gap",
          "Total hours scheduled this week",
          "All-shifts-filled celebration state",
        ],
        success:
          "Coordinator spots gaps Monday morning and fills them by Wednesday.",
        pains:
          "Discovering a shift is empty 30 minutes before it starts; begging in group chats.",
        quote:
          "Every Friday I'm panic-texting people to cover Saturday morning.",
      },
    ],
  },
  {
    name: "Datum",
    industry: "Finance / Expense Management",
    description:
      "A corporate expense reporting app with receipt scanning, policy enforcement and manager approval workflows.",
    value:
      "Snap a receipt, categorize the expense and submit for approval in 15 seconds flat.",
    segment:
      "Sales reps and consultants, 25–50, who travel and expense meals, flights and hotels.",
    behaviors:
      "Photograph receipts immediately after purchase; submit expense reports weekly; track reimbursement status.",
    role: "enterprise sales representative expensing a client dinner",
    age: [26, 48],
    goals:
      "Get reimbursed quickly without spending Friday afternoons wrestling with expense forms.",
    brand:
      "Finance Blue (#1565C0) and clean gray; corporate compliance with consumer app speed.",
    tones: [
      {
        adjectives: "Fast, compliant",
        note: "Speed for the employee; policy guardrails for the company.",
      },
      {
        adjectives: "Clear, fair",
        note: "Policy violations are explained, not punished; the app helps you stay compliant.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable:
          "The receipt capture and expense submission form with OCR and policy check.",
        goal: "Submit a $185 client dinner receipt with automatic categorization and policy validation.",
        mustHaves: [
          "Camera receipt capture with OCR auto-fill (merchant, amount, date)",
          "Category selector with company policy limits shown",
          "Client/project tag for billing allocation",
          "Policy violation warning with explanation (e.g., over per-diem limit)",
          "Submitted state with estimated reimbursement date",
        ],
        success:
          "A sales rep submits a dinner receipt in 15 seconds between meetings.",
        pains:
          "Lost receipts; rejected expenses without explanation; 3-week reimbursement waits.",
        quote:
          "I spent $185 on a client dinner and couldn't find the receipt. That's my money gone.",
      },
    ],
  },
  {
    name: "Flume",
    industry: "SaaS / API Analytics",
    description:
      "A developer-facing API usage analytics platform showing request volumes, latency percentiles and error rate trends.",
    value:
      "Understand how developers use your API and catch breaking changes before they file a support ticket.",
    segment:
      "API product managers and developer relations engineers, 26–45, at companies with public or partner APIs.",
    behaviors:
      "Monitor dashboards after API releases; investigate latency spikes; report usage to leadership.",
    role: "API product manager at a payments company",
    age: [27, 44],
    goals:
      "Detect a 3x increase in 429 rate-limit errors after a partner integration launch.",
    brand: "API Indigo (#4F46E5) and dark terminal; developer-tool precision.",
    tones: [
      {
        adjectives: "Data-dense, actionable",
        note: "Charts and tables optimized for engineers; no marketing fluff.",
      },
      {
        adjectives: "Real-time, alerting",
        note: "Anomalies surface automatically; not buried in a sea of healthy metrics.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable:
          'The "API Health" dashboard widget with request volume, error rate and P99 latency.',
        goal: "Give a product manager a 5-second health check on API performance after a release.",
        mustHaves: [
          "Request volume chart (last 24h) with release marker annotations",
          "Error rate percentage with breakdown by status code (4xx, 5xx)",
          "P50 and P99 latency trend lines",
          "Top 5 endpoints by error rate",
          "All-healthy state with uptime badge",
        ],
        success:
          "Product manager spots the error spike within 5 seconds and clicks through to the affected endpoint.",
        pains:
          "Learning about API issues from angry developer tweets; no correlation between releases and errors.",
        quote:
          "We shipped a breaking change on Friday and didn't know until Monday's support queue.",
      },
    ],
  },
  {
    name: "Hearth",
    industry: "Real Estate / Home Inspection",
    description:
      "A digital home inspection report platform for buyers to review findings, track repairs and negotiate with sellers.",
    value:
      "Understand your home inspection report in 5 minutes and know exactly what to negotiate.",
    segment:
      "First-time homebuyers, 25–45, reviewing inspection reports during due diligence.",
    behaviors:
      "Receive 50-page reports; feel overwhelmed; ask their agent 'is this a big deal or not?'",
    role: "first-time homebuyer reviewing an inspection before closing",
    age: [26, 42],
    goals:
      "Understand which findings are serious, which are cosmetic and what to ask the seller to fix.",
    brand:
      "Home Warm (#D4A373) and clean white; reassuring during a stressful process.",
    tones: [
      {
        adjectives: "Explanatory, prioritized",
        note: "Findings are ranked by severity; jargon is translated to plain language.",
      },
      {
        adjectives: "Empowering, practical",
        note: "The buyer knows what to negotiate and what to let go.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable:
          "An inspection finding card with severity, photo, explanation and recommended action.",
        goal: "Help a buyer understand that a cracked foundation wall is serious while a sticking door is cosmetic.",
        mustHaves: [
          "Finding title, location in home and severity badge (critical, moderate, minor, informational)",
          "Inspector photo with annotation",
          "Plain-language explanation of the issue and its implications",
          "Estimated repair cost range",
          "Action recommendation (negotiate repair, monitor, cosmetic only)",
        ],
        success:
          "A first-time buyer understands the finding in 10 seconds without Googling the terminology.",
        pains:
          "50-page reports with no prioritization; not knowing what's normal vs alarming; analysis paralysis.",
        quote:
          "The report said 'evidence of moisture intrusion.' Is my house falling apart or is this normal?",
      },
    ],
  },
  {
    name: "Overture",
    industry: "Entertainment / Live Music Tickets",
    description:
      "A fan-first concert ticketing platform with transparent pricing, queue-free purchasing and artist-set ticket limits.",
    value:
      "Buy concert tickets at face value with no hidden fees and no scalper bots.",
    segment:
      "Live music fans, 18–50, buying tickets for concerts, festivals and club shows.",
    behaviors:
      "Buy tickets on sale day; compare prices across platforms; share events with friends.",
    role: "music fan who got burned by scalper markups on a sold-out show",
    age: [19, 45],
    goals:
      "Buy two tickets to a show at the listed price without competing against bots.",
    brand:
      "Stage Red (#C62828) and dark black; concert-poster energy with trustworthy pricing.",
    tones: [
      {
        adjectives: "Honest, exciting",
        note: "The price you see is the price you pay; the excitement is the show, not the hustle.",
      },
      {
        adjectives: "Fast, fair",
        note: "No hidden service fees; per-person limits prevent scalping; waitlists are transparent.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable:
          "The ticket purchase flow with tier selection, transparent pricing and friend-share option.",
        goal: "Buy 2 general admission tickets for a Friday night show with the total price clear before checkout.",
        mustHaves: [
          "Tier selection (GA, VIP, reserved) with all-in pricing (no added fees)",
          "Quantity selector with per-person limit notice",
          "Order summary with line-item transparency (base price + taxes, no service fees)",
          "Payment with saved card and Apple Pay",
          "Tickets delivered state with Apple Wallet add and share-with-friend button",
        ],
        success:
          "A fan buys tickets in 30 seconds with zero surprise charges at checkout.",
        pains:
          "$35 tickets becoming $58 after fees; bots buying all tickets in seconds; confusing resale markets.",
        quote:
          "The ticket said $35. By checkout it was $58. Where did $23 in fees come from?",
      },
    ],
  },
  {
    name: "Albatross",
    industry: "Aviation / Line Maintenance Operations",
    description:
      "A rugged flight line dispatch log for aircraft mechanics tracking snag repairs, parts serials and airworthiness sign-offs.",
    value:
      "Log squawks, verify component tags and release airframes without paperwork delays.",
    segment:
      "Line maintenance engineers and avionics technicians working in hangars and on airport aprons.",
    behaviors:
      "One-handed updates under high-glare ramp lighting wearing protective nitrile gloves.",
    role: "certifying line avionics technician",
    age: [29, 54],
    goals:
      "Clear routine turnaround snags before scheduled pushback while maintaining zero-defect documentation.",
    brand:
      "Brand color Tarmac Yellow (#EAB308) denotes pending inspection items, never system errors.",
    tones: [
      {
        adjectives: "Industrial, precise",
        note: "High-contrast tabular legibility, stark borders, and glove-friendly tap targets.",
      },
      {
        adjectives: "Calm, authoritative",
        note: "Unambiguous certification badges with cryptographic signature trails.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Line defect repair card",
        goal: "Allow an engineer to document a hydraulic pressure sensor swap on an active apron.",
        mustHaves: [
          "Component serial number comparison showing removed vs installed unit",
          "Dual-technician sign-off signature verification toggle",
          "Airworthiness release timestamp countdown to scheduled pushback",
        ],
        success:
          "Mechanic signs off the snag in under 90 seconds without leaving the apron.",
        pains:
          "Small inputs on greasy touchscreen displays cause accidental submission errors.",
        quote:
          "If pushback is in 10 minutes and the sign-off UI stalls, operations holds the delay against me.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Fleet airworthiness return log",
        goal: "Enable the duty maintenance controller to review open deferrals before dispatch.",
        mustHaves: [
          "Minimum Equipment List (MEL) category expiry tracker",
          "Filterable aircraft registration grid with deferred defects highlighted",
          "One-click release certificate generation with inspector identity seal",
        ],
        success:
          "Controller reviews and dispatches a 12-aircraft morning wave in 15 minutes.",
        pains:
          "Scattered paper logbooks lead to missed time-limited maintenance deferrals.",
        quote:
          "I need to see every deferred defect on an airframe before signing the release.",
      },
    ],
  },
  {
    name: "Kestrel",
    industry: "Wildlife Conservation / Telemetry Tracking",
    description:
      "A spatial telemetry dashboard mapping GPS collar pings, geofence breaches, and migratory corridors for endangered predators.",
    value:
      "Protect wildlife corridors with real-time collar telemetry and automated boundary alerts.",
    segment:
      "Field biologists, national park rangers, and wildlife corridor planners.",
    behaviors:
      "Review spatial coordinates on ruggedized field tablets with offline map tile caching.",
    role: "conservation research ecologist",
    age: [27, 49],
    goals:
      "Detect livestock corridor conflicts early to deploy non-lethal deterrent teams.",
    brand:
      "Brand color Sage Meadow (#10B981) emphasizes protected wildlife sanctuaries.",
    tones: [
      {
        adjectives: "Geospatial, grounded",
        note: "Cartographic restraint, subdued map layers, and clear ping cluster symbols.",
      },
      {
        adjectives: "Vigilant, understated",
        note: "Auditory alert suppressors with calm color-coded territory outlines.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Telemetry cluster widget",
        goal: "Summarize collar transmission health, low-battery beacons, and active mortality sensors.",
        mustHaves: [
          "Mortality signal status pill with last motion timestamp",
          "Collar battery depletion projection in estimated days",
          "One-click ping frequency throttle to conserve collar power",
        ],
        success:
          "Biologist spots a stationary collar within two minutes of morning sync.",
        pains:
          "Cluttered maps freeze when loading six months of 15-minute GPS coordinate points.",
        quote:
          "If an animal stops moving for four hours, I need an alert, not a slow-loading heat map.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Geofence perimeter breach alert card",
        goal: "Alert field rangers that a collared wolf pack has crossed into private ranching lands.",
        mustHaves: [
          "Distance to nearest ranch perimeter with travel vector arrow",
          "Alpha animal collar ID and pack member count",
          "Direct call button to local landowner liaison ranger",
        ],
        success:
          "Ranger team dispatches acoustic haze vehicle within 10 minutes of notification.",
        pains:
          "False alerts triggered by GPS jitter fatigue overnight ranger teams.",
        quote:
          "I need to know speed and direction immediately so we can intercept before the sheep pasture.",
      },
    ],
  },
  {
    name: "Pendant",
    industry: "Jewelry / Ethical Gemstone Provenance",
    description:
      "A supply-chain chain-of-custody ledger tracing rough gems from artisanal mine cooperatives to master stonecutters and retail jewelers.",
    value:
      "Certify conflict-free origins with immutable mine-to-mount documentation.",
    segment:
      "Independent fine jewelers, bespoke gem cutters, and ethical luxury buyers.",
    behaviors:
      "Scan QR certificates on gem envelopes and examine high-magnification stone inclusions.",
    role: "bespoke fine jewelry designer",
    age: [31, 58],
    goals:
      "Provide clients with transparent origin certificates showing miner fair-wage receipts.",
    brand:
      "Brand color Velvet Amethyst (#7C3AED) reflects gemstone pedigree without gaudy foil effects.",
    tones: [
      {
        adjectives: "Refined, trustworthy",
        note: "Editorial serif typography, generous whitespace, and tactile certificate layouts.",
      },
      {
        adjectives: "Transparent, meticulous",
        note: "Chronological chain-of-custody steps with verified audit timestamps.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Gemstone provenance passport card",
        goal: "Display mine origin, rough-to-cut weight yield, and artisan cutter signature to showroom clients.",
        mustHaves: [
          "Cooperative mine origin badge with fair-trade guild license number",
          "Weight progression breakdown from rough carat to faceted final carat",
          "High-res inclusion microscope photo carousel",
        ],
        success:
          "Showroom client feels confident in ethical sourcing and approves custom ring setting.",
        pains:
          "Clients struggle to read complex paper gemological certificates with tiny abbreviations.",
        quote:
          "When a customer asks where the sapphire was unearthed, I want to show them the cooperative that dug it.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Rough parcel intake ledger",
        goal: "Enable gem brokers to log incoming rough lots with carat weights, color grading, and import tariffs.",
        mustHaves: [
          "Kimberley Process certificate number input with format validation",
          "Multi-stone parcel weight distribution calculator",
          "Customs import tax and export royalty tally summary",
        ],
        success:
          "Broker registers a 50-stone raw tourmaline parcel in under five minutes.",
        pains:
          "Mismatch between parcel carat totals and individual rough stone tallies.",
        quote: "Every point of a carat must reconcile before customs release.",
      },
    ],
  },
  {
    name: "Sundial",
    industry: "Solar Energy / Microgrid Load Balancing",
    description:
      "An automated commercial microgrid balancer optimizing rooftop photovoltaic arrays, battery storage banks, and electric utility peak shaving.",
    value:
      "Minimize facility grid tariff charges and maximize solar self-consumption automatically.",
    segment:
      "Commercial facility managers and industrial plant energy engineers.",
    behaviors:
      "Monitor power flows on wall-mounted control room touch displays and receive critical shedding alerts on phone.",
    role: "industrial energy facilities engineer",
    age: [34, 52],
    goals:
      "Avoid 15-minute peak demand tariff spikes that double monthly commercial utility bills.",
    brand:
      "Brand color Solar Copper (#D97706) highlights active battery discharge cycles.",
    tones: [
      {
        adjectives: "Technical, lucid",
        note: "Sankey-style power flow diagrams, kilowatt metering, and clean tabular data.",
      },
      {
        adjectives: "Predictive, proactive",
        note: "Anticipatory load shedding timers with override confirmation safeguards.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Real-time energy split widget",
        goal: "Show current split between solar generation, battery discharge, and grid draw.",
        mustHaves: [
          "Three-way kilowatt vector showing directional energy flow",
          "Next peak tariff window countdown timer",
          "Manual peak-shaving test override trigger with safety confirmation",
        ],
        success:
          "Facility engineer verifies batteries are discharging during 4 PM tariff step.",
        pains:
          "Lagging 15-minute cloud data obscures instantaneous factory machine startup surges.",
        quote:
          "If a refrigeration compressor kicks in at 4:05 PM, the batteries must take the hit, not the utility meter.",
      },
      {
        type: "Empty state",
        platform: "Desktop",
        deliverable: "Battery storage degradation empty state",
        goal: "Guide a plant operator to connect Modbus telemetry cables to new lithium battery racks.",
        mustHaves: [
          "Schematic diagram showing RS485 communication port wiring",
          "Step-by-step baud rate configuration checklist",
          "Test ping button with live packet response monitor",
        ],
        success:
          "Technician discovers correct rack IP address without opening a PDF hardware manual.",
        pains:
          "Blank screens give zero indication whether communication protocol or power supply failed.",
        quote:
          "Don't just show 'No devices found' - tell me if the serial bus is seeing voltage or total silence.",
      },
    ],
  },
  {
    name: "Camber",
    industry: "Civil Engineering / Bridge Strain Monitoring",
    description:
      "A structural health monitoring console receiving fiber-optic strain gauge readings and vibration harmonics from suspension bridges.",
    value:
      "Detect structural fatigue and wind resonance oscillations before microcracks propagate.",
    segment:
      "Department of Transportation bridge inspectors and structural civil engineers.",
    behaviors:
      "Analyze multi-channel strain spectra on dual monitors; review seismic alarms during high-wind storms.",
    role: "senior bridge structural engineer",
    age: [36, 61],
    goals:
      "Differentiate between harmless thermal expansion cycles and structural tendon stress fractures.",
    brand:
      "Brand color Truss Steel (#3B82F6) represents structural integrity and tension data.",
    tones: [
      {
        adjectives: "Rigorous, analytical",
        note: "Scientific waveform plots, strain micro-inch metrics, and unambiguous safety thresholds.",
      },
      {
        adjectives: "Alert, decisive",
        note: "High-priority acoustic emission warnings separated from routine weather oscillations.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Sensor threshold excursion card",
        goal: "Alert an on-call engineer to abnormal pier deflection during gale-force channel winds.",
        mustHaves: [
          "Measured deflection in millimeters vs maximum allowable design tolerance",
          "Wind vector velocity and temperature compensation offset",
          "One-tap bridge lane closure protocol recommendation button",
        ],
        success:
          "Engineer confirms thermal vs dynamic cause within three minutes of alarm.",
        pains:
          "False alarms during winter cold snaps trigger unnecessary emergency lane closures.",
        quote:
          "I need thermal expansion stripped out so I am looking only at true mechanical strain.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Harmonic frequency resonance widget",
        goal: "Visualize real-time stay-cable vibration spectra to detect vortex shedding.",
        mustHaves: [
          "Fast Fourier Transform frequency peak chart with damper resonance line",
          "Stay-cable tension gauge status indicator",
          "Historical 24-hour wind speed correlation toggle",
        ],
        success:
          "Engineer confirms cable cross-tie dampers are suppressing vortex vibration.",
        pains:
          "Raw numerical sensor feeds require manual export to third-party math software.",
        quote:
          "Give me the resonance curve directly so I know if the aerodynamic fairings are holding.",
      },
    ],
  },
  {
    name: "Midden",
    industry: "Archaeology / Field Stratigraphy Recording",
    description:
      "An offline-first excavation recording notebook tracking Harris matrix stratigraphic units, artifact findspots, and soil sediment profiles.",
    value:
      "Map archaeological layers and small finds accurately before excavation destroys the context.",
    segment:
      "Field archaeologists, excavation trench supervisors, and museum catalogers.",
    behaviors:
      "Record finds in dusty, remote trenches on stylus-enabled tablets without cellular connectivity.",
    role: "excavation trench supervisor",
    age: [25, 48],
    goals:
      "Record stratigraphic relationships (above/below/cuts/fills) with zero ambiguous matrix links.",
    brand:
      "Brand color Terracotta Earth (#C2410C) reflects fired clay and trench soil strata.",
    tones: [
      {
        adjectives: "Methodical, academic",
        note: "Harris matrix directed graphs, Munsell soil color swatches, and spatial grid tags.",
      },
      {
        adjectives: "Dust-proof, tactile",
        note: "High-contrast daylight readable screens with large finger/stylus inputs.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Context sheet recording form",
        goal: "Allow an excavator to log a distinct soil layer with Munsell color, inclusions, and matrix relationships.",
        mustHaves: [
          "Munsell soil color picker with hue, value, and chroma matrix",
          "Stratigraphic relationship selector (cuts, filled by, abuts, underlies)",
          "Camera attachment trigger with automatic north-arrow and scale-bar stamp",
        ],
        success:
          "Supervisor completes a sealed context record in four minutes before troweling deeper.",
        pains:
          "Rain or wind destroys paper context sheets; digital forms with tiny pickers fail in bright sun.",
        quote:
          "Once you dig away a layer, it is gone forever. The digital record must be airtight.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Small find catalog card",
        goal: "Review a high-value artifact findspot with 3D coordinate total-station measurements.",
        mustHaves: [
          "Northing, Easting, and Elevation coordinates with millimeter precision",
          "Material classification tag (bronze, bone, ceramic, glass)",
          "Associated context number link with parent deposit verification",
        ],
        success:
          "Finds specialist confirms stratigraphy matches the pottery typological sequence.",
        pains:
          "Disconnected findspot numbers from context records create orphan artifacts.",
        quote:
          "An artifact without its stratigraphic context is just a curio with no scientific value.",
      },
    ],
  },
  {
    name: "Baleen",
    industry: "Marine Ecology / Hydrophone Acoustic Monitoring",
    description:
      "An underwater bioacoustics analyzer identifying cetacean vocalizations, vessel propeller cavitation, and seismic airgun noise.",
    value:
      "Alert commercial ships to slow down when endangered North Atlantic right whales call nearby.",
    segment:
      "Marine biologists, port harbor masters, and environmental compliance officers.",
    behaviors:
      "Inspect spectrogram waterfall plots and review automatic neural audio detection scores.",
    role: "marine bioacoustics researcher",
    age: [26, 45],
    goals:
      "Verify right whale upcall vocalizations within 15 minutes to trigger mandatory vessel speed zones.",
    brand:
      "Brand color Deep Ocean (#0284C7) signifies hydrophone acoustic depth channels.",
    tones: [
      {
        adjectives: "Auditory, precise",
        note: "Dark-mode spectrograms with hertz frequency axes and decibel loudness scales.",
      },
      {
        adjectives: "Urgent, protective",
        note: "High-visibility ship speed restriction zone alerts with maritime boundary rules.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable: "Vocalization verification flow",
        goal: "Allow a bioacoustic analyst to listen to a 5-second audio clip and confirm a whale detection.",
        mustHaves: [
          "Synchronized audio player with looping spectrogram scrubber",
          "Harmonic pitch contour overlay showing characteristic upcall curve",
          "One-click 'Confirm & Issue Slowdown Notice' broadcast button",
        ],
        success:
          "Analyst confirms species in 20 seconds and notifies coast guard vessel traffic system.",
        pains:
          "Background boat engine rumble triggers false neural network whale detections.",
        quote:
          "I need to hear the call and see the spectrogram simultaneously to rule out cargo ship groans.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Acoustic buoy array status widget",
        goal: "Display hydrophone telemetry, seawater temperature, and battery life for offshore buoys.",
        mustHaves: [
          "Mooring buoy transmission health pill",
          "Ambient noise level gauge in decibels re 1 uPa",
          "Satellite link signal strength indicator",
        ],
        success:
          "Technician identifies a hydrophone cable fault prior to chartering a repair vessel.",
        pains:
          "Discovering a dead buoy only after weeks of missed acoustic data.",
        quote:
          "Offshore boat charters cost ten thousand dollars a day; I need to know which buoy is failing before we sail.",
      },
    ],
  },
  {
    name: "Foundry",
    industry: "Industrial Metallurgy / Furnace Heat Casting",
    description:
      "A furnace heat management tool tracking molten alloy chemistry, spectrometer melt slips, and ladle pour temperatures.",
    value:
      "Prevent out-of-spec scrap castings by verifying metallurgical chemistry before pouring molds.",
    segment:
      "Metallurgists, foundry floor superintendents, and furnace charge masters.",
    behaviors:
      "Review optical emission spectrometer results beside roaring induction furnaces on heat-resistant tablets.",
    role: "chief plant metallurgist",
    age: [32, 57],
    goals:
      "Adjust carbon, silicon, and manganese additions in the furnace before tapping the heat.",
    brand:
      "Brand color Molten Amber (#EA580C) denotes liquid metal tapping temperature windows.",
    tones: [
      {
        adjectives: "Robust, unforgiving",
        note: "Stark chemical tolerance bars, high-contrast numeric tolerances, and bold alert banners.",
      },
      {
        adjectives: "Immediate, decisive",
        note: "Instant calculation of raw ladle additions with chemistry lock gates.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Spectrometer melt chemistry card",
        goal: "Inform a furnace operator whether the current heat is ready to pour or needs alloy trims.",
        mustHaves: [
          "Element percentage breakdown (C, Si, Mn, Cr, Ni) with min/max spec boundaries",
          "Required ferrosilicon addition weight calculated in kilograms",
          "Furnace tapping temperature gauge with optical pyrometer reading",
        ],
        success:
          "Furnace master adds exact alloy trim within two minutes of taking the test spoon sample.",
        pains:
          "Pouring a 5-ton heat with high sulfur ruins hundreds of machined engine block castings.",
        quote:
          "If carbon is off by 0.05%, the entire heat turns into costly scrap metal.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Master alloy specification recipe form",
        goal: "Allow metallurgists to configure ASTM grade chemical tolerance envelopes for sand molds.",
        mustHaves: [
          "Dual tolerance inputs for mandatory vs residual scrap trace elements",
          "Calculated carbon equivalent formula live preview",
          "Mandatory quality sign-off toggle before recipe can be dispatched to the floor",
        ],
        success:
          "Metallurgist publishes a new ductile iron grade with zero transcription errors.",
        pains:
          "Floor operators using outdated paper recipe sheets taped to the furnace console.",
        quote:
          "Quality audits require that every single casting traces directly back to the spectrometer heat slip.",
      },
    ],
  },
  {
    name: "Suture",
    industry: "Surgical Care / Sterile Tray Instrument Tracking",
    description:
      "A sterile processing department scanner tracking surgical instruments through decontamination, tray assembly, autoclave sterilization, and OR delivery.",
    value:
      "Ensure surgical instrument trays arrive in the operating room complete, sterile, and error-free.",
    segment:
      "Sterile processing technicians, operating room circulating nurses, and hospital safety leads.",
    behaviors:
      "Scan 2D matrix micro-barcodes etched on stainless steel surgical forceps under bright inspection lamps.",
    role: "certified sterile processing technician",
    age: [24, 46],
    goals:
      "Assemble complex 80-piece orthopedic surgical trays with zero missing or misidentified retractors.",
    brand:
      "Brand color Hospital Teal (#0D9488) reflects clinical sterilization standards.",
    tones: [
      {
        adjectives: "Clinical, infallible",
        note: "Photographic instrument silhouettes, exact millimeter measurements, and binary pass/fail toggles.",
      },
      {
        adjectives: "Rhythmic, focused",
        note: "High-speed continuous barcode scanning feedback with audio chime confirmation.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Desktop",
        deliverable: "Tray assembly verification flow",
        goal: "Guide a technician through inspecting, counting, and slotting 65 instruments into an open-heart tray.",
        mustHaves: [
          "Visual instrument silhouette matching with tip curvature diagrams",
          "Remaining pieces count-down indicator with missing item callout",
          "Biological indicator autoclave load tag print button",
        ],
        success:
          "Technician completes tray assembly in 12 minutes with 100% item verification.",
        pains:
          "Distinguishing between similar curved Mayo vs Metzenbaum dissecting scissors.",
        quote:
          "If an OR nurse opens a tray and finds one missing clamp, the patient stays under anesthesia while they search.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Autoclave load release badge card",
        goal: "Enable operating room charge nurses to confirm that a tray passed steam penetration biological testing.",
        mustHaves: [
          "Lot number, sterilizer chamber number, and cycle time",
          "Biological indicator color change confirmation photo",
          "Clear 'Sterility Verified' approval stamp with technician initials",
        ],
        success:
          "Nurse clears tray for surgery in five seconds at the scrub room door.",
        pains:
          "Faded chemical indicator strips lead to second-guessing tray sterility.",
        quote:
          "Before we make an incision, we verify that the sterilizer cycle reached full vacuum and heat.",
      },
    ],
  },
  {
    name: "Bespoke",
    industry: "Tailoring & Apparel / Made-to-Measure Pattern Alterations",
    description:
      "A digital cutting room suite translating client anatomical fittings into tailored pattern block adjustments for bespoke suits.",
    value:
      "Eliminate second-fitting alterations by recording posture, shoulder slope, and chest drape digitally.",
    segment: "Master tailors, cutters, and luxury made-to-measure clothiers.",
    behaviors:
      "Record tape measurements around client mannequins, chalking wool suiting fabric on cutting tables.",
    role: "head bespoke cutter",
    age: [33, 62],
    goals:
      "Draft custom jacket patterns that drape cleanly over erect, stooped, or asymmetrical shoulder profiles.",
    brand:
      "Brand color Chalk Gray (#64748B) reflects traditional tailor chalk lines on dark woolens.",
    tones: [
      {
        adjectives: "Sartorial, bespoke",
        note: "Classic proportions, precise fractional inch inputs, and subtle anatomical silhouette guides.",
      },
      {
        adjectives: "Artisanal, deliberate",
        note: "Quiet surfaces, focused editing tools, and unhurried measurement steps.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Posture and shoulder slope adjustment form",
        goal: "Allow a cutter to translate tape measurements and visual balance observations into pattern draft offsets.",
        mustHaves: [
          "Posture incline angle slider with live suit jacket profile drape preview",
          "Left vs right shoulder drop differential input in eighths of an inch",
          "Armhole depth and sleeve pitch angle recalculation summary",
        ],
        success:
          "Cutter calculates draft modifications in three minutes before shearing raw cloth.",
        pains:
          "Standard patterns assume symmetrical bodies; manual mental math leads to twisted sleeve pitch.",
        quote:
          "Most men have one shoulder lower than the other. If you don't cut for it, the jacket breaks across the back.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Fitting session garment chalk card",
        goal: "Allow an assistant tailor to record pinned alterations during a live client fitting.",
        mustHaves: [
          "Interactive garment silhouette with pin placement markers",
          "Voice note transcription button for verbal cutter notes",
          "Next basted fitting milestone date selector",
        ],
        success:
          "Assistant logs six pin adjustments without interrupting the client conversation.",
        pains:
          "Scrawled paper fitting notes get lost between the showroom and the basement cutting room.",
        quote:
          "The client shouldn't see me tapping a messy spreadsheet while they stand in front of the three-way mirror.",
      },
    ],
  },
  {
    name: "Gage",
    industry: "Metrology / Precision Calibration Laboratory",
    description:
      "A calibration laboratory management system tracking micrometer gauge blocks, torque transducers, and NIST uncertainty budgets.",
    value:
      "Maintain ISO/IEC 17025 laboratory accreditation with automated calibration interval tracking.",
    segment:
      "Metrology engineers, quality assurance auditors, and instrument calibration technicians.",
    behaviors:
      "Log dimensional comparisons in temperature-controlled 20 C cleanrooms using granite surface plates.",
    role: "certified metrology calibration engineer",
    age: [30, 56],
    goals:
      "Calculate expanded measurement uncertainty (k=2) across multi-step calibration runs.",
    brand:
      "Brand color Granite Slate (#475569) signifies calibration datum reference surfaces.",
    tones: [
      {
        adjectives: "Exact, verified",
        note: "Micro-inch and micron decimal formats, strict confidence interval chips, and datum flags.",
      },
      {
        adjectives: "Clean, systematic",
        note: "Orderly tabular run sheets with automated environmental temperature compensation.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Gauge block comparison run form",
        goal: "Record 10 repeated length comparisons against a master gauge block under thermal stabilization.",
        mustHaves: [
          "Lab ambient temperature input with automatic thermal expansion coefficient correction",
          "Repeated measurement array calculating mean, standard deviation, and standard error",
          "Expanded uncertainty budget summary bar showing coverage factor",
        ],
        success:
          "Technician generates an ISO 17025 certificate of calibration in under eight minutes.",
        pains:
          "Manual Excel spreadsheets often contain broken cell formula links for thermal offsets.",
        quote:
          "At the sub-micron scale, the warmth of your fingertip on the steel block ruins the calibration.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Instrument calibration overdue alert widget",
        goal: "Warn floor supervisors that a digital torque wrench on the production line has passed its expiry.",
        mustHaves: [
          "Tool asset ID and manufacturing station location",
          "Days overdue badge with red border accent",
          "One-tap lock-out tag-out quarantine order button",
        ],
        success:
          "Supervisor removes out-of-spec torque wrench before aerospace fastener assembly begins.",
        pains:
          "Expired calibration tools slip past quarterly factory audit spot checks.",
        quote:
          "If an uncalibrated wrench tightens a turbine flange bolt, the entire engine batch must be inspected.",
      },
    ],
  },
  {
    name: "Waypost",
    industry: "Outdoor Recreation / Backcountry Trail Maintenance Log",
    description:
      "A trail stewardship platform for wilderness trail crews logging blowdowns, tread washouts, and footbridge rot on backcountry paths.",
    value:
      "Coordinate volunteer crosscut saw and stone-masonry crews across rugged public trails.",
    segment:
      "Wilderness trail coordinators, park rangers, and volunteer trail club crew leaders.",
    behaviors:
      "Log downed tree diameters and muddy bog bridge rots using GPS waypoints while backpacking.",
    role: "wilderness trail crew leader",
    age: [23, 44],
    goals:
      "Prioritize heavy pack-mule and crosscut saw expeditions based on verified obstacle severity.",
    brand:
      "Brand color Forest Canopy (#15803D) connects to protected wilderness trails.",
    tones: [
      {
        adjectives: "Rugged, straightforward",
        note: "High-contrast daylight buttons, simple obstacle categories, and offline map layers.",
      },
      {
        adjectives: "Stewardly, practical",
        note: "Clear inventory of volunteer hours, tool requirements, and bridge span dimensions.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Downed tree obstacle report card",
        goal: "Record a trail-blocking tree with trunk diameter, wood species, and required saw size.",
        mustHaves: [
          "Trunk diameter input with two-person crosscut saw recommendation",
          "Trail passability status toggle (hikers passable, pack stock blocked)",
          "Offline GPS coordinate stamp with distance to nearest trailhead",
        ],
        success:
          "Scout logs a trail hazard in 45 seconds while hiking with a full pack.",
        pains:
          "Crews pack heavy crosscut saws five miles into the woods only to discover a tiny hand-saw was needed.",
        quote:
          "We need to know tree trunk thickness before hiking four hours with a six-foot two-man saw.",
      },
      {
        type: "Hero",
        platform: "Desktop",
        deliverable: "Trail season readiness hero overview",
        goal: "Give a forest district supervisor a seasonal overview of cleared trail miles and open hazards.",
        mustHaves: [
          "Total cleared trail miles progress bar against seasonal opening deadline",
          "Critical bridge hazard count pill with priority markers",
          "Crew expedition dispatch shortcut button",
        ],
        success:
          "Supervisor allocates summer trail maintenance grant funds in 20 minutes.",
        pains:
          "Paper trail logs from previous seasons sit uncompiled in ranger station binders.",
        quote:
          "When summer backpackers arrive on Memorial Day, the main loops must be cleared of winter blowdowns.",
      },
    ],
  },
  {
    name: "Spindle",
    industry: "Textile Manufacturing / Loom Tension & Yarn Breakage",
    description:
      "A high-speed weaving mill floor monitor tracking warp tension spikes, weft yarn insertions, and automated loom stoppage causes.",
    value:
      "Boost weaving mill efficiency by identifying recurring yarn break causes across industrial jacquard looms.",
    segment: "Textile engineers, loom fixers, and weaving shed shift managers.",
    behaviors:
      "Walk deafening weaving shed aisles inspecting optical yarn break sensors on 50 spinning looms.",
    role: "industrial loom technician and fixer",
    age: [28, 53],
    goals:
      "Diagnose mechanical reed friction or low-quality yarn batches that stop looms multiple times an hour.",
    brand:
      "Brand color Indigo Dye (#4338CA) honors raw denim and historic woven cloth trade.",
    tones: [
      {
        adjectives: "Mechanical, rapid",
        note: "Bold loom status tiles, large numeric picks-per-minute counters, and clear stoppage categories.",
      },
      {
        adjectives: "Efficient, diagnostic",
        note: "Instant root-cause categorization with minimum clicks between loom rows.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Loom stoppage alert card",
        goal: "Notify a roving loom fixer which loom stopped, which warp thread snapped, and the stoppage duration.",
        mustHaves: [
          "Loom row and machine number pill with pulsing red fault badge",
          "Break location indicator (warp harness, drop wire, or weft feeder)",
          "Running downtime timer showing lost production meters",
        ],
        success:
          "Fixer knots the broken warp end and restarts the loom in under three minutes.",
        pains:
          "Technicians cannot hear audible sirens over the 100-decibel roar of spinning looms.",
        quote:
          "Every minute a 600-pick loom sits idle is ten yards of high-end wool fabric lost.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Yarn lot defect correlation widget",
        goal: "Correlate yarn supplier batch numbers with stoppage frequency per 100,000 picks.",
        mustHaves: [
          "Supplier yarn lot comparative bar chart",
          "Yarn tensile strength vs break frequency scatter plot",
          "Supplier debit memo export button for defective raw fiber",
        ],
        success:
          "Mill manager identifies brittle cotton shipment and pauses purchase orders.",
        pains:
          "Blaming loom mechanics when the root cause was weak yarn spinning from a new vendor.",
        quote:
          "I need to prove to the yarn spinning mill that their batch caused 40 stops per hour.",
      },
    ],
  },
  {
    name: "Barometer",
    industry: "Commercial Fishing / Weather Window & Catch Quotas",
    description:
      "An offshore electronic logbook for commercial crab and groundfish captains tracking sea state barometric trends, soak times, and quota limits.",
    value:
      "Maximize catch harvest safely by matching vessel stability to safe barometric wave windows.",
    segment:
      "Commercial fishing vessel captains, fleet dispatchers, and fisheries quota monitors.",
    behaviors:
      "Operate wheelhouse touchscreens with salt-crusted fingers during rolling heavy North Atlantic swells.",
    role: "commercial fishing vessel captain",
    age: [35, 63],
    goals:
      "Log haul coordinates, discard rates, and retained tonnage to satisfy national fisheries observers.",
    brand: "Brand color Storm Navy (#0F172A) mimics open ocean night watches.",
    tones: [
      {
        adjectives: "Nautical, resilient",
        note: "Deep dark mode, oversized high-contrast buttons, and rapid barometric pressure trend arrows.",
      },
      {
        adjectives: "Compliant, focused",
        note: "Streamlined catch landing inputs built to prevent accidental quota penalty violations.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Gear haul log card",
        goal: "Record a string of 30 crab pots with soak duration, depth fathoms, and estimated legal crab count.",
        mustHaves: [
          "Gear string identifier and buoy GPS coordinates",
          "Legal keeper weight vs undersized discard weight counters",
          "Soak time duration display with automated timestamp lock",
        ],
        success:
          "Deckhand logs the string haul between pot dumps in 30 seconds.",
        pains:
          "Paper logbooks get soaked in seawater; complicated digital menus fail in rough seas.",
        quote:
          "My boat is rolling 25 degrees; I need giant buttons I can hit without looking.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Seasonal quota burn-down widget",
        goal: "Display remaining vessel quota tonnage against days left in the fishery season.",
        mustHaves: [
          "Remaining metric tons gauge with daily run-rate projection",
          "Individual species trip limit boundary marker",
          "One-click landing declaration transmission to port fisheries office",
        ],
        success:
          "Captain plans final three-day run without exceeding legal landing limits.",
        pains:
          "Overfishing quota by even 500 pounds results in heavy coast guard fines.",
        quote:
          "I need to know my exact species balance before we haul the last string and steer for harbor.",
      },
    ],
  },
  {
    name: "Copperhead",
    industry: "HVAC / Commercial Chiller Diagnostics & Refrigerant Recovery",
    description:
      "A field service diagnostic tool for industrial refrigeration technicians tracking subcooling, superheat, and EPA Section 608 refrigerant recovery cylinders.",
    value:
      "Diagnose thermodynamic efficiency and maintain EPA compliance for commercial HVAC chillers.",
    segment:
      "Commercial HVAC technicians, refrigeration mechanics, and building systems specialists.",
    behaviors:
      "Connect Bluetooth pressure-temperature manifold gauges to rooftop chillers in direct sunlight.",
    role: "commercial refrigeration service technician",
    age: [26, 51],
    goals:
      "Calculate target superheat and subcooling in real time to detect undercharged thermal expansion valves.",
    brand:
      "Brand color Refrigerant Teal (#14B8A6) matches standard commercial cooling indicators.",
    tones: [
      {
        adjectives: "Thermodynamic, crisp",
        note: "Dual pressure-temperature gauges, saturated vapor line indicators, and glare-free backgrounds.",
      },
      {
        adjectives: "Compliant, systematic",
        note: "Rigid tare weight tracking for certified recovery bottles with barcode scans.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Live superheat & subcooling widget",
        goal: "Calculate thermodynamic performance live from manifold suction pressure and line temperatures.",
        mustHaves: [
          "Refrigerant type selector (R-410A, R-134a, R-454B) with PT saturation curve",
          "Target vs actual subcooling comparison with deviation status badge",
          "Charge adjustment guidance recommendation (add liquid vs reclaim)",
        ],
        success:
          "Tech balances expansion valve charge in eight minutes without looking up paper PT charts.",
        pains:
          "Manual paper slide rules blow away in rooftop winds and lead to calculation errors.",
        quote:
          "If my superheat is 5 degrees too low, liquid refrigerant enters the compressor and destroys the scroll.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "EPA Section 608 refrigerant recovery log",
        goal: "Log recovered refrigerant pounds into a certified yellow-top cylinder with tare weight verification.",
        mustHaves: [
          "Cylinder serial number scan with hydro-test expiry check",
          "Gross weight minus cylinder tare weight net calculation",
          "Reason for recovery selection (compressor burnout, routine leak repair)",
        ],
        success:
          "Technician documents 45 lbs of recovered R-134a with zero EPA audit discrepancies.",
        pains:
          "Missing EPA recovery records risk severe environmental fines during facility inspections.",
        quote:
          "Every ounce of reclaimed gas must be accounted for before that tank leaves the roof.",
      },
    ],
  },
  {
    name: "Fallow",
    industry: "Regenerative Agriculture / Cover Crop & Soil Carbon Credit",
    description:
      "A farm field verification workspace tracking multi-species cover crops, rotational cattle grazing days, and soil organic carbon credits.",
    value:
      "Turn regenerative soil health practices into verified, monetizable carbon offset credits.",
    segment:
      "Row crop farmers, regenerative ranchers, and agricultural carbon credit certifiers.",
    behaviors:
      "Review satellite biomass NDVI imagery while driving tractors across prairie acreage.",
    role: "fourth-generation grain farmer & soil steward",
    age: [31, 59],
    goals:
      "Document zero-till planting and winter rye cover crop emergence to pass annual carbon audit checks.",
    brand:
      "Brand color Loam Brown (#78350F) represents rich, organic topsoil health.",
    tones: [
      {
        adjectives: "Agronomic, grounded",
        note: "Field parcel boundaries, NDVI plant vigor heatmaps, and clear soil core depth markers.",
      },
      {
        adjectives: "Verifiable, authentic",
        note: "Geotagged photographic audit checkpoints with timestamp metadata proof.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Cover crop stand emergence card",
        goal: "Log multi-species seedling count per square foot to prove ground cover percentage.",
        mustHaves: [
          "Species blend check (clover, daikon radish, cereal rye) with germination ratings",
          "Geotagged ground camera snap with square-foot quadrat overlay",
          "Calculated ground cover percentage score pill",
        ],
        success:
          "Farmer records five field quadrants in 15 minutes before the first winter frost.",
        pains:
          "Carbon aggregators reject satellite-only verification without geotagged ground truth photos.",
        quote:
          "I need proof in the ground that my cover crop established before the snow covers the fields.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Soil organic matter trend widget",
        goal: "Display five-year soil core lab test trends showing organic matter percentage growth by field zone.",
        mustHaves: [
          "Soil depth tier selector (0-15cm vs 15-30cm)",
          "Organic matter percentage line chart with carbon credit payout projection",
          "Export button for certified verifier PDF package",
        ],
        success:
          "Farmer submits certified soil data and receives carbon credit royalty payment.",
        pains:
          "Soil lab reports arrive in disparate CSV formats with confusing bulk density conversions.",
        quote:
          "Every 0.1% increase in soil organic matter holds thousands of gallons of water per acre.",
      },
    ],
  },
  {
    name: "Coffer",
    industry: "Municipal Finance / Public Capital Works Project Accounting",
    description:
      "A municipal capital project ledger tracking taxpayer bond appropriations, contractor draw requests, and public change orders.",
    value:
      "Prevent public infrastructure cost overruns with transparent, milestone-gated municipal bond accounting.",
    segment:
      "City finance directors, capital improvement project managers, and public oversight auditors.",
    behaviors:
      "Review multi-million-dollar contractor progress invoices against engineer field inspection certificates.",
    role: "city capital projects finance director",
    age: [38, 64],
    goals:
      "Ensure contractor progress disbursements match verified field completion percentages without dipping into contingency reserves.",
    brand:
      "Brand color Civic Bronze (#9A3412) reflects civic permanence and municipal trust.",
    tones: [
      {
        adjectives: "Fiduciary, transparent",
        note: "Structured ledger columns, strict balance reconciliations, and explicit audit approval trails.",
      },
      {
        adjectives: "Conservative, clear",
        note: "Clear delineation between approved contract baseline, pending change orders, and retained funds.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Contractor progress draw approval form",
        goal: "Review a general contractor pay application against the resident engineer field progress report.",
        mustHaves: [
          "Schedule of values item-by-item progress completion percentage table",
          "Automated 5% statutory retainage deduction calculation",
          "Resident engineer sign-off certificate attachment link",
        ],
        success:
          "Finance director approves a $1.2M sewer replacement draw in 10 minutes with complete audit compliance.",
        pains:
          "Approving invoices that claim 80% completion when the site engineer noted only 60% installed.",
        quote:
          "Public tax money cannot be disbursed until the pipe in the ground is pressure tested and verified.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Contingency reserve burn widget",
        goal: "Monitor project contingency spend against total construction completion percentage.",
        mustHaves: [
          "Contingency reserve remaining balance vs forecasted exposure",
          "Pending change order financial impact tally",
          "Warning banner when contingency depletion outpaces physical progress",
        ],
        success:
          "Director flags potential overrun three months before funds are exhausted.",
        pains:
          "Surprise change orders presented at the very end of construction exhaust municipal reserves.",
        quote:
          "If we have spent 80% of our contingency but built only 40% of the bridge, city council needs to know today.",
      },
    ],
  },
  {
    name: "Liniment",
    industry: "Equine Care / Veterinary Dosage & Farrier Schedule",
    description:
      "A performance horse health and competition management app tracking veterinary drug withdrawal periods, farrier shoeing cycles, and soundness checks.",
    value:
      "Keep sport horses sound and compliant with strict equestrian federation zero-tolerance drug rules.",
    segment:
      "Equestrian barn managers, equine veterinarians, and competition grooms.",
    behaviors:
      "Log medication doses, joint injections, and shoeing notes in stable aisles smelling of cedar shavings.",
    role: "head show barn manager",
    age: [25, 47],
    goals:
      "Track medication clearance clearance hours prior to show jumping competition vet inspections.",
    brand:
      "Brand color Saddle Leather (#854D0E) evokes equestrian saddlery tradition.",
    tones: [
      {
        adjectives: "Equine, vigilant",
        note: "Warm earth accents, distinct horse profile cards, and prominent anti-doping countdown timers.",
      },
      {
        adjectives: "Organized, dependable",
        note: "Routine care schedules grouped by stall number with one-tap completion logs.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "FEI medication withdrawal card",
        goal: "Show countdown until an anti-inflammatory drug clears the horse system for international competition.",
        mustHaves: [
          "Horse passport name and microchip number",
          "Administered substance name, dose, and administration timestamp",
          "Zero-tolerance competition clearance countdown clock with safe date stamp",
        ],
        success:
          "Barn manager confirms horse is clean 48 hours before entering the competition ring.",
        pains:
          "Inadvertent positive drug tests from poorly calculated withdrawal hours disqualify horses.",
        quote:
          "One dose of Bute given 12 hours too late means a two-year suspension for the rider.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Farrier shoeing visit log",
        goal: "Allow a visiting master farrier to record angle measurements, shoe types, and therapeutic pads.",
        mustHaves: [
          "Four-hoof diagram with shoe specification selector (steel, aluminum, egg-bar)",
          "Hoof angle degrees and toe length measurements",
          "Next scheduled shoeing reminder interval (4, 5, or 6 weeks)",
        ],
        success:
          "Farrier logs a four-shoe reset in 60 seconds at the cross-ties.",
        pains:
          "Missing shoe resets lead to thrown shoes in the competition warm-up ring.",
        quote:
          "No hoof, no horse. We need the exact shoeing specifications recorded for every horse in the barn.",
      },
    ],
  },
  {
    name: "Bivouac",
    industry: "Alpine Search & Rescue / Incident Command Avalanche Mapping",
    description:
      "A rugged incident management tool for mountain rescue teams coordinating avalanche beacon searches, dog teams, and helicopter extraction zones.",
    value:
      "Speed up wilderness search deployment during the critical 15-minute avalanche burial survival window.",
    segment:
      "Mountain rescue incident commanders, ski patrollers, and volunteer search dog handlers.",
    behaviors:
      "Coordinate rescue grids on battery-powered command post laptops in sub-zero snowstorms.",
    role: "volunteer mountain rescue incident commander",
    age: [29, 55],
    goals:
      "Deploy transceiver searchers, probe lines, and medical sled teams with clear topographical GPS sectors.",
    brand:
      "Brand color Rescue Blaze (#F97316) provides vital visibility in blizzard conditions.",
    tones: [
      {
        adjectives: "Life-critical, urgent",
        note: "Stark black-and-high-vis interface, large survivor timeline timer, and battery-sparing dark mode.",
      },
      {
        adjectives: "Topographical, austere",
        note: "Elevation contour shading, avalanche slope angle hazards, and radio callsign tags.",
      },
    ],
    tasks: [
      {
        type: "Hero",
        platform: "Desktop",
        deliverable: "Avalanche search incident command hero",
        goal: "Provide instant situational awareness of buried subject timeline and deployed field teams.",
        mustHaves: [
          "Burial time elapsed stopwatch with survival probability curve indicator",
          "Sector assignment status grid (beacon sweep, canine team, probe line)",
          "Helicopter landing zone weather advisory pill (wind speed and cloud ceiling)",
        ],
        success:
          "Incident commander deploys two dog teams and probe sweep within three minutes of 911 dispatch.",
        pains:
          "Cluttered incident management tools freeze or require high-bandwidth cloud connections in remote canyons.",
        quote:
          "After 15 minutes buried in snow, survival drops off a cliff. We cannot waste seconds clicking through menus.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Field searcher sector check-in card",
        goal: "Allow a ski patroller on skins to confirm sector search completion and clear the slope of hazards.",
        mustHaves: [
          "Sector identifier and GPS track log confirmation",
          "Primary transceiver sweep result (clear / signal detected)",
          "Hang-fire avalanche danger assessment toggle",
        ],
        success:
          "Patroller checks in from an icy ridge in 15 seconds wearing heavy ski mitts.",
        pains:
          "Touchscreens that do not register inputs with wet gloves or snow on the glass.",
        quote:
          "I can't take off my mitts at 10 below zero on a windy ridge just to check a box.",
      },
    ],
  },
  {
    name: "Retort",
    industry:
      "Distilling / Craft Spirit Maturation & Barrel Warehouse Inventory",
    description:
      "A distillery rickhouse barrel management tool tracking proof gallons, char levels, angel's share evaporation, and single-barrel batching.",
    value:
      "Optimize bourbon maturation and satisfy federal TTB excise tax gauging requirements automatically.",
    segment:
      "Master distillers, rickhouse managers, and craft whiskey blenders.",
    behaviors:
      "Scan barcode bung tags in dim, multi-story unheated wooden barrel warehouses.",
    role: "head distiller and rickhouse master",
    age: [31, 58],
    goals:
      "Blend small batches to exact proof and flavor profiles while keeping meticulous TTB spirit tax logs.",
    brand:
      "Brand color White Oak (#A16207) echoes charred American oak maturation barrels.",
    tones: [
      {
        adjectives: "Craft, barrel-aged",
        note: "Warm wood tones, stave diagrams, precise proof and hydrometer temperature corrections.",
      },
      {
        adjectives: "Mathematical, regulatory",
        note: "Uncompromising proof-gallon conversions and rigorous bonded warehouse records.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Hydrometer temperature correction form",
        goal: "Convert raw hydrometer stem readings and mercury thermometer values into true 60 F proof gallons.",
        mustHaves: [
          "Observed hydrometer proof input with 0.1 degree precision",
          "Temperature input with automated TTB Table 1 gauging correction",
          "Calculated true proof and net taxable proof gallon readout",
        ],
        success:
          "Distiller determines exact barrel proof in 30 seconds before filling blending tanks.",
        pains:
          "Flipping through dog-eared 50-year-old federal paper gauging tables under poor lighting.",
        quote:
          "The government taxes whiskey on proof gallons. If my temperature correction is off, our tax bill is wrong.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Rickhouse barrel locator card",
        goal: "Guide a warehouse worker to locate a specific 2018 rye whiskey barrel on Rick 4, Tier 3.",
        mustHaves: [
          "Warehouse, Rick, Tier, and Rung coordinate graphic",
          "Cooperage name, wood char level (No. 3 vs No. 4 alligator char), and fill date",
          "Estimated angel's share loss percentage based on warehouse ambient temperature history",
        ],
        success:
          "Worker pulls the target single barrel with a forklift in under four minutes.",
        pains:
          "Barrels stacked six high in dimly lit wooden rickhouses are difficult to identify by eye.",
        quote:
          "When a barrel costs $15,000, you don't roll the wrong one off the rick.",
      },
    ],
  },
  {
    name: "Scaffold",
    industry: "Urban Architecture / Facade Inspection & Drone Orthomosaic",
    description:
      "A building envelope diagnostic console mapping spalling brick, terracotta fractures, and mortar deterioration from high-resolution drone scans.",
    value:
      "Help municipal building owners pass mandatory facade safety laws without erecting expensive sidewalk scaffolding.",
    segment:
      "Facade preservation architects, structural building inspectors, and property managers.",
    behaviors:
      "Zoom into gigapixel drone orthomosaic image tiles to annotate cracks and unsafe masonry cornice conditions.",
    role: "qualified exterior wall inspector (QEWI)",
    age: [33, 56],
    goals:
      "Classify facade defects as Safe, Safe with a Repair and Maintenance Program (SWARMP), or Unsafe.",
    brand:
      "Brand color Masonry Red (#B91C1C) marks unsafe masonry fall hazards.",
    tones: [
      {
        adjectives: "Architectural, rigorous",
        note: "High-resolution elevation drawings, millimeter crack measurement calipers, and clear defect codes.",
      },
      {
        adjectives: "Public-safety, direct",
        note: "Immediate distinction between superficial cosmetic cracks and hazardous loose stone cornices.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Facade defect classification card",
        goal: "Annotate an unstable terracotta window lintel on a 15-story pre-war residential building facade.",
        mustHaves: [
          "Defect severity selector (Safe, SWARMP, Unsafe) with color-coded safety banner",
          "High-res crop showing fracture depth and rust-jacking of structural iron lintel",
          "Required emergency sidewalk shed shed deployment recommendation toggle",
        ],
        success:
          "Architect files an emergency condition notification to the city buildings department in five minutes.",
        pains:
          "Manually matching hundreds of drone photos to their exact floor and window bay coordinates.",
        quote:
          "If a 5-pound piece of decorative terracotta falls from the 12th floor, someone on the sidewalk dies.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Inspection field drop status widget",
        goal: "Track visual inspection progress along a building elevation during an exterior suspended scaffold drop.",
        mustHaves: [
          "Current drop vertical line progress tracker (Floors 1-20)",
          "Tap-hammer sounding log counter (hollow vs solid brick sound)",
          "Emergency stop button to halt scaffold descent during high wind gusts",
        ],
        success:
          "Inspector completes physical sounding of a 20-story drop and syncs findings to cloud.",
        pains:
          "Holding a paper clipboard and a masonry hammer while suspended 200 feet in the air.",
        quote:
          "You have two hands on the scaffold: one for yourself, one for the hammer. The app must be seamless.",
      },
    ],
  },
  {
    name: "Cobblestone",
    industry: "Historic Preservation / Masonry Mortar & Heritage Restoration",
    description:
      "A conservation database analyzing historic lime mortar recipes, aggregate grain distributions, and vapor-permeable stone repointing.",
    value:
      "Protect historic masonry from irreversible spalling by matching original non-hydraulic lime mortar formulations.",
    segment:
      "Heritage masonry conservators, historic landmark commissioners, and preservation masons.",
    behaviors:
      "Examine acid-digested mortar sand samples under stereomicroscopes to formulate matching restoration batches.",
    role: "architectural conservator and historic mason",
    age: [30, 60],
    goals:
      "Specify soft lime mortars that breathe and allow moisture to evaporate without crushing brittle historic brick.",
    brand:
      "Brand color Lime Wash (#71717A) reflects breathable slaked lime and historic stonework.",
    tones: [
      {
        adjectives: "Heritage, meticulous",
        note: "Historical documentation standards, sand sieve grading curves, and chemical compatibility alerts.",
      },
      {
        adjectives: "Preservative, respectful",
        note: "Emphasis on reversible preservation techniques rather than destructive modern Portland cement.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Mortar aggregate sieve analysis form",
        goal: "Calculate the sand particle distribution curve from ASTM dry sieve shaker weights.",
        mustHaves: [
          "Sieve pan weight inputs (Mesh No. 4 through No. 200) with automatic percentage calculations",
          "Grain size distribution graph compared against historic target profile",
          "Binder-to-sand ratio recommendation (1:2.5 vs 1:3 slaked lime putty)",
        ],
        success:
          "Conservator designs a matching repointing mix in under 10 minutes.",
        pains:
          "Contractors using modern hard Portland cement that destroys soft 18th-century hand-struck brick.",
        quote:
          "The mortar must always be sacrificial to the brick. If the mortar is harder than the stone, the building rots.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Stone repointing joint profile card",
        goal: "Instruct masons on site regarding the exact historic joint profile (flush, struck, beaded, or grapevine).",
        mustHaves: [
          "Cross-section joint tooling illustration with millimeter depth",
          "Mortar cure wetting schedule reminder to prevent rapid drying",
          "Approved historic district commission sample panel reference photo",
        ],
        success:
          "Mason tools the joint profile to historic accuracy with zero rework.",
        pains:
          "Miscommunication between architectural drawings and the masons on the scaffold.",
        quote:
          "If the joint is smeared across the brick face, the historic commission will make us grind it all out.",
      },
    ],
  },
  {
    name: "Driftline",
    industry: "Ocean Shipping / Port Berth Slot Auction & Tug Booking",
    description:
      "A port terminal coordination system managing container ship arrival slots, harbor pilot boarding times, and ship-assist tug allocations.",
    value:
      "Reduce vessel anchorage wait times and bunker fuel burn through dynamic Just-In-Time port arrival slots.",
    segment:
      "Port harbor masters, container line operations dispatchers, and maritime pilot associations.",
    behaviors:
      "Monitor automated vessel tracking AIS feeds, channel tidal windows, and crane gang schedules on wide control room screens.",
    role: "port harbor master vessel traffic coordinator",
    age: [36, 58],
    goals:
      "Synchronize deep-draft container ships with high-tide channel windows to avoid vessel grounding.",
    brand:
      "Brand color Port Harbor Blue (#0369A1) connects to deepwater commercial maritime shipping.",
    tones: [
      {
        adjectives: "Maritime, operational",
        note: "Tidal curve graphics, vessel draft indicators, and clear tugboat dispatch timelines.",
      },
      {
        adjectives: "Precise, punctual",
        note: "Every slot tied to strict slack-water high-tide windows with zero tolerance for delays.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Berth allocation & tidal window booking form",
        goal: "Schedule a 14-meter-draft post-Panamax vessel into Terminal 4 during high slack water.",
        mustHaves: [
          "Dynamic tidal depth chart overlay showing under-keel clearance margin",
          "Assigned assist tugs selector with bollard pull tonnage requirements",
          "Harbor pilot boarding station ETA confirmation lock",
        ],
        success:
          "Coordinator reserves pilot and berth in four minutes with zero clearance conflicts.",
        pains:
          "A ship missing high tide by 20 minutes must drop anchor outside the harbor for 12 hours.",
        quote:
          "When a ship carries 15,000 containers, an extra 12 hours at anchor burns thousands in fuel.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Pilot boat boarding dispatch card",
        goal: "Give the harbor pilot vessel master the exact boarding ladder coordinates and sea state.",
        mustHaves: [
          "Target ship name, callsign, and speed through the water in knots",
          "Boarding ladder side (port vs starboard) and height above water in meters",
          "Local swell height and wind vector at the sea buoy",
        ],
        success:
          "Pilot boat transfers pilot safely onto ship rope ladder in choppy seas.",
        pains:
          "Arriving on the wrong side of the ship in heavy wind creates dangerous pilot transfer conditions.",
        quote:
          "Transferring a pilot from a pitching launch to a rope ladder requires exact ship heading and speed.",
      },
    ],
  },
  {
    name: "Kilnwork",
    industry: "Ceramics & Pottery / Studio Clay Glaze Recipe & Firing Curves",
    description:
      "A community pottery studio kiln monitor tracking cone temperatures, glaze chemical unity formulas, and reduction atmosphere schedules.",
    value:
      "Eliminate glaze defects like pinholing and crazing with precise digital pyrometer and Orton cone tracking.",
    segment:
      "Ceramic artists, studio managers, glaze chemists, and production potters.",
    behaviors:
      "Program multi-ramp digital kiln controllers and record glaze bucket specific gravity with hydrometers.",
    role: "ceramic studio technician and glaze master",
    age: [24, 52],
    goals:
      "Fire gas reduction kilns to Cone 10 without under-firing bottom shelves or thermal shocking delicate porcelain.",
    brand:
      "Brand color Kiln Flame (#C026D3) evokes high-temperature ceramic chemistry and reduction atmospheres.",
    tones: [
      {
        adjectives: "Artistic, empirical",
        note: "Orton cone heat-work tables, Seger unity formula ratios, and clean thermal rise graphs.",
      },
      {
        adjectives: "Sensory, dependable",
        note: "Glaze dip thickness timers and clear shelf packing layout schematics.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Seger glaze unity formula calculator form",
        goal: "Calculate the silica-to-alumina ratio of a new celadon glaze to prevent crazing on stoneware clay.",
        mustHaves: [
          "Flux oxide weight inputs (K2O, Na2O, CaO, MgO) normalized to 1.0",
          "Calculated SiO2:Al2O3 ratio display with thermal expansion risk indicator",
          "Batch weight multiplier for 5,000-gram studio bucket mixing",
        ],
        success:
          "Glaze chemist checks formula stability in five minutes before mixing raw dry minerals.",
        pains:
          "Students spending weeks hand-carving porcelain vessels only to have glazes craze and crack in the kiln.",
        quote:
          "Glaze chemistry is exact science. If your silica is too low, the glaze will melt right off the pot and ruin the shelf.",
      },
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Kiln firing ramp monitor widget",
        goal: "Show live thermocouple temperatures and hourly rise rate during an overnight Cone 6 bisque firing.",
        mustHaves: [
          "Current temperature in Fahrenheit with hourly rate-of-rise degrees per hour",
          "Target Orton cone milestone indicator with projected shutoff time",
          "Over-temperature safety shutoff alert threshold indicator",
        ],
        success:
          "Studio tech monitors kiln from home and confirms automatic soak shutoff.",
        pains:
          "Stuck kiln relays causing thermal runaways that melt kiln shelves into slag.",
        quote:
          "I need to know the moment the kiln hits the quartz inversion phase so we don't crack the pots.",
      },
    ],
  },
  {
    name: "Tallow",
    industry: "Specialty Soapcraft & Skincare / Cold-Process Batch Formulation",
    description:
      "A cold-process soapmaking calculator tracking lye concentration, superfat ratios, fatty acid hardness profiles, and curing room humidity.",
    value:
      "Formulate skin-conditioning artisan soap bars with balanced lather and zero lye-heavy batches.",
    segment:
      "Artisan soap crafters, natural cosmetic formulators, and boutique apothecary owners.",
    behaviors:
      "Calculate sodium hydroxide weights while wearing protective safety goggles in chemical formulation workshops.",
    role: "master soapmaker & cosmetic chemist",
    age: [25, 52],
    goals:
      "Balance lauric, oleic, and stearic fatty acid percentages to produce long-lasting, creamy bars.",
    brand:
      "Brand color Botanical Olive (#65A30D) represents cold-pressed plant oils and natural botanical soaps.",
    tones: [
      {
        adjectives: "Apothecary, empirical",
        note: "Saponification value tables, exact gram precision, and clean fatty acid breakdown charts.",
      },
      {
        adjectives: "Sensory, crafted",
        note: "Fragrance flashpoint warnings and clear temperature trace milestone guides.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Lye & water calculation recipe form",
        goal: "Calculate exact NaOH and distilled water requirements based on oil saponification values and superfat percentage.",
        mustHaves: [
          "Oil selection table (olive, coconut, shea, castor) with gram weights",
          "Superfat percentage slider with automatic lye discount adjustment",
          "Fatty acid profile bar (Hardness, Cleansing, Conditioning, Bubbly lather)",
        ],
        success:
          "Soapmaker formulates a 10-pound batch with 100% chemical balance in five minutes.",
        pains:
          "Miscalculating lye by even two grams produces a caustic, skin-irritating bar of soap.",
        quote:
          "Soapmaking is precise stoichiometry. If the lye ratio is wrong, the entire batch must be thrown away.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Curing rack cure tracking card",
        goal: "Track the six-week saponification and moisture loss curing timeline for freshly cut soap loaves.",
        mustHaves: [
          "Loaf batch number, cut date, and bar count",
          "Moisture loss weight progression indicator against target hardness",
          "Cure completion date badge with pH paper safety test checklist",
        ],
        success:
          "Artisan confirms batch is ready for retail packaging and market sale.",
        pains:
          "Selling soap bars before full water evaporation leads to mushy bars in customer showers.",
        quote:
          "Patience makes good soap. We don't wrap a single bar until it passes the weight stabilization test.",
      },
    ],
  },
  {
    name: "Rafter",
    industry: "Timber Construction / Truss Engineering & Cut-List Optimization",
    description:
      "A carpentry cut-list and timber truss layout system calculating pitch angles, birdsmouth notches, and wood waste reduction.",
    value:
      "Speed up roof framing on job sites with millimeter-accurate compound miter angles and optimized timber cut sheets.",
    segment:
      "Framing carpenters, timber framers, and residential building contractors.",
    behaviors:
      "Review compound angle cut lists while operating chop saws and framing nailers on sunny framing decks.",
    role: "lead framing carpenter",
    age: [26, 49],
    goals:
      "Cut all common rafters, hips, and jacks from framing lumber bundles with under 4% board waste.",
    brand:
      "Brand color Cedar Grain (#B45309) connects to rough-sawn structural lumber and roof trusses.",
    tones: [
      {
        adjectives: "Carpentry, direct",
        note: "Fractional inch dimensions to 1/16th inch, stark angle bevel markings, and clear cut sequence diagrams.",
      },
      {
        adjectives: "Efficient, unadorned",
        note: "High-contrast daylight readable boards with zero clutter between saw cuts.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Hip rafter cut sheet card",
        goal: "Provide a carpenter at the miter saw with the exact length, plumb cut angle, and cheek bevel angles.",
        mustHaves: [
          "Calculated rafter length from ridge to building plate in feet and fractional inches",
          "Saw blade miter angle and bevel angle settings",
          "Birdsmouth notch depth measurement with seat cut width",
        ],
        success:
          "Carpenter cuts a complete set of 12 jack rafters in 20 minutes without miscuts.",
        pains:
          "Math errors when calculating compound angles on hip roofs ruin expensive 2x10 lumber.",
        quote:
          "When you are cutting expensive Douglas fir rafters, you measure twice and cut once with zero guesswork.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Lumber order yield optimization widget",
        goal: "Group roof rafter cuts into standard 16-foot and 20-foot lumber stock lengths to minimize offcut scrap.",
        mustHaves: [
          "Linear board foot total and estimated lumber package price",
          "Visual nesting diagram showing cut layout per board",
          "Scrap waste percentage pill with budget saving metric",
        ],
        success:
          "General contractor reduces framing lumber order by 14 boards.",
        pains:
          "Ordering random lumber lengths results in piles of unusable short scraps on the job site.",
        quote:
          "Lumber prices fluctuate constantly; tight nesting saves hundreds of dollars per roof deck.",
      },
    ],
  },
  {
    name: "Plume",
    industry: "Geothermal Utilities / Wellhead Pressure & Steam Turbines",
    description:
      "A geothermal power plant supervisory tool tracking wellhead enthalpy, non-condensable gas extraction, and turbine steam temperatures.",
    value:
      "Optimize clean megawatt generation while protecting turbine blades from silica scale buildup.",
    segment:
      "Geothermal plant control engineers, field operators, and subsurface reservoir engineers.",
    behaviors:
      "Monitor high-pressure geothermal steam gathering lines and cooling tower re-injection wells.",
    role: "geothermal plant operations engineer",
    age: [31, 58],
    goals:
      "Maintain stable steam inlet pressures to maximize megawatt hours fed to the electrical grid.",
    brand:
      "Brand color Geothermal Cyan (#0891B2) represents superheated underground steam energy.",
    tones: [
      {
        adjectives: "Thermodynamic, industrial",
        note: "Enthalpy-entropy Mollier diagrams, barometric steam pressure gauges, and pipeline schematics.",
      },
      {
        adjectives: "Protective, steady",
        note: "Automatic silica saturation warnings preventing mineral deposition in turbine nozzles.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Wellhead steam enthalpy widget",
        goal: "Track total steam mass flow and moisture separator efficiency across 8 geothermal production wells.",
        mustHaves: [
          "Kilograms-per-second steam flow rate gauge per wellhead",
          "Steam dryness fraction indicator with water carryover warning",
          "Re-injection well backpressure telemetry status",
        ],
        success:
          "Operator throttles a surging well before wet steam droplets strike turbine blades.",
        pains:
          "Moisture droplets in geothermal steam erode turbine blades at high supersonic speeds.",
        quote:
          "If liquid water gets past the steam separator, the turbine will suffer severe blade erosion.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Field pipeline hydrogen sulfide monitor card",
        goal: "Warn roaming field operators of atmospheric H2S gas concentrations near steam wellheads.",
        mustHaves: [
          "Parts-per-million gas sensor reading with occupational threshold limits",
          "Wind direction vector showing toxic plume drift direction",
          "Emergency muster point route recommendation button",
        ],
        success:
          "Operator safely navigates around an unignited vent plume during maintenance.",
        pains:
          "H2S deadens the human sense of smell at dangerous concentrations, making visual alarms vital.",
        quote:
          "You cannot trust your nose with hydrogen sulfide. You must trust the sensor on your tablet.",
      },
    ],
  },
  {
    name: "Vessel",
    industry:
      "Scientific Research / Laboratory Centrifuge & Specimen Aliquoting",
    description:
      "A clinical research biospecimen catalog managing centrifuge spin protocols, liquid nitrogen cryovial locations, and freeze-thaw cycles.",
    value:
      "Preserve biological integrity of rare patient blood and tissue samples for clinical oncology trials.",
    segment:
      "Clinical biobank managers, laboratory technicians, and molecular biology research fellows.",
    behaviors:
      "Scan 2D Datamatrix cryovial tubes wearing insulated thermal gloves beside minus 196 C liquid nitrogen freezers.",
    role: "senior clinical biobank coordinator",
    age: [26, 47],
    goals:
      "Track every biological sample from blood draw centrifuge separation to specific freezer rack coordinates.",
    brand:
      "Brand color Cryo Frost (#0284C7) echoes deep sub-zero biospecimen storage preservation.",
    tones: [
      {
        adjectives: "Sterile, exact",
        note: "Grid cell freezer maps, 96-well plate diagrams, and clear sample volume microliter metrics.",
      },
      {
        adjectives: "Systematic, audit-ready",
        note: "Zero-tolerance freeze-thaw tracking with strict chain-of-custody timestamps.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Cryovial 96-well grid locator card",
        goal: "Display the exact shelf, rack, box, and grid coordinate for a patient plasma aliquot.",
        mustHaves: [
          "Freezer number, rack ID, and 9x9 box coordinate grid graphic",
          "Freeze-thaw cycle counter (must not exceed 2 cycles)",
          "Consent status badge (verified patient research consent on file)",
        ],
        success:
          "Technician pulls the target tube in under 40 seconds, minimizing freezer temperature rise.",
        pains:
          "Searching through frosty freezer boxes while precious samples warm above minus 80 C.",
        quote:
          "Every second a cryobox sits on the laboratory bench, sample RNA begins degrading.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Centrifuge batch spin log form",
        goal: "Log centrifugation parameters (RCF gravity, duration, temperature) for blood plasma separation.",
        mustHaves: [
          "Centrifuge rotor ID and relative centrifugal force (RCF x g) calculation",
          "Brake deceleration setting toggle (gentle brake for density gradient separation)",
          "Aliquoting completion timer countdown to deep-freeze placement",
        ],
        success:
          "Lab tech processes 24 patient blood tubes with complete protocol compliance.",
        pains:
          "Using RPM instead of RCF leads to inconsistent plasma separation across different centrifuges.",
        quote:
          "Clinical trials require exact RCF values, not generic motor speed revolutions.",
      },
    ],
  },
  {
    name: "Cobbler",
    industry: "Leatherwork & Footwear / Custom Last Fitting & Resoling Orders",
    description:
      "A bespoke cordwainer workshop order book tracking carved wooden shoe lasts, Goodyear welt stitching, and resoling repairs.",
    value:
      "Preserve bespoke footwear patterns and track craftsmanship milestones for handmade leather shoes.",
    segment:
      "Master cordwainers, bespoke shoe makers, and traditional footwear repair cobblers.",
    behaviors:
      "Inspect worn leather outsoles and record bespoke wooden last measurements surrounded by stacks of hides.",
    role: "master bespoke cordwainer",
    age: [32, 65],
    goals:
      "Build custom footwear that matches the exact contours of client foot arches, bunions, and heel widths.",
    brand:
      "Brand color Cordovan Burgundy (#881337) represents premium horsehide leather and bespoke footwear.",
    tones: [
      {
        adjectives: "Traditional, tactile",
        note: "Shoe anatomy diagrams (welt, insole, shank, outsole), rich leather tones, and craft milestones.",
      },
      {
        adjectives: "Attentive, lasting",
        note: "Comprehensive repair histories showing decades of client resoling care.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Bespoke last fitting profile form",
        goal: "Record foot girth measurements (ball, instep, heel, ankle) and adjustments for a carved wooden last.",
        mustHaves: [
          "Millimeter girth measurement inputs with left vs right foot differential",
          "Arch height classification and orthotic leather build-up notes",
          "Tannery leather selection selector (French calfskin, Dublin leather, reverse chamois)",
        ],
        success:
          "Cordwainer rasps the wooden last to perfection before lasting the upper leather.",
        pains:
          "Shoe lasts that do not account for instep volume pinch client feet uncomfortably.",
        quote:
          "The last is the soul of the shoe. If the last is wrong, no amount of fine stitching can save it.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Goodyear welt resoling intake card",
        goal: "Log a customer pair of vintage dress boots for a complete sole recraft and heel rebuild.",
        mustHaves: [
          "Sole wear pattern evaluation (toe drag, heel roll, broken welt thread)",
          "Replacement outsole material picker (oak bark tanned leather vs commando rubber lug)",
          "Customer estimated completion date and SMS pickup alert trigger",
        ],
        success:
          "Cobbler logs repair ticket and prints customer heel tag in 90 seconds.",
        pains:
          "Lost paper tags cause cobblers to misplace customer vintage boots in busy repair shops.",
        quote:
          "A well-made welted shoe should last thirty years if you resole it with quality leather.",
      },
    ],
  },
  {
    name: "Orchardist",
    industry: "Fruit Cultivation / Cold-Chain Storage & Brix Sugar Testing",
    description:
      "A commercial orchard and packinghouse manager tracking fruit fruit firmness, Brix sugar levels, and controlled-atmosphere apple storage.",
    value:
      "Time harvest and cold storage delivery to deliver crisp, flavorful fruit to market with minimum spoilage.",
    segment:
      "Commercial apple and pear growers, packinghouse quality managers, and cold-storage technicians.",
    behaviors:
      "Sample fruit across orchard rows with optical refractometers and penetrometers in early morning dew.",
    role: "packinghouse quality control director",
    age: [28, 57],
    goals:
      "Determine the optimum harvest window for long-term controlled atmosphere storage (low oxygen, high CO2).",
    brand:
      "Brand color Crisp Honeycrisp (#DC2626) reflects prime orchard fruit readiness.",
    tones: [
      {
        adjectives: "Agronomic, crisp",
        note: "Starch-iodine index charts, penetrometer pressure curves, and clean oxygen percentage gauges.",
      },
      {
        adjectives: "Vigilant, seasonal",
        note: "Urgent harvest countdown timers tied to daily heat unit degree day accumulation.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Fruit maturity index widget",
        goal: "Calculate orchard block harvest readiness by combining sugar Brix, starch conversion, and firmness.",
        mustHaves: [
          "Brix sugar reading input with refractometer calibration check",
          "Starch-iodine pattern reference rating (Scale 1 to 8)",
          "Harvest recommendation pill (Pick for Long-Term Storage vs Pick for Immediate Fresh Market)",
        ],
        success:
          "Field manager identifies the exact week to pick 40 acres of Gala apples.",
        pains:
          "Picking apples three days too late results in soft, mealy fruit after six months in cold storage.",
        quote:
          "If you store an apple picked after its climacteric rise, it loses all its crunch by springtime.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Controlled atmosphere room monitor card",
        goal: "Track gas levels in a sealed 20,000-bushel apple storage vault to prevent fruit asphyxiation.",
        mustHaves: [
          "Oxygen percentage gauge (target 1.0% to 1.5%) with scrub cycle status",
          "Carbon dioxide level indicator with lime scrubber alarm",
          "Core pulp temperature monitor across upper and lower pallet tiers",
        ],
        success:
          "Storage manager adjusts nitrogen generator to maintain perfect gas equilibrium.",
        pains:
          "Gas sensor drifts can suffocate fruit or cause internal carbon dioxide browning.",
        quote:
          "In a controlled atmosphere room, we put the fruit to sleep. The sensors must never fail.",
      },
    ],
  },
  {
    name: "Foundling",
    industry: "Pet Foster Care / Animal Shelter Intake & Medical Quarantine",
    description:
      "An animal rescue coordination app managing intake triage, foster home matching, vaccine series schedules, and adoption readiness.",
    value:
      "Move vulnerable shelter animals out of noisy municipal kennels and into loving volunteer foster homes.",
    segment:
      "Shelter intake coordinators, foster home directors, and volunteer animal caretakers.",
    behaviors:
      "Manage foster applications and intake medical records on phones while handling frightened rescue animals.",
    role: "volunteer foster program director",
    age: [24, 53],
    goals:
      "Match high-needs animals (bottle babies, medical convalescents) with certified experienced fosters within hours.",
    brand:
      "Brand color Rescue Heart (#F43F5E) embodies compassionate pet rescue and adoption.",
    tones: [
      {
        adjectives: "Compassionate, orderly",
        note: "Friendly pet photo cards, clear medical quarantine warnings, and gentle warm interfaces.",
      },
      {
        adjectives: "Responsive, organized",
        note: "Instant volunteer broadcast notifications with clear capability matching filters.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Shelter intake triage card",
        goal: "Log an abandoned puppy litter with estimated age, weight, deworming dose, and quarantine tier.",
        mustHaves: [
          "Weight in ounces and estimated developmental age milestone",
          "Parvovirus snap test result badge (clear negative vs isolation alert)",
          "Immediate foster placement broadcast trigger button",
        ],
        success:
          "Intake worker secures an emergency foster home in under 25 minutes.",
        pains:
          "Young unvaccinated puppies exposed to crowded shelter environments risk fatal infectious diseases.",
        quote:
          "A two-week-old orphan puppy cannot spend the night in a shelter kennel; they need a foster tonight.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Foster volunteer match approval form",
        goal: "Review a foster application against an animal behavioral and medical requirement profile.",
        mustHaves: [
          "Foster household capability profile (fenced yard, no other pets, experience with medical injections)",
          "Shelter animal behavioral restriction list",
          "Foster placement agreement electronic signature confirmation",
        ],
        success:
          "Coordinator places a recovering orthopedic surgery dog with a ground-floor foster family.",
        pains:
          "Placing a reactive dog in an unsuitable home with small children causes foster burnout.",
        quote:
          "Good foster placement is about matching the human skill set to the dog specific recovery needs.",
      },
    ],
  },
  {
    name: "Fretboard",
    industry: "Luthier Workshop / Stringed Instrument Acoustic Setup & Repair",
    description:
      "A luthier workshop tracking acoustic guitar neck relief, string action heights, fret leveling tolerances, and soundboard bracing repair.",
    value:
      "Achieve buzz-free, effortless instrument playability by recording micrometer-accurate setup specifications.",
    segment:
      "Guitar luthiers, stringed instrument repair technicians, and touring guitar techs.",
    behaviors:
      "Measure string clearance over frets with feeler gauges and adjust dual-action truss rods on padded workbench cradles.",
    role: "master guitar luthier and repair technician",
    age: [27, 61],
    goals:
      "Dial in action height and nut slot depth tailored to a musician fingerpicking or heavy plectrum attack.",
    brand:
      "Brand color Rosewood Warmth (#7C2D12) reflects fine tone-woods and vintage acoustic guitars.",
    tones: [
      {
        adjectives: "Musical, tactile",
        note: "Guitar neck cross-sections, thousandth-of-an-inch feeler gauge tables, and fret wear heatmaps.",
      },
      {
        adjectives: "Artisanal, resonant",
        note: "Honoring instrument acoustics, wood moisture equilibrium, and subtle tonal adjustments.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Instrument acoustic setup card & form",
        goal: "Record 12th fret action height, 7th fret neck relief, and nut slot heights for a touring guitar.",
        mustHaves: [
          "Neck relief feeler gauge measurement in thousandths of an inch (0.008 vs 0.012)",
          "Bass E and Treble E 12th fret action height inputs with millimeter conversion",
          "Truss rod adjustment turn record (e.g. 1/8 turn clockwise)",
        ],
        success:
          "Tech documents complete setup in four minutes before packing the tour flight case.",
        pains:
          "Musicians complaining about fret buzz after traveling through different climate humidity zones.",
        quote:
          "A change of 0.002 inches at the 12th fret is the difference between a guitar singing or buzzing like a bee.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Workshop relative humidity alert card",
        goal: "Warn a luthier when shop humidity drops below 40%, threatening to crack delicate spruce acoustic soundboards.",
        mustHaves: [
          "Shop hygrometer reading with safe tone-wood equilibrium band (42% to 48% RH)",
          "Spruce top deflection risk projection indicator",
          "Shop ultrasonic humidifier tank refill prompt",
        ],
        success:
          "Luthier refills humidifiers before vintage soundboards develop shrinkage cracks.",
        pains:
          "Winter dry heating causes vintage acoustic soundboards to shrink and split open along grain lines.",
        quote:
          "Dry air is the natural enemy of an acoustic guitar. Keep the shop at 45% or watch wood split.",
      },
    ],
  },
  {
    name: "Winch",
    industry: "Towing & Heavy Salvage / Roadside Recovery Fleet Dispatch",
    description:
      "A heavy-duty towing and incident recovery dispatch console calculating rigging mechanical advantages, winch line tension, and highway lane clearance.",
    value:
      "Clear overturned tractor-trailers quickly and safely while calculating safe working load limits on wire rope lines.",
    segment:
      "Heavy commercial tow truck operators, incident dispatchers, and state highway patrol liaisons.",
    behaviors:
      "Calculate snatch block mechanical advantage and anchor points on ruggedized tablet screens in driving highway rain.",
    role: "heavy recovery rotator tow operator",
    age: [30, 56],
    goals:
      "Upright a 40-ton loaded semi-truck without snapping synthetic winch lines or damaging secondary bridge guardrails.",
    brand:
      "Brand color Tow Caution Yellow (#CA8A04) reflects high-visibility roadside heavy recovery apparatus.",
    tones: [
      {
        adjectives: "Mechanical, commanding",
        note: "Rigging vector diagrams, safe working load limit (WLL) warnings, and clear winch line tension gauges.",
      },
      {
        adjectives: "Urgent, disciplined",
        note: "Step-by-step uprighting sequence checklists with safety perimeter exclusion zone markers.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Rigging tension & mechanical advantage calculator form",
        goal: "Calculate total winching resistance for a loaded tractor-trailer tipped into a muddy 30-degree ravine.",
        mustHaves: [
          "Vehicle estimated gross weight input with mud suction gradient resistance factor",
          "Snatch block count and winch line angle multiplier calculation",
          "Line tension readout vs wire rope safe working load limit with safety factor flag",
        ],
        success:
          "Operator confirms three-line pull will not exceed 50-ton boom capacity.",
        pains:
          "Guessing rigging resistance causes catastrophic cable breaks under extreme tension.",
        quote:
          "When 80,000 pounds is hanging in the mud, you don't guess line tension. You calculate the physics.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Highway incident clearance timeline widget",
        goal: "Provide state highway patrol with live recovery milestones to coordinate road reopenings.",
        mustHaves: [
          "Current phase tracker (Stabilization, Uprighting, Winch to Shoulder, Tow Away)",
          "Estimated lane opening time countdown with clearance confidence score",
          "Tow fleet unit status indicators (Rotator, Landoll trailer, flatbed)",
        ],
        success:
          "Dispatcher gives state police accurate lane reopening time within 10 minutes.",
        pains:
          "Highway police demanding lane reopening updates every five minutes during delicate rigging setups.",
        quote:
          "State troopers want traffic moving. If I can show them our exact phase timeline, they let us work safely.",
      },
    ],
  },
  {
    name: "Pantryman",
    industry: "Commercial Kitchens / Walk-in Cooler FIFO Inventory & Expiry",
    description:
      "A back-of-house culinary inventory tool enforcing First-In-First-Out rotation, food prep shelf-life dates, and HACCP cooler temperatures.",
    value:
      "Eliminate food waste and health department violations by tracking prepped sauces, stocks, and proteins digitally.",
    segment:
      "Executive chefs, sous chefs, kitchen expeditors, and food safety compliance officers.",
    behaviors:
      "Print sticky HACCP prep labels with one tap and audit stainless steel walk-in cooler shelves with wet hands.",
    role: "restaurant executive sous chef",
    age: [25, 46],
    goals:
      "Rotate $20,000 in perishable inventory weekly with zero expired ingredients or cross-contamination risks.",
    brand:
      "Brand color Chef Navy (#1E293B) reflects crisp culinary uniform aprons and stainless steel kitchens.",
    tones: [
      {
        adjectives: "Culinary, sanitary",
        note: "Clear prep station tags, high-contrast HACCP temperature flags, and bold day-of-the-week color coding.",
      },
      {
        adjectives: "Rapid, sensory",
        note: "One-handed label printing triggers designed for hectic pre-dinner service prep crunches.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Food prep HACCP label print card",
        goal: "Print an adhesive food rotation label showing prep date, cook name, allergen tags, and 72-hour discard deadline.",
        mustHaves: [
          "Item name selector with common allergen badges (Dairy, Shellfish, Gluten)",
          "Automated discard timestamp calculation based on local health sanitation code",
          "Wireless thermal label printer dispatch button",
        ],
        success:
          "Line cook labels five containers of braised demi-glace in 40 seconds.",
        pains:
          "Illegible handwritten blue tape labels with faded marker ink fail health inspections.",
        quote:
          "When the health inspector walks in, every single container in the walk-in must have an unambiguous date.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Walk-in temperature excursion monitor widget",
        goal: "Alert kitchen management if a walk-in freezer door is propped open and temperatures rise above 40 F.",
        mustHaves: [
          "Current air temperature and food simulant probe reading",
          "Elapsed time above safe holding temperature threshold",
          "Auto-dial alert toggle to notify on-duty kitchen manager",
        ],
        success:
          "Sous chef discovers cracked door and saves $8,000 worth of dry-aged beef.",
        pains:
          "Discovering a failed compressor on Monday morning after warm spoilage destroyed weekend meat stocks.",
        quote:
          "If meat sits above 41 degrees for two hours, you have to throw the entire inventory in the dumpster.",
      },
    ],
  },
  {
    name: "Plowshare",
    industry:
      "Community Supported Agriculture / Weekly Share Box Customization",
    description:
      "A small-farm harvest distribution platform allowing CSA subscribers to customize weekly vegetable harvest boxes based on field picking availability.",
    value:
      "Reduce farm packinghouse labor while giving CSA members the vegetable varieties they actually cook.",
    segment:
      "Organic farm managers, CSA packing crews, and community share subscribers.",
    behaviors:
      "Configure harvest yields on tractor tailgates; pack 300 customized wooden farm crates on assembly lines.",
    role: "organic vegetable farm manager",
    age: [27, 50],
    goals:
      "Balance member vegetable swaps against daily field harvest yields with zero leftover perishable produce.",
    brand:
      "Brand color Harvest Beet (#9D174D) reflects vibrant heirloom farm garden produce.",
    tones: [
      {
        adjectives: "Earthy, bountiful",
        note: "Crisp botanical produce icons, clear harvest unit weights, and friendly farm update feeds.",
      },
      {
        adjectives: "Efficient, balanced",
        note: "Live inventory deduction tally preventing member over-ordering of scarce heirloom tomatoes.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "Weekly share swap flow",
        goal: "Allow a CSA subscriber to swap out bitter greens for sweet bell peppers within their weekly box budget.",
        mustHaves: [
          "Visual item replacement tiles with point value balance indicator",
          "Cutoff countdown timer for harvest packing customization",
          "Seasonal recipe suggestion chip for included specialty produce",
        ],
        success:
          "Subscriber customizes their produce box in under 90 seconds without support emails.",
        pains:
          "Members cancelling subscriptions because they get too many turnips they don't know how to cook.",
        quote:
          "Customization keeps members happy. If they can trade kale for carrots, they stay with our farm for years.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Packinghouse harvest pick list widget",
        goal: "Summarize total vegetable counts and bunches needed from the fields to fulfill tomorrow's 250 member boxes.",
        mustHaves: [
          "Aggregated crop harvest tally (bunches of carrots, pounds of potatoes, heads of lettuce)",
          "Field bed assignment map showing which rows to harvest",
          "One-click print button for field crew harvest clipboards",
        ],
        success:
          "Harvest crew picks the exact quantities needed with zero field over-picking waste.",
        pains:
          "Picking 50 extra heads of lettuce that wilt in the heat because of manual packing count errors.",
        quote:
          "Every bunch of carrots picked must have a destination box. Over-picking is money left to rot.",
      },
    ],
  },
  {
    name: "Sounding",
    industry: "Hydrology / Groundwater Aquifer Well Depth & Salinity",
    description:
      "A regional groundwater monitoring network analyzing piezometer water table levels, saltwater intrusion fronts, and agricultural irrigation draw.",
    value:
      "Protect freshwater drinking aquifers from irreversible ocean saltwater encroachment.",
    segment:
      "Hydrogeologists, water district basin managers, and agricultural irrigation supervisors.",
    behaviors:
      "Review acoustic water level sounder data and electrical conductivity logs across 150 monitoring wells.",
    role: "groundwater basin hydrogeologist",
    age: [33, 59],
    goals:
      "Track seasonal groundwater cone of depression recovery after summer farm irrigation pumping stops.",
    brand:
      "Brand color Aquifer Cobalt (#1D4ED8) represents pure, deep subsurface freshwater aquifers.",
    tones: [
      {
        adjectives: "Hydrological, deep",
        note: "Stratigraphic well logs, electrical conductivity depth profiles, and clean water table elevation lines.",
      },
      {
        adjectives: "Analytical, calm",
        note: "Clear boundary lines between potable freshwater, brackish transition zones, and marine saltwater.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Aquifer water level trend widget",
        goal: "Compare current piezometric head against historical 20-year drought baselines across monitoring wells.",
        mustHaves: [
          "Depth to water table in feet with multi-year comparison line chart",
          "Seasonal recharge progress bar against rainy season forecast",
          "Well pumping restriction trigger threshold indicator",
        ],
        success:
          "Water district board approves irrigation pumping allocations based on empirical aquifer recharge.",
        pains:
          "Relying on scattered annual reports while underground aquifers drop to critically low historical levels.",
        quote:
          "Once seawater enters a coastal freshwater aquifer, it takes fifty years to flush out the salt.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Field well conductivity check card",
        goal: "Record electrical conductivity and temperature during a quarterly well sounding visit.",
        mustHaves: [
          "Electrical conductivity microSiemens/cm input with automated salinity conversion",
          "Depth sounding tape measurement with well casing stickup subtraction",
          "Automatic comparison against previous quarterly reading with variance flag",
        ],
        success:
          "Field hydrogeologist logs monitoring well data in three minutes at remote wellhead.",
        pains:
          "Manual entry mistakes converting casing stickup heights lead to erroneous depth trends.",
        quote:
          "We need clean, consistent wellhead depth logs to catch the saltwater wedge before it reaches city wells.",
      },
    ],
  },
  {
    name: "Tallowood",
    industry: "Arboriculture / Urban Tree Risk Assessment & Pruning Permits",
    description:
      "An urban forestry tree risk assessment app recording ISA tree health ratings, internal trunk decay acoustics, and municipal removal permits.",
    value:
      "Identify hazardous urban trees before storm winds bring limbs down onto power lines and sidewalks.",
    segment:
      "Municipal urban foresters, certified consulting arborists, and utility vegetation managers.",
    behaviors:
      "Inspect mature oak and elm trees on city sidewalks with sonic tomographs and sounding mallets.",
    role: "ISA certified consulting arborist",
    age: [29, 54],
    goals:
      "Calculate Tree Risk Assessment Qualification (TRAQ) ratings evaluating target occupancy, defect size, and fall likelihood.",
    brand:
      "Brand color Arbor Green (#166534) honors mature urban tree canopy preservation.",
    tones: [
      {
        adjectives: "Dendrological, grounded",
        note: "Canopy diameter outlines, trunk circumference metrics, and clear sonic decay cross-sections.",
      },
      {
        adjectives: "Defensible, safety-focused",
        note: "Strict adherence to ANSI A300 pruning and ISA risk matrix evaluation guidelines.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "ISA Level 2 basic tree risk evaluation form",
        goal: "Evaluate a mature roadside tree for crown dieback, co-dominant stems, and root collar fungal conks.",
        mustHaves: [
          "Target identification selector (Pedestrian sidewalk, School playground, Power lines)",
          "Likelihood of failure vs consequence of failure matrix calculating overall risk rating",
          "Mitigation recommendation picker (Crown reduction prune, Support cabling, Tree removal)",
        ],
        success:
          "Arborist produces an audit-proof legal risk report in six minutes under the tree canopy.",
        pains:
          "Vague subjective assessments get challenged by homeowners or fail city permit hearings.",
        quote:
          "Our risk ratings must stand up in court if a municipal tree fails during an autumn storm.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "City street tree permit review card",
        goal: "Enable municipal city planning officers to review tree removal requests against canopy retention goals.",
        mustHaves: [
          "Street address with high-resolution aerial canopy view and street view photo",
          "Arborist certified risk rating badge and trunk diameter at breast height (DBH)",
          "Mandatory replacement tree planting species requirement check",
        ],
        success:
          "City forester approves hazard removal and assigns replacement oak sapling location.",
        pains:
          "Illegal removal of healthy mature shade trees diminishes urban street cooling.",
        quote:
          "We don't remove an 80-year-old shade tree unless the structural decay makes failure imminent.",
      },
    ],
  },
  {
    name: "Cartouche",
    industry: "Museum Archiving / Ephemera Cataloging & Acid-Free Storage",
    description:
      "A museum archival management tool tracking fragile historical manuscripts, acid-free box locations, and Dublin Core metadata fields.",
    value:
      "Protect fragile paper artifacts from light and acid degradation while enabling researchers to locate documents rapidly.",
    segment:
      "Special collections archivists, manuscript conservators, and rare book curators.",
    behaviors:
      "Handle yellowed 19th-century letters with cotton gloves in climate-controlled archive reading rooms.",
    role: "head archivist & manuscripts curator",
    age: [31, 62],
    goals:
      "Catalogue archival collections into hierarchical series, boxes, and folders with comprehensive provenance notes.",
    brand:
      "Brand color Vellum Parchment (#78716C) mirrors historic manuscripts and archival document preservation.",
    tones: [
      {
        adjectives: "Scholarly, preserved",
        note: "Dublin Core metadata standards, archival hierarchy trees, and acid-free storage box designations.",
      },
      {
        adjectives: "Quiet, orderly",
        note: "Carefully proportioned reading room typography with minimum visual distractions.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Archival finding aid series intake form",
        goal: "Organize a newly donated personal paper collection into record groups, series, and folders.",
        mustHaves: [
          "Hierarchical parent-child collection picker (Fonds, Series, Box, Folder, Item)",
          "Physical condition assessment selector (Foxing, Ink corrosion, Acid burn, Stable)",
          "Researcher access restriction toggle (Open access vs 50-year donor privacy embargo)",
        ],
        success:
          "Archivist catalogs 20 boxes of historical letters in two days with full EAD XML compatibility.",
        pains:
          "Donated historical collections sitting uncataloged in boxes for years due to complex legacy software.",
        quote:
          "An uncataloged archival collection does not exist for researchers. Access begins with the finding aid.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Rare document vault retrieval card",
        goal: "Direct an archive assistant to the exact climate-controlled vault shelf, hollinger box, and mylar sleeve.",
        mustHaves: [
          "Vault aisle, bay, shelf, and acid-free box number coordinates",
          "Handling protocol requirements (Requires book cradle, White cotton gloves mandatory)",
          "Researcher call slip barcode scan confirmation",
        ],
        success:
          "Assistant retrieves a 1785 hand-drawn map in three minutes with zero physical handling risks.",
        pains:
          "Misfiling a single rare document folder in thousands of identical gray archival boxes.",
        quote:
          "If a folder goes into the wrong archival box, it might as well be buried at the bottom of the sea.",
      },
    ],
  },
  {
    name: "Wellspring",
    industry: "Municipal Water Works / Chlorination Monitoring & Pipe Flush",
    description:
      "A municipal drinking water distribution tool tracking free chlorine residual, turbidity, water main line flushes, and boil-water advisories.",
    value:
      "Ensure municipal tap water remains safe, clean, and free of biological pathogens across thousands of miles of city pipes.",
    segment:
      "Certified water distribution operators, public works superintendents, and environmental water quality analysts.",
    behaviors:
      "Test drinking water samples from fire hydrants and neighborhood sample stations using colorimeters.",
    role: "certified municipal water distribution operator",
    age: [28, 55],
    goals:
      "Maintain EPA minimum 0.2 mg/L free chlorine disinfectant residual at the farthest dead-end pipe dead ends.",
    brand:
      "Brand color Clean Reservoir (#0284C7) connects to pure, tested municipal drinking water.",
    tones: [
      {
        adjectives: "Public-health, vigilant",
        note: "Parts-per-million chemical scales, clear water main flush timelines, and immediate pathogen threshold alerts.",
      },
      {
        adjectives: "Systematic, reliable",
        note: "Daily compliance checklists tied to municipal geographic sample stations.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Hydrant chlorine residual test card",
        goal: "Record DPD colorimeter chlorine and turbidity readings at a neighborhood water sampling station.",
        mustHaves: [
          "Free chlorine residual input in mg/L with EPA regulatory pass/fail badge",
          "Water temperature and nephelometric turbidity unit (NTU) inputs",
          "Automated flush trigger button if chlorine residual is below 0.2 mg/L",
        ],
        success:
          "Operator logs daily route test in 60 seconds with instant compliance verification.",
        pains:
          "Dead-end pipes losing chlorine disinfectant residual, allowing bacteria to grow in warm summer months.",
        quote:
          "Clean drinking water is the bedrock of public health. When chlorine drops, we flush the mains immediately.",
      },
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Water main flush planning widget",
        goal: "Coordinate directional flushing across fire hydrants to scour sediment without stirring up brown water.",
        mustHaves: [
          "Sequential valve and hydrant opening sequence checklist",
          "Estimated gallons flushed counter with storm drain discharge velocity control",
          "Customer brown water notification broadcast banner trigger",
        ],
        success:
          "Public works team scours 15 miles of cast iron pipe with zero customer boil-water advisories.",
        pains:
          "Uncoordinated hydrant flushing reverses pipe flow and pulls rusty sediment into residential water heaters.",
        quote:
          "Directional flushing requires opening valves in exact order to keep clean water pushing sediment out.",
      },
    ],
  },
  {
    name: "Bailiff",
    industry:
      "Court Administration / Jury Summons Scheduling & Stipend Processing",
    description:
      "A municipal court juror management console tracking jury pool check-ins, voir dire jury panel assignments, and statutory per diem stipends.",
    value:
      "Streamline citizen jury duty service while eliminating long courtroom delays during trial jury selection.",
    segment:
      "Court clerks, jury commissioners, judicial assistants, and courtroom bailiffs.",
    behaviors:
      "Scan citizen summons barcodes as hundreds of citizens enter courthouse security at 8:00 AM.",
    role: "superior court jury commissioner",
    age: [34, 63],
    goals:
      "Empanel balanced 12-person trial juries swiftly while minimizing citizen juror waiting time in assembly rooms.",
    brand:
      "Brand color Gavel Walnut (#57534E) signifies judicial order and constitutional jury trial administration.",
    tones: [
      {
        adjectives: "Civic, orderly",
        note: "Clear juror badge numbers, structured seating charts, and rapid summons barcode verification.",
      },
      {
        adjectives: "Courteous, transparent",
        note: "Clear per diem stipend tallies and respectful citizen service completion certificates.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "Morning juror check-in flow",
        goal: "Scan citizen summons barcodes, verify statutory eligibility, and assign jury assembly hall seating.",
        mustHaves: [
          "Continuous barcode scanner camera with audio verification beep",
          "Immediate hardship exemption review referral button",
          "Live pool attendance headcount tracker against daily judicial trial call quotas",
        ],
        success:
          "Bailiff team processes 200 citizens in 18 minutes with zero courthouse lobby bottlenecks.",
        pains:
          "Citizens waiting in rain outside courthouse while clerks manually check names off paper rosters.",
        quote:
          "Jury duty is a civic duty, not a punishment. The check-in process should be fast and dignified.",
      },
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Voir dire jury panel seating card",
        goal: "Present the presiding trial judge with a randomized 24-person panel seating chart for courtroom jury selection.",
        mustHaves: [
          "12-seat jury box and alternate juror layout graphic with juror badge IDs",
          "Peremptory challenge and cause challenge tracker for defense and prosecution",
          "One-click final jury empanelment lock button with oath administration prompt",
        ],
        success:
          "Judge and attorneys empanel a felony trial jury in 90 minutes without clerical confusion.",
        pains:
          "Attorneys losing track of which juror was seated in seat number 7 during rapid challenges.",
        quote:
          "During voir dire, the judge and counsel need an unambiguous visual map of every juror in the box.",
      },
    ],
  },
  {
    name: "Foresail",
    industry:
      "Yacht Charter / Bareboat Pre-Charter Safety Briefing & Checklist",
    description:
      "A sailing catamaran charter handover tool walking charter skippers through sea-cock locations, bilge pump tests, and marine anchor systems.",
    value:
      "Prevent catastrophic offshore charter grounding and vessel damage through rigorous pre-departure yacht handovers.",
    segment:
      "Charter base dockmasters, bareboat charter skippers, and marine insurance underwriters.",
    behaviors:
      "Inspect vessel engine compartments, head valves, and life raft hydrostatic releases with charter clients.",
    role: "charter fleet dockmaster & licensed captain",
    age: [29, 58],
    goals:
      "Verify that bareboat charter charterers understand critical below-waterline valve systems before casting off dock lines.",
    brand:
      "Brand color Spinnaker Navy (#0369A1) echoes yacht racing and offshore cruising traditions.",
    tones: [
      {
        adjectives: "Nautical, rigorous",
        note: "Cutaway hull schematics, through-hull valve color flags, and anchor windlass operation diagrams.",
      },
      {
        adjectives: "Methodical, seafaring",
        note: "Mandatory video confirmations for emergency bilge pumps and VHF emergency distress buttons.",
      },
    ],
    tasks: [
      {
        type: "Short flow",
        platform: "Mobile",
        deliverable: "Pre-departure yacht system handover flow",
        goal: "Walk a charter skipper through verifying 12 through-hull sea-cocks, bilge alarms, and diesel oil levels.",
        mustHaves: [
          "Interactive vessel cutaway diagram with sea-cock location pins",
          "Bilge pump float switch physical test verification photo requirement",
          "Dual skipper and dockmaster electronic signature sign-off gate",
        ],
        success:
          "Charter client completes comprehensive yacht briefing in 35 minutes before departing harbor.",
        pains:
          "Charterers sinking expensive catamarans by leaving toilet siphon valves open while under sail.",
        quote:
          "Before someone takes a half-million-dollar boat out to sea, they must know where every through-hull valve is.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Ground tackle & anchor windlass briefing card",
        goal: "Instruct charterers on chain rode marking colors, water depth ratios, and windlass breaker resets.",
        mustHaves: [
          "Chain color paint scheme table (Red = 30ft, White = 60ft, Blue = 90ft)",
          "Scope calculation guide (5:1 calm anchorages vs 7:1 heavy weather)",
          "Windlass thermal overload circuit breaker reset diagram",
        ],
        success:
          "Charterer anchors securely in coral harbor without dragging anchor or burning the windlass motor.",
        pains:
          "Charterers dragging anchor in midnight squalls because they deployed only 2:1 chain scope.",
        quote:
          "Anchoring is your insurance policy at night. If you don't let out enough chain, the boat drags onto the reef.",
      },
    ],
  },
  {
    name: "Rivet",
    industry: "Heavy Rail Maintenance / Track Gauge Ultrasonic Inspection",
    description:
      "A railway track geometry maintenance tool analyzing ultrasonic rail flaw detection cars, gauge widening, and cross-level track cant.",
    value:
      "Prevent high-speed train derailments by identifying subsurface steel rail fatigue cracks before rails break under heavy freight.",
    segment:
      "Railway track inspectors, maintenance-of-way roadmasters, and high-speed rail safety engineers.",
    behaviors:
      "Review ultrasonic B-scan steel acoustic reflection logs while inspecting track ballast from hi-rail trucks.",
    role: "certified track safety geometry inspector",
    age: [31, 57],
    goals:
      "Detect internal transverse fissures in the rail head before freight axle loads cause sudden rail fractures.",
    brand:
      "Brand color Rail Iron (#475569) signifies heavy steel rails and railway engineering standards.",
    tones: [
      {
        adjectives: "Heavy-industry, vigilant",
        note: "Ultrasonic acoustic reflection waterfall graphs, exact track milepost coordinates, and FRA track safety defect codes.",
      },
      {
        adjectives: "Defensive, urgent",
        note: "Immediate slow-order speed restriction orders linked directly to rail fracture hazard ratings.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Rail flaw ultrasonic defect card",
        goal: "Alert an inspector to a 20% internal transverse defect discovered by an ultrasonic track test vehicle.",
        mustHaves: [
          "Rail milepost number and foot offset with GPS coordinate pin",
          "Flaw classification (Transverse Fissure, Detail Fracture, Vertical Split Head)",
          "Immediate FRA mandatory action pill (Apply joint bars within 4 hours or reduce speed to 10 MPH)",
        ],
        success:
          "Track supervisor dispatches maintenance crew to clamp joint bars before passenger train arrives.",
        pains:
          "Internal steel fatigue cracks are completely invisible to the naked eye until the rail shatters.",
        quote:
          "An ultrasonic echo shows the crack growing inside the steel head. Catch it today or face a derailment tomorrow.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Track geometry speed restriction order form",
        goal: "Issue a formal slow-order restriction over a five-mile section with severe track gauge widening.",
        mustHaves: [
          "Track designation (Main 1 vs Siding) with start and end milepost boundaries",
          "Maximum allowable timetable speed reduction (from 70 MPH to 25 MPH)",
          "Mandatory railway dispatcher electronic acknowledgment lock",
        ],
        success:
          "Roadmaster issues slow order in three minutes, instantly updating train computer dispatch systems.",
        pains:
          "Delays communicating track defects to train dispatchers risk trains hitting defective track at full speed.",
        quote:
          "Safety comes before schedule. If the track gauge is wide, every train through that sector slows down right now.",
      },
    ],
  },
  {
    name: "Silversmith",
    industry:
      "Fine Metalworking / Hallmarking Submission & Assay Certification",
    description:
      "A master silversmith registry managing precious metal assay submissions, fineness alloy purity testing, and statutory guild hallmark stamps.",
    value:
      "Protect heirloom jewelry integrity and comply with strict national assay office hallmarking statutes.",
    segment:
      "Independent silversmiths, master goldsmiths, and jewelry guild assayers.",
    behaviors:
      "Stamp maker sponsor punches into annealed sterling silver holloware and prepare laser assay scrapings.",
    role: "fellow of the master silversmiths guild",
    age: [35, 68],
    goals:
      "Submit complex handmade silver teapots to the assay office with accurate part fineness declarations.",
    brand:
      "Brand color Sterling Silver (#94A3B8) represents 925 sterling silver and traditional hand-raised holloware.",
    tones: [
      {
        adjectives: "Silversmith, statutory",
        note: "Traditional hallmark punch silhouettes (Lion Passant, Anchor, Date Letter), millesimal fineness scales.",
      },
      {
        adjectives: "Refined, enduring",
        note: "Patience and permanence, celebrating heirloom objects crafted to endure for generations.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Assay office hallmarking submission form",
        goal: "Declare item weights, sponsor maker mark, and fineness alloy (925 sterling vs 999 fine silver) for statutory stamping.",
        mustHaves: [
          "Item description and multi-component breakdown (body, handle, wooden finial exemption)",
          "Gross weight in grams and troy ounces with 0.01g balance precision",
          "Hallmark application method selector (Traditional hand punch vs precision fiber laser)",
        ],
        success:
          "Silversmith registers submission packet in five minutes before courier dispatch to the assay office.",
        pains:
          "Submissions rejected because solder weight exceeded legal alloy purity exemption thresholds.",
        quote:
          "A hallmark is an unbroken 700-year consumer protection promise. Every piece of silver must prove its purity.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Hallmark date letter identification card",
        goal: "Help an antiques conservator decode the sponsor mark, town mark, and date letter stamped on a vintage silver chalice.",
        mustHaves: [
          "Interactive punch stamp symbol identifier with font serif style matching",
          "Decoded manufacture year, city assay office, and registered silversmith biography",
          "Fineness millesimal purity confirmation badge (925 / 1000)",
        ],
        success:
          "Conservator dates an unverified silver beaker to London 1792 within two minutes.",
        pains:
          "Flipping through obscure multi-volume reference books of historical punch marks under magnifying glasses.",
        quote:
          "Four tiny punches stamped into the bottom of a cup tell you who made it, where, and in what exact year.",
      },
    ],
  },
  {
    name: "Grist",
    industry: "Artisan Milling / Grain Moisture & Millstone Speed Regulation",
    description:
      "A traditional watermill and stone-ground flour production tool tracking grain moisture tempering, granite millstone RPM, and bran extraction rates.",
    value:
      "Preserve grain germ nutrition and baking vitality by keeping stone-ground flour temperatures below 105 F.",
    segment:
      "Artisan grain millers, sourdough bakers, and heritage organic cereal farmers.",
    behaviors:
      "Feel freshly ground flour streaming from the millstone meal-spout and test moisture with dielectric grain meters.",
    role: "head stone-ground miller & grain selector",
    age: [26, 54],
    goals:
      "Grind whole-grain heritage wheat into silky flour without scorching heat-sensitive natural grain oils.",
    brand:
      "Brand color Grist Wheat (#D97706) reflects sun-ripened organic wheat berries and artisan sourdough flour.",
    tones: [
      {
        adjectives: "Artisanal, tactile",
        note: "Flour particle size micron charts, granite stone furrow patterns, and clean infrared temperature monitors.",
      },
      {
        adjectives: "Nourishing, grounded",
        note: "Celebration of heritage grains (Emmer, Einkorn, Red Fife) and traditional milling crafts.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Mobile",
        deliverable: "Millstone flour temperature monitor widget",
        goal: "Display live infrared temperature sensor readings at the flour discharge spout to prevent heat friction.",
        mustHaves: [
          "Flour spout temperature in Fahrenheit with safe enzyme threshold indicator (Max 105 F)",
          "Stone runner RPM speed display with water turbine governor control shortcut",
          "Audible over-temperature chime trigger to warn the miller to slow the grain feed gate",
        ],
        success:
          "Miller maintains ideal 98 F flour temperature across eight hours of continuous rye milling.",
        pains:
          "Hot millstones kill the natural fermentation enzymes needed for sourdough artisan bread baking.",
        quote:
          "If the flour leaves the stone hotter than your hand, you have scorched the germ and destroyed the flavor.",
      },
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Grain tempering calculation form",
        goal: "Calculate the exact water addition needed to bring dry grain moisture up to 15% before stone milling.",
        mustHaves: [
          "Incoming grain moisture percentage input from lab moisture meter",
          "Target moisture level selector (14.5% for hard wheat, 15.5% for soft spelt)",
          "Calculated water volume addition in liters per metric ton with resting soak duration clock",
        ],
        success:
          "Miller tempers a two-ton grain batch, ensuring bran flakes peel cleanly rather than shattering into dust.",
        pains:
          "Milling dry grain produces gritty flour with pulverised bran that weakens bread dough gluten.",
        quote:
          "Proper grain tempering is what allows the stone to shear the bran without crushing it into coarse grit.",
      },
    ],
  },
  {
    name: "Stanchion",
    industry: "Crowd Safety / Venue Turnstile Flow & Egress Capacity",
    description:
      "A stadium and arena crowd safety console monitoring turnstile ingress rates, concourse crowd density, and emergency evacuation egress times.",
    value:
      "Prevent dangerous stadium crowd crushes and queuing bottlenecks at major sporting and entertainment events.",
    segment:
      "Venue safety officers, stadium operations directors, and municipal fire marshals.",
    behaviors:
      "Monitor turnstile scan speeds and optical concourse overhead crowd sensors on multi-screen event control desks.",
    role: "director of venue crowd safety & event operations",
    age: [35, 62],
    goals:
      "Identify ingress bottlenecks 45 minutes before kickoff and redistribute ticket holders to adjacent under-utilized gates.",
    brand:
      "Brand color Safety Amber (#F59E0B) warns operations of queuing density thresholds before dangerous bottlenecks form.",
    tones: [
      {
        adjectives: "Dynamic, watchful",
        note: "Crowd persons-per-square-meter density heatmaps, turnstile throughput rates, and green/amber/red safety zones.",
      },
      {
        adjectives: "Calm, authoritative",
        note: "Clear operational commands with zero clutter during high-pressure pre-event entry waves.",
      },
    ],
    tasks: [
      {
        type: "Widget",
        platform: "Desktop",
        deliverable: "Turnstile ingress rate & gate queue widget",
        goal: "Display live scans per minute across all 8 stadium entry gates against total expected ticket holders.",
        mustHaves: [
          "Scans per minute throughput rate gauge per gate cluster",
          "Queue length countdown time in minutes for arriving fans",
          "One-click 'Rebalance Signage' broadcast button to redirect ticket holders to Gate D",
        ],
        success:
          "Operations shifts arriving crowds and clears ticket queues 15 minutes before kickoff.",
        pains:
          "Sudden surges of 10,000 fans arriving at one turnstile gate right before event start causes dangerous crowd pressure.",
        quote:
          "Crowd safety is about flow. The moment people stop moving, pressure builds. We must keep the gates moving.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Concourse crowd density alert card",
        goal: "Alert roaming safety stewards to localized crowd congestion near Section 112 stairs exceeding safety limits.",
        mustHaves: [
          "Concourse zone identifier and optical density rating (persons per square meter)",
          "Bottleneck root cause tag (Merchandise stand queue spillover vs blocked exit doors)",
          "Direct radio call link to nearest sector supervisor steward",
        ],
        success:
          "Stewards clear concourse blockage in three minutes, restoring smooth pedestrian circulation.",
        pains:
          "Delayed reporting of concourse jams allows crowd density to reach hazardous crushing levels.",
        quote:
          "If density hits four people per square meter, human movement becomes involuntary. We intervene long before that.",
      },
    ],
  },
  {
    name: "Beekeeper",
    industry:
      "Apiary Operations / Hive Inspection, Varroa Counts & Queen Tracking",
    description:
      "A commercial and hobbyist apiary management app tracking hive frame brood patterns, Varroa mite alcohol wash counts, and queen lineages.",
    value:
      "Keep honeybee colonies healthy and survive winter cold by timing organic mite treatments and feeding.",
    segment:
      "Commercial migratory beekeepers, honey producers, and backyard apiary enthusiasts.",
    behaviors:
      "Inspect wooden Langstroth hive boxes wearing full bee veils and protective leather gloves with smoker in hand.",
    role: "head beekeeper & honey producer",
    age: [25, 60],
    goals:
      "Keep Varroa destructor mite infestation below the critical 2% economic damage threshold across 80 honeybee hives.",
    brand:
      "Brand color Honey Gold (#EAB308) evokes warm honeycomb wax and raw unpasteurized honey.",
    tones: [
      {
        adjectives: "Apiary, biological",
        note: "Hexagonal comb graphics, clean mite count ratios, and distinct queen marking year color badges.",
      },
      {
        adjectives: "Attentive, outdoor",
        note: "One-thumb high-contrast interface designed for quick updates in bright sunlight with propolis-covered gloves.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Varroa mite alcohol wash test card",
        goal: "Record the mite count from a standard 300-bee alcohol wash and calculate the colony infestation percentage.",
        mustHaves: [
          "Mite count input with automated infestation percentage calculation (e.g. 6 mites in 300 bees = 2.0%)",
          "Treatment recommendation threshold banner (Safe vs Formic acid treatment indicated)",
          "Weather temperature window checker to prevent queen loss during acid treatment",
        ],
        success:
          "Beekeeper tests eight hives in 30 minutes and identifies two colonies needing immediate intervention.",
        pains:
          "Guessing mite levels by visual eye leads to colony collapse and empty hives in the spring.",
        quote:
          "You cannot manage what you do not measure. A quick alcohol wash tells you the truth about hive health.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Hive inspection & queen status log",
        goal: "Log queen presence, brood pattern quality, honey super stores, and temper of a colony during weekly inspection.",
        mustHaves: [
          "Queen sighting toggle with international marking color chip (White, Yellow, Red, Green, Blue)",
          "Brood pattern rating (Solid, Spotty, Queenless) with egg presence check",
          "Honey super count and winter syrup feeding requirement check",
        ],
        success:
          "Beekeeper logs hive inspection in 45 seconds while holding the frame over the open box.",
        pains:
          "Paper inspection notebooks get coated in sticky bee propolis and wax, ruining notes.",
        quote:
          "Finding fresh eggs means the queen was laying within the last 72 hours, even if you don't spot her.",
      },
    ],
  },
  {
    name: "Tannery",
    industry:
      "Vegetable-Tanned Leather / Drum Drumming Hours & Dye Consistency",
    description:
      "A traditional artisanal tannery management system tracking vegetable tannin extracts, rotating wooden drum hours, and leather hide fatliquoring.",
    value:
      "Produce premium, supple vegetable-tanned leather hides with consistent temper, grain tighteness, and rich aniline color.",
    segment:
      "Master tanners, leather dye technicians, and luxury leather goods supply directors.",
    behaviors:
      "Test tanning liquor Baumé specific gravity and pH beside massive rotating wooden milling drums.",
    role: "master tanner & chemical operations manager",
    age: [33, 62],
    goals:
      "Control natural mimosa and chestnut bark tannin penetration through heavy bull hides without surface case-hardening.",
    brand:
      "Brand color Oak Bark Brown (#78350F) represents traditional tree bark vegetable tanning pits and natural leather.",
    tones: [
      {
        adjectives: "Tannery, traditional",
        note: "Drum revolution counters, tannin liquor pH curves, and tactile hide grade selection matrices.",
      },
      {
        adjectives: "Rigorous, patient",
        note: "Multi-week tanning progression schedules honoring natural biological hide transformation.",
      },
    ],
    tasks: [
      {
        type: "Form",
        platform: "Desktop",
        deliverable: "Tannin liquor pit formulation form",
        goal: "Calculate natural tree bark tannin extract concentrations and acid adjustments across a 12-pit rocker line.",
        mustHaves: [
          "Baumé density degree input per pit with automated tannin strength calculation",
          "Lactic acid pH buffer input to prevent rapid surface tanning",
          "Hide pack transfer schedule moving hides progressively through stronger liquor pits",
        ],
        success:
          "Tanner balances 12 tanning pits in 15 minutes, ensuring complete center penetration of thick sole leather.",
        pains:
          "Putting raw hides into strong tannin liquor too early causes case-hardening, leaving the center raw and rotting.",
        quote:
          "Vegetable tanning is an exercise in patience. The tannin must walk into the hide, not be forced.",
      },
      {
        type: "Card",
        platform: "Mobile",
        deliverable: "Drum milling & fatliquoring batch card",
        goal: "Track rotation hours and oil emulsion percentages during the final softening and fatliquoring of bridle leather.",
        mustHaves: [
          "Drum number, hide count, and total batch weight in kilograms",
          "Fatliquor natural oil percentage recipe (Neatsfoot oil, cod oil, tallow)",
          "Elapsed drumming hours timer with target suppleness milestone",
        ],
        success:
          "Operator unloads drum at exact temper specification, ready for drying on wooden toggling frames.",
        pains:
          "Over-drumming breaks the natural grain of the leather, creating unwanted loose pebble texture.",
        quote:
          "The right fatliquor gives the leather its hand and temper. Too little and it cracks, too much and it stays greasy.",
      },
    ],
  },
  {
    name: "Lookout",
    industry:
      "Wildfire Prevention / Remote Watchtower Smoke Spotting & Wind Vectors",
    description:
      "A mountain wildfire lookout reporting tool triangulating smoke azimuth bearings with Osborne Fire Finders to guide initial attack tanker aircraft.",
    value:
      "Spot lightning-sparked wilderness wildfires in their first 15 minutes before they grow into uncontrollable conflagrations.",
    segment:
      "Wildfire lookout observers, forest service dispatchers, and aerial wildfire attack coordinators.",
    behaviors:
      "Sight distant mountain smoke plumes through brass alidades on circular maps from isolated 80-foot watchtowers.",
    role: "wilderness fire lookout observer",
    age: [24, 66],
    goals:
      "Report smoke azimuth compass bearings, distance estimates, and smoke color characteristics to central dispatch within 5 minutes of ignition.",
    brand:
      "Brand color Smoke Amber (#D97706) reflects vigilant wildfire detection and rapid initial response.",
    tones: [
      {
        adjectives: "Vigilant, panoramic",
        note: "Circular 360-degree Osborne azimuth dials, topographical peak cross-hairs, and wind speed anemometer gauges.",
      },
      {
        adjectives: "Austere, clear",
        note: "High-contrast daylight readable interface with instant radio transmission format scripts.",
      },
    ],
    tasks: [
      {
        type: "Card",
        platform: "Desktop",
        deliverable: "Smoke sighting triangulation card",
        goal: "Combine compass azimuth sightings from two distant mountain lookouts to calculate the exact wildfire coordinate pin.",
        mustHaves: [
          "Azimuth degree bearings from Lookout Peak and Bald Mountain",
          "Calculated cross-bearing intersection latitude and longitude with terrain elevation",
          "Nearest water source landmark and fire tanker retardant drop corridor",
        ],
        success:
          "Dispatcher pinpoints a lightning strike smoke in four minutes and scrambles initial attack smokejumpers.",
        pains:
          "Single lookout distance estimations can be off by miles due to mountain ridgeline parallax.",
        quote:
          "When two lookouts sight the same smoke plume, the intersection of the two bearings gives you the fire.",
      },
      {
        type: "Form",
        platform: "Mobile",
        deliverable: "Osborne fire finder sighting log form",
        goal: "Record a new smoke report from the tower Osborne fire finder sighting ring.",
        mustHaves: [
          "Azimuth compass bearing degrees and minutes input with true north magnetic declination offset",
          "Smoke character classification (Puff, Steady column, Black fuel oil, White timber)",
          "Immediate voice dispatch script generator with phonetic radio call signs",
        ],
        success:
          "Lookout transmits clean fire report to regional interagency dispatch center in 60 seconds.",
        pains:
          "Radio confusion during afternoon lightning storms when ten lookouts are reporting simultaneously.",
        quote:
          "In the tower, your job is simple: sight the wire, read the ring, describe the smoke, and call dispatch.",
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
  "Suki Tanaka",
  "Diego Fuentes",
  "Aisha Ibrahim",
  "Liam Brennan",
  "Carmen Reyes",
  "Viktor Novak",
  "Farida Osman",
  "Sienna Caldwell",
  "Rashid Patel",
  "Ingrid Solberg",
  "Emeka Nwosu",
  "Tatiana Volkov",
  "Hugo Almeida",
  "Kira Yamamoto",
  "Nia Baptiste",
  "Henrik Larsen",
  "Priscilla Santos",
  "Darius Moore",
  "Ananya Gupta",
  "Conor Sullivan",
  "Fatima Zahra",
  "Lorenzo De Luca",
  "Mina Park",
  "Ezra Nakamura",
  "Linnea Berg",
  "Tobias Fischer",
  "Amira Khoury",
  "Rafael Navarro",
  "Deepa Krishnan",
  "Arlo Sinclair",
  "Chiara Moretti",
  "Kofi Boateng",
  "Astrid Holm",
  "Javier Delgado",
  "Naomi Oduya",
  "Ewan MacLeod",
  "Valentina Rossi",
  "Samir Hadid",
  "Lucia Fernandez",
  "Idris Bello",
  "Margot Lefevre",
  "Kenji Watanabe",
  "Selma Johansson",
  "Anton Richter",
  "Zuri Abara",
  "Elise Tremblay",
  "Vikram Singh",
  "Maren Lund",
  "Olumide Adebayo",
  "Noemi Varga",
  "Caspian Lee",
  "Petra Dvorak",
  "Isamu Fujita",
  "Leona Walsh",
  "Basil Okafor",
  "Iris Magnusson",
  "Matias Soto",
  "Adaeze Eze",
  "Soren Dahl",
  "Mila Kozlov",
  "Gabriel Rocha",
  "Ayumi Nakagawa",
  "Thiago Costa",
  "Rania Mansour",
  "Jasper Henriksen",
  "Camille Beaumont",
  "Tariq Rahman",
  "Saskia Mulder",
  "Nikolai Antonov",
  "Paloma Ortiz",
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
  {
    text: "All interactive elements must have a visible focus ring and aria-label.",
  },
  {
    text: "Primary actions must be reachable with one thumb on a 375px-wide device.",
    platform: "Mobile",
  },
  {
    text: "No layout shift after async content loads; reserve vertical space with skeleton placeholders.",
  },
  {
    text: "Error states must explain the problem and offer a recovery action; never show raw error codes.",
  },
  {
    text: "Support right-to-left (RTL) text direction; avoid fixed left/right padding assumptions.",
  },
  {
    text: "Data tables must remain usable at 1024px without horizontal scrolling.",
    platform: "Desktop",
  },
  {
    text: "All date/time displays must respect the user's locale (DD/MM vs MM/DD).",
  },
  {
    text: "Touch targets for destructive actions must require a confirmation step, not a single tap.",
    platform: "Mobile",
  },
  {
    text: "Loading states must appear within 300ms; never show a blank screen during data fetches.",
  },
  {
    text: "Cards must stack vertically on narrow viewports without losing information hierarchy.",
    platform: "Mobile",
  },
  {
    text: "Offline states must be clearly communicated; cached data must show a last-updated timestamp.",
  },
  {
    text: "Color palette must include a high-contrast mode; do not rely solely on opacity for disabled states.",
  },
  {
    text: "Forms must validate inline on blur, not only on submit.",
  },
  {
    text: "No modal dialogs on mobile; use bottom sheets or full-screen overlays instead.",
    platform: "Mobile",
  },
  {
    text: "Icons must have visible text labels; icon-only buttons require a tooltip on hover.",
    platform: "Desktop",
  },
  {
    text: "Animations must complete within 400ms to avoid feeling sluggish.",
  },
  {
    text: "Critical actions must remain visible without scrolling on an 812px-tall viewport.",
    platform: "Mobile",
  },
  {
    text: "Use system fonts as the fallback stack; custom fonts must load within 100ms or swap.",
  },
  {
    text: "Multi-step flows must show a progress indicator and allow backward navigation.",
  },
  {
    text: "Empty states must provide a clear next action, not just an illustration.",
  },
  {
    text: "Success and error toasts must auto-dismiss after 5 seconds but allow manual dismissal.",
  },
  {
    text: "Navigation must remain accessible when JavaScript fails to load.",
    platform: "Desktop",
  },
  {
    text: "Images must include meaningful alt text; decorative images use empty alt attributes.",
  },
  {
    text: "Password fields must support paste and password manager autofill.",
  },
]
