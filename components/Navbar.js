"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-serif tracking-tighter text-white">
          DAVID'S <span className="text-accent italic">BETTA CARE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="#collection" className="hover:text-white transition-colors">Collection</Link>
          <Link href="#agents" className="hover:text-white transition-colors">Agents</Link>
          <button className="btn-primary text-xs ml-4">Shop Shopee</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 text-center text-lg uppercase tracking-widest">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#collection" onClick={() => setIsOpen(false)}>Collection</Link>
          <Link href="#agents" onClick={() => setIsOpen(false)}>Agents</Link>
          <button className="btn-primary">Shop Shopee</button>
        </div>
      )}
    </nav>
  );
}
