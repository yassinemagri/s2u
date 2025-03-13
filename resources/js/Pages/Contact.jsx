import React from "react"
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send, CheckCircle, Gamepad2 } from "lucide-react"
import Layout from "@/Components/layout/Layout";

const Contact = ()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [glitchEffect, setGlitchEffect] = useState(false)

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 8000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      // Create glitch effect
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)

    }, 1500)
  }

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

      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className=" text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #FF00FF" }}
            >
              CONNECT WITH US
            </Badge>
          </div>

          <h1
            className={` text-4xl md:text-5xl font-bold text-primary ${glitchEffect ? "translate-x-[2px]" : ""} transition-transform duration-75`}
            style={{ textShadow: "4px 4px 0px #FF00FF" }}
          >
            Contact S2U
          </h1>

          <p className=" text-lg text-primary/70 max-w-2xl mx-auto">
            Have questions or feedback? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card
            className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative order-2 lg:order-1"
            style={{ boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)" }}
          >
            {/* Decorative Corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#FF00FF]"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#FF00FF]"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#FF00FF]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#FF00FF]"></div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/10">
                  <Send className="h-5 w-5 text-[#FF00FF]" />
                </div>
                <h2
                  className=" text-xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,0,255,0.3)" }}
                >
                  Send Us a Message
                </h2>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className=" text-primary">
                      Name <span className="text-[#FF00FF]">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=" border-2 border-primary/50 focus:border-[#FF00FF] rounded-none bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className=" text-primary">
                      Email <span className="text-[#FF00FF]">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className=" border-2 border-primary/50 focus:border-[#FF00FF] rounded-none bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className=" text-primary">
                      Message <span className="text-[#FF00FF]">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What would you like to tell us?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className=" border-2 border-primary/50 focus:border-[#FF00FF] rounded-none bg-background min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full  bg-[#FF00FF] hover:bg-[#CC00CC] text-white border-none rounded-none"
                    style={{ boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)" }}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-pulse">Sending</div>
                        <div className="animate-bounce">...</div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Message
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-[#00FF00] bg-[#00FF00]/10 rounded-none">
                      <CheckCircle className="h-8 w-8 text-[#00FF00]" />
                    </div>
                  </div>

                  <h3
                    className=" text-xl font-bold text-primary"
                    style={{ textShadow: "2px 2px 0px rgba(0,255,0,0.3)" }}
                  >
                    Message Sent!
                  </h3>

                  <p className=" text-primary/70">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>

                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", message: "" })
                    }}
                    className=" bg-[#00FF00] hover:bg-[#00CC00] text-black border-none rounded-none"
                    style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,0,0.3)" }}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Contact Info Card */}
            <Card
              className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,255,255,0.3)" }}
            >
              {/* Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#00FFFF]"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#00FFFF]"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#00FFFF]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#00FFFF]"></div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                    <Phone className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <h2
                    className=" text-xl font-bold text-primary"
                    style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                  >
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10 shrink-0 mt-1">
                      <Phone className="h-4 w-4 text-[#00FFFF]" />
                    </div>
                    <div>
                      <h3 className=" font-bold text-primary">Phone</h3>
                      <p className=" text-primary/70">+1 (555) 123-4567</p>
                      <p className=" text-xs text-primary/50">Monday to Friday, 9AM to 5PM Morocco time</p>
                    </div>
                  </div>

                  <Separator className="border-primary/20" />

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10 shrink-0 mt-1">
                      <Mail className="h-4 w-4 text-[#00FFFF]" />
                    </div>
                    <div>
                      <h3 className=" font-bold text-primary">Email</h3>
                      <p className=" text-primary/70">contact@s2u.com</p>
                      <p className=" text-xs text-primary/50">We'll respond as quickly as possible</p>
                    </div>
                  </div>

                  <Separator className="border-primary/20" />

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10 shrink-0 mt-1">
                      <MapPin className="h-4 w-4 text-[#00FFFF]" />
                    </div>
                    <div>
                      <h3 className=" font-bold text-primary">Address</h3>
                      <p className=" text-primary/70">S2U</p>
                      <p className=" text-primary/70">Kenitra, Morocco</p>
                      <p className=" text-xs text-primary/50">Visit us during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pixel Map */}
            <Card
              className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
              style={{ boxShadow: "8px 8px 0px 0px rgba(0,255,255,0.3)" }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                    <MapPin className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <h2
                    className=" text-xl font-bold text-primary"
                    style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                  >
                    Location
                  </h2>
                </div>

                {/* Pixel Art Map */}
                <div className="relative h-[200px] border-2 border-[#00FFFF] bg-[#00FFFF]/5 overflow-hidden">
                  {/* Grid pattern for map */}
                  <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)]">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div key={i} className="border border-[#00FFFF]/10"></div>
                    ))}
                  </div>

                  {/* Roads */}
                  <div className="absolute top-[40%] left-0 right-0 h-[10%] bg-[#333]/50"></div>
                  <div className="absolute top-0 bottom-0 left-[30%] w-[10%] bg-[#333]/50"></div>

                  {/* Buildings */}
                  <div className="absolute top-[10%] left-[10%] w-[15%] h-[25%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>
                  <div className="absolute top-[55%] left-[10%] w-[10%] h-[30%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>
                  <div className="absolute top-[15%] left-[45%] w-[20%] h-[20%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>
                  <div className="absolute top-[55%] left-[45%] w-[15%] h-[25%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>
                  <div className="absolute top-[10%] left-[70%] w-[15%] h-[35%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>
                  <div className="absolute top-[60%] left-[70%] w-[20%] h-[20%] bg-[#00FFFF]/20 border border-[#00FFFF]/30"></div>

                  {/* Location Pin */}
                  <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                    <div className="w-6 h-6 bg-[#FF00FF] relative">
                      <div
                        className="absolute -top-6 left-0 w-0 h-0 
                                    border-l-[12px] border-l-transparent
                                    border-r-[12px] border-r-transparent
                                    border-b-[12px] border-b-[#FF00FF]"
                      ></div>
                    </div>
                  </div>

                  {/* S2U Office Label */}
                  <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 bg-background/80 px-2 py-1 border border-[#FF00FF]">
                    <p className=" text-xs text-[#FF00FF] font-bold">S2U HQ</p>
                  </div>
                </div>

                <Button
                  className="w-full  bg-[#00FFFF] hover:bg-[#00CCCC] text-black border-none rounded-none"
                  style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)" }}
                  onClick={() => window.open("https://www.google.com/maps/place/Kenitra/data=!4m2!3m1!1s0xda7575f8a6d8643:0xc7050653c05e128b?sa=X&ved=1t:242&ictx=111", "_blank")}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Teaser */}
        <Card
          className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
          style={{ boxShadow: "8px 8px 0px 0px rgba(255,255,0,0.3)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10">
                  <Gamepad2 className="h-5 w-5 text-[#FFFF00]" />
                </div>
                <h2
                  className=" text-xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,255,0,0.3)" }}
                >
                  Have More Questions?
                </h2>
              </div>

              <p className=" text-primary/70">
                Check out our FAQ section for answers to commonly asked questions about S2U.
              </p>
            </div>

            <Button
              className=" bg-[#FFFF00] hover:bg-[#CCCC00] text-black border-none rounded-none shrink-0"
              style={{ boxShadow: "4px 4px 0px 0px rgba(255,255,0,0.3)" }}
              onClick={() => window.open("/#faq", "_blank")}
            >
              Visit FAQ Page
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center  text-xs text-primary/50 space-y-2">
          <p>© {new Date().getFullYear()} S2U. All rights reserved.</p>
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
      `}</style>
    </div>
  )
}

Contact.layout = (page) => <Layout children={page} />;
export default Contact;