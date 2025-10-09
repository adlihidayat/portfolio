import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "./Squares";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation with mask effect from bottom
    if (heroRef.current) {
      gsap.fromTo(
        ".hero-title",
        {
          y: 100,
        },
        {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".hero-name",
        {
          y: 100,
        },
        {
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        {
          x: -600,
        },
        {
          x: 0,
          duration: 2,
          delay: 1.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-line",
        {
          y: 150,
        },
        {
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );

      gsap.from(".hero-emoji", {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 1.5,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    }

    // Darken hero when projects section scrolls over it
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.5,
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center px-6 pt-20 overflow-hidden z-0"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.4}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-amber-50/90" />
      </div>

      {/* Darkening Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      />

      <div className="max-w-7xl w-full relative z-10">
        <div className="w-full absolute flex flex-row justify-center z-10 -top-2">
          <div className="overflow-hidden">
            <span className="hero-title bg-orange-600 text-white px-5 py-1 rounded-full font-semibold text-xl mr-80 inline-block">
              DHIYA ADLI HIDAYAT
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mb-20">
          <div className="overflow-hidden">
            <h1 className="hero-title text-7xl md:text-[150px] font-medium tracking-tighter text-primary">
              I CREATE MIND
              <span className="inline-block absolute">
                <span className="hero-emoji absolute -top-5 -right-5 text-8xl">
                  😴
                </span>
                .
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full absolute flex flex-row justify-end items-center align-middle -mt-5">
          <div className="overflow-hidden">
            <div className="hero-line w-[2px] rounded-full h-28 bg-primary mr-5"></div>
          </div>
          <div className="overflow-hidden">
            <p className="hero-subtitle text-2xl font-medium text-primary max-w-xl mr-20 leading-6 tracking-tighter">
              I Spend Most Of My Time Teaching Machines How To Think, Breaking
              Products That Work Too Well, Diving Deep Into The AI World, Always
              Experimenting, Sometimes Breaking Things (On Purpose)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
