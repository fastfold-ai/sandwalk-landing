"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    q: "What is Sandwalk?",
    a: "An open, self-hosted agent harness you run and direct. Use it for hard scientific research, or for any ambitious work in any field. CLI, web dashboard, and macOS desktop share the same sessions.",
  },
  {
    q: "Do you store my data?",
    a: "Sandwalk runs on your machine by default. Your workspace, keys, and history stay local unless you choose a cloud sandbox for heavy compute.",
  },
  {
    q: "Which models can I use?",
    a: "Anthropic, OpenAI, Gemini, xAI, Kimi, NVIDIA, OpenCode Zen, DeepSeek, MiniMax, Mistral, Qwen, Together, plus local OpenAI-compatible endpoints like Ollama and LM Studio.",
  },
  {
    q: "Is it free?",
    a: "The software is open source (Apache-2.0). You bring your own model API keys; optional cloud GPUs are billed by those providers.",
  },
] as const;

export function Faq() {
  return (
    <Section id="faq" className="border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-border pt-5">
                <dt className="font-display text-lg text-foreground">{item.q}</dt>
                <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </Section>
  );
}
