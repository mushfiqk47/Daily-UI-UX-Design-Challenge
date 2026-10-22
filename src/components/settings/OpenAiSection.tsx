import { Check, Eye, EyeOff, Loader2, RefreshCw } from "lucide-react"
import { CustomDropdown, type DropdownOption } from "../CustomDropdown"

interface OpenAiSectionProps {
  apiKey: string
  onApiKeyChange: (val: string) => void
  model: string
  onModelChange: (val: string) => void
  customModel: string
  onCustomModelChange: (val: string) => void
  baseUrl: string
  onBaseUrlChange: (val: string) => void
  showKey: boolean
  onToggleShowKey: () => void
  dynamicModels?: DropdownOption[]
  onCheckConnection: () => void
  status?: { loading: boolean ok?: boolean msg?: string }
}

export function OpenAiSection({
  apiKey,
  onApiKeyChange,
  model,
  onModelChange,
  customModel,
  onCustomModelChange,
  baseUrl,
  onBaseUrlChange,
  showKey,
  onToggleShowKey,
  dynamicModels,
  onCheckConnection,
  status,
}: OpenAiSectionProps) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-3 space-y-3 shadow-2xs">
      <div>
        <label className="font-sora block text-[11px] font-medium text-slate mb-1">
          OpenAI API Key
        </label>
        <div className="relative">
          <input
            type={showKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            placeholder="sk-proj-..."
            className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 pr-8 text-[12px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono"
          />
          <button
            type="button"
            onClick={onToggleShowKey}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-steel hover:text-ink"
          >
            {showKey ? (
              <EyeOff className="size-3.5" />
            ) : (
              <Eye className="size-3.5" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="font-sora block text-[11px] font-medium text-slate">
            Model
          </label>
          <button
            type="button"
            onClick={onCheckConnection}
            disabled={status?.loading}
            className="flex items-center gap-1 text-[11px] text-accent hover:underline font-medium disabled:opacity-50"
          >
            {status?.loading ? (
              <Loader2 className="size-3 animate-spin" />
            ) : (
              <RefreshCw className="size-3" />
            )}
            <span>Check & Fetch Models</span>
          </button>
        </div>

        <CustomDropdown
          value={model}
          onChange={onModelChange}
          customValue={customModel}
          onCustomChange={onCustomModelChange}
          customPlaceholder="e.g. gpt-4o-2024-11-20 or fine-tune"
          options={[
            ...(dynamicModels || [
              {
                value: "gpt-4o-mini",
                label: "GPT-4o Mini",
                badge: "Fast & Cheap",
                description: "Ultra-fast generation, instant response",
              },
              {
                value: "gpt-4o",
                label: "GPT-4o",
                badge: "Most Capable",
                description: "High-precision multimodal design analysis",
              },
              {
                value: "gpt-4.1-preview",
                label: "GPT-4.1 Preview",
                badge: "New Flagship",
                description: "Latest OpenAI model with highest detail",
              },
            ]),
            {
              value: "custom",
              label: "Custom Model...",
              badge: "Custom",
              description: "Specify any custom or fine-tuned OpenAI model ID",
            },
          ]}
        />
      </div>

      {status?.msg && (
        <div
          className={`flex items-center gap-1.5 rounded-lg p-2 text-[11px] animate-rise ${
            status.ok
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-red-50 text-red-600 border border-red-200"
          }`}
        >
          {status.ok ? (
            <Check className="size-3.5 shrink-0" />
          ) : (
            <span className="font-bold text-red-500">✕</span>
          )}
          <span className="truncate">{status.msg}</span>
        </div>
      )}

      <div>
        <label className="font-sora block text-[11px] font-medium text-slate mb-1">
          Custom Base URL (Optional)
        </label>
        <input
          type="text"
          value={baseUrl}
          onChange={(e) => onBaseUrlChange(e.target.value)}
          placeholder="https://api.openai.com/v1"
          className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-[11.5px] text-ink font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
        <p className="font-inter text-[10.5px] text-slate mt-0.5">
          For Cloudflare AI Gateway, Helicone, or corporate proxies.
        </p>
      </div>
    </div>
  )
}
