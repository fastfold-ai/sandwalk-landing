import Image from "next/image";
import { Container } from "@/components/ui/container";

const links = [
  { href: "https://docs.sandwalk.ai", label: "Docs" },
  { href: "https://github.com/fastfold-ai/sandwalk", label: "GitHub" },
  { href: "https://github.com/fastfold-ai/sandwalk/releases", label: "Releases" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/sandwalk-mark-cream.svg"
              alt=""
              width={22}
              height={22}
            />
            <span className="font-display text-lg text-foreground">Sandwalk</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted">
            A thinking path for open science.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="text-xs text-muted/80">
          © {new Date().getFullYear()} Fastfold AI Labs. Apache-2.0.
        </p>
      </Container>
    </footer>
  );
}
