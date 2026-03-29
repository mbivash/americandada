import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link href="/" className="text-3xl font-bold tracking-tight text-white inline-flex items-center gap-2">
            <span className="text-orange-500">বাচ্চার</span>
            <span>বিরিয়ানি</span>
          </Link>
          <p className="text-white/60 max-w-sm text-lg leading-relaxed">
            Crafting authenticity in every grain. A premium Dum Biryani experience designed for those who seek tradition infused with modern luxury.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold font-sans">
              IG
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold font-sans">
              FB
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold font-sans">
              X
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link href="/#home" className="hover:text-orange-400 transition-colors">Home</Link></li>
            <li><Link href="/menu" className="hover:text-orange-400 transition-colors">Our Menu</Link></li>
            <li><Link href="/#story" className="hover:text-orange-400 transition-colors">The Story</Link></li>
            <li><Link href="/#locations" className="hover:text-orange-400 transition-colors">Locations</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>hello@baccharbiryani.com</span>
            </li>
            <li className="flex items-start gap-3 mt-4">
              <MapPin size={18} className="text-orange-500 shrink-0 mt-1" />
              <span>Habra & North 24pgs,<br />West Bengal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} বাচ্চার বিরিয়ানি. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
