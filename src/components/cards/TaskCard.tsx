import { Check, ListTodo } from "lucide-react"
import type { Brief } from "../../lib/generate"
import { COL_MID_W } from "../InfiniteCanvas"

const fBold = "font-sora font-bold"
const fSemi = "font-sora font-semibold"
const fRegular = "font-inter font-normal"
const fLabel = "font-sora font-medium"

interface TaskCardProps {
  brief: Brief
  checked: Set<number>
  onToggleCheck: (index: number) => void
  isRevealed: (step: number) => boolean
  entranceClass: string
  isInitial: boolean
}

export function TaskCard({
  brief,
  checked,
  onToggleCheck,
  isRevealed,
  entranceClass,
  isInitial,
}: TaskCardProps) {
  const { task } = brief

  return (
    <div
      className={`${entranceClass} flex flex-col rounded-[24px] border border-hairline bg-white p-7`}
      style={{
        width: COL_MID_W,
        animationDelay: isInitial ? "100ms" : undefined,
      }}
    >
      <div className="mb-4">
        <span
          className={`${fSemi} inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-[12px] font-semibold text-white shadow-xs`}
        >
          <ListTodo className="size-3.5 text-white" />
          Task
        </span>
      </div>

      {!isRevealed(12) ? (
        <div className="space-y-2 mb-5">
          <div className="h-5 w-full rounded bg-stone-200 animate-pulse" />
          <div className="h-5 w-3/4 rounded bg-stone-200 animate-pulse" />
        </div>
      ) : (
        <h2
          key={task.deliverable}
          className={`${fBold} text-[18px] leading-[25px] text-accent mb-5 animate-reveal`}
        >
          {task.deliverable}
        </h2>
      )}

      <div className="space-y-4 mb-5">
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>Platform</div>
          {!isRevealed(13) ? (
            <div className="h-3.5 w-24 rounded bg-stone-200 animate-pulse mt-1" />
          ) : (
            <div
              key={task.platform}
              className={`${fRegular} text-[13px] text-charcoal mt-0.5 animate-reveal`}
            >
              {task.platform} (primary)
            </div>
          )}
        </div>
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>Goal</div>
          {!isRevealed(14) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-4/5 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={task.goal}
              className={`${fRegular} text-[13px] text-charcoal mt-0.5 animate-reveal`}
            >
              {task.goal}
            </div>
          )}
        </div>
      </div>

      <div>
        <div
          className={`${fLabel} flex justify-between items-center text-[11px] text-[#3B3D40] mb-2`}
        >
          <span>Must-have elements and states</span>
          {!isRevealed(15) ? (
            <div className="h-2.5 w-8 rounded bg-stone-200 animate-pulse" />
          ) : (
            <span className="tabular-nums font-normal text-[#6B7079] animate-reveal">
              {checked.size}/{task.mustHaves.length}
            </span>
          )}
        </div>
        <div className="overflow-hidden rounded-[14px] border border-[#E1DEDE] divide-y divide-[#E1DEDE] bg-white">
          {task.mustHaves.map((m, i) => {
            const on = checked.has(i)
            const rowRevealed = isRevealed(15 + i)
            return !rowRevealed ? (
              <div
                key={`skel-mh-${i}`}
                className="flex items-center gap-[14px] px-[18px] py-[14px]"
              >
                <div className="size-[19px] shrink-0 rounded-[5px] bg-[#E1DEDE] animate-pulse" />
                <div
                  className="h-3.5 rounded bg-stone-200 animate-pulse"
                  style={{
                    width: `${[82, 90, 74, 86, 70][i] ?? 80}%`,
                  }}
                />
              </div>
            ) : (
              <button
                key={m}
                aria-pressed={on}
                onClick={() => onToggleCheck(i)}
                className="flex w-full items-center gap-[14px] px-[18px] py-[14px] text-left active:bg-surface/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset animate-reveal"
              >
                <span
                  className={`grid size-[19px] shrink-0 place-items-center rounded-[5px] transition-all ${
                    on
                      ? "border border-[#E0307E] bg-[#E0307E]"
                      : "border border-[#BDBDBD] bg-[#E1DEDE] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.14)]"
                  }`}
                >
                  {on && (
                    <Check className="size-3.5 text-white" strokeWidth={2.8} />
                  )}
                </span>
                <span
                  className={`${fRegular} text-[13.5px] leading-[19px] transition-colors ${
                    on ? "text-[#5C626C] line-through" : "text-[#18181B]"
                  }`}
                >
                  {m}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-5">
        <div className={`${fLabel} text-[11px] text-steel`}>
          Success criteria
        </div>
        {!isRevealed(20) ? (
          <div className="space-y-1.5 mt-1">
            <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
            <div className="h-3.5 w-3/4 rounded bg-stone-200 animate-pulse" />
          </div>
        ) : (
          <div
            key={task.success}
            className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
          >
            {task.success}
          </div>
        )}
      </div>
    </div>
  )
}
