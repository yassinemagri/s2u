import React, {useState} from "react"
import Layout from "@/Components/layout/Layout";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { CheckSquare, Copy, ExternalLink } from "lucide-react";

const Edit = ({link}) => {
    console.log(link)
    const [copiedId, setCopiedId] = useState(null);
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);

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
                        <Card
                            
                            className={`p-6 rounded-none border-2 border-primary bg-background/50 hover:bg-background/80 transition-colors`}
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
                                        {link.channel_link}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="font-mono border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-none"
                                        onClick={() =>
                                            window.open(link.channel_link, "_blank")
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
                        </Card>
                </div>
            </div>
        </>
    );
};
Edit.layout = (page) => <Layout children={page} />
export default Edit;
