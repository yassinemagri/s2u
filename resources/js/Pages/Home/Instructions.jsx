import React from 'react'
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
const Instructions = () => {
  return (
    <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-primary border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                style={{ textShadow: "1px 1px 0px #FF00FF" }}
              >
                01 - Get to know Shtark
              </Badge>

              <h1
                className=" text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                style={{ textShadow: "4px 4px 0px #FF00FF" }}
              >
                Hey, I'm EnissayCula!{" "}
                <span className="block">Why Shtark?</span>
              </h1>

              <p className=" text-lg text-primary/80 leading-relaxed">
              At <span className="text-primary border-2 border-[#FF00FF]/20 px-4 py-1 rounded-none" style={{ textShadow: "1px 1px 0px #FF00FF" }}>S2U</span>, our goal is to help small or new channels grow quickly. We provide an innovative tool to attract more subscribers and reach a larger audience easily. All of this is available by subscribing to your channel, and the visitor will receive the link you’ve assigned.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className=" text-xl text-primary font-bold">I will guide you through all the steps to unlock and get the link effortlessly: </h2>
              <ul className="space-y-3">
                {[
                  "click to button Subscribe Now!",
                  "Confirm channel subscription ,and go back to page",
                  "Wait 3sec for verification subscribe",
                  "The last step click on the Go Now button.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3  text-primary/70"
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
              className="cursor-pointer border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
                imageRendering: "pixelated",
              }}
            >
              Our all Posts
            </Button>
          </div>
  )
}

export default Instructions