"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const commands = [
  {
    id: "curl",
    label: "curl",
    command: "curl -fsSL https://sandwalk.sh/install | bash",
  },
  {
    id: "curl-pre",
    label: "pre-release",
    command: "curl -fsSL https://sandwalk.sh/install | bash -s -- --pre",
  },
  {
    id: "source",
    label: "Source",
    command:
      "git clone https://github.com/fastfold-ai/sandwalk.git && cd sandwalk && pnpm install",
  },
  {
    id: "mac",
    label: "macOS app",
    command:
      'INSTALL=1 pnpm --filter @sandwalk/agent-local-web package:dmg && open ~/Applications/Sandwalk.app',
  },
] as const;

export function Install() {
  const [active, setActive] = useState<(typeof commands)[number]["id"]>("curl");
  const [copied, setCopied] = useState(false);
  const current = commands.find((item) => item.id === active) ?? commands[0];

  async function copy() {
    await navigator.clipboard.writeText(current.command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Section id="install" className="border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Install
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Install the Sandwalk CLI with a one-liner, or clone the monorepo for
            the desktop app. The curl installer tracks the latest GitHub
            Release (use pre-release while testing).
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {commands.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "bg-accent text-[#1a120a]"
                    : "bg-surface text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="font-mono text-xs text-muted">{current.label}</span>
              <button
                type="button"
                onClick={() => void copy()}
                className="text-xs font-medium text-accent-soft hover:text-accent"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-accent-soft sm:text-sm">
              <code>{current.command}</code>
            </pre>
          </div>

          <p className="mt-4 text-sm text-muted">
            Desktop builds:{" "}
            <a
              href="https://github.com/fastfold-ai/sandwalk/releases"
              className="text-accent-soft underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Releases
            </a>
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
