import { GamepadIcon as GameController } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, router, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
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
    const [position, setPosition] = useState(null);
    const { auth } = usePage().props;
    console.log(auth);
    return (
        <header className="font-Pixel backdrop-blur-[10.4px] bg-[#ffffff14] border-b border-primary/20 py-4 capitalize">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <GameController className="h-8 w-8 text-primary" />
                    <span
                        className="font-bold text-xl text-primary"
                        style={{ textShadow: "1px 1px 0px #FF00FF" }}
                    >
                        Shtark
                    </span>
                </Link>

                <nav>
                    <ul className="flex gap-6 text-sm items-center">
                        <li>
                            <Link
                                href="/"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-primary hover:text-primary/80 transition-colors"
                            >
                                SERVICES
                            </Link>
                        </li>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground transition duration-300 ease-in-out" variant="outline" size="sm">join us</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={position}
                                    onValueChange={setPosition}
                                >
                                    <DropdownMenuRadioItem value="top">
                                        {" "}
                                        {auth.user ? (
                                            auth.user.username
                                        ) : (
                                            <li className="list-none cursor-pointer"> 
                                                <Link
                                                    href="/login"
                                                    className="text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    LOGIN
                                                </Link>
                                            </li>
                                        )}
                                    </DropdownMenuRadioItem>

                                    <DropdownMenuRadioItem value="right">
                                        {auth.user && (
                                            <Button
                                            className='cursor-pointer'
                                                onClick={() =>
                                                    router.delete("/logout")
                                                }
                                            >
                                                Log out
                                            </Button>
                                        )}
                                    </DropdownMenuRadioItem>

                                    <DropdownMenuRadioItem value="bottom">
                                        {auth.user ? (
                                            auth.user.username
                                        ) : (
                                            <li className="list-none cursor-pointer">
                                                <Link
                                                    href="/register"
                                                    className="text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    REGISTER
                                                </Link>
                                            </li>
                                        )}
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
