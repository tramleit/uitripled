"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EcommerceHighlightCard } from "@/components/components/cards/ecommerce-highlight-card";
import { BrowseFolder } from "@/components/sections/browse-folder";
import { ImageSliderCard } from "@/components/components/cards/image-slider-card";
import { ProjectsBlock } from "@/components/sections/projects-block";
import { CurrencyConverterCard } from "@/components/sections/currency-converter-card";
import { HoverExpandCard } from "@/components/components/cards/hover-expand";
import { BottomModal } from "@/components/modals/bottom-modal";
import { CashFlowChart } from "@/components/data/charts/cash-flow-chart";
import { AnimatedDialog } from "@/components/modals/animated-dialog";
import { AnimatedList } from "@/components/components/lists/animated-list";
import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu";
import { MultipleAccounts } from "@/components/components/account-switcher/multiple-accounts";
import { DetailTaskCard } from "@/components/components/cards/detail-task";
import { AIChatInterface } from "@/components/components/chat/ai-chat-interface";
import GradientOverlay from "@/components/gradiant-overlay";
import { GithubStarButton } from "@/components/github-star-button";
import { Star } from "lucide-react";

function StarButtonFallback() {
  return (
    <Button variant="outline" size="lg" className="min-w-[160px]" disabled>
      <Star aria-hidden="true" className="mr-2 h-4 w-4" />
      <span>...</span>
    </Button>
  );
}

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top centered actions */}
      <section className="bg-background/80">
        <div className="container relative mx-auto flex flex-col items-center gap-4 px-4 py-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
          >
            When Framer Motion meets shadcn/ui
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Browse, copy, and ship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-center text-sm text-foreground/70 md:max-w-md mx-auto"
          >
            You&apos;ll see more blocks than components here because we
            prioritize copy-ready pieces over complex builds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="/components">
                Browse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Suspense fallback={<StarButtonFallback />}>
              <GithubStarButton />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Components gallery in a bento-style grid */}
      <section className="container-fluid px-6 mx-auto">
        <div className="flex w-full flex-col gap-12 py-12">
          <AnimatedProfileMenu />

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Left / primary column */}
            <div className="flex flex-col gap-8 md:col-span-2">
              <CashFlowChart />
              <BrowseFolder />

              {/* Hover & dialog next to converter on larger screens, stacked on mobile */}
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-col gap-8 lg:w-1/2">
                  <HoverExpandCard />
                  <AnimatedDialog />
                </div>

                <div className="lg:w-1/2">
                  <CurrencyConverterCard />
                </div>
              </div>
              {/* <CashFlowChart /> */}
              <AIChatInterface />
              <DetailTaskCard />
            </div>

            {/* Right / secondary column */}
            <div className="flex flex-col gap-8">
              <MultipleAccounts />

              <ImageSliderCard />
              <BottomModal />
              <ProjectsBlock />
              <EcommerceHighlightCard />
              <AnimatedList />
            </div>
          </div>
        </div>
      </section>
      <GradientOverlay />
    </div>
  );
}
