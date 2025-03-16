"use client";

import React from "react";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
    Pencil,
} from "lucide-react";
import Layout from "@/Components/layout/Layout";
import { router, usePage, useForm } from "@inertiajs/react";

const LinksPage = ({ links }) => {
    const [linksData, setLinksData] = useState(links);
    const [loading, setLoading] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const [glitchEffect, setGlitchEffect] = useState(false);
    const { flash } = usePage().props;
    const { data, setData, get, processing, errors } = useForm({
        title: "",
    });
    console.log(flash)
    // Format date to a more readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    // Copy link to clipboard
    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);

        // Create glitch effect
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 150);

        // Reset copied state after 2 seconds
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        get(`my-links`)
        setLoading(true)
    };

    // Truncate long text
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };

    return (
        <div className="min-h-screen bg-background/30 p-4 md:p-8 relative overflow-hidden">
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
                            className="text-[#00FFFF] border-2 border-[#00FFFF]/20 px-4 py-2 rounded-none"
                            style={{ textShadow: "1px 1px 0px #00FFFF" }}
                        >
                            LINK DIRECTORY
                        </Badge>
                    </div>

                    <h1
                        className={`text-4xl md:text-5xl font-bold text-primary ${
                            glitchEffect ? "translate-x-[2px]" : ""
                        } transition-transform duration-75`}
                        style={{ textShadow: "4px 4px 0px #00FFFF" }}
                    >
                        All S2U Links
                    </h1>

                    <p className="text-lg text-primary/70 max-w-3xl mx-auto">
                        Browse all the "Subscribe to Unlock" links created by
                        our community. Find exclusive content from your favorite
                        creators.
                    </p>
                </div>

                {/* Search and Stats */}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                    {/* Search Form */}
                    <Card
                        className="rounded-none border-4 border-primary bg-background p-4 relative"
                        style={{
                            boxShadow: "6px 6px 0px 0px rgba(0,255,255,0.3)",
                        }}
                    >
                        <form onSubmit={handleSearch} className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/50" />
                                <Input
                                    type="text"
                                    placeholder="Search by title, description or creator..."
                                    value={data.title}
                                    onChange={(e) =>
                                      setData('title',e.target.value)
                                    }
                                    className="pl-10 border-2 border-primary/50 focus:border-[#00FFFF] rounded-none bg-background"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-[#00FFFF] hover:bg-[#00CCCC] text-black border-none rounded-none"
                                style={{
                                    boxShadow:
                                        "3px 3px 0px 0px rgba(0,255,255,0.3)",
                                }}
                            >
                                Search
                            </Button>
                        </form>
                    </Card>

                    {/* Stats */}
                    <Card
                        className="rounded-none border-4 border-primary bg-background p-4 relative"
                        style={{
                            boxShadow: "6px 6px 0px 0px rgba(0,255,255,0.3)",
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-xs text-primary/50">
                                    Total Links
                                </p>
                                <p className="text-2xl font-bold text-[#00FFFF]">
                                    {linksData.total}
                                </p>
                            </div>

                            <div className="h-10 border-l border-primary/20 mx-2"></div>

                            <div className="space-y-1">
                                <p className="text-xs text-primary/50">Pages</p>
                                <p className="text-2xl font-bold text-[#00FFFF]">
                                    {linksData.last_page}
                                </p>
                            </div>

                            <div className="h-10 border-l border-primary/20 mx-2"></div>

                            <div className="space-y-1">
                                <p className="text-xs text-primary/50">
                                    Current Page
                                </p>
                                <p className="text-2xl font-bold text-[#00FFFF]">
                                    {linksData.current_page}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Links List */}
                <div className="space-y-6">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="text-primary animate-pulse">
                                Loading...
                            </div>
                        </div>
                    ) : (
                        <>
                            {linksData.data.map((link) => (
                                <Card
                                    key={link.id}
                                    className={`rounded-none border-4 border-primary bg-background p-6 relative hover:translate-y-[-2px] transition-transform ${
                                        glitchEffect ? "translate-x-[1px]" : ""
                                    }`}
                                    style={{
                                        boxShadow:
                                            "6px 6px 0px 0px rgba(0,255,255,0.3)",
                                    }}
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
                                                    <Badge className="bg-[#00FFFF] text-black rounded-none">
                                                        ID: {link.id}
                                                    </Badge>
                                                    <h2 className="text-xl font-bold text-primary">
                                                        {link.title}
                                                    </h2>
                                                </div>

                                                <p className="text-primary/70">
                                                    {link.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-xs text-primary/50">
                                                        <User className="h-3 w-3" />
                                                        <span>Creator:</span>
                                                    </div>
                                                    <p className="text-sm text-[#00FFFF]">
                                                        {link.user.username}
                                                    </p>
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-xs text-primary/50">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>Created:</span>
                                                    </div>
                                                    <p className="text-sm text-primary/70">
                                                        {formatDate(
                                                            link.created_at
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <LinkIcon className="h-4 w-4 text-[#00FFFF]" />
                                                    <p className="text-sm font-bold text-primary">
                                                        Unlock Link:
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm text-primary/70 truncate">
                                                        {truncateText(
                                                            link.unlock_link,
                                                            50
                                                        )}
                                                    </p>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="h-7 w-7 p-0 rounded-none border-2 border-primary/50"
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                link.unlock_link,
                                                                link.id
                                                            )
                                                        }
                                                    >
                                                        {copiedId ===
                                                        link.id ? (
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
                                                className="border-2 cursor-pointer border-[#CC00CC] bg-transparent hover:bg-[#CC00CC] text-white rounded-none
"
                                                style={{
                                                    boxShadow:
                                                        "3px 3px 0px 0px rgba(255,0,255,0.3)",
                                                }}
                                                onClick={() =>
                                                    window.open(
                                                        link.unlock_link,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Unlock
                                            </Button>
                                            <Button
                                                className="border-2 cursor-pointer border-red-500 bg-background hover:bg-red-500 text-primary rounded-none"
                                                onClick={() =>
                                                    window.open(
                                                        link.channel_link,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <Youtube className="mr-2 h-4 w-4 " />
                                                Channel
                                            </Button>
                                            <Button
                                                className="cursor-pointer border-2 border-green-600 hover:border-transparent bg-transparent text-primary hover:bg-green-600 hover:text-white transition-colors rounded-none"
                                                style={{
                                                    boxShadow:
                                                        "4px 4px 0px 0px rgba(255,255,255,0.2)",
                                                }}
                                                onClick={() =>
                                                    router.visit(
                                                        `/link/${link.id}/edit`
                                                    )
                                                }
                                            >
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit
                                            </Button>
                                            <Button
                                                className="cursor-pointer border-2 border-green-600 hover:border-transparent bg-transparent text-primary hover:bg-green-600 hover:text-white transition-colors rounded-none"
                                                style={{
                                                    boxShadow:
                                                        "4px 4px 0px 0px rgba(255,255,255,0.2)",
                                                }}
                                                onClick={() =>
                                                    router.visit(
                                                        `/link/${link.id}`
                                                    )
                                                }
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Show
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
                        onClick={() => router.visit(linksData.prev_page_url)}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {linksData.links
                        .filter(
                            (link) =>
                                !link.label.includes("Previous") &&
                                !link.label.includes("Next")
                        )
                        .map((link, index) => (
                            <Button
                                key={index}
                                variant={link.active ? "default" : "outline"}
                                className={`rounded-none border-2 ${
                                    link.active
                                        ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                                        : "border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                                }`}
                                onClick={() =>
                                    link.url && router.visit(link.url)
                                }
                                disabled={!link.url}
                            >
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </Button>
                        ))}

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-none border-2 border-primary"
                        disabled={!linksData.next_page_url}
                        onClick={() => router.visit(linksData.next_page_url)}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Page Info */}
                <div className="text-center text-sm text-primary/50">
                    Showing {linksData.from} to {linksData.to} of{" "}
                    {linksData.total} links
                </div>
            </div>

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
            `}</style>
        </div>
    );
};

LinksPage.layout = (page) => <Layout children={page} />;
export default LinksPage;
