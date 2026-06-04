import Link from "next/link";
import { ArrowRight, Code2, Globe, LayoutDashboard, Search, Shield, Smartphone, CheckCircle2, ChevronRight, Star, BarChart3, TrendingUp, Users, Folder, Play, ShieldCheck, Code, LineChart } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import StartProjectButton from "@/components/StartProjectButton";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive, and SEO-optimized websites built for performance and conversion.",
  },
  {
    icon: Smartphone,
    title: "Web App Development",
    description: "Scalable and secure web applications tailored to your business needs using modern stacks.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Development",
    description: "Custom Customer Relationship Management systems to streamline your operations.",
  },
  {
    icon: Search,
    title: "Invoice & Challan Tools",
    description: "Automated billing and invoicing solutions designed for seamless financial management.",
  },
  {
    icon: Smartphone,
    title: "Social Media Management",
    description: "Data-driven social media strategies to grow your brand and engage your audience.",
  },
  {
    icon: Shield,
    title: "Bug Hunting",
    description: "Comprehensive security testing to identify and eliminate vulnerabilities in your systems.",
  },
];

const reasons = [
  "Fast Delivery",
  "Modern UI/UX",
  "Secure Development",
  "SEO Optimized",
  "Scalable Systems",
  "Agile Workflow",
  "Affordable Pricing",
  "24/7 Support",
];

const technologies = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "shadcn/ui", "Figma"
];

