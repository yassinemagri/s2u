import React, { useEffect, useState } from "react";
import {
    CodeXml,
    Contact,
    Edit,
    GamepadIcon as GameController,
    Handshake,
    LogOut,
    ShieldCheck,
    Youtube,
} from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Header() {
    const { auth } = usePage().props;
    const navList = [
        {
            name: "home",
            url: "/",
        },
        {
            name: "About Us",
            url: "/about",
        },
        {
            name: "Create Links",
            url: "/link/create",
        },
    ];
    const siteContents = [
        {
            name: "Terms & Conditions",
            url: "/terms-and-conditions",
        },
        {
            name: "Privacy Policy",
            url: "/privacy-policy",
        },
        {
            name: "Contact",
            url: "/contact",
        },
        {
            name: "Developers",
            url: "/developers",
        },
    ];
    const urlPage = usePage().url;
    const [renderHtml, setRenderHtml] = useState(usePage().url);
    useEffect(() => {
        const render_Html = navList.map((nav, i) => {
            if (nav.url !== urlPage) {
                return (
                    <li key={i}>
                        <Link
                            href={nav.url} // Use href for Inertia.js navigation
                            className="text-primary hover:text-primary/80 transition-colors"
                        >
                            {nav.name}
                        </Link>
                    </li>
                );
            }
        });
        setRenderHtml(render_Html);
    }, [usePage().url]);
    return (
        <header className="font-bold text-lg backdrop-blur-[10.4px] bg-[#ffffff14] border-b border-primary/20 py-4 capitalize">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Youtube className="h-6 w-6 text-primary" />
                    <span
                        className="text-primary text-3xl hover:text-[#FF00FF] transition-colors"
                        style={{ textShadow: "1px 1px 0px #FF00FF" }}
                    >
                        S2U
                    </span>
                </Link>

                <nav>
                    <ul
                        className="flex gap-6 font-normal items-center uppercase"
                        style={{ textShadow: "1px 1px 0px #FF00FF" }}
                    >
                        {renderHtml}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <li
                                    className="uppercase text-1xl md:text-1xl cursor-pointer border-primary text-primary transition duration-300 ease-in-out"
                                    style={{
                                        textShadow: "1px 1px 0px #00FF00",
                                    }}
                                    variant="outline"
                                    size="sm"
                                >
                                    {auth.user ? auth.user.username : "join us"}
                                </li>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-50 font-Pixel bg-[rgba(255, 255, 255, 0.38)] border-primary/50 backdrop-blur-xs">
                                <DropdownMenuLabel className="list-none px-4 text-xl">
                                    {auth.user
                                        ? "My Account"
                                        : "Continue Your Quest"}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* posts  */}
                                <DropdownMenuRadioGroup>
                                        <li
                                            className="list-none cursor-pointer"
                                        >
                                            <Link
                                                href={'/my-links'}
                                                className="flex items-center text-primary hover:text-primary/80 transition-colors"
                                                style={{
                                                    textShadow:
                                                        "1px 1px 0px #00FFFF",
                                                }}
                                            >
                                                <Edit className="w-4 mx-2 hover:stroke-primary/80 transition-colors" />
                                                My Links
                                            </Link>
                                        </li>
                                   
                                </DropdownMenuRadioGroup>
                                <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                {/* Site Privacy Policy  */}
                                <DropdownMenuRadioGroup>
                                    {[
                                        {
                                            name: "Terms & Conditions",
                                            url: "/terms-and-conditions",
                                            icon: (
                                                <ShieldCheck className="w-4 mx-2 hover:stroke-primary/80 transition-colors" />
                                            ),
                                        },
                                        {
                                            name: "Privacy Policy",
                                            url: "/privacy-policy",
                                            icon: (
                                                <Handshake className="w-4 mx-2 hover:stroke-primary/80 transition-colors" />
                                            ),
                                        },
                                        {
                                            name: "Contact",
                                            url: "/contact",
                                            icon: (
                                                <Contact className="w-4 mx-2 hover:stroke-primary/80 transition-colors" />
                                            ),
                                        },
                                        {
                                            name: "Developers",
                                            url: "/developers",
                                            icon: (
                                                <CodeXml className="w-4 mx-2 hover:stroke-primary/80 transition-colors" />
                                            ),
                                        },
                                    ].map(({ name, url, icon }) => (
                                        <li
                                            key={name}
                                            className="list-none cursor-pointer"
                                        >
                                            <Link
                                                href={url}
                                                className="flex items-center text-primary hover:text-primary/80 transition-colors"
                                                style={{
                                                    textShadow:
                                                        "1px 1px 0px #00FFFF",
                                                }}
                                            >
                                                {icon}
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </DropdownMenuRadioGroup>
                                <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                {/* users */}
                                <DropdownMenuRadioGroup>
                                    {" "}
                                    {auth.user ? (
                                        ""
                                    ) : (
                                        <>
                                            <li className="list-none cursor-pointer">
                                                <Link
                                                    href="/login"
                                                    className="text-primary hover:text-primary/80 transition-colors "
                                                    style={{
                                                        textShadow:
                                                            "1px 1px 0px #FF00FF",
                                                    }}
                                                >
                                                    <DropdownMenuRadioItem
                                                        value="top"
                                                        className="cursor-pointer text-xl"
                                                    >
                                                        LOGIN
                                                    </DropdownMenuRadioItem>
                                                </Link>
                                            </li>

                                            <li className="list-none cursor-pointer">
                                                <Link
                                                    href="/register"
                                                    className="text-primary hover:text-primary/80 transition-colors text-xl"
                                                    style={{
                                                        textShadow:
                                                            "1px 1px 0px #00FF00",
                                                    }}
                                                >
                                                    <DropdownMenuRadioItem
                                                        value="bottom"
                                                        className="cursor-pointer text-xl"
                                                    >
                                                        REGISTER
                                                    </DropdownMenuRadioItem>
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                    {auth.user && (
                                        <DropdownMenuRadioItem
                                            value="right"
                                            className="flex items-center cursor-pointer uppercase bg-transparent text-primary text-xl hover:text-primary/80"
                                            onClick={() =>
                                                router.delete("/logout")
                                            }
                                            style={{
                                                textShadow:
                                                    "1px 1px 0px #00FF00",
                                            }}
                                        >
                                            <LogOut /> <span>Log out</span>
                                        </DropdownMenuRadioItem>
                                    )}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
