import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Card } from "@/Components/ui/card";
import { AspectRatio } from "@/Components/ui/aspect-ratio";

export default function Home() {
  return (
    <>
      <div className="font-Pixel text-white bg-[url(https://i.ibb.co/tgC1wkx/1138740.png)] bg-blend-multiply bg-black/30 bg-no-repeat bg-center bg-fixed bg-clip-content bg-cover container mx-auto px-20 py-12 capitalize">
        <div className="grid lg:grid-cols-2 gap-12 items-start space-x-20">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className=" text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                style={{ textShadow: "1px 1px 0px #FF00FF" }}
              >
                01 - Get to know Shtark
              </Badge>

              <h1
                className=" text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ textShadow: "4px 4px 0px #FF00FF" }}
              >
                Hey, I'm EnissayCula!{" "}
                <span className="block">Why Shtark?</span>
              </h1>

              <p className=" text-lg text-white/80 leading-relaxed">
              At "Shtark", our goal is to help small or new channels grow quickly. We provide an innovative tool to attract more subscribers and reach a larger audience easily. All of this is available by subscribing to your channel, and the visitor will receive the link you’ve assigned.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className=" text-xl text-white font-bold">I will guide you through all the steps to unlock and get the link effortlessly: </h2>
              <ul className="space-y-3">
                {[
                  "click to button Subscribe Now!",
                  "Confirm channel subscription ,and go back to page",
                  "Wait 3sec for verification subscribe",
                  "The last step click on the Go Now button.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3  text-white/70"
                  >
                    <span className="text-[#FF00FF] mt-1">►</span>
                    Step {index + 1}: {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer border-2 border-primary bg-background text-white hover:bg-primary hover:text-white-foreground rounded-none"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
                imageRendering: "pixelated",
              }}
            >
              Our all Posts
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Card
              className="rounded-none border-4 border-primary bg-background overflow-hidden py-0"
              style={{ boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)" }}
            >
              <AspectRatio ratio={16 / 9}>
                <div className="absolute inset-0 bg-[#FF00FF]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/k5M3lQPEnMU?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&showinfo=0&disablekb=1&color=white"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </AspectRatio>
            </Card>

            <Button
              size="lg"
              className="w-full mt-4 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white border-none rounded-none"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
                imageRendering: "pixelated",
              }}
            >
              Video explaining how to use it easily for the visitor!
            </Button>

            {/* Decorative Pixels */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-primary bg-transparent" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-[#FF00FF] bg-transparent" />
          </div>
        </div>
      </div>
    </>
  );
}
