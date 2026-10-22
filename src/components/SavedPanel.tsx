import { useEffect } from "react"
import { Bookmark, X } from "lucide-react"
import type { Brief } from "../lib/generate"

const fRegular = "font-inter font-normal"
const fSemi = "font-sora font-semibold"

interface SavedPanelProps {
  saved: Brief[]
  done: Record<string, string>
  isCurrentSaved: boolean
  onToggleSaveCurrent: () => void
  onClose: () => void
  onOpen: (b: Brief) => void
  onRemove: (id: string) => void
}

export function SavedPanel({
  saved,
  done,
  isCurrentSaved,
  onToggleSaveCurrent,
  onClose,
  onOpen,
  onRemove,
}: SavedPanelProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex justify-start"
      role="dialog"
      aria-modal="true"
      aria-label="Saved briefs"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />
      <div className="animate-rise relative flex h-full w-full max-w-md flex-col border-r border-hairline bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className={`${fSemi} text-[22px] leading-[28px] text-ink`}>
            Saved briefs
          </h2>
          <button
            aria-label="Close saved briefs"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-xl border border-hairline hover:bg-surface active:bg-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="p-4 border-b border-hairline bg-surface/50">
          <button
            onClick={onToggleSaveCurrent}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-hairline py-2.5 px-4 text-[13px] font-medium text-ink shadow-sm active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
          >
            <Bookmark
              className={`size-4 ${
                isCurrentSaved ? "fill-ink text-ink" : "text-ink"
              }`}
            />
            {isCurrentSaved
              ? "Remove current brief from saved"
              : "Save current brief"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {saved.length === 0 ? (
            <div className="px-4 py-16 text-center">
              <p className={`${fSemi} text-[18px] text-ink`}>
                Nothing saved yet
              </p>
              <p className={`${fRegular} mt-1 text-[13px] text-steel`}>
                Save a brief you want to come back to on a slower day.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {saved.map((b) => (
                <li
                  key={b.id}
                  className="relative rounded-[12px] border border-hairline bg-white transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => onOpen(b)}
                    className="block w-full p-4 pr-12 text-left rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span
                      className={`${fRegular} flex items-center gap-2 text-[12px] text-steel`}
                    >
                      Nº {b.number} · {b.task.platform} · {b.task.type}
                      {b.id in done && (
                        <span
                          className={`${fSemi} rounded-full bg-success-bg px-2 py-0.5 text-[11px] text-success-text`}
                        >
                          Done
                        </span>
                      )}
                    </span>
                    <span
                      className={`${fSemi} mt-0.5 block text-[15px] text-ink`}
                    >
                      {b.product.name}
                    </span>
                    <span
                      className={`${fRegular} mt-0.5 line-clamp-2 block text-[13px] text-steel`}
                    >
                      {b.task.deliverable}
                    </span>
                  </button>
                  <button
                    onClick={() => onRemove(b.id)}
                    aria-label={`Remove ${b.product.name}`}
                    className="absolute right-3 top-3 grid size-8 place-items-center rounded-full text-stone hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
