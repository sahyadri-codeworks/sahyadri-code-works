import { FadeIn } from "@/components/animations/FadeIn";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      {/* Header Section */}
      <section className="bg-teal-700 text-[#F7F2EC] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-4xl relative z-10">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-[#F7F2EC] uppercase mb-4 opacity-80">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-base md:text-lg text-teal-100 max-w-2xl leading-[1.6] mb-8">
              We respect your privacy and are committed to protecting any information you share with us. This page explains what we collect, why we collect it, and how it is used.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-teal-100">
              <p>Effective: June 1, 2026</p>
              <p>Last Updated: June 2026</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl flex flex-col gap-12">
          
          <FadeIn>
            <section className="scroll-mt-24" id="who-we-are">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">1. Who We Are</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] prose-p:mb-4 max-w-none">
                <p>
                  Sahyadri Code Works is a technology studio based in Maharashtra, India. We provide web development, web application development, CRM solutions, social media management, and related digital services to businesses.
                </p>
                <p>
                  For any privacy-related questions, contact us at <a href="mailto:info@sahyadricode.online" className="text-primary hover:underline">info@sahyadricode.online</a>.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="information-we-collect">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                We only collect information that is necessary to provide our services or respond to your enquiries.
              </p>
              
              <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Information you give us directly</h3>
              <ul className="list-disc pl-5 text-muted-foreground leading-[1.6] mb-6 space-y-2">
                <li>Your name and email address when you submit our contact form</li>
                <li>Project details, budget range and service requirements you share with us</li>
                <li>Any other information you choose to include in messages to us</li>
              </ul>

              <h3 className="text-lg font-bold text-foreground mb-2">Information collected automatically</h3>
              <ul className="list-disc pl-5 text-muted-foreground leading-[1.6] mb-8 space-y-2">
                <li>Basic browser and device information (type, operating system, screen size)</li>
                <li>Pages visited on our website and time spent on each page</li>
                <li>Referring website or search term that brought you here</li>
              </ul>

              <div className="bg-[#FFF8E7] border border-[#F4E2B2] rounded-xl p-6 text-[15px] text-[#8C6D23] font-medium leading-[1.6]">
                We do not collect sensitive personal information such as financial details, government ID numbers or health information at any point.
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="how-we-use-information">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-[1.6] mb-4">
                The information we collect is used only for the following purposes:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground leading-[1.6] mb-6 space-y-2">
                <li>To respond to your enquiry or project request</li>
                <li>To understand what services are most relevant to you</li>
                <li>To improve our website and the way we communicate</li>
                <li>To send you project updates if we are working together</li>
              </ul>
              <p className="text-muted-foreground leading-[1.6]">
                <span className="italic">We will never use your information to send unsolicited marketing emails, and we will never sell your data to any third party.</span>
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="how-we-share-information">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">4. How We Share Your Information</h2>
              <p className="text-muted-foreground leading-[1.6] mb-4">
                We do not sell, trade or rent your personal information. We may share it only in these limited circumstances:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground leading-[1.6] space-y-3">
                <li><strong className="text-foreground">Formspree:</strong> We use Formspree to process contact form submissions. They receive your form data solely to deliver it to us.</li>
                <li><strong className="text-foreground">Legal requirements:</strong> If required by law or court order, we may be obligated to disclose certain information.</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="cookies">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">5. Cookies</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  Our website uses minimal cookies. We do not use advertising cookies or cross-site tracking. You can disable cookies in your browser settings without affecting your ability to contact us.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="data-retention">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">6. Data Retention</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  We keep contact form submissions for up to 12 months. If we enter into a working relationship, we may retain relevant project communications for up to 3 years for business record purposes. You can request deletion of your data at any time by emailing us.
                </p>
                <p>
                  Continued use of our website after any changes means you accept the updated policy.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="contact">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">7. Contact</h2>
              <div className="bg-secondary/50 border border-border rounded-xl p-6 text-[15px] text-muted-foreground leading-[1.6] flex flex-col gap-1">
                <p className="font-bold text-foreground mb-2">Sahyadri Code Works</p>
                <p>Maharashtra, India</p>
                <p>Email: <a href="mailto:info@sahyadricode.online" className="text-primary hover:underline">info@sahyadricode.online</a></p>
              </div>
            </section>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
