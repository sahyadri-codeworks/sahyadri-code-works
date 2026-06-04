"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Home, Briefcase, Box, Info, FolderGit2, GraduationCap, PhoneCall, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useModal } from "@/components/providers/ModalProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navigation = [
  { key: "nav.home", href: "/", icon: Home },
  { key: "nav.services", href: "/services", icon: Briefcase },
  { 
    key: "nav.products", 
    label: "Products", 
    icon: Box,
    dropdown: [
      { label: "Projanix (AI Project Hub)", href: "/products/projanix", icon: Sparkles },
      { label: "All Products", href: "/products", icon: Box }
    ]
  },
  { key: "nav.about", href: "/about", icon: Info },
  { key: "nav.projects", href: "/projects", icon: FolderGit2 },
  { key: "nav.careers", href: "/careers", icon: GraduationCap },
  { key: "nav.contact", href: "/contact", icon: PhoneCall },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { lang, setLang, t } = useLanguage();
  const { openStartProject } = useModal();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || pathname !== "/"
          ? "border-b border-border/50 bg-[#F7F2EC]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[120px] max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src={`${process.env.NODE_ENV === 'production' ? '/sahyadri-code-works' : ''}/logo-new-sw-3.png`} alt="Sahyadri Code Works Logo" width={300} height={300} className="object-contain h-[80px] w-auto" loading="eager" priority />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            item.dropdown ? (
              <div key={item.key} className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm md:text-base font-semibold transition-colors hover:text-primary ${
                    pathname.startsWith("/products")
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label || t(item.key)}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300">
                  <div className="bg-white border border-border shadow-xl rounded-2xl p-4 flex flex-col min-w-[240px]">
                    {item.dropdown.map((dropItem, idx) => (
                      <Link
                        key={idx}
                        href={dropItem.href}
                        className="px-4 py-3 text-sm font-semibold text-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-colors"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm md:text-base font-semibold transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t(item.key)}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <Button onClick={openStartProject} className="hidden md:flex bg-gradient-to-r from-primary to-[#D95D1A] hover:opacity-90 text-white border-0 shadow-[0_4px_14px_rgba(232,106,31,0.3)] transition-all duration-300 hover:-translate-y-0.5 rounded-xl h-12 px-8 text-sm md:text-base font-semibold">
            Start Project
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-foreground hover:bg-muted"
                />
              }
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[85vw] max-w-[400px] border-r border-border bg-background/95 backdrop-blur-xl p-6 flex flex-col shadow-2xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center gap-2 mb-8 mt-2">
                <Image src={`${process.env.NODE_ENV === 'production' ? '/sahyadri-code-works' : ''}/logo-new-sw-3.png`} alt="Sahyadri Code Works Logo" width={150} height={150} className="object-contain h-[50px] w-auto" />
              </div>
              <nav className="flex flex-col gap-2 overflow-y-auto pb-8 flex-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.dropdown && pathname.startsWith("/products"));
                  const Icon = item.icon;
                  return item.dropdown ? (
                    <div key={item.key} className="flex flex-col gap-1">
                      <div className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between cursor-pointer ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary/50'}`}>
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                          {item.label || t(item.key)}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180 text-primary' : 'opacity-50'}`} />
                      </div>
                      <div className="flex flex-col pl-4 mt-1 gap-1 border-l-2 border-border/50 ml-6">
                        {item.dropdown.map((dropItem, idx) => {
                          const isDropActive = pathname === dropItem.href;
                          const DropIcon = dropItem.icon;
                          return (
                            <Link
                              key={idx}
                              href={dropItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isDropActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'}`}
                            >
                              <DropIcon className={`w-4 h-4 ${isDropActive ? 'text-primary' : 'opacity-70'}`} />
                              {dropItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        pathname === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary/50 hover:text-primary"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'}`} />
                      {t(item.key)}
                    </Link>
                  )
                })}

                <div className="mt-6 pt-6 border-t border-border">
                  <Button onClick={() => { setIsMobileMenuOpen(false); openStartProject(); }} className="bg-gradient-to-r from-primary to-[#D95D1A] text-white w-full rounded-xl h-14 text-base font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                    Start Project
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
