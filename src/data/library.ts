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
  tones: { adjectives: string note: string }[]
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
