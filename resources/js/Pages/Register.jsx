"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { Card } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Separator } from "@/Components/ui/separator"
import { Checkbox } from "@/Components/ui/checkbox"
import { Eye, EyeOff, Lock, Mail, User, Youtube } from 'lucide-react'
import { Link, useForm } from "@inertiajs/react"
import Layout from "@/Components/layout/Layout"


const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const { data, setData, post, processing, errors } = useForm({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [glitchEffect, setGlitchEffect] = useState(false)
  const [pixels, setPixels] = useState([])
  const canvasRef = useRef(null)
  const [selectedCharacter, setSelectedCharacter] = useState(0)
  
  // Generate pixel art elements for background
  useEffect(() => {
    const colors = ['#00FF00', '#00CCFF', '#0088FF', '#0044FF']
    const newPixels = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(Math.random() * 4) + 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setPixels(newPixels)
  }, [])
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true)
      setTimeout(() => setGlitchEffect(false), 150)
    }, 4000)
    
    return () => clearInterval(glitchInterval)
  }, [])
  
  // Character selection animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCharacter((prev) => (prev + 1) % 4)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    let frame = 0
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)'
      ctx.lineWidth = 1
      
      const cellSize = 40
      const offsetX = frame % cellSize
      const offsetY = frame % cellSize
      
      for (let x = offsetX; x < canvas.width; x += cellSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      for (let y = offsetY; y < canvas.height; y += cellSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Draw moving dots at intersections
      ctx.fillStyle = 'rgba(0, 255, 255, 0.2)'
      for (let x = offsetX; x < canvas.width; x += cellSize) {
        for (let y = offsetY; y < canvas.height; y += cellSize) {
          if (Math.random() > 0.85) {
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
      
      frame++
      requestAnimationFrame(drawGrid)
    }
    
    drawGrid()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!acceptTerms) {
      alert("You must accept the terms and conditions")
      return
    }
    
    post('/register');
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0">
        {/* Pixel art elements */}
        {pixels.map((pixel, i) => (
          <div 
            key={i}
            className="absolute bg-current"
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
              color: pixel.color,
              opacity: 0.3,
              boxShadow: `0 0 ${pixel.size * 2}px ${pixel.color}`
            }}
          />
        ))}
      </div>
      
      {/* Character Selection UI */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-8 z-10">
        {[0, 1, 2, 3].map((char) => (
          <div 
            key={char}
            className={`w-12 h-12 border-2 ${selectedCharacter === char ? 'border-[#00FF00]' : 'border-primary/30'} flex items-center justify-center transition-all duration-300`}
            style={{ 
              boxShadow: selectedCharacter === char ? '0 0 10px #00FF00' : 'none',
              opacity: selectedCharacter === char ? 1 : 0.5
            }}
          >
            <div className="w-8 h-8 bg-current" style={{ color: '#00FF00', clipPath: getCharacterShape(char) }}></div>
          </div>
        ))}
      </div>
      
      {/* Stats UI */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block z-10">
        <div className=" text-xs text-[#00FF00]/70 space-y-2">
          <div>STR: 10</div>
          <div>DEX: 15</div>
          <div>INT: 12</div>
          <div>LUK: 08</div>
        </div>
      </div>
      
      {/* UI Frame */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[#00FF00]/10 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[#00FF00]/10 z-10"></div>
      <div className="absolute top-8 left-8 flex space-x-2 opacity-30 z-10">
        <div className="w-3 h-3 rounded-full bg-[#00FF00]"></div>
        <div className="w-3 h-3 rounded-full bg-[#00FF00]/70"></div>
        <div className="w-3 h-3 rounded-full bg-[#00FF00]/40"></div>
      </div>
      <div className="absolute top-8 right-8  text-xs text-[#00FF00]/70 z-10">
        CHARACTER CREATION v2.1.0
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-20">
        <div className={`text-center space-y-2 ${glitchEffect ? 'translate-x-[2px]' : ''} transition-transform duration-75`}>
          <div className="flex justify-center">
            <Badge 
              variant="outline" 
              className=" text-[#00FF00] border-2 border-[#00FF00]/20 px-4 py-2 rounded-none"
              style={{ textShadow: "1px 1px 0px #00FF00" }}
            >
              NEW PLAYER
            </Badge>
          </div>
          
          <h1 
            className=" text-3xl md:text-4xl font-bold text-primary relative"
            style={{ textShadow: "3px 3px 0px #00FF00" }}
          >
            Create Your Character
            {glitchEffect && (
              <span className="absolute inset-0 text-[#FF00FF] ml-[3px] mt-[2px] opacity-70">
                Create Your Character
              </span>
            )}
          </h1>
          
          <p className=" text-primary/70">
            Join our community of pixel art enthusiasts
          </p>
        </div>
        
        <div className="relative">
          {/* Decorative Pixels */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-4 border-primary bg-transparent"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-4 border-[#00FF00] bg-transparent"></div>
          
          {/* CRT screen effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#00FF00]/5 to-transparent rounded-sm opacity-50 blur-sm"></div>
          
          <Card className={`rounded-none border-4 border-primary bg-background/90 backdrop-blur-sm p-6 ${glitchEffect ? 'translate-x-[1px] translate-y-[1px]' : ''} transition-transform duration-75`}
                style={{ boxShadow: "8px 8px 0px 0px rgba(0,255,255,0.3)" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className=" text-primary">
                  Username
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                    <User className="h-4 w-4" />
                  </div>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Choose a username"
                    value={data.username}
                    onChange={e => setData('username', e.target.value)}
                    className=" pl-10 border-2 border-primary/50 focus:border-[#00FF00] rounded-none"
                  />
                </div>
                {errors.username && (
                <div className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">
                  <div className="flex items-center gap-2">
                    <span>!</span>
                    <span>{errors.username}</span>
                  </div>
                </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className=" text-primary">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    className=" pl-10 border-2 border-primary/50 focus:border-[#00FF00] rounded-none"
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
                <Label htmlFor="password" className=" text-primary">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    className=" pl-10 border-2 border-primary/50 focus:border-[#00FF00] rounded-none"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-primary/70" />
                    ) : (
                      <Eye className="h-4 w-4 text-primary/70" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
                {errors.password && (
                <div className="bg-red-500/10 border-2 border-red-500 p-3  text-sm text-red-500">
                  <div className="flex items-center gap-2">
                    <span>!</span>
                    <span>{errors.password}</span>
                  </div>
                </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className=" text-primary">
                  Confirm Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={data.password_confirmation}
                    onChange={e => setData('password_confirmation', e.target.value)}
                    className=" pl-10 border-2 border-primary/50 focus:border-[#00FF00] rounded-none"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-primary/70" />
                    ) : (
                      <Eye className="h-4 w-4 text-primary/70" />
                    )}
                    <span className="sr-only">
                      {showConfirmPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked)}
                  className="rounded-none border-2 border-primary/50 data-[state=checked]:bg-[#00FFFF] data-[state=checked]:text-black"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="font-mono text-sm text-primary/70 leading-tight"
                  >
                    I accept the{" "}
                    <Link to="/terms" className="text-[#00FFFF] hover:underline">
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>
              <Button 
                type="submit"
                disabled={processing}
                className="w-full  bg-[#00FF00] hover:bg-[#00FF00]/90 text-black border-none rounded-none"
                style={{ 
                  boxShadow: "4px 4px 0px 0px rgba(0,255,255,0.3)",
                }}
              >
                {processing ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse">Creating</div>
                    <div className="animate-bounce">...</div>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
              
              <div className="relative flex items-center gap-4 py-2">
                <Separator className="flex-1 bg-primary/20" />
                <span className=" text-xs text-primary/50">OR</span>
                <Separator className="flex-1 bg-primary/20" />
              </div>
              
              <div className="text-center">
          <p className=" text-sm text-primary/70">
            Already have an account?{" "}
            <Link
              href="/login" 
              className="text-[#00FF00] hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
            </form>
          </Card>
        </div>
        
       
      </div>
      
      {/* Decorative Game Elements */}
      <div className="absolute bottom-4 right-4 opacity-50 z-10">
        <Youtube className="h-8 w-8 text-[#00FF00]" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-50 z-10  text-xs text-[#00FF00]/70">
        PRESS A TO CONFIRM
      </div>
    </div>
  )
}
Register.layout = (page) => <Layout children={page} />
export default Register
// Helper function to generate different character shapes
function getCharacterShape(){
  const shapes = [
    // Simple character
    `polygon(
      25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 
      75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%, 
      0% 25%, 25% 25%
    )`,
    // Wizard hat character
    `polygon(
      50% 0%, 60% 10%, 75% 15%, 75% 30%, 100% 30%, 
      100% 70%, 75% 70%, 75% 100%, 25% 100%, 25% 70%, 
      0% 70%, 0% 30%, 25% 30%, 25% 15%, 40% 10%
    )`,
    // Robot character
    `polygon(
      30% 0%, 70% 0%, 70% 20%, 90% 20%, 90% 40%, 
      100% 40%, 100% 80%, 80% 80%, 80% 100%, 60% 100%, 
      60% 80%, 40% 80%, 40% 100%, 20% 100%, 20% 80%, 
      0% 80%, 0% 40%, 10% 40%, 10% 20%, 30% 20%
    )`,
    // Alien character
    `polygon(
      20% 0%, 40% 0%, 50% 10%, 60% 0%, 80% 0%, 
      90% 20%, 100% 40%, 100% 70%, 80% 90%, 
      60% 100%, 40% 100%, 20% 90%, 0% 70%, 
      0% 40%, 10% 20%
    )`
  ]
  
 
}
