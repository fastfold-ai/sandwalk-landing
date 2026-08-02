"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Waves } from "@/components/backgrounds/waves";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#3d3424_0%,#1a120a_45%,#0f0c09_100%)]" />
        <Waves
          lineColor="rgb(225 179 76 / 0.32)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.004}
          waveAmpX={28}
          waveAmpY={14}
          xGap={12}
          yGap={36}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_0%,rgb(15_12_9_/_0.55)_70%,rgb(15_12_9_/_0.92)_100%)]" />
      </div>

      <Container className="flex min-h-[100svh] flex-col justify-center pb-20 pt-28 sm:pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <Image
              src="/brand/sandwalk-mark-cream.svg"
              alt=""
              width={44}
              height={44}
              priority
            />
            <span className="font-display text-3xl tracking-tight text-accent-soft sm:text-4xl">
              Sandwalk
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-foreground sm:text-6xl sm:leading-[1.02]">
            A thinking path for open science.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A self-hosted science agent for researchers — ask a question, attach
            files, install skills, and walk the path with CLI, web, or desktop.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#install">Get Sandwalk</Button>
            <Button
              href="https://docs.sandwalk.ai"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Read the docs
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
