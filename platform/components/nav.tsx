"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold mr-6">
          <Building2 className="h-5 w-5" />
          <span>PromptedCRE</span>
        </Link>

        <p className="text-sm text-muted-foreground">Platform prototype</p>
      </div>
    </header>
  );
}
