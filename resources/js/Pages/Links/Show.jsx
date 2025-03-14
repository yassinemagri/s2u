"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CircleHelp, Clock8, ExternalLink, Youtube, Star, Lock, Unlock, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Layout from "@/Components/layout/Layout"
import { usePage } from "@inertiajs/react"

// Function to format relative time
const getRelativeTime = (timestamp) => {
  const now = new Date()
  const date = new Date(timestamp)
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  return `${seconds} second${seconds !== 1 ? "s" : ""} ago`
}


const Show = ({ link })=> {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [countdown, setCountdown] = useState(3)
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [subscribeProgress, setSubscribeProgress] = useState(0)
  const { id, title, unlock_link, channel_link, description, updated_at } = link;
  const {flash} = usePage().props
  // console.log(usePage())
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Countdown and blur handler
  useEffect(() => {
    const handleBlur = () => {
      clearTimeout(timer)
    }

    window.addEventListener("blur", handleBlur)

    let timer;
    if (isSubscribed && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
    } else if (isSubscribed && countdown === 0) {
      handleUnlockUrl()
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener("blur", handleBlur)
    }
  }, [isSubscribed, countdown])

  const getSubscribeLink = () => {
    if (!channel_link.includes("?sub_confirmation=1")) {
      return `${channel_link}?sub_confirmation=1`
    }
    return channel_link
  }

  const handleSubscribe = () => {
    const subscribeLink = getSubscribeLink()
    window.open(subscribeLink, "_blank", "noopener,noreferrer")

    // Simulate subscription progress
    let progress = 0
    const progressInterval = setInterval(() => {
      progress += 10
      setSubscribeProgress(progress)
      if (progress >= 100) {
        clearInterval(progressInterval)
        setIsSubscribed(true)
        // Create glitch effect
        setGlitchEffect(true)
        setTimeout(() => setGlitchEffect(false), 150)
      }
    }, 900)

    return () => clearInterval(progressInterval)
  }

  const handleUnlockUrl = () => {
    window.open(unlock_link, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Pixel Clouds */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#1a0042] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a0042] to-transparent" />
      </div>

      {/* Main Container */}
      <div
        className={`relative w-full max-w-2xl min-h-[400px] border-4 border-white backdrop-blur-[10.4px] bg-[#0000007a] p-8 text-white ${
          glitchEffect ? "translate-x-[2px]" : ""
        } transition-transform duration-75`}
        style={{
          imageRendering: "pixelated",
          boxShadow: "8px 8px 0px 0px rgba(255,255,255,0.2)",
        }}
      >
        {/* Decorative Corners */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-[#FF00FF]"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-4 border-r-4 border-[#FF00FF]"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-4 border-l-4 border-[#FF00FF]"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-[#FF00FF]"></div>

        {!isSubscribed ? (
          <div key={id} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                style={{ textShadow: "1px 1px 0px #FF00FF" }}
              >
                LOCKED CONTENT
              </Badge>

              <h1
                className="text-2xl font-bold uppercase tracking-wider"
                style={{ textShadow: "2px 2px 0px #FF00FF" }}
              >
                {title}
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="relative border-2 border-white/20 bg-white/5 p-4">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-[#FF00FF] bg-[#0000007a]">
                  <Lock className="w-4 h-4 m-0.5 text-[#FF00FF]" />
                </div>
                <p className="text-white/70">{description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <TooltipProvider>
                    <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                      <TooltipTrigger asChild>
                        <p className="flex items-center text-sm cursor-help">
                          <CircleHelp className="mr-2 h-4 w-4 text-[#FF00FF]" />
                          Complete the actions to unlock
                        </p>
                      </TooltipTrigger>
                      <TooltipContent
                        className="text-xs bg-black border-2 border-[#FF00FF] text-white p-4 max-w-xs rounded-none"
                        style={{ boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)" }}
                      >
                        1. Click the Subscribe button to open YouTube
                        <br />
                        2. Subscribe to the channel
                        <br />
                        3. Return here to unlock the content
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Button
                    onClick={handleSubscribe}
                    className="cursor-pointer border-2 border-white hover:border-transparent bg-transparent text-white hover:bg-[#e62117] hover:text-white transition-colors rounded-none"
                    style={{ boxShadow: "4px 4px 0px 0px rgba(255,255,255,0.2)" }}
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe On Youtube
                  </Button>
                </div>

                {subscribeProgress > 0 && subscribeProgress < 100 && (
                  <div className="space-y-2">
                    <Progress value={subscribeProgress} className="h-2 bg-white/20" indicatorclassname="bg-[#FF00FF]" />
                    <p className="text-xs text-white/50 text-center">Verifying subscription...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Clock8 className="h-4 w-4" />
                  <span>{getRelativeTime(updated_at)}</span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FF00FF] text-[#FF00FF]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Success Title */}
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="text-[#00FF00] border-2 border-[#00FF00]/20 px-4 py-2 rounded-none"
                style={{ textShadow: "1px 1px 0px #00FF00" }}
              >
                UNLOCKED
              </Badge>

              <h1
                className="text-2xl font-bold uppercase tracking-wider"
                style={{ textShadow: "2px 2px 0px #00FF00" }}
              >
                Thanks for subscribing
              </h1>
            </div>

            {/* Success Content */}
            <div className="relative border-2 border-white/20 bg-white/5 p-4">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-[#00FF00] bg-[#0000007a]">
                <Unlock className="w-4 h-4 m-0.5 text-[#00FF00]" />
              </div>
              <p className="text-white/70">
                Your content is ready! Click the button below or wait to be redirected automatically.
              </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <p className="text-sm text-white/70">Redirecting in {countdown} seconds...</p>

                <Button
                  onClick={handleUnlockUrl}
                  className="bg-[#00FF00] hover:bg-[#00CC00] text-black border-none rounded-none"
                  style={{ boxShadow: "4px 4px 0px 0px rgba(0,255,0,0.3)" }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Go Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

Show.layout = (page)=> <Layout children={page}/>
export default Show