import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">IPS</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="px-5 py-2 font-medium">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* 🔽 AUTOMAÇÕES DROPDOWN */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Automações</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4">
                    <li>
                      <Link to="/conversor-gpon">
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block p-2 rounded-md hover:bg-muted"
                          >
                            <div className="font-medium text-sm">
                              Conversor GPON
                            </div>
                            <p className="text-muted-foreground text-xs">
                              Converte automaticamente scripts de configuração
                              GPON entre modelos
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/sobre">
                  <NavigationMenuLink className="px-4 py-2 font-medium">
                    Sobre
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button (Desktop) */}
        <Link to="/login">
          <div className="hidden md:block">
            <Button className="cursor-pointer">Entrar</Button>
          </div>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-5 pt-5">
              <div className="flex flex-col gap-4 mt-10">
                <a className="text-lg font-medium" href="#">
                  Home
                </a>
                <a className="text-lg font-medium" href="#">
                  Automações
                </a>
                <a className="text-lg font-medium" href="#">
                  Sobre
                </a>

                <Button className="mt-4 w-full">Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
