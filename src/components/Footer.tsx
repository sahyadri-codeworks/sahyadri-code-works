import Link from "next/link";
import { Code2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1C120D] pt-16 pb-8 border-t border-white/[0.08]">
      <div className="container relative z-10 px-4 md:px-8 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:pr-8">
            <Link href="/" className="flex items-center gap-4 w-fit group">
              <div className="bg-white rounded-xl flex items-center justify-center p-1 md:p-2 shadow-sm shrink-0 w-20 h-14 md:w-24 md:h-16 overflow-hidden">
                <Image src="/SWC_LOG-remove.png" alt="Sahyadri Code Works Logo" width={300} height={300} className="object-contain w-full h-full scale-[1.3] md:scale-[1.4]" loading="eager" priority />
              </div>
              <div className="flex flex-col font-orbitron">
                <span className="text-xl md:text-2xl font-black text-white tracking-[0.15em] leading-none group-hover:text-[#F18430] transition-colors">SAHYADRI</span>
                <span className="text-xs md:text-sm font-bold text-[#F18430] tracking-[0.2em] mt-1">CODE WORKS</span>
              </div>
            </Link>
            <p className="text-sm md:text-base text-[#B8A999] leading-[1.6]">
              A Maharashtra-based tech studio inspired by the Sahyadri mountains. We build reliable, affordable digital solutions for businesses of every size.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.linkedin.com/company/sahyadricodeworks/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-[#B8A999]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/sahyadri.code?igsh=aTA5b2R0a3VkdWU0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-[#B8A999]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-[#F7F2EC] tracking-widest uppercase mb-4">Services</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Website Development</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Web App Development</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">CRM Systems</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Business Operations Tools</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Social Media</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Bug Hunting</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">AI & Automation</Link></li>
              <li><Link href="/services" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold text-[#F7F2EC] tracking-widest uppercase mb-4">Products</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link href="/products/projanix" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Projanix AI</Link></li>
              <li><Link href="/products" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-[#F7F2EC] tracking-widest uppercase mb-4">Company</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link href="/about" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/about" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Why Us</Link></li>
              <li><Link href="/careers" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-bold text-[#F7F2EC] tracking-widest uppercase mb-4">Industries</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><Link href="#" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Transport</Link></li>
              <li><Link href="#" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">IT Companies</Link></li>
              <li><Link href="#" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Schools & Education</Link></li>
              <li><Link href="#" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Small Business</Link></li>
              <li><Link href="#" className="text-[#B8A999] hover:text-[#F7F2EC] transition-colors text-sm">Startups</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <p className="text-[13px] text-[#B8A999]">
              © {new Date().getFullYear()} <span className="text-[#E86A1F] font-medium">Sahyadri Code Works</span> · Maharashtra, India
            </p>
            <div className="flex items-center gap-4 text-[13px] text-[#B8A999]">
              <Link href="/privacy" className="hover:text-[#F7F2EC] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#F7F2EC] transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="text-[13px] text-[#B8A999]">
            Built in Maharashtra, <span className="text-[#E86A1F] font-medium">shipped to the world.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
