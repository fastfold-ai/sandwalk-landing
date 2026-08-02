"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Showcase() {
  return (
    <Section id="product" className="border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Chat, viewers, skills, terminal
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Structures, plots, and artifacts beside the conversation — the same
            session you run from the CLI.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_80px_-40px_rgb(0_0_0_/_0.8)]">
            <Image
              src="/showcase/showcase-dark.png"
              alt="Sandwalk dashboard with chat, structure viewers, skills, and terminal"
              width={1640}
              height={1024}
              className="h-auto w-full"
              priority={false}
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
