import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw, Timer, Check } from "lucide-react"

interface SprintTimerProps {
  onFinish?: () => void
}

export function SprintTimer({ onFinish }: SprintTimerProps) {
  const [initialMinutes, setInitialMinutes] = useState(45)
  const [secondsLeft, setSecondsLeft] = useState(45 * 60)
  const [running, setRunning] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [customInput, setCustomInput] = useState("")

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id)
          setRunning(false)
          onFinish?.()
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, onFinish])

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`

  const reset = (m: number) => {
    const valid = Math.max(1, Math.min(180, m))
    setInitialMinutes(valid)
    setSecondsLeft(valid * 60)
    setRunning(false)
  }

  const applyCustom = () => {
    const parsed = parseInt(customInput, 10)
    if (!isNaN(parsed) && parsed > 0) {
      reset(parsed)
      setCustomInput("")
      setExpanded(false)
    }
  }

  return (
    <div className="relative inline-flex items-center">
      <div className="flex h-10.5 items-center gap-2 rounded-xl border border-hairline bg-white px-3 text-[13px] font-medium text-ink shadow-xs transition-all">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 px-1"
          title="Toggle Sprint Length / Set Custom Timer"
        >
          <Timer className="size-4 text-accent" />
          <span className="tabular-nums font-mono font-medium text-[13px]">
            {formatted}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setRunning(!running)}
          aria-label={running ? "Pause sprint" : "Start sprint"}
          title={running ? "Pause sprint" : "Start sprint"}
          className="grid size-8 place-items-center rounded-lg hover:bg-surface active:bg-hairline text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {running ? (
            <Pause className="size-3.5" />
          ) : (
            <Play className="size-3.5 fill-ink ml-0.5" />
          )}
        </button>

        <button
          type="button"
          onClick={() => reset(initialMinutes)}
          aria-label="Reset timer"
          title="Reset timer"
          className="grid size-8 place-items-center rounded-lg hover:bg-surface active:bg-hairline text-steel hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>

      {expanded && (
        <div className="absolute bottom-full right-0 mb-2 flex items-center gap-1.5 rounded-2xl border border-hairline bg-white p-1.5 text-[11px] shadow-lg z-50 animate-rise">
          <span className="text-[10px] text-steel font-medium pl-1 select-none">
            Preset:
          </span>
          {[15, 30, 45, 60].map((m) => (
            <button
              key={m}
              onClick={() => {
                reset(m)
                setExpanded(false)
              }}
              className={`rounded-lg px-2.5 py-1 text-[11.5px] transition-colors ${
                initialMinutes === m
                  ? "bg-ink font-semibold text-white"
                  : "text-steel hover:text-ink hover:bg-surface"
              }`}
            >
              {m}m
            </button>
          ))}

          <div className="h-4 w-px bg-hairline mx-0.5" />

          <form
            onSubmit={(e) => {
              e.preventDefault()
              applyCustom()
            }}
            className="flex items-center gap-1 pl-0.5"
          >
            <input
              type="number"
              min="1"
              max="180"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Custom"
              className="w-14 rounded-lg border border-hairline bg-surface px-1.5 py-0.5 text-center text-[11px] font-mono text-ink placeholder:text-steel/70 focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <span className="text-[10px] text-steel">m</span>
            <button
              type="submit"
              disabled={!customInput}
              className="grid size-5 place-items-center rounded-md bg-ink text-white disabled:opacity-40 hover:bg-charcoal transition-colors"
              title="Set custom minutes"
            >
              <Check className="size-3" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
