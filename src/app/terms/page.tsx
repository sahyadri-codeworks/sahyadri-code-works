import { FadeIn } from "@/components/animations/FadeIn";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      {/* Header Section */}
      <section className="bg-[#1C120D] text-[#F7F2EC] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-4xl relative z-10">
          <FadeIn direction="up">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Terms of Service</h1>
            <p className="text-base md:text-lg text-[#B8A999] max-w-2xl leading-[1.6] mb-8">
              Please read these terms carefully before engaging Sahyadri Code for any service. By contacting or working with us, you agree to these terms.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#B8A999]">
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
            <section className="scroll-mt-24" id="about-terms">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">1. About These Terms</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] prose-p:mb-4 max-w-none">
                <p>
                  These Terms of Service govern your use of the Sahyadri Code website and any related services. "We", "our" and "us" refers to Sahyadri Code. "You" refers to the client, user, or any person engaging with us.
                </p>
                <p>
                  By using this website or engaging our services, you accept these terms in full.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="our-services">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">2. Our Services</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] prose-p:mb-4 max-w-none">
                <p>
                  Sahyadri Code provides custom web development, web application development, custom CRM development, invoice and challan tools, social media management, bug hunting and QA, and UI/UX design services.
                </p>
                <p>
                  The exact timeline, scope, and cost of each engagement will be clearly outlined in a project proposal or agreement before any work begins.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="agreements-payments">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">3. Project Agreements and Payments</h2>
              
              <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Proposals and Quotes</h3>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                All quotes are valid for 14 days from the date of issue. Quotes are based on information provided at the time and may be revised if requirements change.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-2">Payment Terms</h3>
              <ul className="list-disc pl-5 text-muted-foreground leading-[1.6] mb-8 space-y-2">
                <li>50% upfront to initiate the project and secure scheduling.</li>
                <li>Milestone payments may be required for larger projects.</li>
                <li>Final payment is due before the final deliverable is handed over.</li>
                <li>All payments are non-refundable once work has commenced.</li>
              </ul>

              <div className="bg-[#FFF8E7] border border-[#F4E2B2] rounded-xl p-6 text-[15px] text-[#8C6D23] font-medium leading-[1.6]">
                <span className="font-bold">Note:</span> Project files and source code are only handed over to the client once full payment has been received.
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="client-responsibilities">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">4. Client Responsibilities</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  Clients agree to provide necessary content, assets, and feedback in a timely manner. Delays in providing this information may push back project timelines. We are not responsible for delays caused by the client's failure to provide required materials.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="intellectual-property">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Client Content</h3>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                You retain ownership of all content, logos, images and materials you provide. You grant us a license to use them solely for completing your project.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-2">Deliverables</h3>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                Upon full payment, the client owns the final deliverables (custom code, design assets) transferred to them.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-2">Our tools and frameworks</h3>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                We retain ownership of any pre-existing code, tools, or frameworks we use. We retain the right to reuse general code patterns and techniques not specific to your project.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-2">Portfolio Use</h3>
              <p className="text-muted-foreground leading-[1.6]">
                We reserve the right to display your project in our portfolio unless a non-disclosure agreement is put in place before the project begins.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="confidentiality">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">6. Confidentiality</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  We treat all project information and business details you share with us as confidential. We will not share your information with third parties except where required to complete the project or by law.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="revisions">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">7. Revisions and Changes</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  Our quotes include a reasonable number of revisions as outlined in the project brief. Changes outside the original scope will be quoted separately and require written approval before implementation.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="warranties">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">8. Warranties and Liability</h2>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                We will fix any bugs or errors resulting from our own development for 30 days after project delivery at no cost.
              </p>

              <div className="bg-secondary/50 border border-border rounded-xl p-6 text-[15px] text-muted-foreground leading-[1.6]">
                We are not liable for issues caused by third-party services, hosting environments, client modifications after delivery, or issues out of our control. Our total liability is limited to the amount paid for the specific service in question.
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="cancellation">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">9. Cancellation</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  Either party may cancel a project with written notice. Work completed up to the point of cancellation will be invoiced and is payable. Deposits are non-refundable if work has commenced. Partially completed work will be delivered upon receipt of payment for work done.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="governing-law">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">10. Governing Law</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Maharashtra, India.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="changes">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">11. Changes to These Terms</h2>
              <div className="prose prose-p:text-muted-foreground prose-p:leading-[1.6] max-w-none">
                <p>
                  We may update these terms from time to time. We will notify users by updating the date on this page. Continued use of our services after any changes means you accept the updated terms.
                </p>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="scroll-mt-24" id="contact">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">12. Contact</h2>
              <div className="bg-secondary/50 border border-border rounded-xl p-6 text-[15px] text-muted-foreground leading-[1.6] flex flex-col gap-1">
                <p className="font-bold text-foreground mb-2">Sahyadri Code</p>
                <p>Navi Mumbai, Maharashtra, India</p>
                <p>Email: <a href="mailto:info@sahyadricode.online" className="text-primary hover:underline">info@sahyadricode.online</a></p>
              </div>
            </section>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
