// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact", isHash: true },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Portfolio
          </Link>

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.isHash) {
                return (
                  <li key={link.href}>
                    <Link
                      href={pathname === "/" ? link.href : `/${link.href}`}
                      onClick={handleContactClick}
                      className={`px-4 py-2 rounded-full transition-all ${
                        isActive ? "bg-black text-white" : "hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full transition-all ${
                      isActive ? "bg-black text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
