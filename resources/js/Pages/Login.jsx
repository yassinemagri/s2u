import { useState, useEffect } from "react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Separator } from "@/Components/ui/separator";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Youtube,
} from "lucide-react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Components/layout/Layout";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });
    const [glitchEffect, setGlitchEffect] = useState(false);
    const [stars, setStars] = useState([]);

    // Generate stars for background
    useEffect(() => {
        const newStars = Array.from({ length: 100 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.7 + 0.3,
        }));
        setStars(newStars);
    }, []);

    // Random glitch effect
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchEffect(true);
            setTimeout(() => setGlitchEffect(false), 150);
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0">
                {/* Stars */}
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}

                {/* Grid pattern */}
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10">
                    {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="border border-primary"></div>
                    ))}
                </div>

                {/* Animated pixel art elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20 animate-float">
                    <div className="w-full h-full border-4 border-[#FF00FF]"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 opacity-20 animate-float-delayed">
                    <div className="w-full h-full border-4 border-[#00FFFF]"></div>
                </div>
                <div className="absolute top-2/3 left-1/3 w-8 h-8 opacity-20 animate-float-slow">
                    <div className="w-full h-full border-4 border-[#00FF00]"></div>
                </div>

                {/* Scanlines effect */}
                <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none"></div>
            </div>

            {/* Game console decorative elements */}
            <div className="absolute top-0 left-0 w-full h-8 bg-primary opacity-10 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-primary opacity-10 z-10"></div>
            <div className="absolute top-8 left-8 flex space-x-2 opacity-30 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute top-8 right-8  text-xs text-primary/50 z-10">
                SYSTEM v1.0.4
            </div>

            <div className="w-full max-w-md space-y-8 relative z-20">
                <div
                    className={`text-center space-y-2 ${
                        glitchEffect ? "translate-x-[2px]" : ""
                    } transition-transform duration-75`}
                >
                    <div className="flex justify-center">
                        <Badge
                            variant="outline"
                            className=" text-[#FF00FF] border-2 border-[#FF00FF]/20 px-4 py-2 rounded-none"
                            style={{ textShadow: "1px 1px 0px #FF00FF" }}
                        >
                            PLAYER LOGIN
                        </Badge>
                    </div>

                    <h1
                        className=" text-3xl md:text-4xl font-bold text-primary relative"
                        style={{ textShadow: "3px 3px 0px #FF00FF" }}
                    >
                        Continue Your Quest
                        {glitchEffect && (
                            <span className="absolute inset-0 text-[#00FFFF] ml-[3px] mt-[2px] opacity-70">
                                Continue Your Quest
                            </span>
                        )}
                    </h1>

                    <p className=" text-primary/70">Login to access your S2U Community</p>
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
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className=" text-primary"
                                >
                                    Email / Username
                                </Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email or username"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className=" pl-10 border-2 border-primary/50 focus:border-[#FF00FF] rounded-none"
                                    />
                                </div>
                                {errors.email && (
                                    <div className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">
                                        <div className="flex items-center gap-2">
                                            <span>!</span>
                                            <span>{errors.email}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label
                                        htmlFor="password"
                                        className=" text-primary"
                                    >
                                        Password
                                    </Label>
                                    <Link
                                        href="/forgot-password"
                                        className=" text-xs text-[#FF00FF] hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                                        <Lock className="h-4 w-4" />
                                    </div>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Enter your password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className=" pl-10 border-2 border-primary/50 focus:border-[#FF00FF] rounded-none"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-primary/70" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-primary/70" />
                                        )}
                                        <span className="sr-only">
                                            {showPassword
                                                ? "Hide password"
                                                : "Show password"}
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full  bg-[#FF00FF] hover:bg-[#FF00FF]/90 text-white border-none rounded-none"
                                style={{
                                    boxShadow:
                                        "4px 4px 0px 0px rgba(255,0,255,0.3)",
                                }}
                            >
                                {processing ? (
                                    <div className="flex items-center gap-2">
                                        <div className="animate-pulse">
                                            Loading
                                        </div>
                                        <div className="animate-bounce">
                                            ...
                                        </div>
                                    </div>
                                ) : (
                                    "Login to Continue"
                                )}
                            </Button>

                            <div className="relative flex items-center gap-4 py-2">
                                <Separator className="flex-1 bg-primary/20" />
                                <span className=" text-xs text-primary/50">
                                    OR
                                </span>
                                <Separator className="flex-1 bg-primary/20" />
                            </div>

                            <div className="text-center">
                                <p className=" text-sm text-primary/70">
                                    Don't have an account yet?{" "}
                                    <Link
                                        href="/register"
                                        className="text-[#FF00FF] hover:underline"
                                    >
                                        Register now
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>

            {/* Decorative Game Elements */}
            <div className="absolute bottom-4 left-4 opacity-50 z-10">
                <Youtube className="h-8 w-8 text-[#FF00FF]" />
            </div>
            <div className="absolute top-1/2 right-4 opacity-50 transform -translate-y-1/2 z-10">
                <div className=" text-xs text-primary/50 writing-vertical">
                    PRESS START TO CONTINUE
                </div>
            </div>

            {/* Power button */}
            <div className="absolute bottom-4 right-4 opacity-50 z-10">
                <div className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center">
                    <div className="w-2 h-5 border-2 border-t-0 border-primary/50"></div>
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

                .bg-scanlines {
                    background: linear-gradient(
                        to bottom,
                        transparent 50%,
                        rgba(0, 0, 0, 0.1) 50%
                    );
                    background-size: 100% 4px;
                }

                .writing-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </div>
    );
};
LoginPage.layout = (page) => <Layout children={page} />;
export default LoginPage;
