import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
    const faqArray = [
        {   
            questions: "Its Really Works?",
            answers: "We used an smart system in the unlock page, where your your fans perform actions before unlocking your content.",
            createdby: "Developers",
        },
        {
            questions: "Subscribers Provided By This Website Is Real Or Fake?",
            answers: "Subscriptions through the locked link will be 100% genuine, as They will be relevant to your channel and videos. Subscribers will watch all of your content because they are interested in your material and will follow you in every new video.",
            createdby: "",
        },
        {
            questions: "HIs Use Of This Website Is Safe or It Follows Community Rules?",
            answers: "Yes, don't worry it is safe and use of this website is according to coomunity guildeline rules.",
            createdby: "",
        },
    ];
    return (
        <section className="container mx-auto px-4 py-24" id="faq">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-4 text-center">
                    <Badge
                        variant="outline"
                        className="font-Pixel text-primary border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                        style={{ textShadow: "1px 1px 0px #00FF00" }}
                    >
                        02 — Frequently Asked
                    </Badge>

                    <h2
                        className="font-Pixel text-4xl md:text-5xl font-bold text-primary"
                        style={{ textShadow: "4px 4px 0px #00FF00" }}
                    >
                        Got a few questions?
                    </h2>
                </div>

                <div className="relative">
                    {/* Decorative Pixels */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-primary bg-transparent" />
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-[#00FF00] bg-transparent" />

                    <Accordion
                        type="single"
                        collapsible
                        className="border-4 border-primary bg-background shadow-[8px_8px_0px_0px_#00ff0020]"
                    >
                        {faqArray.map((faq,i) => {
                            return (
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="border-primary px-4"
                                    key={i}
                                >
                                    <AccordionTrigger className="font-Pixel text-xl hover:text-[#00FF00] hover:no-underline cursor-pointer">
                                        {faq.questions}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-Pixel text-primary/70 space-y-4">
                                        <p>
                                            Created by{" "}
                                            <span className="text-[#00FF00]">
                                                {faq.createdby ? faq.createdby : 'Admin'}
                                            </span>:
                                        </p>
                                        <p className="text-lg">{faq.answers}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}

                    </Accordion>
                </div>
            </div>
        </section>
    );
}
