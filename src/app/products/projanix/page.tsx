import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ProjanixPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[120px] bg-[#FAFAFA]">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <Link href="/products" className="inline-flex items-center text-[#E86A1F] font-semibold text-sm hover:underline mb-12 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Products
            </Link>
            
            <span className="text-[11px] font-bold tracking-widest text-[#E86A1F] uppercase mb-6 block">
              — FLAGSHIP PROJECT MANAGEMENT HUB
            </span>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-black/5 overflow-hidden p-2">
                <Image src="/Projanix.png" alt="Projanix Logo" width={120} height={120} className="w-full h-full object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-foreground tracking-tight">
                Automate Sprints with <span className="text-[#D95D1A]">Projanix</span>
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.6] max-w-3xl mb-10">
              Projanix is the AI-native workspace built by Sahyadri Code Works specifically for software engineering and product marketing teams. It optimizes resource allocation, flags operational risks, and integrates direct client hand-offs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://projanix.online/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "w-full sm:w-auto bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all shadow-sm")}>
                Visit Projanix Website
              </a>
              <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto border-border text-foreground hover:bg-secondary rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all")}>
                Request Sandbox Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 relative">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Core Capabilities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI-Powered Task Breakdown",
                  desc: "Type a single, high-level project goal (e.g., \"Build a React-based billing application\"), and Projanix will instantly decompose it into detailed tasks, complete with logical dependencies, tech stack suggestions, and time estimations."
                },
                {
                  title: "Real-time Project Risk Engine",
                  desc: "Using historical velocity metrics, Projanix scans active milestone queues to identify potential delays before they impact delivery. It automatically raises risk alerts and proposes rescheduling models."
                },
                {
                  title: "Smart Skill Matching",
                  desc: "Matches tasks to developers based on past velocity and domain expertise. Ensure your database specialists are working on query optimizations, while front-end devs focus on pixel-perfect layouts."
                },
                {
                  title: "Unified Client Portal",
                  desc: "Give your clients a custom, secure dashboard where they can see progress logs, view milestones, submit revisions, and approve invoice updates directly—no more endless email chains."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] group">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5EF] flex items-center justify-center mb-6">
                    <Sparkles className="w-5 h-5 text-[#E86A1F]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="py-20 relative">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn direction="up">
            <div className="bg-[#2A1A12] rounded-[32px] p-12 md:p-16 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Projanix Live</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Launch your AI-native workspace on our official portal. Manage your projects, track sprints, and coordinate team members instantly.
              </p>
              <a href="https://projanix.online/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl px-10 h-14 text-base font-semibold shadow-sm transition-all hover:scale-105")}>
                Visit projanix.online
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 mb-20 relative">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl flex flex-col gap-4">
              {[
                {
                  q: "Is our project code shared with public AI models?",
                  a: "No, Projanix uses dedicated private APIs and isolated context boundaries. Your repository blueprints, task logs, and internal communications never leave your isolated tenant workspace, and are never used to train public LLM models."
                },
                {
                  q: "Can we migrate our data from Jira or Trello?",
                  a: "Yes. Projanix supports one-click migration for active sprints, history logs, comments, and task owners directly from CSV, Jira API, and Trello boards."
                },
                {
                  q: "How does the Client Portal work?",
                  a: "You can create customized client login URLs. Clients see a simplified, elegant version of active milestones, logs, and billing. They cannot see internal developer discussions or raw task estimates unless you explicitly enable them."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/10 hover:-translate-y-1">
                  <h4 className="text-base md:text-lg font-bold text-foreground flex items-start gap-4 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E86A1F] shrink-0 mt-0.5" />
                    {faq.q}
                  </h4>
                  <p className="text-muted-foreground text-[15px] leading-relaxed pl-9">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
}
