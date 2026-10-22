import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

export interface DropdownOption {
  value: string
  label: string
  badge?: string
  description?: string
}

interface CustomDropdownProps {
  value: string
  options: DropdownOption[]
  onChange: (val: string) => void
  label?: string
  customValue?: string
  onCustomChange?: (val: string) => void
  customPlaceholder?: string
  className?: string
}

export function CustomDropdown({
  value,
  options,
  onChange,
  label,
  customValue,
  onCustomChange,
  customPlaceholder = "Enter custom model name (e.g. meta-llama/Llama-3)...",
  className = "",
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value) || {
    value,
    label: value === "custom" ? "Custom Model" : value,
  }

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) {
      document.addEventListener("mousedown", handleOutside)
      document.addEventListener("keydown", handleKey)
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <div ref={ref} className={`relative space-y-1.5 ${className}`}>
      {label && (
        <label className="font-sora block text-[11px] font-medium text-steel">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg border border-hairline bg-surface/60 px-3 py-2 text-left text-[12.5px] text-ink transition-all hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-2xs"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2 truncate">
          <span className="font-sora font-semibold truncate text-[12.5px] text-ink">
            {selected.label}
          </span>
          {selected.badge && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10.5px] font-semibold text-accent">
              {selected.badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`size-3.5 text-steel transition-transform duration-200 shrink-0 ${
            open ? "rotate-180 text-ink" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-52 overflow-y-auto rounded-lg border border-hairline bg-white p-1 shadow-xl animate-rise backdrop-blur-md"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className={`flex w-full items-start justify-between rounded-md p-2 text-left transition-colors ${
                  isSelected
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-ink hover:bg-surface"
                }`}
              >
                <div className="space-y-0.5 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-sora text-[12px] font-semibold text-ink">
                      {opt.label}
                    </span>
                    {opt.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          isSelected
                            ? "bg-accent text-white"
                            : "bg-surface text-slate"
                        }`}
                      >
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  {opt.description && (
                    <p className="font-inter text-[11px] text-slate leading-tight">
                      {opt.description}
                    </p>
                  )}
                </div>
                {isSelected && (
                  <Check className="size-3.5 text-accent shrink-0 mt-0.5" />
                )}
              </button>
            )
          })}
        </div>
      )}

      {/* Custom Model Input (shown when value === 'custom') */}
      {value === "custom" && onCustomChange && (
        <div className="pt-1 animate-rise">
          <input
            type="text"
            value={customValue || ""}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder={customPlaceholder}
            className="w-full rounded-lg border border-accent/40 bg-white px-2.5 py-1.5 text-[11.5px] text-ink font-mono placeholder:text-steel/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-xs"
          />
          <p className="text-[9.5px] text-steel mt-0.5 pl-0.5">
            Specify any exact model tag / identifier.
          </p>
        </div>
      )}
    </div>
  )
}
