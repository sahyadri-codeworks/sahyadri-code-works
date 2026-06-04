"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 relative bg-transparent">

      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/20 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="container px-4 md:px-8 mx-auto max-w-screen-2xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">Let's Work <span className="text-primary italic">Together</span></h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-[1.6]">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container px-4 md:px-8 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <FadeIn direction="left" className="lg:col-span-2 flex flex-col gap-8">
              <Card className="border-border shadow-md rounded-[24px] h-full relative overflow-hidden text-white border-none">
                <div className="absolute inset-0 bg-[#0C0806] z-0">
                  <Image src="/contact-bg.png" alt="Contact Background" fill className="object-cover opacity-60 mix-blend-screen" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-10 flex flex-col gap-8 relative z-10 h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-[2px] bg-[#E86A1F]"></div>
                      <span className="text-xs font-bold tracking-widest text-[#E86A1F] uppercase">Get in Touch</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">Let's Build Something Great Together</h3>
                    <p className="text-white/70 text-sm md:text-base leading-[1.6]">
                      Tell us about your project. We get back within 24 hours with a clear plan and honest pricing. No surprises.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6 mt-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md">
                        <Mail className="w-5 h-5 text-white/90" />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-white font-semibold text-sm md:text-base">info@sahyadricode.online</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md">
                        <Phone className="w-5 h-5 text-white/90" />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">WhatsApp / Call</p>
                        <p className="text-white font-semibold text-sm md:text-base">+91 89289 46848</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md">
                        <MapPin className="w-5 h-5 text-white/90" />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Location</p>
                        <p className="text-white font-semibold text-sm md:text-base">Navi Mumbai, Maharashtra</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" className="lg:col-span-3">
              <Card className="bg-card border-border shadow-sm rounded-[24px]">
                <CardContent className="p-8 md:p-12">
                  <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                    <input type="hidden" name="access_key" value="3f221d44-0c40-4ab7-905f-1447869d0897" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-foreground font-bold">Your Name</label>
                        <Input 
                          type="text"
                          name="name"
                          required
                          placeholder="Rahul Sharma" 
                          className="bg-secondary border-border focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/60 h-14 rounded-xl transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm text-foreground font-bold">Email Address</label>
                        <Input 
                          type="email"
                          name="email"
                          required
                          placeholder="rahul@company.com" 
                          className="bg-secondary border-border focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/60 h-14 rounded-xl transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-foreground font-bold">Service Required</label>
                      <select 
                        name="service"
                        required
                        className="w-full bg-secondary border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground h-14 px-4 rounded-xl transition-all text-sm"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-muted-foreground/60">Select a service</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Web App Development">Web App Development</option>
                        <option value="CRM Development">CRM Development</option>
                        <option value="Invoice / Challan Tool">Invoice / Challan Tool</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Bug Hunting / QA">Bug Hunting / QA</option>
                        <option value="Other / Multiple">Other / Multiple</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-foreground font-bold">Budget Range (₹)</label>
                      <select 
                        name="budget"
                        required
                        className="w-full bg-secondary border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground h-14 px-4 rounded-xl transition-all text-sm"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-muted-foreground/60">Select your budget</option>
                        <option value="under_10k">Under ₹10,000</option>
                        <option value="10k_30k">₹10,000 - ₹30,000</option>
                        <option value="30k_75k">₹30,000 - ₹75,000</option>
                        <option value="75k_2L">₹75,000 - ₹2,00,000</option>
                        <option value="2L_plus">₹2,00,000+</option>
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-foreground font-bold">Project Details</label>
                      <Textarea 
                        name="message"
                        required
                        placeholder="Describe your project, goals, and timeline..." 
                        className="bg-secondary border-border focus-visible:ring-primary focus-visible:border-primary text-foreground placeholder:text-muted-foreground/60 min-h-[160px] resize-y rounded-xl transition-all p-4"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="bg-[#E86A1F] hover:bg-[#D95D1A] text-white mt-4 rounded-xl h-12 text-sm md:text-base font-semibold transition-all w-full">
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

          </div>
        </div>
      </section>
      

    </div>
  );
}
