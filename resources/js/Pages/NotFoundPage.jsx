"use client";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Home, RotateCcw, Gamepad2, Youtube } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(5);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 150);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = '/'
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown])

  return (
    <div className="font-Pixel min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative pixels */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#FF00FF]"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-[#00FFFF]"></div>
        <div className="absolute bottom-10 left-20 w-8 h-8 bg-[#00FF00]"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-[#FFFF00]"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-5">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-primary"></div>
          ))}
        </div>
      </div>

      <Card
        className={`w-full max-w-2xl border-4 border-primary bg-background p-8 relative ${
          glitchEffect ? "translate-x-[3px]" : ""
        } transition-transform duration-75`}
        style={{
          boxShadow: "12px 12px 0px 0px rgba(255,0,255,0.3)",
          imageRendering: "pixelated",
        }}
      >
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1
              className=" text-8xl font-bold text-primary"
              style={{ textShadow: "6px 6px 0px #FF00FF" }}
            >
              404
            </h1>

            <div className="relative">
              <h2
                className={` text-3xl font-bold text-primary ${
                  glitchEffect ? "text-[#00FFFF]" : ""
                }`}
              >
                GAME OVER
              </h2>
              {glitchEffect && (
                <h2 className=" text-3xl font-bold text-[#FF00FF] absolute top-0 left-0 ml-[3px]">
                  PAGE NOT FOUND
                </h2>
              )}
            </div>

            <p className=" text-xl text-primary/70 mt-4">
              {" "}
              ERROR: PAGE NOT FOUND
            </p>
          </div>

          <div className="w-full h-32 border-4 border-primary relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pixel-character w-16 h-16 bg-primary"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-primary/20 flex items-center justify-center">
              <p className=" text-xs text-primary">
                ERROR CODE: PAGE_NOT_FOUND
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className=" text-primary/70">
              Looks like you’ve wandered off the beaten path. The page you’re
              looking for doesn't exist or may have been moved. Feel free to
              explore other parts of the site or return to safety! 🔄🌟
            </p>

            <p className=" text-primary/70">
              Returning to main menu in{" "}
              <span className="text-[#FF00FF] font-bold">{countdown}</span>{" "}
              seconds...
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <Button
                className=" border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none cursor-pointer"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
                }}
              >
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            <Link href="/">
              <Button
                className=" border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none cursor-pointer"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)",
                }}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </Link>
            <Button
              onClick={() => window.open('https://www.youtube.com/c/enissaycula?sub_confirmation=1', "_blank", "noopener,noreferrer")}
              className=" bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white border-none rounded-none cursor-pointer"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
              }}
            >
              <Youtube className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </Card>

      <style jsx>{`
        .pixel-character {
          clip-path: polygon(
            31.25% 0%,
            68.75% 0%,
            68.75% 6.25%,
            75% 6.25%,
            75% 12.5%,
            81.25% 12.5%,
            81.25% 18.75%,
            87.5% 18.75%,
            87.5% 37.5%,
            93.75% 37.5%,
            93.75% 62.5%,
            87.5% 62.5%,
            87.5% 68.75%,
            93.75% 68.75%,
            93.75% 75%,
            87.5% 75%,
            87.5% 81.25%,
            75% 81.25%,
            75% 87.5%,
            62.5% 87.5%,
            62.5% 93.75%,
            56.25% 93.75%,
            56.25% 100%,
            43.75% 100%,
            43.75% 93.75%,
            37.5% 93.75%,
            37.5% 87.5%,
            25% 87.5%,
            25% 81.25%,
            12.5% 81.25%,
            12.5% 75%,
            6.25% 75%,
            6.25% 68.75%,
            12.5% 68.75%,
            12.5% 62.5%,
            6.25% 62.5%,
            6.25% 37.5%,
            12.5% 37.5%,
            12.5% 18.75%,
            18.75% 18.75%,
            18.75% 12.5%,
            25% 12.5%,
            25% 6.25%,
            31.25% 6.25%
          );
        }
      `}</style>
    </div>
  );
}
