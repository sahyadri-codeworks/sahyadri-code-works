"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    reference: "",
    contactMethod: "Email",
    documentLink: "",
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state after close animation
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
          reference: "",
          documentLink: "",
          contactMethod: "Email",
        });
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    
    // Safety check: Only submit on step 3
    if (step !== 3) return;

    // Validate current step fields before submitting
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    
    const submitData = new FormData();
    submitData.append("access_key", "3f221d44-0c40-4ab7-905f-1447869d0897");
    
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        console.error("Form submission failed", data);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#FDFBF7]/95 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[24px] flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-border/50 px-6 py-5 flex items-center justify-between rounded-t-[24px]">
              <div>
                <h2 className="text-lg md:text-xl font-serif font-bold text-foreground leading-tight">Start Your Project</h2>
                <p className="text-sm text-muted-foreground mt-1">Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors border border-border"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 border border-green-200">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">Thank you!</h3>
                  <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8">
                    Your project inquiry has been submitted successfully. Our team will review your requirements and reach out shortly.
                  </p>
                  <Button onClick={onClose} className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-8 h-12 text-sm md:text-base font-semibold">
                    Close Window
                  </Button>
                </motion.div>
              ) : (
                <form 
                  ref={formRef} 
                  onSubmit={(e) => e.preventDefault()} 
                  encType="multipart/form-data" 
                  className="flex flex-col h-full"
                >
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-secondary">
                        <motion.div
                          initial={false}
                          animate={{ width: step >= i ? "100%" : "0%" }}
                          className="h-full bg-[#E86A1F]"
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      {/* STEP 1 */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-5"
                        >
                          <h3 className="text-base font-bold text-foreground mb-4">1. Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Full Name</label>
                              <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Email Address</label>
                              <Input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="your@email.com" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Phone Number</label>
                              <Input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="+91 9876543210" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Company / Business Name</label>
                              <Input name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-5"
                        >
                          <h3 className="text-base font-bold text-foreground mb-4">2. Project Requirements</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Service Required</label>
                              <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white/50 border border-border/80 h-12 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary px-3 text-sm">
                                <option value="" disabled>Select a service</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Web App Development">Web App Development</option>
                                <option value="CRM Development">CRM Development</option>
                                <option value="Invoice / Challan Tool">Invoice / Challan Tool</option>
                                <option value="Social Media Management">Social Media Management</option>
                                <option value="Bug Hunting / QA">Bug Hunting / QA</option>
                                <option value="Other / Multiple">Other / Multiple</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Project Budget</label>
                              <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-white/50 border border-border/80 h-12 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary px-3 text-sm">
                                <option value="" disabled>Select budget</option>
                                <option value="under_10k">Under ₹10,000</option>
                                <option value="10k_30k">₹10,000 - ₹30,000</option>
                                <option value="30k_75k">₹30,000 - ₹75,000</option>
                                <option value="75k_2L">₹75,000 - ₹2,00,000</option>
                                <option value="2L_plus">₹2,00,000+</option>
                              </select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <label className="text-sm font-semibold text-foreground">Project Timeline</label>
                              <select name="timeline" value={formData.timeline} onChange={handleChange} required className="w-full bg-white/50 border border-border/80 h-12 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary px-3 text-sm">
                                <option value="" disabled>Select timeline</option>
                                <option value="Urgent">Urgent</option>
                                <option value="1-2 Weeks">1–2 Weeks</option>
                                <option value="1 Month">1 Month</option>
                                <option value="Flexible">Flexible</option>
                              </select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <label className="text-sm font-semibold text-foreground">Project Description</label>
                              <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your project requirements, features, goals, or ideas..." className="bg-white/50 border-border/80 min-h-[100px] rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm resize-none" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-5"
                        >
                          <h3 className="text-base font-bold text-foreground mb-4">3. Final Details</h3>
                          <div className="space-y-5">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Reference Website (Optional)</label>
                              <Input name="reference" value={formData.reference} onChange={handleChange} type="url" placeholder="https://example.com" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Project Document Link (Optional)</label>
                              <Input name="documentLink" value={formData.documentLink} onChange={handleChange} type="url" placeholder="Google Drive, Dropbox, or Figma link" className="bg-white/50 border-border/80 h-12 rounded-xl focus-visible:ring-primary focus-visible:border-primary text-sm" />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Preferred Contact Method</label>
                              <div className="flex flex-wrap gap-3">
                                {["Email", "WhatsApp", "Phone Call"].map((method) => (
                                  <label key={method} className="flex items-center gap-2 px-4 py-3 bg-white/50 border border-border/80 rounded-xl cursor-pointer hover:bg-secondary transition-colors">
                                    <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="text-primary focus:ring-primary accent-[#E86A1F]" />
                                    <span className="text-sm font-medium text-foreground">{method}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-8 pt-5 border-t border-border/50 flex items-center justify-between">
                    {step > 1 ? (
                      <Button type="button" variant="ghost" onClick={handlePrev} className="text-sm font-medium hover:bg-transparent hover:text-primary px-0">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {step < 3 ? (
                      <Button type="button" onClick={handleNext} className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-6 h-12 text-sm font-semibold transition-transform hover:-translate-y-0.5">
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" onClick={handleSubmit} disabled={isSubmitting} className="bg-gradient-to-r from-primary to-[#D95D1A] text-white hover:shadow-[0_8px_20px_rgba(232,106,31,0.25)] rounded-xl px-8 h-12 text-sm font-semibold transition-all hover:-translate-y-0.5 min-w-[200px]">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          "Submit Project Inquiry"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
