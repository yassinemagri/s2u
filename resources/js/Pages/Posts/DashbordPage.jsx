"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, TrendingUp, CheckSquare, Plus, Copy, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"


// Sample data
const links = [
  {
    id: "1",
    title: "SUB TO UNLOCK!",
    description: "A classic S2U Link",
    url: "https://sub2unlock.com/qknAT",
    views: 5,
    actions: 2,
    completed: 1,
  },
  {
    id: "2",
    title: "sayq101",
    description: "sayq101 sas",
    url: "https://sub2unlock.com/vkMMy",
    views: 4,
    actions: 2,
    completed: 2,
  },
]

export default function DashboardPage() {
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [copiedId, setCopiedId] = useState(null)

  // Total metrics
  const totalMetrics = links.reduce(
    (acc, link) => ({
      views: acc.views + link.views,
      actions: acc.actions + link.actions,
      completed: acc.completed + link.completed,
    }),
    { views: 0, actions: 0, completed: 0 },
  )

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)

    // Create glitch effect
    setGlitchEffect(true)
    setTimeout(() => setGlitchEffect(false), 150)

    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard",
    })

    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 relative overflow-hidden">
      <Toaster />

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

      <div className="max-w-7xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Badge
              variant="outline"
              className="font-mono text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none mb-2"
              style={{ textShadow: "1px 1px 0px #FF00FF" }}
            >
              DASHBOARD
            </Badge>
            <h1 className="font-mono text-3xl font-bold text-primary" style={{ textShadow: "3px 3px 0px #FF00FF" }}>
              Command Center
            </h1>
          </div>

          <Button
            onClick={() => (window.location.href = "/create-post")}
            className="font-mono bg-[#4444FF] hover:bg-[#3333CC] text-white border-none rounded-none"
            style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,255,0.3)" }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Link
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Views Card */}
          <Card
            className={`p-6 rounded-none border-2 border-[#FF8C00] bg-[#FF8C00]/10 ${glitchEffect ? "translate-x-[1px]" : ""}`}
            style={{ boxShadow: "4px 4px 0px 0px rgba(255,140,0,0.3)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#FF8C00] bg-[#FF8C00]/20">
                <Eye className="h-6 w-6 text-[#FF8C00]" />
              </div>
              <div>
                <p className="font-mono text-sm text-[#FF8C00]">Views</p>
                <p
                  className="font-mono text-2xl font-bold text-[#FF8C00]"
                  style={{ textShadow: "2px 2px 0px rgba(255,140,0,0.3)" }}
                >
                  {totalMetrics.views}
                </p>
              </div>
            </div>
          </Card>

          {/* Actions Card */}
          <Card
            className={`p-6 rounded-none border-2 border-[#FF00FF] bg-[#FF00FF]/10 ${glitchEffect ? "translate-y-[1px]" : ""}`}
            style={{ boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#FF00FF] bg-[#FF00FF]/20">
                <TrendingUp className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <div>
                <p className="font-mono text-sm text-[#FF00FF]">Actions</p>
                <p
                  className="font-mono text-2xl font-bold text-[#FF00FF]"
                  style={{ textShadow: "2px 2px 0px rgba(255,0,255,0.3)" }}
                >
                  {totalMetrics.actions}
                </p>
              </div>
            </div>
          </Card>

          {/* Completed Card */}
          <Card
            className={`p-6 rounded-none border-2 border-[#00FFFF] bg-[#00FFFF]/10 ${glitchEffect ? "translate-x-[-1px]" : ""}`}
            style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#00FFFF] bg-[#00FFFF]/20">
                <CheckSquare className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <div>
                <p className="font-mono text-sm text-[#00FFFF]">Completed</p>
                <p
                  className="font-mono text-2xl font-bold text-[#00FFFF]"
                  style={{ textShadow: "2px 2px 0px rgba(0,255,255,0.3)" }}
                >
                  {totalMetrics.completed}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-mono text-xl font-bold text-primary">Link list</h2>
              <p className="font-mono text-sm text-primary/70">All the sub2unlock links you have created</p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="space-y-4">
            {links.map((link) => (
              <Card
                key={link.id}
                className={`p-6 rounded-none border-2 border-primary bg-background/50 hover:bg-background/80 transition-colors ${glitchEffect ? "translate-x-[1px]" : ""}`}
                style={{ boxShadow: "4px 4px 0px 0px rgba(255,255,255,0.1)" }}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-mono text-lg font-bold text-primary">{link.title}</h3>
                    <p className="font-mono text-sm text-primary/70">{link.description}</p>
                    <p className="font-mono text-xs text-primary/50">{link.url}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Link
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                      onClick={() => copyToClipboard(link.url, link.id)}
                    >
                      {copiedId === link.id ? (
                        <CheckSquare className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Link Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-primary/20">
                  <div>
                    <p className="font-mono text-xs text-primary/50">Views</p>
                    <p className="font-mono text-sm font-bold text-[#FF8C00]">{link.views}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary/50">Actions</p>
                    <p className="font-mono text-sm font-bold text-[#FF00FF]">{link.actions}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary/50">Completed</p>
                    <p className="font-mono text-sm font-bold text-[#00FFFF]">{link.completed}</p>
                  </div>
                </div>
              </Card>
            ))}
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
      `}</style>
    </div>
  )
}

