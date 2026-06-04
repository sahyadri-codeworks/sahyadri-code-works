import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

const products = [
  {
    badge: "ACTIVE / AVAILABLE",
    badgeActive: true,
    title: "Projanix AI",
    subtitle: "AI-Native Project Management Hub",
    description: "Engineered for development and marketing teams. Projanix parses high-level milestones into task trees, flags pipeline delays, and hosts a secure, white-label client approval dashboard.",
    buttonText: "Explore Projanix AI Workspace",
    buttonPrimary: true,
    link: "/products/projanix",
    features: [
      "Secure Isolated Data Audits",
      "High Availability Architecture",
      "Automated Backups & Encryptions"
    ]
  },
  {
    badge: "COMING Q3 2026",
    badgeActive: false,
    title: "WhatsApp AI Campaign Tool",
    subtitle: "Bulk Scheduling & Automated Retargeting",
    description: "Built to help regional businesses send automated client alerts, billing updates, and marketing broadcasts. Includes webhooks for Shopify/WooCommerce, real-time message open metrics, and interactive chat flows.",
    buttonText: "Join Beta Waitlist",
    buttonPrimary: false,
    link: "/contact",
    features: [
      "Secure Isolated Data Audits",
      "High Availability Architecture",
      "Automated Backups & Encryptions"
    ]
  },
  {
    badge: "ACTIVE / AVAILABLE",
    badgeActive: true,
    title: "Invoice & Challan Generator",
    subtitle: "GST-Compliant Localized Billing Software",
    description: "Simplify bookkeeping for logistics, schools, and transport operators. Generate clean PDFs, log client ledger balances, calculate SGST/CGST automatically, and track payment dues in one centralized control panel.",
    buttonText: "Request Client Demo",
    buttonPrimary: false,
    link: "/contact",
    features: [
      "Secure Isolated Data Audits",
      "High Availability Architecture",
      "Automated Backups & Encryptions"
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[120px] bg-white">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl text-center">
          <FadeIn>
            <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase mb-6 block">
              SAHYADRI LABS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-foreground mb-6 tracking-tight">
              Our <span className="text-[#D95D1A]">Proprietary</span> Products
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.6] max-w-3xl mx-auto">
              In addition to custom solutions, we design, build, and deploy our own software applications targeted at solving real business problems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products List Section */}
      <section className="pb-32 relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-xl flex flex-col gap-8">
          {products.map((product, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] flex flex-col lg:flex-row gap-12 justify-between group">
                
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider mb-6 ${
                    product.badgeActive 
                      ? 'bg-[#FFF5EF] text-[#E86A1F]' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {product.badge}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
                    {product.title}
                  </h2>
                  
                  <h3 className="text-[#D95D1A] font-bold text-lg mb-6">
                    {product.subtitle}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-10">
                    {product.description}
                  </p>
                  
                  {product.buttonPrimary ? (
                    <Link href={product.link} className={cn(buttonVariants({ variant: "default" }), "bg-gradient-to-r from-[#D95D1A] to-[#9A3E0F] hover:from-[#C75215] hover:to-[#83330C] text-white rounded-xl px-8 h-12 text-sm md:text-base font-semibold shadow-sm transition-all group w-full sm:w-auto")}>
                      {product.buttonText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <Link href={product.link} className={cn(buttonVariants({ variant: "outline" }), "border-border text-foreground hover:bg-secondary rounded-xl px-8 h-12 text-sm md:text-base font-semibold transition-all w-full sm:w-auto")}>
                      {product.buttonText}
                    </Link>
                  )}
                </div>

                {/* Right Content - Key Architecture */}
                <div className="lg:w-[380px] shrink-0 bg-[#FAF7F5] rounded-2xl p-8 border border-black/5 self-start w-full mt-6 lg:mt-0">
                  <h4 className="text-[13px] font-black text-foreground tracking-widest uppercase mb-6">
                    KEY ARCHITECTURE
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#E86A1F] mt-1 shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
