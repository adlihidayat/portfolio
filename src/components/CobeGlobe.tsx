"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    const size = 550;

    if (!canvasRef.current) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationFrameId: number;

    try {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: Math.min(
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
          2,
        ),
        width: size * 2,
        height: size * 2,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 12000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.1, 0.1, 0.1],
        glowColor: [0.88, 0.88, 0.92],
      });

      const animate = () => {
        phi += 0.003;
        if (globe) {
          globe.update({
            phi,
            width: size * 2,
            height: size * 2,
          });
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    } catch (err) {
      console.warn("WebGL CobeGlobe init error:", err);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (globe) {
        try {
          globe.destroy();
        } catch (e) {
          // Ignore WebGL cleanup error
        }
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center shrink-0 pointer-events-none select-none">
      <canvas
        ref={canvasRef}
        style={{
          width: "850px",
          height: "850px",
          aspectRatio: "1",
        }}
        className="shrink-0 block"
      />
    </div>
  );
}
