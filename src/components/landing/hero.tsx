"use client";

import { motion } from "motion/react";
import { Waves } from "@/components/backgrounds/waves";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#3d3424_0%,#1a120a_45%,#0f0c09_100%)]" />
        <Waves
          lineColor="rgb(225 179 76 / 0.28)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.004}
          waveAmpX={28}
          waveAmpY={14}
          xGap={12}
          yGap={36}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,transparent_0%,rgb(15_12_9_/_0.45)_65%,rgb(15_12_9_/_0.9)_100%)]" />
      </div>

      <Container className="flex min-h-[100svh] flex-col justify-center pb-24 pt-28 sm:pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16"
        >
          <div className="min-w-0 shrink-0">
            <h1 className="font-display text-[clamp(4.5rem,14vw,9.5rem)] leading-[0.85] tracking-tight text-accent-soft [text-shadow:0_0_48px_rgb(225_179_76_/_0.35)]">
              Sandwalk
            </h1>
            <p className="mt-4 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
              Developer preview
            </p>
          </div>

          <div className="max-w-sm pb-1 lg:pb-4">
            <p className="text-[1.25rem] leading-[1.3] font-medium tracking-tight text-foreground sm:text-[1.4rem]">
              An agent harness for ambitious work.
            </p>

            <div className="mt-8">
              <button
                type="button"
                disabled
                className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full bg-accent/70 px-5 text-sm font-semibold tracking-tight text-[#1a120a] opacity-90"
              >
                Coming soon
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
