import { GamepadIcon as GameController } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function Header() {
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
            <li>
              <Button
                variant="outline"
                size="sm"
                className=" border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
              >
                CONTACT
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
