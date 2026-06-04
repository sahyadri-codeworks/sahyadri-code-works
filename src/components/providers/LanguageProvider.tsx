"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "EN" | "MR";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

// Very basic dictionary for translation
const translations = {
  EN: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.careers": "Careers",
    "nav.contact": "Contact Us",
    "btn.startProject": "Start Project",
    "hero.badge": "Rooted in Maharashtra • Sahyadri Code Works",
    "hero.title1": "Powerful Digital",
    "hero.title2": "Solutions",
    "hero.title3": "Built",
    "hero.title4": "for Growth",
    "hero.desc": "We are a Maharashtra-based tech studio specializing in custom web applications, SaaS platforms, and enterprise software. Fast, reliable, and tailored to scale.",
    "btn.viewWork": "View Our Work",
    "section.services": "Our Services",
    "section.whyChooseUs": "Why Choose Us",
    "footer.desc": "A Maharashtra-based tech studio inspired by the Sahyadri mountains. We build reliable, affordable digital solutions for businesses of every size.",
  },
  MR: {
    "nav.home": "मुख्यपृष्ठ",
    "nav.about": "आमच्याबद्दल",
    "nav.services": "सेवा",
    "nav.projects": "प्रकल्प",
    "nav.careers": "करिअर",
    "nav.contact": "संपर्क",
    "btn.startProject": "प्रकल्प सुरू करा",
    "hero.badge": "महाराष्ट्राची मुळे • सह्याद्री कोड वर्क्स",
    "hero.title1": "शक्तिशाली डिजिटल",
    "hero.title2": "सोल्यूशन्स",
    "hero.title3": "प्रगतीसाठी",
    "hero.title4": "बनवलेले",
    "hero.desc": "आम्ही कस्टम वेब अॅप्लिकेशन्स, SaaS प्लॅटफॉर्म आणि एंटरप्राइज सॉफ्टवेअर मध्ये तज्ञ असलेला महाराष्ट्रातील टेक स्टुडिओ आहोत. जलद, विश्वासार्ह आणि वाढीसाठी तयार केलेले.",
    "btn.viewWork": "आमचे काम पहा",
    "section.services": "आमच्या सेवा",
    "section.whyChooseUs": "आम्हाला का निवडावे",
    "footer.desc": "सह्याद्रीच्या पर्वतरांगांपासून प्रेरित एक महाराष्ट्रीयन टेक स्टुडिओ. आम्ही सर्व आकाराच्या व्यवसायांसाठी विश्वासार्ह आणि परवडणारी डिजिटल सोल्यूशन्स तयार करतो.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");

  // Load from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem("sahyadri-lang") as Language;
    if (saved && (saved === "EN" || saved === "MR")) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("sahyadri-lang", newLang);
  };

  const t = (key: string): string => {
    return (translations[lang] as any)[key] || (translations["EN"] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
