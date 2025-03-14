import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  Wrench,
  Palette,
  Globe,
  Server,
  Github,
  Figma,
  CreditCard,
  Share2,
  Zap,
  CheckCircle,
} from "lucide-react"
import Layout from "@/Components/layout/Layout"

const DevDetails = ()=> {
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [activeTab, setActiveTab] = useState("frontend")
  const [progressValues, setProgressValues] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
    laravel: 0,
    php: 0,
    mysql: 0,
    git: 0,
    figma: 0,
  })

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 8000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Animate progress bars on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        html: 95,
        css: 90,
        js: 88,
        react: 92,
        laravel: 85,
        php: 80,
        mysql: 87,
        git: 89,
        figma: 83,
      })
    }, 500)

    return () => clearTimeout(timer)
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

      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className=" text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #00FFFF" }}
            >
              TECH STACK
            </Badge>
          </div>

          <h1
            className={` text-4xl md:text-5xl font-bold text-primary ${glitchEffect ? "translate-x-[2px]" : ""} transition-transform duration-75`}
            style={{ textShadow: "4px 4px 0px #00FFFF" }}
          >
            Developer Details
          </h1>

          <p className=" text-lg text-primary/70 max-w-3xl mx-auto">
            At s2u, we use the latest technologies to provide a seamless and efficient user experience. Our platform is
            designed using an innovative set of languages and frameworks.
          </p>
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

          <Tabs defaultValue="frontend" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 mb-6 rounded-none border-2 border-primary bg-background p-1 ">
              <TabsTrigger
                value="frontend"
                className="rounded-none data-[state=active]:bg-[#FF00FF] data-[state=active]:text-white"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="rounded-none data-[state=active]:bg-[#00FFFF] data-[state=active]:text-black"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="rounded-none data-[state=active]:bg-[#FFFF00] data-[state=active]:text-black"
              >
                Database
              </TabsTrigger>
              <TabsTrigger
                value="apis"
                className="rounded-none data-[state=active]:bg-[#00FF00] data-[state=active]:text-black"
              >
                APIs
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="rounded-none data-[state=active]:bg-[#FF8C00] data-[state=active]:text-white"
              >
                Tools
              </TabsTrigger>
            </TabsList>

            {/* Frontend Tab */}
            <TabsContent value="frontend" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/10">
                  <Code className="h-6 w-6 text-[#FF00FF]" />
                </div>
                <h2
                  className=" text-2xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,0,255,0.3)" }}
                >
                  Frontend by Yassine Magri
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">


                  {/* CSS */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/10">
                          <span className=" font-bold text-[#FF00FF]">CSS</span>
                        </div>
                        <h3 className=" font-bold text-primary">Tailwind & ShadCN</h3>
                      </div>
                      
                    </div>

                    <p className=" text-sm text-primary/70">
                      To create visually appealing websites, using Tailwind CSS for modern, fast designs. We also
                      leveraged ShadCN for advanced component control.
                    </p>
                  </div>

                </div>

                <div className="space-y-6">
                  {/* React.js */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/10">
                          <span className=" font-bold text-[#FF00FF]">⚛️</span>
                        </div>
                        <h3 className=" font-bold text-primary">React.js (with Vite)</h3>
                      </div>
                      
                    </div>
                    
                    <p className=" text-sm text-primary/70">
                      We use React.js, the popular JavaScript library, to build highly responsive front-end interfaces,
                      while Vite speeds up the development process.
                    </p>
                  </div>

                  {/* Design Style */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/10">
                          <Palette className="h-4 w-4 text-[#FF00FF]" />
                        </div>
                        <h3 className=" font-bold text-primary">Retro Pixel Design</h3>
                      </div>
                      <Badge className="bg-[#FF00FF] text-white rounded-none">100%</Badge>
                    </div>
                    <div className="h-2 bg-primary/20 w-full">
                      <div
                        className="h-full bg-[#FF00FF] w-full"
                        style={{
                          clipPath:
                            "polygon(0 0, 12.5% 0, 12.5% 100%, 25% 100%, 25% 0, 37.5% 0, 37.5% 100%, 50% 100%, 50% 0, 62.5% 0, 62.5% 100%, 75% 100%, 75% 0, 87.5% 0, 87.5% 100%, 100% 100%, 100% 0)",
                        }}
                      ></div>
                    </div>
                    <p className=" text-sm text-primary/70">
                      All pages are designed in Retro Pixel style, adding a distinctive artistic touch that evokes the
                      nostalgia of classic video games.
                    </p>
                  </div>

                  {/* Pixel Art Demo */}
                  <div className="border-2 border-[#FF00FF] p-4 bg-[#FF00FF]/5">
                    <h3 className=" font-bold text-primary mb-2">Pixel Art Elements</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-[#FF00FF]/20 border border-[#FF00FF]/30 flex items-center justify-center"
                        >
                          <div
                            className={`w-6 h-6 bg-[#FF00FF] ${i === 0 ? "animate-bounce" : i === 1 ? "animate-pulse" : i === 2 ? "animate-spin" : i === 3 ? "animate-ping" : "animate-float"}`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Backend Tab */}
            <TabsContent value="backend" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                  <Server className="h-6 w-6 text-[#00FFFF]" />
                </div>
                <h2
                  className=" text-2xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                    Backend by Badr Noukh
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Laravel */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                        <span className=" font-bold text-[#00FFFF]">L</span>
                      </div>
                      <h3 className=" font-bold text-primary">Laravel +5.4</h3>
                    </div>
                    </div>

                  <p className=" text-sm text-primary/70">
                    We use the Laravel framework to manage requests efficiently, build modern APIs, and handle complex
                    operations seamlessly.
                  </p>
                </div>

                {/* PHP */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/10">
                        <span className=" font-bold text-[#00FFFF]">PHP</span>
                      </div>
                      <h3 className=" font-bold text-primary">PHP  +8.2</h3>
                    </div>
                  </div>

                  <p className=" text-sm text-primary/70">
                    PHP is used to develop server applications, ensuring high performance and secure, fast data
                    processing.
                  </p>
                </div>
              </div>

              {/* Backend Architecture Visualization */}
              <div className="border-2 border-[#00FFFF] p-4 bg-[#00FFFF]/5 mt-4">
                <h3 className=" font-bold text-primary mb-4">Backend Architecture</h3>
                <div className="relative h-[200px]">
                  {/* Client */}
                  <div className="absolute top-0 left-0 w-[20%] border-2 border-[#00FFFF] bg-[#00FFFF]/20 p-2">
                    <p className=" text-xs text-center">Client</p>
                  </div>

                  {/* API Layer */}
                  <div className="absolute top-[40%] left-[30%] w-[40%] border-2 border-[#00FFFF] bg-[#00FFFF]/20 p-2 transform -translate-y-1/2">
                    <p className=" text-xs text-center">Laravel API</p>
                  </div>

                  {/* Database */}
                  <div className="absolute bottom-0 right-0 w-[20%] border-2 border-[#00FFFF] bg-[#00FFFF]/20 p-2">
                    <p className=" text-xs text-center">Database</p>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    {/* Client to API */}
                    <path d="M 80,20 L 180,80" stroke="#00FFFF" strokeWidth="2" strokeDasharray="5,5" fill="none" />

                    {/* API to Database */}
                    <path d="M 300,80 L 400,180" stroke="#00FFFF" strokeWidth="2" strokeDasharray="5,5" fill="none" />

                    {/* Database to Client (Response) */}
                    <path
                      d="M 400,180 C 300,150 200,150 80,20"
                      stroke="#00FFFF"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>

                  {/* Data Packets */}
                  <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-[#00FFFF] animate-ping"></div>
                  <div
                    className="absolute top-[60%] left-[60%] w-4 h-4 bg-[#00FFFF] animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-[40%] left-[40%] w-4 h-4 bg-[#00FFFF] animate-ping"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>
            </TabsContent>

            {/* Database Tab */}
            <TabsContent value="database" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10">
                  <Database className="h-6 w-6 text-[#FFFF00]" />
                </div>
                <h2
                  className=" text-2xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,255,0,0.3)" }}
                >
                  Database Technologies
                </h2>
              </div>

              {/* MySQL */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FFFF00] bg-[#FFFF00]/10">
                      <span className=" font-bold text-[#FFFF00]">SQL</span>
                    </div>
                    <h3 className=" font-bold text-primary">MySQL</h3>
                  </div>
                  <Badge className="bg-[#FFFF00] text-black rounded-none">{progressValues.mysql}%</Badge>
                </div>
                <Progress
                  value={progressValues.mysql}
                  className="h-2 bg-primary/20"
                  indicatorClassName="bg-[#FFFF00]"
                />
                <p className=" text-sm text-primary/70">
                  We use MySQL to securely store and manage data with high reliability.
                </p>
              </div>

              {/* Database Visualization */}
              <div className="border-2 border-[#FFFF00] p-4 bg-[#FFFF00]/5 mt-4">
                <h3 className=" font-bold text-primary mb-4">Database Structure</h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Users Table */}
                  <div className="border-2 border-[#FFFF00] bg-[#FFFF00]/10 p-2">
                    <p className=" text-xs font-bold text-center border-b border-[#FFFF00]/30 pb-1 mb-2">
                      Users
                    </p>
                    <div className="space-y-1">
                      <p className=" text-xs">id (PK)</p>
                      <p className=" text-xs">username</p>
                      <p className=" text-xs">email</p>
                      <p className=" text-xs">password</p>
                      <p className=" text-xs">created_at</p>
                    </div>
                  </div>

                  {/* Links Table */}
                  <div className="border-2 border-[#FFFF00] bg-[#FFFF00]/10 p-2">
                    <p className=" text-xs font-bold text-center border-b border-[#FFFF00]/30 pb-1 mb-2">
                      Links
                    </p>
                    <div className="space-y-1">
                      <p className=" text-xs">id (PK)</p>
                      <p className=" text-xs">user_id (FK)</p>
                      <p className=" text-xs">title</p>
                      <p className=" text-xs">url</p>
                      <p className=" text-xs">created_at</p>
                    </div>
                  </div>

                  {/* Stats Table */}
                  <div className="border-2 border-[#FFFF00] bg-[#FFFF00]/10 p-2">
                    <p className=" text-xs font-bold text-center border-b border-[#FFFF00]/30 pb-1 mb-2">
                      Stats
                    </p>
                    <div className="space-y-1">
                      <p className=" text-xs">id (PK)</p>
                      <p className=" text-xs">link_id (FK)</p>
                      <p className=" text-xs">views</p>
                      <p className=" text-xs">actions</p>
                      <p className=" text-xs">completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* APIs Tab */}
            <TabsContent value="apis" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#00FF00] bg-[#00FF00]/10">
                  <Globe className="h-6 w-6 text-[#00FF00]" />
                </div>
                <h2
                  className=" text-2xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,0,0.3)" }}
                >
                  APIs & Integrations
                </h2>
              </div>

              <p className=" text-primary/70">
                We integrate with various third-party services to enhance platform functionality, such as payment
                gateways, social media integrations, and custom APIs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Payment Gateways */}
                <div className="border-2 border-[#00FF00] bg-[#00FF00]/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="h-5 w-5 text-[#00FF00]" />
                    <h3 className=" font-bold text-primary">Payment Gateways</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Stripe", "PayPal", "Square"].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00FF00] mt-1">►</span>
                        <span className=" text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Media */}
                <div className="border-2 border-[#00FF00] bg-[#00FF00]/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Share2 className="h-5 w-5 text-[#00FF00]" />
                    <h3 className=" font-bold text-primary">Social Media</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Twitter/X API", "YouTube API", "Discord Webhooks"].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00FF00] mt-1">►</span>
                        <span className=" text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom APIs */}
                <div className="border-2 border-[#00FF00] bg-[#00FF00]/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-[#00FF00]" />
                    <h3 className=" font-bold text-primary">Custom APIs</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Link Tracking", "Analytics", "User Management"].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00FF00] mt-1">►</span>
                        <span className=" text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* API Flow Visualization */}
              <div className="border-2 border-[#00FF00] p-4 bg-[#00FF00]/5 mt-4">
                <h3 className=" font-bold text-primary mb-4">API Integration Flow</h3>
                <div className="relative h-[200px]">
                  {/* S2U Platform */}
                  <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] border-2 border-[#00FF00] bg-[#00FF00]/20 p-2 z-10">
                    <p className=" text-xs text-center font-bold">S2U Platform</p>
                  </div>

                  {/* External Services */}
                  <div className="absolute top-[20%] left-[10%] w-[20%] border-2 border-[#00FF00] bg-[#00FF00]/20 p-2">
                    <p className=" text-xs text-center">Payment APIs</p>
                  </div>

                  <div className="absolute top-[20%] right-[10%] w-[20%] border-2 border-[#00FF00] bg-[#00FF00]/20 p-2">
                    <p className=" text-xs text-center">Social Media APIs</p>
                  </div>

                  <div className="absolute bottom-[20%] left-[10%] w-[20%] border-2 border-[#00FF00] bg-[#00FF00]/20 p-2">
                    <p className=" text-xs text-center">Analytics APIs</p>
                  </div>

                  <div className="absolute bottom-[20%] right-[10%] w-[20%] border-2 border-[#00FF00] bg-[#00FF00]/20 p-2">
                    <p className=" text-xs text-center">Custom APIs</p>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <line x1="35%" y1="20%" x2="50%" y2="50%" stroke="#00FF00" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="65%" y1="20%" x2="50%" y2="50%" stroke="#00FF00" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="35%" y1="80%" x2="50%" y2="50%" stroke="#00FF00" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="65%" y1="80%" x2="50%" y2="50%" stroke="#00FF00" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>

                  {/* Data Packets */}
                  <div className="absolute top-[35%] left-[42%] w-3 h-3 bg-[#00FF00] animate-ping"></div>
                  <div
                    className="absolute top-[35%] right-[42%] w-3 h-3 bg-[#00FF00] animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-[35%] left-[42%] w-3 h-3 bg-[#00FF00] animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-[35%] right-[42%] w-3 h-3 bg-[#00FF00] animate-ping"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#FF8C00] bg-[#FF8C00]/10">
                  <Wrench className="h-6 w-6 text-[#FF8C00]" />
                </div>
                <h2
                  className=" text-2xl font-bold text-primary"
                  style={{ textShadow: "2px 2px 0px rgba(255,140,0,0.3)" }}
                >
                  Development Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Git */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FF8C00] bg-[#FF8C00]/10">
                        <Github className="h-4 w-4 text-[#FF8C00]" />
                      </div>
                      <h3 className=" font-bold text-primary">Git</h3>
                    </div>
                    <Badge className="bg-[#FF8C00] text-white rounded-none">{progressValues.git}%</Badge>
                  </div>
                  <Progress
                    value={progressValues.git}
                    className="h-2 bg-primary/20"
                    indicatorClassName="bg-[#FF8C00]"
                  />
                  <p className=" text-sm text-primary/70">
                    For flexible and efficient version control and team collaboration.
                  </p>
                </div>

                {/* Figma */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-[#FF8C00] bg-[#FF8C00]/10">
                        <Figma className="h-4 w-4 text-[#FF8C00]" />
                      </div>
                      <h3 className=" font-bold text-primary">Figma</h3>
                    </div>
                    <Badge className="bg-[#FF8C00] text-white rounded-none">{progressValues.figma}%</Badge>
                  </div>
                  <Progress
                    value={progressValues.figma}
                    className="h-2 bg-primary/20"
                    indicatorClassName="bg-[#FF8C00]"
                  />
                  <p className=" text-sm text-primary/70">
                    The design tool we use to plan interfaces and user experiences, ensuring smooth and consistent
                    design work.
                  </p>
                </div>
              </div>

              {/* Development Process */}
              <div className="border-2 border-[#FF8C00] p-4 bg-[#FF8C00]/5 mt-4">
                <h3 className=" font-bold text-primary mb-4">Development Process</h3>
                <div className="relative">
                  <div className="flex justify-between items-center">
                    {["Design", "Develop", "Test", "Deploy", "Maintain"].map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 flex items-center justify-center border-2 border-[#FF8C00] ${index <= 3 ? "bg-[#FF8C00]" : "bg-[#FF8C00]/20"}`}
                        >
                          <span className={` font-bold ${index <= 3 ? "text-black" : "text-[#FF8C00]"}`}>
                            {index + 1}
                          </span>
                        </div>
                        <p className=" text-xs mt-2">{step}</p>
                        {index <= 3 && <CheckCircle className="h-4 w-4 text-[#FF8C00] mt-1" />}
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1 bg-[#FF8C00]/20 w-full mt-4">
                    <div className="h-full bg-[#FF8C00] w-[80%]"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Contact CTA */}
        <Card
          className="rounded-none border-4 border-primary bg-background p-6 md:p-8 relative"
          style={{ boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <h2
                className=" text-xl font-bold text-primary"
                style={{ textShadow: "2px 2px 0px rgba(255,0,255,0.3)" }}
              >
                Have Questions About Our Tech Stack?
              </h2>

              <p className=" text-primary/70">
                We believe in using the best tools and technologies to deliver an amazing experience for our users,
                ensuring speed, efficiency, and security.
              </p>
            </div>

            <Button
              className=" bg-[#FF00FF] hover:bg-[#CC00CC] text-white border-none rounded-none shrink-0"
              style={{ boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)" }}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Our Dev Team
            </Button>
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

DevDetails.layout = (page) => <Layout children={page} />;
export default DevDetails;