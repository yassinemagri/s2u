"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Youtube, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"


export default function SubscribersList() {
  const [subscribers, setSubscribers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSubscribers, setFilteredSubscribers] = useState(subscribers)

  useEffect(() => {
    async function fetchSubscribers() {
      try {
          const response = await fetch(`/api/subs`);
          const data = await response.json();
          setSubscribers(data.subs);
      } catch (error) {
          console.error("Error fetching subscribers:", error);
      }
  }
  
  fetchSubscribers();
  
  }, []);
  useEffect(() => {
    const results = subscribers.filter(
      (sub) =>
        sub.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.body.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredSubscribers(results)
  }, [searchTerm, subscribers])

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <Badge
            variant="outline"
            className="font-Pixel text-[#00FF00] border-2 border-[#00FF00]/20 px-4 py-2 rounded-none"
            style={{ textShadow: "1px 1px 0px #00FF00" }}
          >
            06 — Community
          </Badge>

          <h2
            className="font-Pixel text-4xl md:text-5xl font-bold text-primary"
            style={{ textShadow: "4px 4px 0px #00FF00" }}
          >Link list
          </h2>

          <p className="font-Pixel text-lg text-primary/80 max-w-2xl mx-auto">
          All the Shtark links.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center border-4 border-primary bg-background p-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.3)]">
            <Search className="h-5 w-5 text-primary/50 mr-2" />
            <Input
              type="text"
              placeholder="Search by username or comment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none bg-transparent font-Pixel text-primary focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-primary/50"
            />
          </div>

          <div className="grid gap-4">
            {filteredSubscribers.length > 0 ? (
              filteredSubscribers?.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="border-4 border-primary bg-background p-4 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,255,0,0.3)] transition-all"
                  style={{ imageRendering: "pixelated" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-Pixel text-xl font-bold text-[#00FF00]">{subscriber.username}</h3>
                      <p className="font-Pixel text-primary/70">{subscriber.body}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-Pixel border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                        asChild
                      >
                        <a href={subscriber.channelUrl} target="_blank" rel="noopener noreferrer">
                          <Youtube className="h-4 w-4 mr-2" />
                          Channel
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="font-Pixel bg-[#00FF00] hover:bg-[#00FF00]/90 text-black border-none rounded-none"
                        asChild
                      >
                        <Link to={`/subs/${subscriber.id}`} >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="border-4 border-primary bg-background p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,255,0,0.3)]">
                <p className="font-Pixel text-primary/70">No subscribers found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

