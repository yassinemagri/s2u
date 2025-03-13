import React from 'react'
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { AspectRatio } from "@/Components/ui/aspect-ratio";
import Layout from '@/Components/layout/Layout';

const VideoTuto = () => {
  return (
    <div className="relative">
            <Card
              className="rounded-none border-4 border-primary bg-background overflow-hidden py-0"
              style={{ boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)" }}
            >
              <AspectRatio ratio={16 / 9}>
                <div className="absolute inset-0 bg-[#FF00FF]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/k5M3lQPEnMU?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&showinfo=0&disablekb=1&color=white"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </AspectRatio>
            </Card>

            <Button
              size="lg"
              className="w-full mt-4 bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white border-none rounded-none"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(255,0,255,0.3)",
                imageRendering: "pixelated",
              }}
            >
              Video explaining how to use it easily for the visitor!
            </Button>

            {/* Decorative Pixels */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-primary bg-transparent" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-[#FF00FF] bg-transparent" />
          </div>
  )
}
VideoTuto.layout = (page) => <Layout children={page} />
export default VideoTuto