"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Mail, Cookie, Database, Users, Lock, FileText, AlertTriangle } from "lucide-react"
import Layout from "@/Components/layout/Layout"

const PrivacyPolicyPage = ()=> {
  const [glitchEffect, setGlitchEffect] = useState(false)

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
      <div className="fixed top-20 left-20 w-16 h-16 border-4 border-[#FF00FF]/20 animate-float opacity-20"></div>
      <div className="fixed bottom-40 right-20 w-12 h-12 border-4 border-[#00FFFF]/20 animate-float-delayed opacity-20"></div>
      <div className="fixed top-1/2 left-1/4 w-8 h-8 border-4 border-[#FFFF00]/20 animate-float-slow opacity-20"></div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className=" text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #00FFFF" }}
            >
              OFFICIAL DOCUMENT
            </Badge>
          </div>

          <h1
            className={` text-4xl md:text-5xl font-bold text-primary ${glitchEffect ? "translate-x-[2px]" : ""} transition-transform duration-75`}
            style={{ textShadow: "4px 4px 0px #00FFFF" }}
          >
            Privacy Policy
          </h1>

          <div className="flex justify-center items-center gap-2  text-sm text-primary/70">
            <Shield className="h-4 w-4 text-[#00FFFF]" />
            <span>Last updated: March 13, 2025</span>
          </div>
        </div>

        {/* Main Content */}
        <Card
          className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
          style={{ boxShadow: "8px 8px 0px 0px rgba(0,255,255,0.3)" }}
        >
          {/* Decorative Corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#00FFFF]"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#00FFFF]"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#00FFFF]"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#00FFFF]"></div>

          <div className="space-y-8 ">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-primary/90 leading-relaxed">
                Welcome to Shtark! Your privacy is important to us. This Privacy Policy explains how we collect, use,
                and protect your information when you visit our website (https://www.shtark.com/).
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <Database className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  1. Information We Collect
                </h2>
              </div>

              <div className="pl-14 space-y-3">
                <p className="text-primary/90">
                  <span className="font-bold text-[#00FFFF]">Personal Information:</span> When you contact us or sign
                  up, we may collect your name, email, and other details.
                </p>

                <p className="text-primary/90">
                  <span className="font-bold text-[#00FFFF]">Usage Data:</span> We automatically collect data like your
                  IP address, browser type, and pages visited.
                </p>

                <p className="text-primary/90">
                  <span className="font-bold text-[#00FFFF]">Cookies:</span> We use cookies to improve your experience
                  on our website.
                </p>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <FileText className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  2. How We Use Your Information
                </h2>
              </div>

              <div className="pl-14 space-y-3">
                <p className="text-primary/90">We use your information to:</p>

                <ul className="list-none space-y-2">
                  {[
                    "Provide and improve our services.",
                    "Respond to inquiries and support requests.",
                    "Analyze website traffic and user behavior.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#00FFFF] mt-1">►</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Section 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <Users className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  3. Sharing Your Information
                </h2>
              </div>

              <div className="pl-14">
                <p className="text-primary/90">
                  We do not sell your personal data. However, we may share information with third-party services for
                  analytics and website functionality.
                </p>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Section 4 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <Lock className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  4. Security
                </h2>
              </div>

              <div className="pl-14">
                <p className="text-primary/90">
                  We take reasonable measures to protect your data but cannot guarantee complete security.
                </p>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Section 5 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <Shield className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  5. Your Rights
                </h2>
              </div>

              <div className="pl-14">
                <p className="text-primary/90">
                  You can request access, correction, or deletion of your data by contacting us at{" "}
                  <span className="text-[#00FFFF]">privacy@shtark.com</span>.
                </p>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Section 6 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <AlertTriangle className="h-5 w-5 text-[#00FFFF]" />
                </div>
                <h2
                  className="font-bold text-xl text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  6. Changes to This Policy
                </h2>
              </div>

              <div className="pl-14">
                <p className="text-primary/90">
                  We may update this policy from time to time. The latest version will always be available on this page.
                </p>
              </div>
            </div>

            <Separator className="border-primary/20" />

            {/* Contact Section */}
            <div className="pt-4 text-center space-y-4">
              <p className="text-primary/90">
                For questions, contact us at <span className="text-[#00FFFF]">privacy@shtark.com</span>.
              </p>

              <Button
                className=" bg-[#00FFFF] hover:bg-[#00CCCC] text-black border-none rounded-none"
                style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)" }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </Card>

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
      `}</style>
    </div>
  )
}

PrivacyPolicyPage.layout = (page) => <Layout children={page} />;
export default PrivacyPolicyPage;