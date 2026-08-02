"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function EarlyAccess() {
  return (
    <Section id="early" className="border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Come walk with us
          </h2>
          <p className="mt-3 text-muted">
            Sandwalk is early and open source. Star the repo, open an issue, or
            join the conversation — we are building in public for researchers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="https://github.com/fastfold-ai/sandwalk"
              target="_blank"
              rel="noreferrer"
            >
              Star on GitHub
            </Button>
            <Button
              href="https://docs.sandwalk.ai"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Browse docs
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
