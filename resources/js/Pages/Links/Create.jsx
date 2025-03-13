import React from "react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Lock,
    Unlock,
    FileText,
    Copy,
    Check,
    Sparkles,
    Gamepad2,
} from "lucide-react";
import { useForm } from "@inertiajs/react";
import Layout from "@/Components/layout/Layout";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        unlock_Link: "",
        channel_Link: "",
    });

  
    const [copied, setCopied] = useState(false);
    const [glitchEffect, setGlitchEffect] = useState(false);

    // Random glitch effect
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchEffect(true);
            setTimeout(() => setGlitchEffect(false), 150);
        }, 5000);

        return () => clearInterval(glitchInterval);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        post('/link')
    };

    //  copy text
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);

        // Create particles effect
        createParticles();

        setTimeout(() => setCopied(false), 2000);
    };



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">


            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0">
                {/* Decorative elements */}
                <div className="absolute top-20 left-20 w-16 h-16 border-4 border-[#FF00FF]/20 animate-float opacity-20"></div>
                <div className="absolute bottom-40 right-20 w-12 h-12 border-4 border-[#00FFFF]/20 animate-float-delayed opacity-20"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 border-4 border-[#FFFF00]/20 animate-float-slow opacity-20"></div>
            </div>

            {/* UI Frame */}
            <div className="absolute top-0 left-0 w-full h-8 bg-[#FF00FF]/10 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#FF00FF]/10 z-10"></div>
            <div className="absolute top-8 left-8 flex space-x-2 opacity-30 z-10">
                <div className="w-3 h-3 rounded-full bg-[#FF00FF]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FFFF]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFFF00]"></div>
            </div>
            <div className="absolute top-8 right-8 text-xs text-[#FF00FF]/70 z-10">
                CONTENT CREATOR v1.2.0
            </div>

            <div className="w-full max-w-2xl space-y-8 relative z-20">
                <div
                    className={`text-center space-y-2 ${
                        glitchEffect ? "translate-x-[2px]" : ""
                    } transition-transform duration-75`}
                >
                    <div className="flex justify-center">
                        <Badge
                            variant="outline"
                            className="text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                            style={{ textShadow: "1px 1px 0px #FF00FF" }}
                        >
                            CREATE POST
                        </Badge>
                    </div>

                    <h1
                        className="text-3xl md:text-4xl font-bold text-primary relative"
                        style={{ textShadow: "3px 3px 0px #FF00FF" }}
                    >
                        Share Your Content
                        {glitchEffect && (
                            <span className="absolute inset-0 text-[#00FFFF] ml-[3px] mt-[2px] opacity-70">
                                Share Your Content
                            </span>
                        )}
                    </h1>

                    <p className="text-primary/70">
                        Create a post with locked content that can be unlocked
                        via a link
                    </p>
                </div>

                <div className="relative">
                    {/* Decorative Pixels */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-4 border-primary bg-transparent"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-[#FF00FF] bg-transparent"></div>

                    {/* CRT screen effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#FF00FF]/5 to-transparent rounded-sm opacity-50 blur-sm"></div>

                    <Card
                        className={`rounded-none border-4 border-primary bg-background/90 backdrop-blur-sm p-6 ${
                            glitchEffect
                                ? "translate-x-[1px] translate-y-[1px]"
                                : ""
                        } transition-transform duration-75`}
                        style={{
                            boxShadow: "8px 8px 0px 0px rgba(255,0,255,0.3)",
                        }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Post Title */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="title"
                                    className="text-primary flex items-center"
                                >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Post Title{" "}
                                    <span className="text-[#FF00FF] ml-1">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Enter a title for your post"
                                    value={data.title}
                                    onChange={(e)=> setData("title",e.target.value)}
                                    className="border-2 border-primary/50 focus:border-[#FF00FF] rounded-none"
                                />
                                {errors.title && <p className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">{errors.title}</p>}

                            </div>
                            {/* Channel Link */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="channel_Link"
                                    className="text-primary flex items-center"
                                >
                                    <Lock className="h-4 w-4 mr-2" />
                                    Channel Link{" "}
                                    <span className="text-[#FF00FF] ml-1">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    id="channel_Link"
                                    name="channel_Link"
                                    placeholder="Enter the content that will be locked"
                                    value={data.channel_Link}
                                    onChange={(e)=> setData("channel_Link",e.target.value)}
                                    className="border-2 border-primary/50 focus:border-[#FF00FF] rounded-none"
                                    
                                />
                                {errors.channel_Link && <p className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">{errors.channel_Link}</p>}
                            </div>
                            {/* Unlock Link */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="unlock_Link"
                                    className="text-primary flex items-center"
                                >
                                    <Unlock className="h-4 w-4 mr-2" />
                                    Unlock Link{" "}
                                    <span className="text-[#FF00FF] ml-1">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    id="unlock_Link"
                                    name="unlock_Link"
                                    placeholder="Enter the URL that will unlock the content"
                                    value={data.unlock_Link}
                                    onChange={(e)=> setData("unlock_Link",e.target.value)}
                                    className="border-2 border-primary/50 focus:border-[#FF00FF] rounded-none"
                                />
                                {errors.unlock_Link && <p>{errors.unlock_Link}</p>}
                            </div>
                            {/* Description */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="description"
                                    className="text-primary flex items-center"
                                >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter a description (optional)"
                                    value={data.description}
                                    onChange={(e)=> setData("description",e.target.value)}
                                    className="border-2 border-primary/50 focus:border-[#FF00FF] rounded-none min-h-[80px]"
                                />
                                {errors.description && <p className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">{errors.description}</p>}
                            </div>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white border-none rounded-none"
                                style={{
                                    boxShadow:
                                        "4px 4px 0px 0px rgba(255,0,255,0.3)",
                                }}
                            >
                                {processing ? (
                                    <div className="flex items-center gap-2">
                                        <div className="animate-pulse">
                                            Generating
                                        </div>
                                        <div className="animate-bounce">
                                            ...
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4" />
                                        Generate Link
                                    </div>
                                )}
                            </Button>


                        </form>
                    </Card>
                </div>
            </div>

            {/* Decorative Game Elements */}
            <div className="absolute bottom-4 right-4 opacity-50 z-10">
                <Gamepad2 className="h-8 w-8 text-[#FF00FF]" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-50 z-10 text-xs text-[#FF00FF]/70">
                PRESS A TO GENERATE
            </div>

            {/* Scanlines effect */}
            <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none z-10"></div>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes float-delayed {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
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

                .bg-scanlines {
                    background: linear-gradient(
                        to bottom,
                        transparent 50%,
                        rgba(0, 0, 0, 0.1) 50%
                    );
                    background-size: 100% 4px;
                }
            `}</style>
        </div>
    );
};

Create.layout = (page) => <Layout children={page} />;
export default Create;
