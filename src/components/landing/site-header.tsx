"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="inline-flex items-center justify-center"
          aria-label="Sandwalk home"
        >
          <Image
            src="/brand/sandwalk-mark-cream.svg"
            alt=""
            width={28}
            height={28}
            priority
          />
        </Link>
        <span className="inline-flex h-9 items-center rounded-full border border-border px-4 text-sm font-semibold tracking-tight text-muted">
          Coming soon
        </span>
      </Container>
    </header>
  );
}
