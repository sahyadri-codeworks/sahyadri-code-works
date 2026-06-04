"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, MapPin, Clock, ArrowRight, Layers, Users, Mail, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useModal } from "@/components/providers/ModalProvider";



const jobs = [
  { title: "Senior React Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Design", loc: "Remote", type: "Full-time" },
  { title: "Node.js Backend Developer", dept: "Engineering", loc: "Hybrid", type: "Full-time" },
];

const internships = [
  { title: "Backend Developer Intern", dept: "Engineering", loc: "Remote", duration: "3-6 Months" },
  { title: "Full Stack Developer Intern", dept: "Engineering", loc: "Remote", duration: "3-6 Months" },
  { title: "UI/UX Designer Intern", dept: "Design", loc: "Remote", duration: "3-6 Months" },
  { title: "CRM Development Intern", dept: "Engineering", loc: "Remote", duration: "3-6 Months" },
];

export default function CareersPage() {
  const { openInternship } = useModal();

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">Build the <span className="text-primary italic">Future</span></h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-[1.6]">
              Join a team of visionaries and creators. We are always looking for passionate individuals to help us build exceptional digital products with an editorial touch.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-[#D95D1A] text-white rounded-xl shadow-sm hover:-translate-y-0.5 transition-all h-12 px-8 text-sm md:text-base font-semibold">
              View Open Roles
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-2xl">
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-primary"></div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Why Join Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 max-w-2xl leading-tight">
                A team that builds <br className="hidden md:block"/> and learns together.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-[1.6]">
                We are not a big corporation. We are a lean, driven team that moves fast, ships real products, and actually cares about the work we do.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="h-full">
              <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full rounded-[24px] shadow-sm hover:shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">Real Projects</h3>
                  <p className="text-muted-foreground text-base leading-[1.6]">
                    Work on live products used by real businesses across Maharashtra. No dummy assignments.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2} className="h-full">
              <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full rounded-[24px] shadow-sm hover:shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">Grow Fast</h3>
                  <p className="text-muted-foreground text-base leading-[1.6]">
                    In a small team you own more, learn faster, and make a bigger impact from day one.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3} className="h-full">
              <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full rounded-[24px] shadow-sm hover:shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">Rooted in MH</h3>
                  <p className="text-muted-foreground text-base leading-[1.6]">
                    We are proud to be Maharashtra-first. Building technology for our own region and beyond.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-[2px] bg-primary"></div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Open Positions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">Current Openings</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-[1.6]">
                We review applications on a rolling basis. Even if nothing matches right now, we encourage you to send your resume.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="bg-card border-border shadow-sm rounded-3xl overflow-hidden pt-1 border-t-0">
              <div className="h-2 bg-gradient-to-r from-primary to-[#D95D1A] w-full"></div>
              <CardContent className="p-12 md:p-16 flex flex-col items-center text-center border-x border-b border-border rounded-b-3xl">
                
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <Triangle className="w-8 h-8 text-primary stroke-[2.5]" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">No Current Openings</h3>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-[1.6] mb-10">
                  We don't have any open positions right now. But we are always interested in meeting talented people. Send us your resume and we will reach out when a role comes up.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl">
                  {["Web Development", "UI / UX Design", "Social Media", "Backend Dev", "QA Testing", "AI / ML"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button onClick={() => window.location.href = 'mailto:info@sahyadricode.online'} size="lg" className="bg-gradient-to-r from-primary to-[#D95D1A] hover:opacity-90 text-white rounded-xl h-12 px-8 text-sm md:text-base font-semibold shadow-[0_8px_20px_rgba(232,106,31,0.25)] hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                    <Mail className="mr-2 w-5 h-5" />
                    Send Your Resume
                  </Button>
                  <Link href="/contact" className="inline-flex items-center justify-center border border-border bg-card text-foreground hover:bg-secondary rounded-xl h-12 px-8 text-sm md:text-base font-semibold shadow-sm hover:border-primary/50 transition-all w-full sm:w-auto">
                    Contact Us
                  </Link>
                </div>
                
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <Card className="bg-secondary border-border shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 leading-tight">Interested in Joining Us?</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">
                    Send us your resume and we'll reach out when a position opens up.
                  </p>
                </div>
                <Button onClick={() => window.location.href = 'mailto:info@sahyadricode.online'} size="lg" className="shrink-0 bg-[#1C120D] hover:bg-[#1C120D]/90 text-white rounded-xl h-12 px-8 text-sm md:text-base font-semibold shadow-sm transition-all w-full md:w-auto">
                  <Mail className="mr-2 w-5 h-5" />
                  Mail Us Your Resume
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Internships */}
      <section className="py-24 bg-secondary border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">Internships</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">Kickstart your career with hands-on editorial experience.</p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {internships.map((job, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="bg-card border-border hover:border-primary/30 transition-colors group cursor-pointer rounded-[20px] shadow-sm hover:shadow-md">
                  <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5"/> {job.dept}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/> {job.loc}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> {job.duration}</span>
                      </div>
                    </div>
                    <button 
                      onClick={openInternship} 
                      className="inline-flex items-center justify-center border border-border bg-secondary text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all rounded-xl h-12 px-6 text-sm md:text-base font-semibold shadow-none shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                    >
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
