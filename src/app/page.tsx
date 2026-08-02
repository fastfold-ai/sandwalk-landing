import { EarlyAccess } from "@/components/landing/early-access";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Install } from "@/components/landing/install";
import { Showcase } from "@/components/landing/showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Install />
      <Features />
      <Showcase />
      <EarlyAccess />
      <Faq />
    </>
  );
}
