"use client"

import  React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  LinkIcon,
  ExternalLink,
  Youtube,
  Copy,
  Check,
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
} from "lucide-react"
import Layout from "@/Components/layout/Layout"



const LinksPage= ({links})=> {
  const [linksData, setLinksData] = useState(links)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [copiedId, setCopiedId] = useState(null)
  const [glitchEffect, setGlitchEffect] = useState(false)

  // In a real app, this would fetch from an API
  const fetchLinks = (page) => {
    setLoading(true)

    // Simulate API call with a timeout
    setTimeout(() => {
      setCurrentPage(page)
      // In a real app, you would fetch data from the API here
      // For now, we'll just use the sample data
      setLinksData({
        ...sampleData,
        current_page: page,
      })
      setLoading(false)

      // Create glitch effect
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 500)
  }

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Copy link to clipboard
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)

    // Create glitch effect
    setGlitchEffect(true)
    setTimeout(() => setGlitchEffect(false), 150)

    // Reset copied state after 2 seconds
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, you would search the API
    console.log("Searching for:", searchTerm)
    // For now, we'll just reset to page 1
    fetchLinks(1)
  }

  // Truncate long text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
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
      <div className="fixed top-20 left-20 w-16 h-16 border-4 border-[#00FFFF]/20 animate-float opacity-20"></div>
      <div className="fixed bottom-40 right-20 w-12 h-12 border-4 border-[#FF00FF]/20 animate-float-delayed opacity-20"></div>
      <div className="fixed top-1/2 left-1/4 w-8 h-8 border-4 border-[#FFFF00]/20 animate-float-slow opacity-20"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="font-mono text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #00FFFF" }}
            >
              LINK DIRECTORY
            </Badge>
          </div>

          <h1
            className={`font-mono text-4xl md:text-5xl font-bold text-primary ${glitchEffect ? "translate-x-[2px]" : ""} transition-transform duration-75`}
            style={{ textShadow: "4px 4px 0px #00FFFF" }}
          >
            All S2U Links
          </h1>

          <p className="font-mono text-lg text-primary/70 max-w-3xl mx-auto">
            Browse all the "Subscribe to Unlock" links created by our community. Find exclusive content from your
            favorite creators.
          </p>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          {/* Search Form */}
          <Card
            className="rounded-none border-4 border-primary bg-background p-4 relative"
            style={{ boxShadow: "6px 6px 0px 0px rgba(0,255,255,0.3)" }}
          >
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/50" />
                <Input
                  type="text"
                  placeholder="Search by title, description or creator..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="font-mono pl-10 border-2 border-primary/50 focus:border-[#00FFFF] rounded-none bg-background"
                />
              </div>
              <Button
                type="submit"
                className="font-mono bg-[#00FFFF] hover:bg-[#00CCCC] text-black border-none rounded-none"
                style={{ boxShadow: "3px 3px 0px 0px rgba(0,255,255,0.3)" }}
              >
                Search
              </Button>
            </form>
          </Card>

          {/* Stats */}
          <Card
            className="rounded-none border-4 border-primary bg-background p-4 relative"
            style={{ boxShadow: "6px 6px 0px 0px rgba(0,255,255,0.3)" }}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-mono text-xs text-primary/50">Total Links</p>
                <p className="font-mono text-2xl font-bold text-[#00FFFF]">{linksData.total}</p>
              </div>

              <div className="h-10 border-l border-primary/20 mx-2"></div>

              <div className="space-y-1">
                <p className="font-mono text-xs text-primary/50">Pages</p>
                <p className="font-mono text-2xl font-bold text-[#00FFFF]">{linksData.last_page}</p>
              </div>

              <div className="h-10 border-l border-primary/20 mx-2"></div>

              <div className="space-y-1">
                <p className="font-mono text-xs text-primary/50">Current Page</p>
                <p className="font-mono text-2xl font-bold text-[#00FFFF]">{linksData.current_page}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Links List */}
        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="font-mono text-primary animate-pulse">Loading...</div>
            </div>
          ) : (
            <>
              {linksData.data.map((link) => (
                <Card
                  key={link.id}
                  className={`rounded-none border-4 border-primary bg-background p-6 relative hover:translate-y-[-2px] transition-transform ${glitchEffect ? "translate-x-[1px]" : ""}`}
                  style={{ boxShadow: "6px 6px 0px 0px rgba(0,255,255,0.3)" }}
                >
                  {/* Decorative Corners */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#00FFFF]"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#00FFFF]"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#00FFFF]"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#00FFFF]"></div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Link Info */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-[#00FFFF] text-black rounded-none">ID: {link.id}</Badge>
                          <h2 className="font-mono text-xl font-bold text-primary">{link.title}</h2>
                        </div>

                        <p className="font-mono text-primary/70">{link.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 font-mono text-xs text-primary/50">
                            <User className="h-3 w-3" />
                            <span>Creator:</span>
                          </div>
                          <p className="font-mono text-sm text-[#00FFFF]">{link.user.username}</p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 font-mono text-xs text-primary/50">
                            <Calendar className="h-3 w-3" />
                            <span>Created:</span>
                          </div>
                          <p className="font-mono text-sm text-primary/70">{formatDate(link.created_at)}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-4 w-4 text-[#00FFFF]" />
                          <p className="font-mono text-sm font-bold text-primary">Unlock Link:</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-sm text-primary/70 truncate">
                            {truncateText(link.unlock_link, 50)}
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0 rounded-none border-2 border-primary/50"
                            onClick={() => copyToClipboard(link.unlock_link, link.id)}
                          >
                            {copiedId === link.id ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 text-primary/70" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row md:flex-col justify-center gap-3 md:border-l md:border-primary/20 md:pl-6">
                      <Button
                        className="font-mono bg-[#FF00FF] hover:bg-[#CC00CC] text-white border-none rounded-none w-full"
                        style={{ boxShadow: "3px 3px 0px 0px rgba(255,0,255,0.3)" }}
                        onClick={() => window.open(link.unlock_link, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Unlock
                      </Button>
                      <Button
                        className="font-mono bg-[#FF00FF] hover:bg-[#CC00CC] text-white border-none rounded-none w-full"
                        style={{ boxShadow: "3px 3px 0px 0px rgba(255,0,255,0.3)" }}
                        onClick={() => window.open(`/link/${link.id}/edit`)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Edit
                      </Button>

                      <Button
                        variant="outline"
                        className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none w-full"
                        onClick={() => window.open(link.channel_link, "_blank")}
                      >
                        <Youtube className="mr-2 h-4 w-4 text-red-500" />
                        Channel
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-2 border-primary"
            disabled={!linksData.prev_page_url}
            onClick={() => fetchLinks(currentPage - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {linksData.links
            .filter((link) => !link.label.includes("Previous") && !link.label.includes("Next"))
            .map((link, index) => (
              <Button
                key={index}
                variant={link.active ? "default" : "outline"}
                className={`rounded-none border-2 ${
                  link.active
                    ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                    : "border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => {
                  if (link.url) {
                    const pageNumber = Number.parseInt(link.label)
                    fetchLinks(pageNumber)
                  }
                }}
                disabled={!link.url}
              >
                <span dangerouslySetInnerHTML={{ __html: link.label }} />
              </Button>
            ))}

          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-2 border-primary"
            disabled={!linksData.next_page_url}
            onClick={() => fetchLinks(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Page Info */}
        <div className="text-center font-mono text-sm text-primary/50">
          Showing {linksData.from} to {linksData.to} of {linksData.total} links
        </div>

        {/* Footer */}
        <div className="text-center font-mono text-xs text-primary/50 space-y-2 pt-8">
          <Separator className="mb-6" />
          <p>© {new Date().getFullYear()} s2u. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-[#00FFFF] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-and-conditions" className="hover:text-[#00FFFF] transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/contact" className="hover:text-[#00FFFF] transition-colors">
              Contact
            </a>
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

LinksPage.layout = (page)=> <Layout children={page} />
export default LinksPage
