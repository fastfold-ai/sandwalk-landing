import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sandwalk home">
          <Image
            src="/brand/sandwalk-mark-cream.svg"
            alt=""
            width={28}
            height={28}
            priority
          />
          <span className="font-display text-lg tracking-tight text-foreground">
            Sandwalk
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Button href="#install" variant="ghost" className="hidden h-9 px-3 sm:inline-flex">
            Install
          </Button>
          <Button
            href="https://docs.sandwalk.ai"
            variant="ghost"
            className="h-9 px-3"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </Button>
          <Button
            href="https://github.com/fastfold-ai/sandwalk"
            variant="secondary"
            className="h-9 px-4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </nav>
      </Container>
    </header>
  );
}
