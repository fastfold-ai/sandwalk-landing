"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  {
    title: "CLI ↔ Mac ↔ iOS",
    body: "One agent session across terminal, desktop, and phone. Same workspace and history.",
  },
  {
    title: "Remote sessions",
    body: "Leave the agent running on a Mac Mini at home or a university cluster; control it from wherever you are.",
  },
  {
    title: "Skills & MCPs you can grow",
    body: "Install from GitHub or skills.sh, connect remote MCPs, and create new skills with the agent.",
  },
  {
    title: "Local first, cloud when needed",
    body: "Run on your machine by default; send heavy jobs to Modal, Lambda, or Fastfold Cloud GPUs.",
  },
  {
    title: "Serious tools, any domain",
    body: "Ships with a deep science toolkit (chemistry, targets, structures, omics, clinical, literature) and grows with whatever you install.",
  },
  {
    title: "Plan, then build",
    body: "Draft plans with todos and Mermaid flowcharts, then flip to Build when you are ready.",
  },
  {
    title: "Human-in-the-loop",
    body: "Skill installs and sensitive actions pause for Approve / Edit / Reject. You stay in control.",
  },
] as const;

export function Features() {
  return (
    <Section id="features" className="border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            What you get
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Agents that work 24/7 on your compute or in the cloud. Open,
            self-hosted, directed by you.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li key={feature.title} className="border-t border-border pt-5">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {feature.body}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </Section>
  );
}
