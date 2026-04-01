import { Building2, BarChart3, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-8">
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Industrial Real Estate Intelligence
        </h1>
        <p className="text-lg text-muted-foreground">
          Find space, analyze properties, and close deals — free AI-powered CRE
          tools built for reindustrialization companies.
        </p>
        <p className="max-w-xl text-sm text-muted-foreground">
          This web app is still in prototype mode. The screens below are planned
          next, but they are not live routes yet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="flex h-auto flex-col gap-2 rounded-lg border p-4 text-left">
          <Search className="h-6 w-6" />
          <span className="font-medium">Search Properties</span>
          <span className="text-xs text-muted-foreground">
            Planned workspace for finding industrial space
          </span>
        </div>
        <div className="flex h-auto flex-col gap-2 rounded-lg border p-4 text-left">
          <BarChart3 className="h-6 w-6" />
          <span className="font-medium">Analyze Deals</span>
          <span className="text-xs text-muted-foreground">
            Planned underwriting and scenario analysis
          </span>
        </div>
        <div className="flex h-auto flex-col gap-2 rounded-lg border p-4 text-left">
          <Building2 className="h-6 w-6" />
          <span className="font-medium">My Properties</span>
          <span className="text-xs text-muted-foreground">
            Planned saved-property and deal-tracking view
          </span>
        </div>
      </div>
    </div>
  );
}
