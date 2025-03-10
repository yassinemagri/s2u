"use client"

import { useState } from "react"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Trophy, Calendar, Users, Mail, Github, Twitter,Youtube, Gamepad2, Code, Palette, Music, Heart } from "lucide-react"

export default function About() {
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
            The Shtark
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
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className=" text-sm">Our studio in Tokyo, Japan</p>
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
            className=" text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none"
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

          <p className=" text-lg text-primary/80 max-w-3xl mx-auto">
            Our team of pixel art masters brings decades of combined experience in game development.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
            {[
              {
                id: "enissaycula",
                name: "EnissayCula",
                role: "Founder & Youtuber",
                icon: <Youtube className="h-4 w-4" />,
              },
              {
                id: "yassine-magri",
                name: "Yassine Magri",
                role: "designer & Developer",
                icon: <Code className="h-4 w-4" />,
              },
              {
                id: "badr-noukh",
                name: "Badr Noukh",
                role: "Full Stack Developer",
                icon: <Code className="h-4 w-4" />,
              },
              { 
                id: "sound-byte", 
                name: "Sound Byte",
                role: "Audio Designer",
                icon: <Music className="h-4 w-4" />
            },
            ].map((member) => (
              <Button
                key={member.id}
                variant={activeTeamMember === member.id ? "default" : "outline"}
                className={` border-2 rounded-none h-auto py-4 flex flex-col items-center text-center gap-2 ${
                  activeTeamMember === member.id
                    ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                    : "bg-background text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)",
                }}
                onClick={() => setActiveTeamMember(member.id)}
              >
                <div className="w-8 h-8 flex items-center justify-center border-2 border-current">{member.icon}</div>
                <div>
                  <p className="font-bold">{member.name}</p>
                  <p className="text-xs opacity-70">{member.role}</p>
                </div>
              </Button>
            ))}
          </div>

          <Card
            className="rounded-none border-4 border-primary bg-background overflow-hidden p-6"
            style={{ boxShadow: "8px 8px 0px 0px rgba(0,255,255,0.3)" }}
          >
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
              <div className="relative">
                <div className="aspect-square border-4 border-[#00FFFF] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-[#00FFFF] bg-transparent" />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className=" text-2xl font-bold text-[#00FFFF]">
                    {activeTeamMember === "pixel-master" && "Pixel Master"}
                    {activeTeamMember === "code-wizard" && "Code Wizard"}
                    {activeTeamMember === "art-sprite" && "Art Sprite"}
                    {activeTeamMember === "sound-byte" && "Sound Byte"}
                  </h3>
                  <p className=" text-primary/70">
                    {activeTeamMember === "pixel-master" && "Founder & Lead Instructor"}
                    {activeTeamMember === "code-wizard" && "Technical Director"}
                    {activeTeamMember === "art-sprite" && "Creative Director"}
                    {activeTeamMember === "sound-byte" && "Audio Designer"}
                  </p>
                </div>

                <p className=" text-primary/70">
                  {activeTeamMember === "pixel-master" &&
                    "With 15+ years of experience in indie game development, Pixel Master founded our studio after working on several successful retro-inspired titles. Their passion for teaching has helped thousands of students create their first games."}
                  {activeTeamMember === "code-wizard" &&
                    "A former AAA game developer who fell in love with indie development, Code Wizard handles all the technical aspects of our courses. They specialize in optimizing game performance while maintaining authentic retro feel."}
                  {activeTeamMember === "art-sprite" &&
                    "Art Sprite brings traditional art training to the pixel world. Their techniques for creating expressive characters and environments within pixel constraints have been featured in multiple game art publications."}
                  {activeTeamMember === "sound-byte" &&
                    "A composer and sound designer specializing in chiptune and retro game audio, Sound Byte creates all the music for our courses and teaches students how to craft authentic 8-bit and 16-bit soundtracks."}
                </p>

                <div className="pt-2">
                  <h4 className=" text-sm font-bold text-primary mb-2">CHARACTER STATS</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FFFF]  text-xs">►</span>
                      <span className=" text-xs text-primary/70">Pixel Art: 98/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FFFF]  text-xs">►</span>
                      <span className=" text-xs text-primary/70">Game Design: 95/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FFFF]  text-xs">►</span>
                      <span className=" text-xs text-primary/70">Coding: 85/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FFFF]  text-xs">►</span>
                      <span className=" text-xs text-primary/70">Teaching: 99/100</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="rounded-none">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-none">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-none">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className=" text-[#00FF00] border-2 border-[#00FF00]/20 px-4 py-2 rounded-none"
            style={{ textShadow: "1px 1px 0px #00FF00" }}
          >
            OUR JOURNEY
          </Badge>

          <h2
            className=" text-3xl md:text-4xl font-bold text-primary"
            style={{ textShadow: "3px 3px 0px #00FF00" }}
          >
            Level Progression
          </h2>

          <p className=" text-lg text-primary/80 max-w-3xl mx-auto">
            From humble beginnings to a global community of pixel art enthusiasts.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-12 relative">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description: "Started as a Discord community sharing pixel art tips and resources.",
                icon: <Calendar className="h-4 w-4" />,
                position: "right",
              },
              {
                year: "2019",
                title: "First Course Launch",
                description:
                  "Released our first course 'Pixel Art Fundamentals' with over 5,000 students in the first month.",
                icon: <Trophy className="h-4 w-4" />,
                position: "left",
              },
              {
                year: "2020",
                title: "Community Growth",
                description: "Reached 20,000 students and launched our community game jam events.",
                icon: <Users className="h-4 w-4" />,
                position: "right",
              },
              {
                year: "2022",
                title: "Studio Expansion",
                description: "Opened our physical studio in Tokyo and expanded our team to 10 full-time instructors.",
                icon: <Gamepad2 className="h-4 w-4" />,
                position: "left",
              },
              {
                year: "2023",
                title: "Today",
                description: "Over 50,000 students worldwide with hundreds of published games created by our alumni.",
                icon: <Heart className="h-4 w-4" />,
                position: "right",
              },
            ].map((item, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8 items-center">
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-[#00FF00] border-4 border-background transform translate-x-[-12px] md:translate-x-[-12px]"></div>

                <div className={`${item.position === "left" ? "md:pr-12" : "md:order-last md:pl-12"}`}>
                  <Card
                    className={`rounded-none border-4 border-primary bg-background p-6 ${item.position === "left" ? "ml-8 md:ml-0" : "ml-8 md:ml-0"}`}
                    style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,0,0.3)" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-[#00FF00] shrink-0">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-[#00FF00] text-black rounded-none">{item.year}</Badge>
                          <h3 className=" text-xl font-bold text-primary">{item.title}</h3>
                        </div>
                        <p className=" text-primary/70">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={`hidden md:block ${item.position === "right" ? "md:pr-12" : "md:pl-12"}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className=" text-[#FFFF00] border-2 border-[#FFFF00]/20 px-4 py-2 rounded-none"
            style={{ textShadow: "1px 1px 0px #FFFF00" }}
          >
            JOIN US
          </Badge>

          <h2
            className=" text-3xl md:text-4xl font-bold text-primary"
            style={{ textShadow: "3px 3px 0px #FFFF00" }}
          >
            Ready Player One?
          </h2>

          <p className=" text-lg text-primary/80 max-w-3xl mx-auto">
            Start your pixel art journey today and join our community of retro game developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card
            className="rounded-none border-4 border-primary bg-background p-6"
            style={{ boxShadow: "8px 8px 0px 0px rgba(255,255,0,0.3)" }}
          >
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger
                  value="courses"
                  className=" rounded-none data-[state=active]:bg-[#FFFF00] data-[state=active]:text-black"
                >
                  Courses
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className=" rounded-none data-[state=active]:bg-[#FFFF00] data-[state=active]:text-black"
                >
                  Community
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className=" rounded-none data-[state=active]:bg-[#FFFF00] data-[state=active]:text-black"
                >
                  Events
                </TabsTrigger>
              </TabsList>
              <TabsContent value="courses" className="space-y-4">
                <h3 className=" text-xl font-bold text-primary">Our Courses</h3>
                <p className=" text-primary/70">
                  From beginner to advanced, our courses cover every aspect of retro game development.
                </p>
                <ul className="space-y-2">
                  {[
                    "Pixel Art Fundamentals",
                    "Character Animation Masterclass",
                    "Game Environment Design",
                    "Complete Retro Game Development",
                  ].map((course, index) => (
                    <li key={index} className="flex items-start gap-3  text-primary/70">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="community" className="space-y-4">
                <h3 className=" text-xl font-bold text-primary">Join Our Community</h3>
                <p className=" text-primary/70">
                  Connect with fellow pixel artists and game developers in our active community.
                </p>
                <ul className="space-y-2">
                  {[
                    "Discord server with 15,000+ members",
                    "Weekly feedback sessions",
                    "Monthly challenges with prizes",
                    "Job board for pixel art opportunities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3  text-primary/70">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="events" className="space-y-4">
                <h3 className=" text-xl font-bold text-primary">Upcoming Events</h3>
                <p className=" text-primary/70">
                  Join us for virtual and in-person events throughout the year.
                </p>
                <ul className="space-y-2">
                  {[
                    "Summer Game Jam (July 15-22)",
                    "Pixel Art Exhibition (August 5)",
                    "Tokyo Game Show Meetup (Sept 15)",
                    "Annual Retro Awards (December 10)",
                  ].map((event, index) => (
                    <li key={index} className="flex items-start gap-3  text-primary/70">
                      <span className="text-[#FFFF00] mt-1">►</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className=" text-2xl font-bold text-primary" style={{ textShadow: "2px 2px 0px #FFFF00" }}>
                Start Your Journey
              </h3>
              <p className=" text-primary/70">
                Whether you're a complete beginner or an experienced developer looking to expand your skills, we have
                resources for every level.
              </p>
            </div>

            <div className="grid gap-4">
              <Button
                size="lg"
                className=" bg-[#FFFF00] hover:bg-[#FFFF00]/90 text-black border-none rounded-none w-full"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(255,255,0,0.3)",
                }}
              >
                Explore Our Courses
              </Button>

              <Button
                size="lg"
                variant="outline"
                className=" border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none w-full"
                style={{
                  boxShadow: "4px 4px 0px 0px rgba(255,255,0,0.3)",
                }}
              >
                Join Discord Community
              </Button>
            </div>

            <div className="border-t-2 border-primary/20 pt-6">
              <p className=" text-primary/70 text-sm">
                "The Pixel Masters course completely changed how I approach game development. I went from struggling
                with basic sprites to creating complete game assets in just a few weeks!"
              </p>
              <p className=" text-primary font-bold text-sm mt-2">— Sarah K., Indie Game Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

