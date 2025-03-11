import React, { useState } from "react"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Trophy, Calendar, Users, Mail, Github, Twitter,Youtube, Gamepad2, Code, Palette, Music, Heart } from "lucide-react"
import Layout from "@/Components/layout/Layout"

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState("pixel-master")
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Hero Section */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className=" text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
            style={{ textShadow: "1px 1px 0px #FF00FF" }}
          >
            ABOUT US
          </Badge>

          <h1
            className=" text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
            style={{ textShadow: "4px 4px 0px #FF00FF" }}
          >
            The S2U
          </h1>

          <p className=" text-lg text-primary/80 max-w-3xl mx-auto">
            We're a team of retro game enthusiasts dedicated to preserving and teaching the art of pixel-perfect game
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className=" text-2xl font-bold text-primary" style={{ textShadow: "2px 2px 0px #FF00FF" }}>
                Our Mission
              </h2>
              <p className=" text-primary/70">
              Inspiring a new generation of content creators to convert viewers into subscribers by allowing them to interact with content before unlocking it, making small and new channels unforgettable.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className=" text-2xl font-bold text-primary" style={{ textShadow: "2px 2px 0px #FF00FF" }}>
                Founded in 2025
              </h2>
              <p className=" text-primary/70">
              It started as a small channel, then evolved into a platform attracting over 754,516 visitors from around the world.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-primary p-4 text-center">
                <h3 className=" text-4xl font-bold text-[#FF00FF]">754k+</h3>
                <p className=" text-sm text-primary/70">visited</p>
              </div>
              <div className="border-2 border-primary p-4 text-center">
                <h3 className=" text-4xl font-bold text-[#FF00FF]">30+</h3>
                <p className=" text-sm text-primary/70">Users Created</p>
              </div>
            </div>
          </div>

          <Card
            className="rounded-none border-4 border-primary bg-background overflow-hidden"
            style={{ boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)" }}
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-[url('/imgs/favicon.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-3xl"><span className="text-primary border-2 border-[#FF00FF]/20 px-4 py-1 rounded-none" style={{ textShadow: "1px 1px 0px #FF00FF" }}>S2U</span> or Subscribe to unlock</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className=" text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none "
            style={{ textShadow: "1px 1px 0px #00FFFF" }}
          >
            OUR TEAM
          </Badge>

          <h2
            className=" text-3xl md:text-4xl font-bold text-primary"
            style={{ textShadow: "3px 3px 0px #00FFFF" }}
          >
            Meet The Characters
          </h2>

          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Our team of pixel art masters brings decades of combined experience in game development.
          </p>
        </div>

        <div className="grid gap-">
            <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: "enissaycula",
                name: "EnissayCula",
                role: "Founder & Youtuber",
                icon: <Youtube className="h-4 w-4" />,
                contact: "https://www.youtube.com/enissaycula"
              },
              {
                id: "yassine-magri",
                name: "Yassine Magri",
                role: "designer & Developer",
                icon: <Code className="h-4 w-4" />,
                contact: "https://github.com/yassinemagri"
              },
              {
                id: "badr-noukh",
                name: "Badr Noukh",
                role: "Full Stack Developer",
                icon: <Code className="h-4 w-4" />,
                contact: "https://github.com/LIZEWESKI"
              },
            ].map((member) => (
              <Button
                key={member.id}
                className={`border-2 rounded-none h-auto p-12 max-sm:p-32 max-md:py-12 flex flex-col items-center text-center gap-2 cursor-pointer transition-all ease-out duration-300 ${
                  activeTeamMember === member.id
                    ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                    : "bg-background text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)",
                }}
                onClick={() => window.open(member.contact)}
              >
                <div className="w-12 h-12 flex items-center justify-center border-2 border-current">{member.icon}</div>
                <div>
                  <p className="font-bold text-2xl max-md:py-3">{member.name}</p>
                  <p className="text-1xl opacity-70">{member.role}</p>
                </div>
              </Button>
            ))}
          </div>
          </div>
        
        </div>
      </div>

    </div>
  )
}
About.layout = (page) => <Layout children={page} />
export default About
