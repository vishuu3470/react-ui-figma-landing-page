import logo from "./../../assets/Name_logo.svg";
import imageLogo from "./../../assets/logo.svg";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { mainNav } from "./data";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex h-20 container m-auto w-full justify-between shrink-0 items-center px-[24px] xl:px-0 ">
      <Link to="#" className="mr-6  lg:flex">
        <img
          src={logo}
          alt="logo"
          className="hidden md:block w-[333px]"
          height={40}
        />
        <img
          src={imageLogo}
          alt="logo"
          className="block md:hidden w-[57px]"
          height={32}
        />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <ul className=" md:flex items-center gap-10 ">
          {mainNav.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <li key={item.name}>
                <Link
                  to={item.url}
                  className={`transition-colors py-2  ${
                    isActive
                      ? "text-brown-default font-normal border-b-2 border-black "
                      : " hover:text-brown-default"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              to="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About
            </Link>
            <Link
              to="/services"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              to="contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
