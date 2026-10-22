import {
  AlertCircle,
  Check,
  Eye,
  EyeOff,
  Loader2,
  RefreshCw,
} from "lucide-react"
import { CustomDropdown, type DropdownOption } from "../CustomDropdown"

interface AnthropicSectionProps {
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

export function AnthropicSection({
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
}: AnthropicSectionProps) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-3 space-y-3 shadow-2xs">
      <div>
        <label className="font-sora block text-[11px] font-medium text-slate mb-1">
          Anthropic API Key
        </label>
        <div className="relative">
          <input
            type={showKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            placeholder="sk-ant-..."
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
          customPlaceholder="e.g. claude-3-opus-20240229"
          options={[
            ...(dynamicModels || [
              {
                value: "claude-3-5-haiku-20241022",
                label: "Claude 3.5 Haiku",
                badge: "Instant & Precise",
                description: "Lightning-fast instruct generation",
              },
              {
                value: "claude-3-5-sonnet-20241022",
                label: "Claude 3.5 Sonnet",
                badge: "Best Quality",
                description: "Highest design depth and nuance",
              },
            ]),
            {
              value: "custom",
              label: "Custom Model...",
              badge: "Custom",
              description: "Specify any custom Anthropic model identifier",
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
            <AlertCircle className="size-3.5 shrink-0" />
          )}
          <span className="truncate">{status.msg}</span>
        </div>
      )}

      <div>
        <label className="font-sora block text-[11px] font-medium text-slate mb-1">
          Base URL (Optional Proxy / Gateway)
        </label>
        <input
          type="text"
          value={baseUrl}
          onChange={(e) => onBaseUrlChange(e.target.value)}
          placeholder="https://api.anthropic.com"
          className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-[11.5px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono"
        />
      </div>
    </div>
  )
}
