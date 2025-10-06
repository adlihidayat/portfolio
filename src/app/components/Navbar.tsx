"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const fullWidthRef = useRef<number>(0);
  const fullHeightRef = useRef<number>(0);
  const [isCompact, setIsCompact] = useState(false);

  const SMALL_SIZE = 45; // px
  const STOP_DEBOUNCE = 200; // ms after scroll stops

  // Initial dimension capture
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    fullWidthRef.current = rect.width;
    fullHeightRef.current = rect.height;

    el.style.width = `${rect.width}px`;
    el.style.height = `${rect.height}px`;
    el.style.boxSizing = "border-box";
  }, []);

  // Smooth-scroll-aware listener
  useEffect(() => {
    const onLenisScroll = (e: CustomEvent<{ velocity: number }>) => {
      const velocity = e.detail.velocity;

      // Scroll started
      if (Math.abs(velocity) > 0.05) {
        if (!isCompact) {
          setIsCompact(true);
          if (navRef.current) {
            gsap.killTweensOf(navRef.current);
            gsap.to(navRef.current, {
              width: SMALL_SIZE,
              height: SMALL_SIZE,
              padding: "0px",
              borderRadius: "9999px",
              duration: 0.25,
              ease: "power3.out",
            });
          }
        }

        // reset stop timer
        if (timerRef.current) window.clearTimeout(timerRef.current);
      }

      // Scroll stopped (use debounce)
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setIsCompact(false);
        if (navRef.current) {
          gsap.killTweensOf(navRef.current);
          gsap.to(navRef.current, {
            width: fullWidthRef.current,
            height: fullHeightRef.current,
            padding: "12px 24px",
            borderRadius: "9999px",
            duration: 0.25,
            ease: "power3.out",
          });
        }
      }, STOP_DEBOUNCE);
    };

    window.addEventListener("lenis-scroll", onLenisScroll as EventListener);
    return () =>
      window.removeEventListener(
        "lenis-scroll",
        onLenisScroll as EventListener
      );
  }, [isCompact]);

  // Nav links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact", isHash: true },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        ref={navRef}
        className="flex items-center justify-center bg-white backdrop-blur-md rounded-full shadow-lg transition-all"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "410px",
          height: "40px",
          padding: "12px 24px",
        }}
      >
        {/* Full menu */}
        <ul
          className={`flex items-center gap-8 transition-opacity ${
            isCompact
              ? "opacity-0 pointer-events-none duration-300"
              : "opacity-100 duration-1000"
          }`}
          style={{ margin: 0 }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const linkClasses = `px-4 py-2 rounded-full transition-all text-sm font-medium ${
              isActive
                ? "bg-black text-white py-2 px-5"
                : "text-gray-700 hover:bg-white"
            }`;

            if (link.isHash) {
              return (
                <li key={link.href}>
                  <Link
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    onClick={handleContactClick}
                    className={linkClasses}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Compact logo */}
        <div
          className={`flex items-center justify-center transition-opacity duration-300 absolute ${
            isCompact ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isCompact}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={20}
            height={20}
            style={{ display: "block" }}
          />
        </div>
      </nav>
    </div>
  );
}
