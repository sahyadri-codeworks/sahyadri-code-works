"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
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
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/services" },
  { 
    key: "nav.products", 
    label: "Products", 
    dropdown: [
      { label: "Projanix (AI Project Hub)", href: "/products/projanix" },
      { label: "All Products →", href: "/products" }
    ]
  },
  { key: "nav.about", href: "/about" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.careers", href: "/careers" },
  { key: "nav.contact", href: "/contact" },
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
            <Image src="/logo-new-sw-3.png" alt="Sahyadri Code Works Logo" width={300} height={300} className="object-contain h-[80px] w-auto" priority />
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
              side="right"
              className="w-[300px] sm:w-[400px] border-l border-border bg-background/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-12">
                {navigation.map((item) => (
                  item.dropdown ? (
                    <div key={item.key} className="flex flex-col gap-3">
                      <div className="text-base md:text-lg font-medium text-foreground">
                        {item.label || t(item.key)}
                      </div>
                      <div className="flex flex-col pl-4 gap-3 border-l-2 border-border/50">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            href={dropItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm md:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base md:text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  )
                ))}

                <Button onClick={() => { setIsMobileMenuOpen(false); openStartProject(); }} className="bg-gradient-to-r from-primary to-[#D95D1A] text-white w-full rounded-xl h-12 text-sm md:text-base font-semibold">
                  Start Project
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
