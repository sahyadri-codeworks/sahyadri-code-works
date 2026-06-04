import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Target, Rocket, Calendar, Quote, Clock, Eye, Star, ShieldCheck, Zap, Users, MapPin, Code2, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";
import StartProjectButton from "@/components/StartProjectButton";





export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Our Story Header & Stats */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#1C120D]">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]"></div>
        
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">Our Story</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Rooted in the <br className="hidden md:block"/>
                <span className="text-[#E86A1F]">Sahyadri Spirit.</span>
              </h1>
              
              <p className="text-white/60 text-base md:text-lg leading-[1.6] max-w-xl">
                A team of engineering students from Maharashtra who decided that great technology should not be a luxury. We build real, reliable digital products for every business — not just the ones with deep pockets.
              </p>
            </FadeIn>

            {/* Right Content - Stats Grid */}
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#241710] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#2C1D14]">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                    4<span className="text-[#E86A1F]">+</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase">
                    Active Projects
                  </div>
                </div>

                <div className="bg-[#241710] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#2C1D14]">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                    6<span className="text-[#E86A1F]">+</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase">
                    Services
                  </div>
                </div>

                <div className="bg-[#241710] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#2C1D14]">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
                    15<span className="text-[#E86A1F]">+</span>
                  </div>
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase">
                    Websites Delivered
                  </div>
                </div>

                <div className="bg-[#241710] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col justify-center transition-colors hover:bg-[#2C1D14]">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 flex items-center">
                    <span className="text-[#E86A1F] mr-1">₹</span>Low
                  </div>
                  <div className="text-white/50 text-xs font-bold tracking-widest uppercase">
                    Honest Pricing
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How We Started */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">How We Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                From a shared idea <br className="hidden md:block"/> to real products.
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-base leading-[1.6]">
                <p>
                  Sahyadri Code Works was not born in a boardroom. It started with a simple observation — small businesses, schools, and transport operators in Maharashtra were either paying too much for basic digital tools, or going without them entirely.
                </p>
                <p>
                  We are a team of <strong className="text-foreground font-semibold">engineering students from Maharashtra</strong> who believed we could do something about that. We pooled our technical skills and got to work — building websites, web applications, CRM systems, and social media strategies for businesses that needed them most.
                </p>
                <p>
                  Our name comes from the <strong className="text-foreground font-semibold">Sahyadri (Western Ghats)</strong> — a mountain range that runs through the heart of Maharashtra. Steady, enduring, and deeply rooted. That is the standard we hold ourselves to on every project.
                </p>
              </div>
            </FadeIn>

            {/* Right Content - Quote Card */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-card border border-border rounded-3xl p-10 shadow-xl relative mt-8 lg:mt-0">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#E86A1F] rounded-t-3xl"></div>
                <Quote className="w-10 h-10 text-[#E86A1F] mb-6" fill="currentColor" stroke="none" />
                
                <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-10">
                  We wanted to prove that a lean team of engineers could deliver the same quality as a large agency — at a fraction of the cost. Every project since day one has been proof of that.
                </p>
                
                <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E86A1F] flex items-center justify-center text-white font-serif font-bold text-xl">
                      S
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Sahyadri Code Works Team</div>
                      <div className="text-sm text-muted-foreground">Navi Mumbai, Maharashtra</div>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF5EF] border border-[#F4DCCB] text-[#E86A1F] text-xs font-bold whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1F]"></span>
                    Currently taking new projects
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision and Values */}
      <section className="py-24 bg-secondary/50 relative z-10 border-y border-border/50">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">What Drives Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Mission, Vision <br/> and Values.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">
                Three principles that shape every decision we make, every project we take on, and every line of code we write.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5EF] flex items-center justify-center mb-8">
                  <Clock className="w-6 h-6 text-[#E86A1F]" />
                </div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3">MISSION</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">Make technology accessible</h3>
                <p className="text-muted-foreground text-base leading-[1.6]">
                  To deliver enterprise-grade digital solutions at a price that makes sense for every business in India — from a corner shop to a growing startup. Quality should never be gated by budget.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5EF] flex items-center justify-center mb-8">
                  <Eye className="w-6 h-6 text-[#E86A1F]" />
                </div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3">VISION</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">Maharashtra's go-to tech studio</h3>
                <p className="text-muted-foreground text-base leading-[1.6]">
                  To become the most trusted technology partner for businesses across Maharashtra and beyond — known for honest work, fair pricing, and products that actually perform.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-card border border-border rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#FFF5EF] flex items-center justify-center mb-8">
                  <Star className="w-6 h-6 text-[#E86A1F]" />
                </div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3">VALUES</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">Honest. Fast. Reliable.</h3>
                <p className="text-muted-foreground text-base leading-[1.6]">
                  No inflated quotes, no vanishing after delivery, no cutting corners on quality. We say what we will do and we do what we say — every single time.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Built different, <br/> by design.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">
                We are not a traditional agency. We are engineers who understand business — and that combination changes everything about how we work.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: "No Hidden Costs", desc: "Every quote we give is what you pay. We are transparent about pricing from the first conversation — there are no surprises at the end." },
              { icon: Zap, title: "We Move Fast", desc: "No layers of approvals. No weekly status meetings that replace actual work. When we commit to a deadline, we meet it." },
              { icon: Users, title: "We Stay After Launch", desc: "The project does not end at delivery. We maintain, update and improve your product because your long-term success matters to us." },
              { icon: MapPin, title: "Locally Grounded", desc: "Based in Navi Mumbai, we understand the Maharashtra market — GST requirements, regional business needs and what clients here actually value." },
              { icon: Code2, title: "Engineering Mindset", desc: "We do not just make things look good — we build them right. Performance, structure and scalability are part of every project by default." },
              { icon: Monitor, title: "Full Service, One Team", desc: "From your website to your social media to your back-office tools — one team handles it all. No coordinating between three different vendors." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-3xl p-8 flex gap-6 hover:border-[#E86A1F]/30 hover:shadow-md transition-all h-full group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FFF5EF] flex items-center justify-center group-hover:bg-[#E86A1F] transition-colors">
                    <feature.icon className="w-6 h-6 text-[#E86A1F] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl md:text-xl md:text-2xl font-serif font-bold text-foreground mb-3 leading-tight">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-[1.6]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Our Working Principles */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E86A1F]"></div>
                <span className="text-[#E86A1F] text-xs font-bold tracking-widest uppercase">How We Work</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                Our working principles.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#FFF5EF] border border-[#F4DCCB] rounded-3xl overflow-hidden shadow-sm">
              {[
                { num: "01", title: "Understand First", desc: "Before writing a single line of code, we spend time understanding your business, your users and what success actually looks like for you." },
                { num: "02", title: "Build Clean", desc: "We write code that is structured, documented and maintainable. Not just something that works today, but something you can build on tomorrow." },
                { num: "03", title: "Ship on Time", desc: "Deadlines are commitments. We plan carefully and communicate early if anything needs to shift — no last-minute surprises." },
                { num: "04", title: "Stay the Course", desc: "We are with you beyond launch. Updates, fixes, new features — your product is a living thing and we treat it that way." }
              ].map((principle, i) => (
                <div key={i} className={`p-8 lg:p-10 ${i !== 3 ? 'border-b lg:border-b-0 lg:border-r border-[#F4DCCB]' : ''} ${i === 1 ? 'md:border-r-0 lg:border-r' : ''} ${(i === 0 || i === 2) ? 'md:border-r' : ''} ${i < 2 ? 'md:border-b lg:border-b-0' : ''}`}>
                  <div className="text-[#E86A1F] text-sm font-bold font-mono tracking-wider mb-6">{principle.num}</div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight">{principle.title}</h3>
                  <p className="text-muted-foreground text-base leading-[1.6]">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-xl">
          <FadeIn>
            <div className="bg-gradient-to-r from-[#D95D1A] to-[#E86A1F] rounded-3xl p-10 md:p-16 text-white shadow-xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Ready to work with us?</h2>
                <p className="text-white/90 text-base md:text-lg mb-10 leading-[1.6]">
                  Tell us about your project and we will come back with a clear plan and honest pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <StartProjectButton className="inline-flex items-center justify-center bg-white text-[#1C120D] text-sm md:text-base font-semibold px-8 h-12 rounded-xl hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto">
                    Start a Project →
                  </StartProjectButton>
                  <Link href="/careers" className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white text-sm md:text-base font-semibold px-8 h-12 rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto">
                    Join the Team
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
