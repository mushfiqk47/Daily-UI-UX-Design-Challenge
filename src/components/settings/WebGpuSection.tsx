import { ArrowDownToLine, Cpu, Eject } from "lucide-react"
import { CustomDropdown } from "../CustomDropdown"
import type { WebGpuModelState, WebGpuProgress } from "../../lib/ai"

interface WebGpuSectionProps {
  webgpuModel: string
  onModelChange: (model: string) => void
  modelState: WebGpuModelState
  progress: WebGpuProgress
  onDownloadLoad: () => void
  onEject: () => void
  gpuStatus: "checking" | "supported" | "unsupported" | null
  onCheckGpu: () => void
}

export function WebGpuSection({
  webgpuModel,
  onModelChange,
  modelState,
  progress,
  onDownloadLoad,
  onEject,
  gpuStatus,
  onCheckGpu,
}: WebGpuSectionProps) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-3 space-y-3 shadow-2xs">
      <div className="flex items-center gap-1.5">
        <Cpu className="size-3.5 text-accent" />
        <span className="font-sora text-[12.5px] font-semibold text-ink">
          In-Browser WebGPU Model
        </span>
      </div>
      <p className="font-inter text-[11px] leading-relaxed text-steel">
        Runs 100% locally on your machine GPU. Zero thinking overhead, zero
        telemetry, works offline once loaded.
      </p>

      <CustomDropdown
        label="Model Weight"
        value={webgpuModel}
        onChange={onModelChange}
        options={[
          {
            value: "Qwen3.5-0.8B-q4f16_1-MLC",
            label: "Qwen 3.5 0.8B",
            badge: "Instant Instruct",
            description: "Recommended 4-bit model (~500MB), instant response",
          },
          {
            value: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
            label: "Qwen 2.5 0.5B Instruct",
            badge: "Ultra Fast",
            description: "Smallest footprint (~350MB), very rapid generation",
          },
          {
            value: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
            label: "Qwen 2.5 1.5B Instruct",
            badge: "High Quality",
            description: "Richest design briefs (~950MB VRAM)",
          },
        ]}
      />

      <div className="rounded-xl border border-hairline/90 bg-surface/60 p-3 space-y-2.5 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full ${
                modelState === "loaded"
                  ? "bg-emerald-500"
                  : modelState === "loading"
                    ? "bg-accent"
                    : "bg-steel/40"
              }`}
            />
            <div>
              <span className="font-sora text-[12px] font-semibold text-ink block">
                {modelState === "loaded"
                  ? "Model Active in GPU VRAM"
                  : modelState === "loading"
                    ? "Downloading Weights..."
                    : "Not Cached in Memory"}
              </span>
              <span className="font-inter text-[10px] text-steel">
                {modelState === "loaded"
                  ? "In-browser local inference active"
                  : modelState === "loading"
                    ? progress.text || "Streaming parameter shards..."
                    : "Click below to pre-load or generate on-demand"}
              </span>
            </div>
          </div>

          {modelState === "loaded" && (
            <button
              type="button"
              onClick={onEject}
              title="Offload model from GPU and RAM"
              className="flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-600 hover:bg-red-100 transition-colors active:scale-95 shadow-xs"
            >
              <Eject className="size-3" />
              <span>Eject</span>
            </button>
          )}
        </div>

        {modelState === "loading" && (
          <div className="space-y-1.5 pt-0.5 animate-rise">
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="flex items-center gap-1 text-accent font-medium">
                <ArrowDownToLine className="size-3" />
                <span className="truncate max-w-[200px]">
                  {progress.text || "Loading parameters..."}
                </span>
              </span>
              <span className="font-mono tabular-nums font-bold text-ink bg-white px-1.5 py-0.2 rounded border border-hairline shadow-xs">
                {Math.round(progress.progress * 100)}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-hairline/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-amber-500 transition-all duration-200 ease-out shadow-xs"
                style={{
                  width: `${Math.max(4, Math.round(progress.progress * 100))}%`,
                }}
              />
            </div>
          </div>
        )}

        {modelState === "idle" && (
          <button
            type="button"
            onClick={onDownloadLoad}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-white border border-hairline py-1.5 text-[11.5px] font-semibold text-ink hover:bg-surface active:scale-[0.99] transition-all shadow-xs"
          >
            <ArrowDownToLine className="size-3.5 text-accent" />
            <span>Pre-load & Cache Model to GPU</span>
          </button>
        )}
      </div>

      <div>
        <button
          type="button"
          onClick={onCheckGpu}
          className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-hairline py-1.5 text-[11.5px] font-medium text-ink hover:bg-surface active:bg-hairline"
        >
          <Cpu className="size-3 text-accent" />
          {gpuStatus === "checking"
            ? "Checking WebGPU..."
            : gpuStatus === "supported"
              ? "WebGPU Available ✓"
              : gpuStatus === "unsupported"
                ? "WebGPU Not Detected"
                : "Test WebGPU Compatibility"}
        </button>
      </div>
    </div>
  )
}
