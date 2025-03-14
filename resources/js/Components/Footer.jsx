import { Heart, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="font-Pixel capitalize border-t border-primary/20 py-4 mt-auto">
            <div className="text-center text-xs text-primary/50 space-y-2 my-2">
                <div className="flex justify-center gap-4">
                    <a
                        href="/privacy-policy"
                        className="hover:text-[#FFFF00] transition-colors"
                    >
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a
                        href="/terms-and-conditions"
                        className="hover:text-[#FFFF00] transition-colors"
                    >
                        Terms & Conditions
                    </a>
                    <span>|</span>
                    <a
                        href="/contact"
                        className="hover:text-[#FFFF00] transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-xs  text-primary/70">
                        © {new Date().getFullYear()}{" "}
                        <span
                            className="text-primary border-2 border-[#FF00FF]/20 px-4 py-1 rounded-none"
                            style={{ textShadow: "1px 1px 0px #FF00FF" }}
                        >
                            S2U
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-1 text-xs  text-primary/70">
                        <span>design & Dev</span>
                        <Heart className="h-3 w-3 text-destructive" />
                        by <a href="">Yassine Magri </a>&{" "}
                        <a href="">Badr Noukh</a>
                    </div>

                    <div className="flex gap-4">
                        <Youtube />
                    </div>
                </div>
            </div>
        </footer>
    );
}
