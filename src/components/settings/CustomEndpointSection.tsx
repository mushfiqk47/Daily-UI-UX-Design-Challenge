import { AlertCircle, Check, Loader2, RefreshCw } from "lucide-react"
import { CustomDropdown, type DropdownOption } from "../CustomDropdown"

interface CustomEndpointSectionProps {
  baseUrl: string
  onBaseUrlChange: (val: string) => void
  model: string
  onModelChange: (val: string) => void
  apiKey: string
  onApiKeyChange: (val: string) => void
  dynamicModels?: DropdownOption[]
  onCheckConnection: () => void
  status?: { loading: boolean ok?: boolean msg?: string }
}

export function CustomEndpointSection({
  baseUrl,
  onBaseUrlChange,
  model,
  onModelChange,
  apiKey,
  onApiKeyChange,
  dynamicModels,
  onCheckConnection,
  status,
}: CustomEndpointSectionProps) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-3 space-y-3 shadow-2xs">
      <div>
        <label className="font-sora block text-[11px] font-medium text-slate mb-1">
          OpenAI-Compatible Endpoint URL
        </label>
        <input
          type="text"
          value={baseUrl}
          onChange={(e) => onBaseUrlChange(e.target.value)}
          placeholder="http://localhost:11434/v1"
          className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-[11.5px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono"
        />
        <p className="text-[10.5px] text-slate mt-0.5">
          Works with Ollama, Groq, LM Studio, OpenRouter, or DeepSeek.
        </p>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label className="font-sora block text-[11px] font-medium text-slate">
            Model Identifier
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
            <span>Fetch Local Models</span>
          </button>
        </div>

        {dynamicModels && dynamicModels.length > 0 ? (
          <CustomDropdown
            value={model}
            onChange={onModelChange}
            options={dynamicModels}
          />
        ) : (
          <input
            type="text"
            value={model}
            onChange={(e) => onModelChange(e.target.value)}
            placeholder="e.g. deepseek-chat, qwen2.5:0.5b, llama-3.3-70b"
            className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-[11.5px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono"
          />
        )}
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
          API Key (Optional)
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          placeholder="Leave blank for local Ollama"
          className="w-full rounded-lg border border-hairline bg-surface px-2.5 py-1.5 text-[11.5px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-mono"
        />
      </div>
    </div>
  )
}
