import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { CheckSquare } from "lucide-react";
import React from "react";

const Edit = () => {
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
    ];

    const [copiedId, setCopiedId] = useState(null);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);

        // Create glitch effect
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 150);

        toast({
            title: "Link copied!",
            description: "The link has been copied to your clipboard",
        });

        setTimeout(() => setCopiedId(null), 2000);
    };
    return (
        <>
            {/* Links Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-mono text-xl font-bold text-primary">
                            Link list
                        </h2>
                        <p className="font-mono text-sm text-primary/70">
                            All the sub2unlock links you have created
                        </p>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="space-y-4">
                    {links.map((link) => (
                        <Card
                            key={link.id}
                            className={`p-6 rounded-none border-2 border-primary bg-background/50 hover:bg-background/80 transition-colors ${
                                glitchEffect ? "translate-x-[1px]" : ""
                            }`}
                            style={{
                                boxShadow:
                                    "4px 4px 0px 0px rgba(255,255,255,0.1)",
                            }}
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="space-y-1">
                                    <h3 className="font-mono text-lg font-bold text-primary">
                                        {link.title}
                                    </h3>
                                    <p className="font-mono text-sm text-primary/70">
                                        {link.description}
                                    </p>
                                    <p className="font-mono text-xs text-primary/50">
                                        {link.url}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                                        onClick={() =>
                                            window.open(link.url, "_blank")
                                        }
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View Link
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                                        onClick={() =>
                                            copyToClipboard(link.url, link.id)
                                        }
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
                                    <p className="font-mono text-xs text-primary/50">
                                        Views
                                    </p>
                                    <p className="font-mono text-sm font-bold text-[#FF8C00]">
                                        {link.views}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-xs text-primary/50">
                                        Actions
                                    </p>
                                    <p className="font-mono text-sm font-bold text-[#FF00FF]">
                                        {link.actions}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-xs text-primary/50">
                                        Completed
                                    </p>
                                    <p className="font-mono text-sm font-bold text-[#00FFFF]">
                                        {link.completed}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Edit;
