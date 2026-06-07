import { FadeIn } from "@/components/animations/FadeIn";
import { Check, ArrowRight, Code2, Layout, Database, Shield, MonitorSmartphone, Server, Globe, LayoutDashboard, Search, Smartphone, Bot, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StartProjectButton from "@/components/StartProjectButton";

const servicesList = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: Globe,
    description: "Custom, responsive, and SEO-optimized websites built for performance and conversion.",
    features: ["Custom UI/UX Design", "SEO Optimization", "CMS Integration", "Performance Tuning"],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "web-apps",
    title: "Web App Development",
    icon: Code2,
    description: "Scalable and secure web applications tailored to your business needs using modern stacks.",
    features: ["Authentication & Authz", "API Development", "Database Architecture", "Cloud Deployment"],
    tech: ["TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "crm",
    title: "CRM Development",
    icon: LayoutDashboard,
    description: "Custom Customer Relationship Management systems to streamline your operations.",
    features: ["Lead Tracking", "Automated Workflows", "Custom Analytics", "Third-party Integrations"],
    tech: ["React", "Express", "MongoDB"],
  },
  {
    id: "invoice-tools",
    title: "Business Operations Tools",
    icon: Search,
    description: "Automated billing and invoicing solutions designed for seamless financial management.",
    features: ["Automated Invoicing", "Tax Calculation", "Payment Tracking", "PDF Generation"],
    tech: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    icon: Smartphone,
    description: "Data-driven social media strategies to grow your brand and engage your audience.",
    features: ["Content Strategy", "Community Management", "Performance Analytics", "Campaign Running"],
    tech: ["Figma", "Canva", "Meta Business Suite"],
  },
  {
    id: "bug-hunting",
    title: "Bug Hunting",
    icon: Shield,
    description: "Comprehensive security testing to identify and eliminate vulnerabilities in your systems.",
    features: ["Penetration Testing", "Vulnerability Assessment", "Code Review", "Security Reports"],
    tech: ["Burp Suite", "OWASP ZAP", "Nmap"],
  },
  {
    id: "ai-automation",
    title: "AI and Automation",
    icon: Bot,
    description: "Intelligent automation and AI-driven solutions to optimize your business processes and reduce manual workloads.",
    features: ["Process Automation", "Custom AI Models", "Chatbot Integration", "Workflow Optimization"],
    tech: ["Python", "OpenAI", "LangChain"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive, engaging, and aesthetically pleasing user interfaces that offer seamless digital experiences.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    tech: ["Figma", "Adobe XD", "Framer"],
  },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard website takes 2-4 weeks, while complex web applications can take 2-4 months depending on the requirements." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer flexible maintenance and support plans to keep your digital products secure and up-to-date." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We specialize in revamping outdated websites into modern, high-converting platforms." },
  { q: "What is your development process?", a: "We follow an agile methodology: Discovery, Design, Development, Testing, Deployment, and Support." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header Banner */}
      <section className="relative py-24 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">Our <span className="text-primary italic">Services</span></h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-[1.6]">
              End-to-end digital solutions designed to accelerate your growth and establish your technical dominance with premium aesthetics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container px-4 md:px-8 mx-auto max-w-screen-2xl">
          <div className="flex flex-col gap-12">
            {servicesList.map((service, i) => (
              <FadeIn key={service.id} direction={i % 2 === 0 ? "left" : "right"}>
                <Card className="bg-card border-border overflow-hidden group rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-5">
                    <div className="p-10 md:col-span-3 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-5 border border-border">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-lg md:text-xl md:text-xl md:text-2xl lg:text-[34px] font-serif font-bold text-foreground mb-3 leading-tight">{service.title}</h2>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-[1.5] max-w-xl">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <StartProjectButton className="bg-gradient-to-r from-primary to-[#D95D1A] text-white rounded-xl h-12 px-8 shadow-sm hover:-translate-y-0.5 transition-all text-sm md:text-base font-semibold">
                          Discuss Project <ArrowRight className="ml-2 w-4 h-4" />
                        </StartProjectButton>
                      </div>
                    </div>
                    <div className="p-10 bg-secondary border-t md:border-t-0 md:border-l border-border md:col-span-2 flex flex-col justify-center gap-8">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-foreground mb-4">Key Features</h3>
                        <ul className="flex flex-col gap-3">
                          {service.features.map(f => (
                            <li key={f} className="flex items-center gap-3 text-muted-foreground">
                              <Check className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-foreground mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map(t => (
                            <span key={t} className="px-3 py-1 rounded-md bg-background border border-border text-foreground text-sm font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative bg-transparent">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.6]">Everything you need to know about our services.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-foreground hover:text-primary font-serif font-bold text-[22px] py-6 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-[1.6] pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
