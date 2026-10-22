import { Target, User } from "lucide-react"
import type { Brief } from "../../lib/generate"
import { COL_RIGHT_W } from "../InfiniteCanvas"

const fBold = "font-sora font-bold"
const fMedium = "font-inter font-medium"
const fRegular = "font-inter font-normal"
const fLabel = "font-sora font-medium"

interface PersonaAudienceCardProps {
  brief: Brief
  isRevealed: (step: number) => boolean
  entranceClass: string
  isInitial: boolean
}

export function PersonaAudienceCard({
  brief,
  isRevealed,
  entranceClass,
  isInitial,
}: PersonaAudienceCardProps) {
  const { persona, product } = brief

  return (
    <div
      className={`${entranceClass} flex flex-col rounded-[24px] border border-hairline bg-white p-7`}
      style={{
        width: COL_RIGHT_W,
        animationDelay: isInitial ? "150ms" : undefined,
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <User className="size-4 text-accent" />
        <h3 className={`${fBold} text-[15px] text-accent`}>User Persona</h3>
      </div>
      {!isRevealed(21) ? (
        <div className="mb-4">
          <div className="h-4 w-28 rounded bg-stone-200 animate-pulse mb-1.5" />
          <div className="h-3 w-36 rounded bg-stone-200/70 animate-pulse" />
        </div>
      ) : (
        <div key={persona.name} className="mb-4 animate-reveal">
          <div className={`${fBold} text-[14px] leading-[20px] text-ink`}>
            {persona.name}
          </div>
          <div
            className={`${fRegular} text-[12px] leading-[18px] text-steel mt-0.5`}
          >
            {persona.age}, {persona.role}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>Goals</div>
          {!isRevealed(22) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={persona.goals}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {persona.goals}
            </div>
          )}
        </div>
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>
            Pain points this screen must address
          </div>
          {!isRevealed(23) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-4/5 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={persona.pains}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {persona.pains}
            </div>
          )}
        </div>
      </div>

      <div className="rounded-[12px] bg-surface p-4 mt-4">
        {!isRevealed(24) ? (
          <div className="space-y-1.5">
            <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
            <div className="h-3.5 w-3/4 rounded bg-stone-200 animate-pulse" />
          </div>
        ) : (
          <p
            key={persona.quote}
            className={`${fMedium} text-[14px] leading-[20px] text-ink animate-reveal`}
          >
            “{persona.quote}”
          </p>
        )}
      </div>

      <hr className="my-6 border-hairline" />

      <div className="flex items-center gap-2 mb-4">
        <Target className="size-4 text-accent" />
        <h3 className={`${fBold} text-[15px] text-accent`}>Target Audience</h3>
      </div>
      <div className="space-y-4">
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>
            Primary segment
          </div>
          {!isRevealed(25) ? (
            <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse mt-1" />
          ) : (
            <div
              key={product.segment}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {product.segment}
            </div>
          )}
        </div>
        <div>
          <div className={`${fLabel} text-[11px] text-steel`}>
            Key behaviors and context of use
          </div>
          {!isRevealed(26) ? (
            <div className="space-y-1.5 mt-1">
              <div className="h-3.5 w-full rounded bg-stone-200 animate-pulse" />
              <div className="h-3.5 w-5/6 rounded bg-stone-200 animate-pulse" />
            </div>
          ) : (
            <div
              key={product.behaviors}
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5 animate-reveal`}
            >
              {product.behaviors}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
