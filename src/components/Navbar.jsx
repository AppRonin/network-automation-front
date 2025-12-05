import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/useAuth"; // adjust the path to your store

// 🔽 Import Accordion for mobile dropdown
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Navbar() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  // 🔥 Automações stays active for any subroute (e.g. /conversor-gpon)
  const isAutomacoesActive = location.pathname.startsWith("/conversor-gpon");

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">IPS</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* HOME */}
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-5 py-2 font-medium rounded-md transition ${
                      isActive ? "bg-muted" : "hover:bg-muted"
                    }`
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>

              {/* AUTOMAÇÕES DROPDOWN */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    isAutomacoesActive ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  Automações
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4">
                    <li>
                      <NavLink
                        to="/conversor-gpon"
                        className={({ isActive }) =>
                          `block p-2 rounded-md transition ${
                            isActive ? "bg-muted" : "hover:bg-muted"
                          }`
                        }
                      >
                        <div className="font-medium text-sm">
                          Conversor GPON
                        </div>
                        <p className="text-muted-foreground text-xs">
                          Converte automaticamente scripts de configuração GPON
                          entre modelos
                        </p>
                      </NavLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SOBRE */}
              <NavigationMenuItem>
                <NavLink
                  to="/sobre"
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium rounded-md transition ${
                      isActive ? "bg-muted" : "hover:bg-muted"
                    }`
                  }
                >
                  Sobre
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          {isAuthenticated ? (
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <NavLink to="/login">
              <Button className="cursor-pointer">Entrar</Button>
            </NavLink>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="left" className="w-64 px-5 pt-5">
              <div className="flex flex-col gap-4 mt-10">
                {/* HOME */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-lg font-medium rounded-md p-2 ${
                      isActive ? "bg-muted" : "hover:bg-muted"
                    }`
                  }
                >
                  Home
                </NavLink>

                {/* 🔽 AUTOMAÇÕES MOBILE DROPDOWN */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="automacoes">
                    <AccordionTrigger
                      className={`text-lg font-medium px-2 rounded-md hover:bg-muted ${
                        isAutomacoesActive ? "bg-muted" : ""
                      }`}
                    >
                      Automações
                    </AccordionTrigger>

                    <AccordionContent className="pl-3">
                      <NavLink
                        to="/conversor-gpon"
                        className={({ isActive }) =>
                          `block text-md p-2 rounded-md ${
                            isActive ? "bg-muted" : "hover:bg-muted"
                          }`
                        }
                      >
                        Conversor GPON
                      </NavLink>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* SOBRE */}
                <NavLink
                  to="/sobre"
                  className={({ isActive }) =>
                    `text-lg font-medium rounded-md p-2 ${
                      isActive ? "bg-muted" : "hover:bg-muted"
                    }`
                  }
                >
                  Sobre
                </NavLink>

                {/* LOGIN */}
                {isAuthenticated ? (
                  <Button
                    className="mt-4 w-full cursor-pointer"
                    variant="destructive"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                ) : (
                  <NavLink to="/login">
                    <Button className="mt-4 w-full cursor-pointer">
                      Entrar
                    </Button>
                  </NavLink>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