const projects = [
  {
    title: "Enterprise CRM Platform",
    description: "A comprehensive CRM solution for a growing sales team.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "FinTech Dashboard",
    description: "Real-time financial analytics and reporting dashboard.",
    tech: ["React", "Recharts", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Web App",
    description: "High-performance online store with seamless checkout.",
    tech: ["Next.js", "Stripe", "Supabase"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E86A1F]/10 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFF5EF] border border-[#F4DCCB] text-[#E86A1F] text-xs font-mono mb-8 shadow-sm">
                  <span className="text-muted-foreground/50">$</span> npx sahyadri-code-works --launch
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-foreground mb-6 leading-[1.1] max-w-[600px]">
                  Enterprise-Grade<br />
                  Software,<br />
                  Crafted for <span className="text-[#E86A1F]">Modern<br />
                    Businesses.</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground mb-10 leading-[1.6] max-w-xl">
                  We design and build custom web applications, CRMs, and billing tools to digitize your business workflows and maximize growth.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <Link href="/products" className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all shadow-sm")}>
                  View Our Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <StartProjectButton size="lg" variant="outline" className="w-full sm:w-auto border border-border bg-transparent text-foreground hover:bg-secondary rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all">
                  Start A Project
                </StartProjectButton>
              </FadeIn>
            </div>

            {/* Right Content - Code Editor Mockup */}
            <FadeIn direction="left" delay={0.4} className="relative hidden lg:block">
              <div className="relative w-full max-w-2xl mx-auto right-0 shadow-2xl rounded-xl overflow-hidden bg-[#181312] border border-[#2A2320]">
                {/* Editor Header */}
                <div className="bg-[#211915] px-4 py-3 flex items-center border-b border-[#2A2320]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex-1 text-center text-xs font-mono text-[#8B949E]">dashboard.sahyadri.works</div>
                </div>

                <div className="flex h-[450px]">
                  {/* Sidebar */}
                  <div className="w-48 bg-[#181312] border-r border-[#2A2320] p-4 flex flex-col gap-1 overflow-hidden">
                    <div className="text-[10px] font-bold text-[#E86A1F] uppercase tracking-wider mb-2">Workspace</div>
                    <div className="flex items-center gap-2 text-sm text-[#E2D5CD]"><Folder className="w-4 h-4 text-[#FFBD2E]" /> src</div>
                    <div className="flex items-center gap-2 text-sm text-[#8B949E] ml-4"><Folder className="w-4 h-4 text-[#8B949E]" /> components</div>
                    <div className="flex items-center gap-2 text-sm text-[#E86A1F] ml-6"><Code2 className="w-4 h-4 text-[#E86A1F]" /> Navbar.jsx</div>
                    <div className="flex items-center gap-2 text-sm text-[#8B949E] ml-4 mt-1"><Folder className="w-4 h-4 text-[#8B949E]" /> pages</div>
                    <div className="flex items-center gap-2 text-sm text-[#E2D5CD] ml-6 bg-[#2A2320] px-2 py-1 rounded"><Code2 className="w-4 h-4 text-white" /> Home.jsx</div>
                    <div className="flex items-center gap-2 text-sm text-[#8B949E] ml-4 mt-1"><Code2 className="w-4 h-4 text-[#8B949E]" /> App.jsx</div>
                    <div className="flex items-center gap-2 text-sm text-[#8B949E] ml-4 mt-1"><Code2 className="w-4 h-4 text-[#8B949E]" /> index.css</div>
                  </div>

                  {/* Code Area */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex border-b border-[#2A2320] bg-[#181312]">
                      <div className="px-4 py-2 border-t-2 border-[#E86A1F] bg-[#1B1411] text-xs font-bold text-white flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#E86A1F]" /> Home.jsx
                      </div>
                      <div className="px-4 py-2 text-xs font-bold text-[#8B949E] flex items-center gap-2">
                        App.jsx
                      </div>
                    </div>
                    <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-hidden bg-[#181312] text-[#E2D5CD]">
                      <div><span className="text-[#FF7B72]">import</span> <span className="text-white">React</span> <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'react'</span>;</div>
                      <div className="text-[#8B949E] mt-2">// Click values to configure live deployments:</div>
                      <div><span className="text-[#FF7B72]">const</span> <span className="text-[#D2A8FF]">SahyadriApp</span> <span className="text-[#FF7B72]">=</span> () <span className="text-[#FF7B72]">=&gt;</span> {"{"}</div>
                      <div className="ml-4"><span className="text-[#FF7B72]">const</span> devTeam = <span className="text-[#7EE787] underline decoration-dashed underline-offset-4 cursor-pointer">"Expert Engineers"</span>;</div>
                      <div className="ml-4"><span className="text-[#FF7B72]">const</span> scale = <span className="text-[#79C0FF] underline decoration-dashed underline-offset-4 cursor-pointer">50</span>;</div>
                      <div className="ml-4 mt-2"><span className="text-[#FF7B72]">return</span> (</div>
                      <div className="ml-8"><span className="text-[#7EE787]">&lt;CloudServer</span> <span className="text-[#79C0FF]">deploy</span>=<span className="text-[#A5D6FF]">"always-on"</span><span className="text-[#7EE787]">&gt;</span></div>
                      <div className="ml-12"><span className="text-[#7EE787]">&lt;WebApp</span> <span className="text-[#79C0FF]">metrics</span>={"{"}scale{"}"} <span className="text-[#79C0FF]">team</span>={"{"}devTeam{"}"}</div>
                      <div className="ml-12"><span className="text-[#7EE787]">/&gt;</span></div>
                      <div className="ml-8"><span className="text-[#7EE787]">&lt;/CloudServer&gt;</span></div>
                      <div className="ml-4">);</div>
                      <div>{"}"};</div>
                    </div>

                    {/* Bottom Status / Comments Area */}
                    <div className="p-4 border-t border-[#2A2320] bg-[#181312] text-xs font-mono">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-[#27C93F] relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27C93F] opacity-75"></span></span>
                          <span className="text-[#8B949E]">service_status:</span> <span className="text-white font-bold">ONLINE</span>
                        </div>
                        <Button className="bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded px-4 h-8 text-xs font-bold transition-all shadow-[0_0_15px_rgba(232,106,31,0.4)] flex items-center gap-1.5">
                          <Play className="w-3 h-3 fill-current" /> RUN PROGRAM
                        </Button>
                      </div>
                      <div className="text-[#8B949E] leading-[1.6]">
                        // Welcome to Sahyadri Interactive Sandbox<br />
                        // Click the underlined green/orange variable tokens to customize.<br />
                        // Then click 'RUN PROGRAM' to deploy and see output logs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Marquee Loop Section */}
      <section className="py-8 md:py-10 bg-[#FFF5EF] border-y border-[#F4DCCB] overflow-hidden flex whitespace-nowrap relative z-10">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                "Website Development", "Web App Development", "CRM Systems",
                "Invoice & Challan Tools", "Social Media Management", "Bug Hunting & QA",
                "Maharashtra, India", "WhatsApp AI Campaigns"
              ].map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-[#B88663] text-sm md:text-base font-semibold tracking-widest uppercase font-mono px-8">{item}</span>
                  <span className="w-2 h-2 rounded-full bg-[#E86A1F]"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary relative">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-2xl">
          <FadeIn>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">Our Services</h2>
              <p className="text-sm md:text-base md:text-base lg:text-base md:text-lg text-muted-foreground leading-[1.5]">
                Premium digital solutions tailored to accelerate your business growth and establish market dominance.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg rounded-[24px] overflow-hidden">
                  <CardContent className="p-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors border border-border">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl md:text-xl md:text-2xl lg:text-[34px] font-serif font-bold text-foreground mb-3 leading-tight">{service.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-[1.5] mb-6 flex-1">
                      {service.description}
                    </p>
                    <Link href="/services" className="inline-flex items-center text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                      Learn More <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-24 relative overflow-hidden bg-transparent">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -z-0 pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1 relative hidden md:block">
              <div className="aspect-[4/3] rounded-[24px] border border-border bg-card p-2 shadow-xl relative overflow-hidden">
                <div className="w-full h-full rounded-[16px] overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  {/* Gradient overlay for bottom text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Bottom overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase mb-3">Flagship Product</p>
                    <div className="flex items-center gap-4">
                      <div className="w-[52px] h-[52px] bg-white rounded-xl flex flex-col items-center justify-center p-1 shadow-md shrink-0">
                        <span className="text-blue-600 font-bold text-xl leading-none">P</span>
                        <span className="text-[9px] font-bold text-gray-800 leading-none mt-1">Projanix</span>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-serif font-bold">Projanix AI Project Hub</h3>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase">Product Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Meet Projanix AI
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 leading-[1.6]">
                Built natively by Sahyadri Code Works, Projanix is a comprehensive project management workspace engineered for dev and marketing departments. It utilizes AI models to predict delays, structure tasks, and streamline delivery metrics.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E86A1F]" />
                    <span className="text-foreground font-bold">AI Task Breakdown</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Decompose goals into task roadmaps.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E86A1F]" />
                    <span className="text-foreground font-bold">Risk Evaluation</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">Predict milestone delays in real-time.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/products/projanix" className={cn(buttonVariants({ variant: "default" }), "w-full sm:w-auto bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all shadow-[0_4px_14px_rgba(232,106,31,0.3)]")}>
                  Learn About Projanix
                </Link>
                <Link href="/products" className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto bg-transparent border border-border text-foreground hover:bg-secondary transition-all rounded-xl px-8 h-12 text-sm md:text-base font-semibold")}>
                  All Products
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden bg-transparent">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E86A1F]/10 blur-[120px] rounded-full -z-0 pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <FadeIn direction="right" className="order-1">
              <div className="mb-4">
                <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight max-w-md">
                Steady & Committed Like The Western Ghats
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-10 leading-[1.6]">
                Steady, enduring, and committed. Like the Sahyadri mountains, we build robust software that stands the test of time.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0 border border-[#F4DCCB]">
                    <ShieldCheck className="w-5 h-5 text-[#E86A1F]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">Deep Local Integration</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-[1.6]">
                      Based in Maharashtra, we understand local market workflows, compliance, and user expectations perfectly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0 border border-[#F4DCCB]">
                    <Code className="w-5 h-5 text-[#E86A1F]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">Modern Tech Stack</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-[1.6]">
                      Leveraging React, Node, and secure cloud environments to ensure your systems are fast and future-proof.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF5EF] flex items-center justify-center shrink-0 border border-[#F4DCCB]">
                    <LineChart className="w-5 h-5 text-[#E86A1F]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">Transparent Costing</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-[1.6]">
                      No hidden fees or bloated monthly subscriptions. You pay for what you need with clear milestones.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="order-2 relative hidden md:block">
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl relative group border border-border">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" alt="Sahyadri Mountains" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Gradient overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Bottom Quote */}
                <div className="absolute bottom-6 left-8 right-8">
                  <p className="text-white/90 text-sm md:text-base italic font-serif leading-[1.6]">
                    "We named ourselves after the Sahyadri mountains. Steady, enduring, and committed."
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#0C0806]">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full -z-0 pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-[64px] lg:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Let’s Build Something <br className="hidden md:block" /> <span className="italic text-white/10 tracking-widest block mt-2">Extraordinary</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-[1.6] max-w-3xl mx-auto mb-12">
              Ready to elevate your brand's digital presence? Partner with us to craft scalable, premium solutions tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <StartProjectButton size="lg" className="bg-[#1A1310] text-white hover:bg-[#2C211A] border border-white/5 rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all shadow-[0_0_40px_rgba(232,106,31,0.25)]">
                Start a Conversation
              </StartProjectButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden bg-[#F5EEE6]">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Our Engineering Process
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">
              A structured, transparent methodology for turning ideas into production-ready enterprise software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: "[STAGE_01]",
                num: "01",
                title: "1. Strategy & Scope",
                desc: "We define precise technical specifications and project requirements upfront."
              },
              {
                stage: "[STAGE_02]",
                num: "02",
                title: "2. User-First Design",
                desc: "Interactive prototypes and elegant user journeys built to match your brand."
              },
              {
                stage: "[STAGE_03]",
                num: "03",
                title: "3. Clean Development",
                desc: "Writing modular, test-driven code with regular milestone updates."
              },
              {
                stage: "[STAGE_04]",
                num: "04",
                title: "4. Deploy & Maintain",
                desc: "Zero-downtime deployment and long-term tech maintenance and updates."
              }
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-[24px] p-8 shadow-sm border border-black/5 relative overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="absolute top-2 right-4 text-[100px] font-black text-black/[0.03] select-none pointer-events-none tracking-tighter leading-none">
                    {item.num}
                  </div>
                  <div className="relative z-10">
                    <div className="text-[11px] font-mono font-bold text-[#E86A1F] mb-4 tracking-widest">{item.stage}</div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase mb-4 block">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.6] mb-8">
              Real feedback from businesses we have helped digitize and grow.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF5EF] border border-[#F4DCCB] text-sm font-semibold text-foreground shadow-sm">
              <div className="flex text-[#F59E0B] gap-0.5">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              Excellent 4.9/5 stars based on Google Business reviews
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {[
              {
                text: "I truly appreciate the quality work delivered by the team. They were highly professional, responsive, and supportive throughout the process. The entire experience was smooth and well-guided.",
                name: "Vikram Daware",
                role: "VSafe World Pvt Ltd",
                initial: "V"
              },
              {
                text: "We worked with them to rebuild our student portal. The web application is extremely fast on mobile, and the language toggle makes it easy for parents to navigate.",
                name: "Amit Shinde",
                role: "School Administrator",
                initial: "A"
              },
              {
                text: "I really appreciated the quality of their work and their strong attention to detail. They were highly responsive and available even during extended hours, which made the whole process smooth and stress-free. They were also very accommodating with revisions, handling multiple changes whenever needed without hesitation. Overall, their skills and efficiency helped get the website completed within a short timeframe, and I'm very satisfied with the final result.",
                name: "Zuber Yousuf",
                role: "RingTech Global",
                initial: "Z"
              },
              {
                text: "Their custom CRM simplified our lead pipeline tracking without the expensive subscriptions. The frontend is responsive, clean, and perfectly structured.",
                name: "Neha Deshmukh",
                role: "Co-founder, GreenRoots Agritech",
                initial: "N"
              },
              {
                text: "Sahyadri Code Works developed our international export trading platform. The performance optimization is excellent, and their backend architecture makes lead handling smooth and secure. Highly professional.",
                name: "Rajesh Mehta",
                role: "Kridaya Global",
                initial: "R"
              }
            ].map((review, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1} className="h-full">
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-[#F59E0B] gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-[11px] font-bold text-muted-foreground font-mono uppercase tracking-wider">Google Review</span>
                  </div>
                  <p className={`text-muted-foreground text-[15px] italic leading-relaxed flex-grow ${review.name ? 'mb-8' : ''}`}>
                    "{review.text}"
                  </p>
                  {review.name && (
                    <div className="flex items-center gap-4 pt-6 border-t border-border/50 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#FFF5EF] text-[#E86A1F] flex items-center justify-center font-bold text-lg shrink-0">
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
