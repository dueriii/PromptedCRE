import { Building2, BarChart3, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <Link
          href="/search"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-auto flex-col gap-2 p-4"
          )}
        >
          <Search className="h-6 w-6" />
          <span className="font-medium">Search Properties</span>
          <span className="text-xs text-muted-foreground">Find industrial space</span>
        </Link>
        <Link
          href="/analysis"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-auto flex-col gap-2 p-4"
          )}
        >
          <BarChart3 className="h-6 w-6" />
          <span className="font-medium">Analyze Deals</span>
          <span className="text-xs text-muted-foreground">Cap rates, NOI, cash flow</span>
        </Link>
        <Link
          href="/properties"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-auto flex-col gap-2 p-4"
          )}
        >
          <Building2 className="h-6 w-6" />
          <span className="font-medium">My Properties</span>
          <span className="text-xs text-muted-foreground">Saved and tracked</span>
        </Link>
      </div>

      <Link href="/search" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
        Get started <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
