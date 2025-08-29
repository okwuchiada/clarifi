"use client";

import React, {  useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links: {
  href: string;
  label: string;
  isPage?: boolean;
}[] = [
  { href: "#how-it-works", label: "How It Works", isPage: false },
  { href: "#impact", label: "Impact" },
  // { href: "/about", label: "About", isPage: true },
  { href: "#features", label: "Features" },
  { href: "#why", label: "Why ClariFi" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-navy-900">
            <span className="text-emerald-500">Clari</span>Fi
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <React.Fragment key={link.href}>
              {link.isPage ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <div
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-emerald-500 transition"
                >
                  {link.label}
                </div>
              )}
            </React.Fragment>
          ))}

          {/* <button className="bg-navy-800 text-white px-5 py-2 rounded-full hover:bg-navy-900 transition">
            Get Early Access
          </button> */}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#how-it-works"
              className="py-2 text-gray-700 hover:text-emerald-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#impact"
              className="py-2 text-gray-700 hover:text-emerald-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <a
              href="#features"
              className="py-2 text-gray-700 hover:text-emerald-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#why"
              className="py-2 text-gray-700 hover:text-emerald-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Why ClariFi
            </a>
            <Button className="bg-navy-800 text-white px-5 py-3 rounded-full hover:bg-navy-900 transition text-left">
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
