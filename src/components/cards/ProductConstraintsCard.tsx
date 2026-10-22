import { Package, Palette } from "lucide-react"
import type { Brief } from "../../lib/generate"
import { COL_LEFT_W } from "../InfiniteCanvas"

const fBold = "font-sora font-bold"
const fRegular = "font-inter font-normal"
const fLabel = "font-sora font-medium"

interface ProductConstraintsCardProps {
  brief: Brief
  isRevealed: (step: number) => boolean
  entranceClass: string
  isInitial: boolean
}

export function ProductConstraintsCard({
  brief,
  isRevealed,
  entranceClass,
  isInitial,
}: ProductConstraintsCardProps) {
  const { product } = brief

  return (
    <div
      className={`${entranceClass} flex flex-col rounded-[24px] border border-hairline bg-white p-7`}
      style={{
        width: COL_LEFT_W,
        animationDelay: isInitial ? "50ms" : undefined,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Package className="size-4 text-accent" />
        <h3 className={`${fBold} text-[15px] text-accent`}>Product</h3>
      </div>
      <div className="space-y-4">
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>Name</div>
          {!isRevealed(4) ? (
            <div className="h-4 w-32 rounded bg-stone-200 animate-pulse mt-1" />
          ) : (
            <div
              key={product.name}
              className={`${fRegular} text-[13px] text-charcoal mt-0.5 animate-reveal`}
            >
              {product.name}
            </div>
          )}
        </div>
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>Description</div>
          {!isRevealed(5) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-4/6 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={product.description}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {product.description}
            </div>
          )}
        </div>
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>
            Core value proposition
          </div>
          {!isRevealed(6) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-4/5 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={product.value}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {product.value}
            </div>
          )}
        </div>
      </div>

      <hr className="my-6 border-hairline" />

      <div className="flex items-center gap-2 mb-4">
        <Palette className="size-4 text-accent" />
        <h3 className={`${fBold} text-[15px] text-accent`}>
          Constraints & Style Direction
        </h3>
      </div>
      <div>
        <div className={`${fLabel} text-[11px] text-steel mb-2`}>
          Constraints
        </div>
        <ul className="space-y-2">
          {brief.constraints.map((c, idx) => {
            const bulletRevealed = isRevealed(7 + idx)
            return !bulletRevealed ? (
              <li key={`skel-c-${idx}`} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-stone-300 shrink-0" />
                <div
                  className="h-3 rounded bg-stone-200 animate-pulse"
                  style={{
                    width: `${[92, 78, 86, 80][idx] ?? 80}%`,
                  }}
                />
              </li>
            ) : (
              <li key={c} className="flex items-start gap-2 animate-reveal">
                <span className="text-[13px] leading-[19px] text-ink select-none">
                  •
                </span>
                <span
                  className={`${fRegular} text-[13px] leading-[19px] text-charcoal`}
                >
                  {c}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-5">
        <div className={`${fLabel} text-[11px] text-steel mb-2`}>
          Visual tone
        </div>
        <div className="rounded-[12px] bg-surface p-4">
          {!isRevealed(11) ? (
            <div className="space-y-2">
              <div className="h-3.5 w-28 rounded bg-stone-200 animate-pulse" />
              <div className="h-3 w-full rounded bg-stone-200/80 animate-pulse" />
            </div>
          ) : (
            <div key={brief.id} className="animate-reveal">
              <p className={`${fBold} text-[14px] leading-[20px] text-accent`}>
                {brief.tone.adjectives}
              </p>
              <p
                className={`${fRegular} text-[12px] leading-[18px] text-slate mt-0.5`}
              >
                {brief.tone.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
