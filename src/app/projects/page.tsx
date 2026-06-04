"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Globe, RefreshCcw, Monitor, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import StartProjectButton from "@/components/StartProjectButton";

const ongoingProjects = [
  {
    icon: Globe,
    category: "WEBSITE DEVELOPMENT",
    title: "Transport & IT Company Websites",
    description: "Corporate websites for transport fleet owners in Navi Mumbai and IT companies across Maharashtra.",
    status: "Active",
    location: "NAVI MUMBAI",
    theme: "orange"
  },
  {
    icon: RefreshCcw,
    category: "SOCIAL MEDIA MARKETING",
    title: "School Social Media Growth",
    description: "Full-service social media marketing for educational institutions, content creation, posting schedules and audience growth.",
    status: "Active",
    location: "MAHARASHTRA",
    theme: "orange"
  },
  {
    icon: Monitor,
    category: "WEB APP DEVELOPMENT",
    title: "Automatic Challan & Invoice Generator",
    description: "Custom web app for automated GST-compliant challan and invoice generation with PDF export and payment tracking.",
    status: "Building",
    location: "CUSTOM WEB APP",
    theme: "orange"
  },
  {
    icon: MessageCircle,
    category: "UPCOMING PRODUCT · WHATSAPP AI",
    title: "WhatsApp Campaign Management AI Tool",
    description: "AI-powered WhatsApp campaign tool for bulk messaging, smart scheduling, automated replies and campaign analytics. Built for businesses of every size.",
    status: "In Development",
    location: "AI · WHATSAPP API",
    theme: "green"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header Banner */}
      <section className="relative py-24 overflow-hidden bg-transparent">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-foreground text-sm font-medium mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Featured <span className="text-primary italic">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-[1.6]">
              Building premium websites and smart business tools for modern companies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-8 bg-transparent relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                <span className="text-5xl font-serif font-bold text-primary mb-3">4+</span>
                <span className="text-foreground font-bold text-lg mb-1">Projects Delivered</span>
                <span className="text-muted-foreground text-sm">100% Client Satisfaction</span>
              </div>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                <span className="text-5xl font-serif font-bold text-primary mb-3">4</span>
                <span className="text-foreground font-bold text-lg mb-1">Specialized Solutions Built</span>
                <span className="text-muted-foreground text-sm">2 Business Websites • 2 CRM Tools</span>
              </div>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                <span className="text-5xl font-serif font-bold text-primary mb-3">Top</span>
                <span className="text-foreground font-bold text-lg mb-1">Trusted By</span>
                <span className="text-muted-foreground text-sm">Startups, Local & Growing Companies</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["Fast & Affordable Development", "Modern UI/UX Focus", "Startup-Friendly Pricing", "CRM Solutions Built"].map((badge, i) => (
                <span key={i} className="px-5 py-2.5 bg-secondary text-foreground text-sm font-semibold tracking-wide rounded-full border border-border/60 shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ongoing Projects Grid */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Ongoing Projects
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">
                Four active projects spanning transport, education, enterprise software and AI-powered tools across Maharashtra.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                  {/* Top Icon Banner */}
                  <div className={`h-32 flex items-center justify-center ${project.theme === 'orange' ? 'bg-[#FFF5EF]' : 'bg-[#EAF6ED]'}`}>
                    <project.icon className={`w-8 h-8 ${project.theme === 'orange' ? 'text-[#E86A1F]/50' : 'text-[#34A853]/50'}`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 pt-6 flex-1 flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-[1.6] mb-8 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className={`flex items-center gap-2 text-xs font-bold ${project.theme === 'orange' ? 'text-[#E86A1F]' : 'text-[#34A853]'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${project.theme === 'orange' ? 'bg-[#E86A1F]' : 'bg-[#34A853]'}`}></span>
                        {project.status}
                      </div>
                      <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-transparent border-t border-border/50">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 leading-[1.6]">
              Let's collaborate to build something extraordinary. Our team is ready to turn your vision into reality.
            </p>
            <StartProjectButton size="lg" className="bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl h-12 px-8 text-sm md:text-base font-semibold shadow-[0_4px_14px_rgba(232,106,31,0.25)] hover:-translate-y-0.5 transition-all">
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </StartProjectButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
