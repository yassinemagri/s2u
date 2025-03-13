"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ScrollText,
  Shield,
  AlertTriangle,
  FileText,
  CheckSquare,
  Clock,
  Mail,
  Info,
  Youtube,
  Lock,
  Users,
} from "lucide-react"
import Layout from "@/Components/layout/Layout"

const TermsAndConditionsPage = ()=> {
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [lastUpdated] = useState("March 15, 2025")

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 10000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-5 pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-primary"></div>
        ))}
      </div>

      {/* Decorative Pixels */}
      <div className="fixed top-20 left-20 w-16 h-16 border-4 border-[#FFFF00]/20 animate-float opacity-20"></div>
      <div className="fixed bottom-40 right-20 w-12 h-12 border-4 border-[#FF00FF]/20 animate-float-delayed opacity-20"></div>
      <div className="fixed top-1/2 left-1/4 w-8 h-8 border-4 border-[#00FFFF]/20 animate-float-slow opacity-20"></div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="font-mono text-[#FFFF00] border-2 border-[#FFFF00]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #FFFF00" }}
            >
              LEGAL DOCUMENT
            </Badge>
          </div>

          <h1
            className={`font-mono text-4xl md:text-5xl font-bold text-primary ${glitchEffect ? "translate-x-[2px]" : ""} transition-transform duration-75`}
            style={{ textShadow: "4px 4px 0px #FFFF00" }}
          >
            Terms & Conditions
          </h1>

          <div className="flex justify-center items-center gap-2 font-mono text-sm text-primary/70">
            <Clock className="h-4 w-4 text-[#FFFF00]" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Main Content */}
        <Card
          className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
          style={{ boxShadow: "8px 8px 0px 0px rgba(255,255,0,0.3)" }}
        >
          {/* Decorative Corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#FFFF00]"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#FFFF00]"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#FFFF00]"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#FFFF00]"></div>

          <div className="space-y-8 font-mono">
            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10">
                  <ScrollText className="h-5 w-5 text-[#FFFF00]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,255,0,0.3)" }}
                >
                  Introduction
                </h2>
              </div>

              <div className="pl-14 space-y-3">
                <p className="text-primary/90 leading-relaxed">
                  Welcome to s2u ("Subscribe to Unlock")! These Terms and Conditions govern your use of our platform,
                  which enables content creators to share exclusive content with their audience in exchange for YouTube
                  channel subscriptions. By accessing or using s2u, you agree to be bound by these Terms. Please read
                  them carefully.
                </p>

                <div className="border-2 border-[#FFFF00]/30 bg-[#FFFF00]/5 p-4">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-[#FFFF00] shrink-0 mt-0.5" />
                    <p className="text-sm text-primary/80">
                      If you do not agree with any part of these terms, you may not access or use our platform. This
                      agreement applies to both content creators who use our service to share content and users who
                      access that content.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Accordion Sections */}
            <Accordion type="single" collapsible className="w-full">
              {/* Section 1: Definitions */}
              <AccordionItem value="definitions" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <FileText className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      1. Definitions
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>In these Terms and Conditions, unless the context requires otherwise:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        <span className="font-bold">s2u</span>: Refers to our "Subscribe to Unlock" platform, website,
                        and services.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        <span className="font-bold">Content Creator</span>: Any individual or entity that uses our
                        platform to share content with their audience.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        <span className="font-bold">User</span>: Any individual who accesses content through our
                        platform by subscribing to a Content Creator's YouTube channel.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        <span className="font-bold">Content</span>: Any files, links, information, or other materials
                        shared by Content Creators through our platform.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        <span className="font-bold">Subscription</span>: The act of subscribing to a Content Creator's
                        YouTube channel.
                      </div>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2: Content Creator Terms */}
              <AccordionItem value="creator-terms" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Youtube className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      2. Content Creator Terms
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>By using s2u as a Content Creator, you agree to the following terms:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You must have a valid YouTube channel that you own or have permission to promote.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        You are responsible for all content you share through our platform and must ensure it complies
                        with these Terms, our Acceptable Use Policy, and YouTube's Terms of Service.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        You must have all necessary rights, licenses, and permissions for any content you share.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        You may not use our platform to distribute malware, phishing links, or other harmful content.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You may not make false claims about the content you are sharing.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You acknowledge that s2u does not guarantee an increase in subscribers or engagement.</div>
                    </li>
                  </ul>

                  <div className="border-2 border-[#FFFF00]/30 bg-[#FFFF00]/5 p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-[#FFFF00] shrink-0 mt-0.5" />
                      <p className="text-sm">
                        We reserve the right to remove any content or terminate your account if we determine, in our
                        sole discretion, that your content violates these Terms or is otherwise inappropriate.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 3: User Terms */}
              <AccordionItem value="user-terms" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Users className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      3. User Terms
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>By using s2u as a User to access content, you agree to the following terms:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You must have a valid YouTube account to subscribe to Content Creators.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You agree to subscribe to the specified YouTube channel to access the content.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        You understand that unsubscribing from a channel may result in loss of access to the content.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You agree not to circumvent or attempt to bypass the subscription verification process.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        You acknowledge that s2u is not responsible for the content provided by Content Creators.
                      </div>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Section 4: YouTube API Services */}
              <AccordionItem value="youtube-api" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Youtube className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      4. YouTube API Services
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>
                    Our service uses the YouTube API Services to verify subscriptions. By using s2u, you also agree to
                    be bound by the{" "}
                    <a
                      href="https://www.youtube.com/t/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFFF00] underline"
                    >
                      YouTube Terms of Service
                    </a>
                    .
                  </p>

                  <p>Additionally:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        We only access your YouTube data to verify your subscription status to the specified channel.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>We do not store your YouTube credentials.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        Google's Privacy Policy (
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FFFF00] underline"
                        >
                          https://policies.google.com/privacy
                        </a>
                        ) also applies to your use of YouTube API Services through our platform.
                      </div>
                    </li>
                  </ul>

                  <div className="border-2 border-[#FFFF00]/30 bg-[#FFFF00]/5 p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-[#FFFF00] shrink-0 mt-0.5" />
                      <p className="text-sm">
                        You can revoke s2u's access to your YouTube data at any time by visiting{" "}
                        <a
                          href="https://security.google.com/settings/security/permissions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FFFF00] underline"
                        >
                          Google Security Settings
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 5: Content Restrictions */}
              <AccordionItem value="content-restrictions" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Shield className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      5. Content Restrictions
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>Content shared through s2u must not:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Violate any applicable laws or regulations.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Infringe on intellectual property rights of others.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Contain malware, viruses, or other harmful code.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Include adult content, excessive violence, or hate speech.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Promote illegal activities or substances.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Contain personal or private information of individuals without consent.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Violate YouTube's Community Guidelines or Terms of Service.</div>
                    </li>
                  </ul>

                  <div className="border-2 border-[#FFFF00]/30 bg-[#FFFF00]/5 p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-[#FFFF00] shrink-0 mt-0.5" />
                      <p className="text-sm">
                        We reserve the right to remove any content and terminate accounts that violate these
                        restrictions. We may also report illegal content to appropriate authorities.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 6: Subscription Verification */}
              <AccordionItem value="subscription-verification" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <CheckSquare className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      6. Subscription Verification
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>Our subscription verification process works as follows:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>We use the YouTube API to verify that you have subscribed to the specified channel.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>You must grant our platform permission to access your subscription data.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>We may periodically re-verify your subscription status.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>If you unsubscribe, you may lose access to the content.</div>
                    </li>
                  </ul>

                  <p>
                    We strive to make this process as seamless as possible, but technical limitations or changes to the
                    YouTube API may affect our verification process.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 7: Intellectual Property */}
              <AccordionItem value="intellectual-property" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <FileText className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      7. Intellectual Property
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>
                    The s2u platform and all its original content, features, and functionality are owned by s2u and are
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>

                  <p>Regarding content shared through our platform:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Content Creators retain all ownership rights to their content.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        By sharing content through s2u, Content Creators grant us a non-exclusive license to host,
                        store, and make the content available to Users who have subscribed.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        Users may not redistribute, copy, or share the content they access through s2u without the
                        Content Creator's permission.
                      </div>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Section 8: Limitation of Liability */}
              <AccordionItem value="liability" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <AlertTriangle className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      8. Limitation of Liability
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>s2u is not responsible for the content shared by Content Creators.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>We do not guarantee the accuracy, completeness, or usefulness of any content.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        We are not liable for any damages resulting from your use of our platform or any content
                        accessed through it.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        We are not responsible for any issues with the YouTube API or subscription verification process.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>
                        Our liability is limited to the amount you paid for our service or $100, whichever is greater.
                      </div>
                    </li>
                  </ul>

                  <div className="border-2 border-[#FFFF00]/30 bg-[#FFFF00]/5 p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-[#FFFF00] shrink-0 mt-0.5" />
                      <p className="text-sm">
                        Some jurisdictions do not allow the exclusion of certain warranties or the limitation of
                        liability for certain damages. Accordingly, some of the above limitations may not apply to you.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 9: Termination */}
              <AccordionItem value="termination" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Lock className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      9. Termination
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>
                    We may terminate or suspend your account and access to our services immediately, without prior
                    notice or liability, for any reason, including:
                  </p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Breach of these Terms and Conditions.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Violation of our content restrictions.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Requests by law enforcement or government agencies.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Discontinuation or material modification of our services.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Unexpected technical or security issues.</div>
                    </li>
                  </ul>

                  <p>
                    Upon termination, your right to use the services will immediately cease. All provisions of the Terms
                    which by their nature should survive termination shall survive, including ownership provisions,
                    warranty disclaimers, and limitations of liability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 10: Changes to Terms */}
              <AccordionItem value="changes" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <Clock className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      10. Changes to Terms
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of any material
                    changes by:
                  </p>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Posting a notice on our website.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Sending an email to the address associated with your account.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      <div>Updating the "Last Updated" date at the top of these Terms.</div>
                    </li>
                  </ul>

                  <p>
                    Your continued use of our services after such modifications will constitute your acknowledgment and
                    agreement to the modified terms.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Section 11: Governing Law */}
              <AccordionItem value="governing-law" className="border-b border-primary/20">
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10 group-hover:bg-[#FFFF00]/20 transition-colors">
                      <FileText className="h-4 w-4 text-[#FFFF00]" />
                    </div>
                    <span className="font-bold text-primary group-hover:text-[#FFFF00] transition-colors">
                      11. Governing Law
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 space-y-3 text-primary/80">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                    which s2u is established, without regard to its conflict of law provisions.
                  </p>

                  <p>
                    Any disputes arising under or in connection with these Terms shall be subject to the exclusive
                    jurisdiction of the courts located in that jurisdiction.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="border-primary/20" />

            {/* Contact Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10">
                  <Mail className="h-5 w-5 text-[#FFFF00]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,255,0,0.3)" }}
                >
                  Contact Us
                </h2>
              </div>

              <div className="pl-14 space-y-3">
                <p className="text-primary/90">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>

                <div className="border-2 border-[#FFFF00] p-4 bg-[#FFFF00]/5">
                  <p className="font-bold text-primary">s2u Legal Department</p>
                  <p className="text-primary/80">Email: legal@s2u.com</p>
                  <p className="text-primary/80">Address: 123 Pixel Street, Suite 404, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="font-mono bg-[#FFFF00] hover:bg-[#CCCC00] text-black border-none rounded-none"
            style={{ boxShadow: "4px 4px 0px 0px rgba(255,255,0,0.3)" }}
            onClick={() => window.print()}
          >
            <FileText className="mr-2 h-4 w-4" />
            Print Terms
          </Button>

          <Button
            variant="outline"
            className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
            onClick={() => (window.location.href = "/privacy-policy")}
          >
            <Shield className="mr-2 h-4 w-4" />
            View Privacy Policy
          </Button>

          <Button
            variant="outline"
            className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
            onClick={() => (window.location.href = "/contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center font-mono text-xs text-primary/50 space-y-2">
          <p>© {new Date().getFullYear()} s2u. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#FFFF00] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-[#FFFF00] transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/contact" className="hover:text-[#FFFF00] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Pixel Art */}
      <div className="fixed bottom-4 right-4 opacity-30 z-10">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8)
              const col = i % 8
              const isPixelOn =
                (row === 0 && [3, 4].includes(col)) ||
                (row === 1 && [2, 3, 4, 5].includes(col)) ||
                (row === 2 && [1, 2, 3, 4, 5, 6].includes(col)) ||
                (row === 3 && [1, 2, 3, 4, 5, 6].includes(col)) ||
                (row === 4 && [1, 2, 3, 4, 5, 6].includes(col)) ||
                (row === 5 && [2, 3, 4, 5].includes(col)) ||
                (row === 6 && [3, 4].includes(col)) ||
                (row === 7 && [3, 4].includes(col))

              return (
                <div
                  key={i}
                  className={`${isPixelOn ? "bg-[#FFFF00]" : "bg-transparent"} border border-[#FFFF00]/10`}
                ></div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        @media print {
          .fixed, .animate-float, .animate-float-delayed, .animate-float-slow {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

TermsAndConditionsPage.layout = (page) => <Layout children={page} />
export default TermsAndConditionsPage