import React from 'react'
import Create from './Create'
import Layout from '@/Components/layout/Layout';

const Index = ({links}) => {
  console.log(links)
  return (
    <>
                <div
                  key={subscriber.id}
                  className="border-4 border-primary bg-background p-4 shadow-[4px_4px_0px_0px_rgba(0,255,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,255,0,0.3)] transition-all"
                  style={{ imageRendering: "pixelated" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="flex items-center font-Pixel text-xl font-bold text-[#00FF00]">{subscriber.username} 
                        <span>{subscriber.isYoutuber && <Youtube className="stroke-[#FF0000] p-1"/>|| subscriber.isFacebooker &&  <FacebookIcon className="stroke-[#1877F2] p-1"/>}</span></h3>
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
                        <Link href={subscriber.postUrl} >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
    </>
  )
}

Index.layout = (page) => <Layout children={page} />;
export default Index