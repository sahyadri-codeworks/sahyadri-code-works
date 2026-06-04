"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InternshipModal({ isOpen, onClose }: InternshipModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Removed resumeFile state since Web3Forms doesn't support free tier uploads

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state after close animation
      setTimeout(() => {
        setIsSuccess(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-[#FFF5EF] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-6 sm:px-8 border-b border-[#F4DCCB] flex items-start justify-between shrink-0 bg-white/50">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-1">Apply for Internship</h2>
                <p className="text-sm text-muted-foreground">Join Sahyadri Code and gain real-world experience in modern software development.</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white border border-[#F4DCCB] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shrink-0 shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 sm:px-8 overflow-y-auto custom-scrollbar flex-1 bg-white/30">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Application Submitted!</h3>
                  <p className="text-muted-foreground max-w-sm mb-8">
                    Your internship application has been submitted successfully. We will review it and get back to you soon.
                  </p>
                  <Button 
                    onClick={onClose}
                    className="bg-[#E86A1F] hover:bg-[#D95D1A] text-white rounded-xl h-12 px-8 font-semibold w-full sm:w-auto"
                  >
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form id="internship-form" action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data" className="space-y-6">
                  <input type="hidden" name="access_key" value="3f221d44-0c40-4ab7-905f-1447869d0897" />
                  {/* Basic Info */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <Input name="name" required placeholder="Enter your full name" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <Input name="email" required type="email" placeholder="your@email.com" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <Input name="phone" required type="tel" placeholder="+91 9876543210" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">College / University Name *</label>
                      <Input name="college" required placeholder="Your college name" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                    </div>
                  </div>

                  {/* Education & Role */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Degree / Course *</label>
                      <Input name="degree" required placeholder="BCA, BSc CS, MCA, BE, etc." className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Current Year / Semester *</label>
                      <select name="year" required defaultValue="" className="flex h-12 w-full rounded-xl border border-[#F4DCCB] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E86A1F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                        <option value="" disabled>Select Year</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Final Year">Final Year</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Internship Role Interested In *</label>
                    <select name="role" required defaultValue="" className="flex h-12 w-full rounded-xl border border-[#F4DCCB] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E86A1F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                      <option value="" disabled>Select Role</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="CRM Development">CRM Development</option>
                      <option value="Web Development">Web Development</option>
                    </select>
                  </div>

                  {/* Skills & Links */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Skills *</label>
                    <Input name="skills" required placeholder="React, HTML, CSS, JavaScript, Figma, Python, etc." className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Portfolio / GitHub / LinkedIn</label>
                    <Input name="portfolio" type="url" placeholder="https://github.com/username" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Why Do You Want This Internship? *</label>
                    <Textarea 
                      name="message"
                      required 
                      placeholder="Tell us about your interests, goals, and why you want to join Sahyadri Code." 
                      className="min-h-[100px] bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F] resize-none"
                    />
                  </div>

                  {/* Preferences */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Availability Duration *</label>
                      <select name="duration" required defaultValue="" className="flex h-12 w-full rounded-xl border border-[#F4DCCB] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E86A1F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                        <option value="" disabled>Select Duration</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Preferred Internship Type *</label>
                      <select name="type" required defaultValue="" className="flex h-12 w-full rounded-xl border border-[#F4DCCB] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E86A1F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                        <option value="" disabled>Select Type</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Link */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Resume Link (Google Drive, Dropbox, etc.) *</label>
                    <Input name="resumeLink" required type="url" placeholder="Paste link to your resume" className="h-12 bg-white border-[#F4DCCB] rounded-xl focus-visible:ring-[#E86A1F]" />
                  </div>

                </form>
              )}
            </div>

            {/* Footer */}
            {!isSuccess && (
              <div className="px-6 py-4 sm:px-8 border-t border-[#F4DCCB] bg-white flex justify-end shrink-0 gap-3">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={onClose}
                  className="rounded-xl h-12 px-6 border-[#F4DCCB] hover:bg-muted font-semibold"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  form="internship-form"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-[#D95D1A] hover:opacity-90 text-white border-0 shadow-[0_4px_14px_rgba(232,106,31,0.3)] transition-all duration-300 rounded-xl h-12 px-8 font-semibold w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
