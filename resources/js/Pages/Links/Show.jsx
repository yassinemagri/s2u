"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, Moon, Sun } from "lucide-react";
import { useParams } from "react-router-dom";
import Layout from "@/Components/layout/Layout";

const Show = ()=> {
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [apiData, setapiData] = useState(null);
  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const response = await fetch(`/api/subs/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setapiData(data.subs);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    }

    fetchSubscribers();
  }, []);

  useEffect(() => {
    let timer;
    if (isSubscribed && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isSubscribed, countdown]);

  const getSubscribeLink = () => {
    if (!apiData?.channelUrl.includes("?sub_confirmation=1")) {
      return `${apiData?.channelUrl}?sub_confirmation=1`;
    }
    return apiData?.channelUrl;
  };

  const handleSubscribe = () => {
    const subscribeLink = getSubscribeLink(apiData?.channelUrl);
    let timer;
    window.open(subscribeLink, "_blank", "noopener,noreferrer");

    timer = setTimeout(() => {
      setIsSubscribed(true);
    }, 9000);
    return () => clearTimeout(timer)
  };
  const handleUnlockUrl = () => {
    window.open(apiData?.unlockUrl, "_blank", "noopener,noreferrer");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  console.log(apiData);

  return (
    <div
      className={`flex min-h-screen items-center  justify-center font-Pixel p-4 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div
        className="relative w-full max-w-2xl min-h-[400px] border-4 border-primary backdrop-blur-[10.4px] bg-[#0000007a] p-8 text-primary shadow-[8px_8px_0px_0px] shadow-primary/50 dark:shadow-primary/30"
        style={{ imageRendering: "pixelated" }}
      >
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        {!isSubscribed ? (
          <div key={id}>
            <h1
              className="mb-16  text-2xl font-bold uppercase tracking-wider "
              style={{ textShadow: "2px 2px 0px #FF00FF" }}
            >
              {apiData?.username}
            </h1>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex justify-between items-center mb-8">
                <p className=" text-sm text-start">
                  Complete all the steps below to unlock the link button. When
                  you have completed all the steps.
                </p>
                <Button
                  onClick={handleSubscribe}
                  className="border-2 border-primary bg-background  text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Button>
              </div>
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