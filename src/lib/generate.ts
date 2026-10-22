import {
  CONSTRAINTS,
  NAMES,
  PRODUCTS,
  type Platform,
  type ProductSeed,
  type TaskSeed,
  type TaskType,
} from "../data/library"

export interface Filters {
  platform: Platform | "Any"
  type: TaskType | "Any"
}

export interface Brief {
  id: string
  date: string
  number: number
  product: Pick<ProductSeed, "name" | "industry" | "description" | "value" | "segment" | "behaviors">
  persona: {
    name: string
    age: number
    role: string
    goals: string
    pains: string
    quote: string
  }
  task: Omit<TaskSeed, "pains" | "quote">
  constraints: string[]
  tone: { adjectives: string note: string }
}

const EPOCH = Date.UTC(2025, 0, 1)

function hash(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function rng(seed: number) {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function shuffle<T>(items: T[], rand: () => number) {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function dayNumber(date: string) {
  return Math.floor((Date.parse(`${date}T00:00:00Z`) - EPOCH) / 86400000) + 1
}

const ALL = PRODUCTS.flatMap((product) =>
  product.tasks.map((task) => ({ product, task })),
)
// A fixed global order so consecutive days walk through the whole library before repeating.
const ORDER = shuffle(ALL, rng(20250101))

export function generateBrief(
  date: string,
  roll: number,
  filters: Filters,
): Brief | null {
  const pool = ORDER.filter(
    ({ task }) =>
      (filters.platform === "Any" || task.platform === filters.platform) &&
      (filters.type === "Any" || task.type === filters.type),
  )
  if (pool.length === 0) return null

  const number = dayNumber(date)
  const { product, task } =
    pool[(((number + roll * 7) % pool.length) + pool.length) % pool.length]
  const rand = rng(hash(`${date}|${roll}|${filters.platform}|${filters.type}`))
  const pick = <T>(arr: T[]) => arr[Math.floor(rand() * arr.length)]

  const [min, max] = product.age
  const fitting = CONSTRAINTS.filter(
    (c) => !c.platform || c.platform === task.platform,
  )
  const constraints = [
    product.brand,
    ...shuffle(fitting, rand)
      .slice(0, rand() > 0.5 ? 2 : 1)
      .map((c) => c.text),
  ]
  const { pains, quote, ...taskRest } = task

  return {
    id: `${date}-${roll}-${filters.platform}-${filters.type}`,
    date,
    number,
    product: {
      name: product.name,
      industry: product.industry,
      description: product.description,
      value: product.value,
      segment: product.segment,
      behaviors: product.behaviors,
    },
    persona: {
      name: pick(NAMES),
      age: min + Math.floor(rand() * (max - min + 1)),
      role: product.role,
      goals: product.goals,
      pains,
      quote,
    },
    task: taskRest,
    constraints,
    tone: pick(product.tones),
  }
}

export function toMarkdown(b: Brief) {
  return [
    `# Daily UI Brief No. ${b.number} - ${b.product.name}`,
    "",
    "**Product**",
    `- Name: ${b.product.name}`,
    `- Description: ${b.product.description}`,
    `- Core value proposition: ${b.product.value}`,
    "",
    "**Target Audience**",
    `- Primary segment: ${b.product.segment}`,
    `- Key behaviors and context of use: ${b.product.behaviors}`,
    "",
    "**User Persona**",
    `- ${b.persona.name}, ${b.persona.age}, ${b.persona.role}`,
    `- Goals: ${b.persona.goals}`,
    `- Pain points: ${b.persona.pains}`,
    `- Quote: "${b.persona.quote}"`,
    "",
    "**Task**",
    `- Deliverable: ${b.task.deliverable}`,
    `- Platform: ${b.task.platform}`,
    `- Goal: ${b.task.goal}`,
    `- Must-have elements and states:`,
    ...b.task.mustHaves.map((m) => `  - ${m}`),
    `- Success criteria: ${b.task.success}`,
    "",
    "**Constraints & Style Direction**",
    ...b.constraints.map((c) => `- ${c}`),
    `- Visual tone: ${b.tone.adjectives}. ${b.tone.note}`,
  ].join("\n")
}

export function todayISO() {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10)
}

export function shiftDate(date: string, days: number) {
  const d = new Date(`${date}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

export const TOTAL_TASKS = ALL.length
