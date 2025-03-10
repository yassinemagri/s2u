import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className="font-Pixel text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
            style={{ textShadow: "1px 1px 0px #FF00FF" }}
          >
            05 — Frequently Asked
          </Badge>

          <h2
            className="font-Pixel text-4xl md:text-5xl font-bold text-primary"
            style={{ textShadow: "4px 4px 0px #FF00FF" }}
          >
            Got a few questions?
          </h2>
        </div>

        <div className="relative">
          {/* Decorative Pixels */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-primary bg-transparent" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-[#FF00FF] bg-transparent" />

          <Accordion
            type="single"
            collapsible
            className="border-4 border-primary bg-background shadow-[8px_8px_0px_0px_rgba(255,0,255,0.3)]"
          >
            <AccordionItem value="item-1" className="border-primary px-4">
              <AccordionTrigger className="font-Pixel text-xl hover:text-[#FF00FF] hover:no-underline">
                Its Really Works?
              </AccordionTrigger>
              <AccordionContent className="font-Pixel text-primary/70 space-y-4">
                <p>
                  Created by{" "}
                  <span className="text-[#00FF00]">Developers</span>: 
                </p>
                <p>
                  We used an smart system in the unlock page, where your your
                  fans perform actions before unlocking your content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-primary px-4">
              <AccordionTrigger className="font-Pixel text-xl hover:text-[#FF00FF] hover:no-underline">
                Subscribers Provided By This Website Is Real Or Fake?
              </AccordionTrigger>
              <AccordionContent className="font-Pixel text-primary/70">
              <p>
                  Created by{" "}
                  <span className="text-[#FF00FF]">Admin</span>: 
                </p>
                <p>
                  Subscriptions through the locked link will be 100% genuine, as
                  they will be relevant to your channel and videos. Subscribers
                  will watch all of your content because they are interested in
                  your material and will follow you in every new video.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-primary px-4">
              <AccordionTrigger className="font-Pixel text-xl hover:text-[#FF00FF] hover:no-underline">
                HIs Use Of This Website Is Safe or It Follows Community Rules?
              </AccordionTrigger>
              <AccordionContent className="font-Pixel text-primary/70">
              <p>
                  Created by{" "}
                  <span className="text-[#FF00FF]">Admin</span>: 
                </p>
                <p>
                  Yes, don't worry it is safe and use of this website is
                  according to coomunity guildeline rules.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
