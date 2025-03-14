import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CircleHelp, Clock8, ExternalLink, Youtube } from "lucide-react";
import Layout from "@/Components/layout/Layout";

const Show = ({link})=> {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [apiData, setapiData] = useState(link);
  const {id,title,unlock_link,channel_link,description,updated_at} = apiData


  useEffect(() => {
    const handleBlur = () => {
      clearTimeout(timer); 
    };
  
    window.addEventListener('blur', handleBlur);
  
    let timer;
    if (isSubscribed && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  
    return () => {
      clearTimeout(timer); 
      window.removeEventListener('blur', handleBlur);
    };
  }, [isSubscribed, countdown]);

  const getSubscribeLink = () => {
    if (!channel_link.includes("?sub_confirmation=1")) {
      return `${channel_link}?sub_confirmation=1`;
    }
    return channel_link;
  };

  const handleSubscribe = () => {
    const subscribeLink = getSubscribeLink(apiData?.channel_link);
    let timer;
    window.open(subscribeLink, "_blank", "noopener,noreferrer");

    timer = setTimeout(() => {
      setIsSubscribed(true);
    }, 9000);
    return () => clearTimeout(timer)
  };
  const handleUnlockUrl = () => {
    window.open(unlock_link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center font-Pixel p-4}`}
    >
      <div
        className="relative w-full max-w-2xl min-h-[400px] border-4 border-primary backdrop-blur-[10.4px] bg-[#0000007a] p-8 text-primary shadow-[8px_8px_0px_0px] shadow-primary/50 dark:shadow-primary/30"
        style={{ imageRendering: "pixelated" }}
      >

        {!isSubscribed ? (
          <div key={id}>
            <h1
              className="mb-16  text-2xl font-bold uppercase tracking-wider "
              style={{ textShadow: "2px 2px 0px #FF00FF" }}
            >
              {title}
            </h1>
            
            <div className="absolute bottom-8 left-8 right-8">
              <p>{description}</p>
              <div className="flex justify-between items-center my-[0.5rem]">
                <p className="flex items-center text-sm text-start w-[28rem]">
                Complete the actions and unlock the link <CircleHelp className="cursor-pointer mr-2 h-4" />
                </p>
                <Button
                  onClick={handleSubscribe}
                  className="border-2 border-primary hover:border-transparent bg-background text-primary hover:bg-[#e62117] hover:text-primary cursor-pointer"
                >
                  <Youtube className="mr-2 h-4 w-sm" />
                  Subscribe On Youtube
                </Button>
              </div>
            <div className="flex text-sm/6 text-primary/70"><Clock8 className="p-1 stroke-primary/70"/> {updated_at}</div>
            </div>
          </div>
        ) : (
          <>
            <h1
              className="mb-16  text-2xl font-bold uppercase tracking-wider"
              style={{ textShadow: "2px 2px 0px #00FF00" }}
            >
              Thanks for subscribing
            </h1>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex justify-between items-center mb-8">
                <p className=" text-sm">
                  You will be redirected in {countdown} secs
                </p>
                <Button
                  onClick={handleUnlockUrl}
                  className="border-2 border-primary bg-background  text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Go Now
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
Show.layout = (page)=> <Layout children={page}/>
export default Show