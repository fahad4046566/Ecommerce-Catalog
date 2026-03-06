import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "../hooks/UseCart";
import {Sheet,SheetContent, SheetTitle, SheetTrigger,} from "./ui/sheet";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { ShoppingCart, Store, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const {items} = useCart()
  const totalItemsInCart = items.reduce((acc, item) => acc + item.totalItems, 0);
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <nav className=" hidden md:block border-b sticky z-50 top-0 bg-[#131A22]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-3 font-serif"
          >
            <Store className="text-[#d3660d] " />
            <span className="text-orange-500 text-3xl">Shop</span><span className="text-white">Hub</span>
          </Link>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "activeBtn" : "secondary",
                  }),
                  "transition-all",
                )
              }
            >
              Home
            </NavLink>
             <NavLink
              to="/product"
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "activeBtn" : "secondary",
                  }),
                  "transition-all",
                )
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "activeBtn" : "secondary",
                  }),
                  "transition-all",
                )
              }
            >
              About
            </NavLink>

            <NavLink to="/cart">
            {({ isActive }) => (
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "relative cursor-pointer",
                  isActive && "bg-orange-100 border-orange-500 text-orange-500",
                )}
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 px-2 bg-orange-600">
                 {totalItemsInCart}
                </Badge>
              </Button>
            )}
          </NavLink>
          </div>
        </div>
      </nav>
      {/* second nav for Responsiveness  */}
      <header className="flex items-center justify-between p-4 border-b md:hidden sticky z-50 top-0 bg-[#131A22]">
        <div>
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-3 font-serif"
          >
            <Store className="text-[#d3660d]" />
            <span className="text-orange-500 text-3xl">Shop</span><span className="text-white">Hub</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <NavLink to="/cart">
            {({ isActive }) => (
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "relative cursor-pointer",
                  isActive && "bg-orange-100 border-orange-500 text-orange-500",
                )}
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 px-2 bg-orange-600">
                  {totalItemsInCart}
                </Badge>
              </Button>
            )}
          </NavLink>

          {/* Mobile Menu Trigger */}
          <Sheet open={isopen} onOpenChange={setisopen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <SheetTitle className="text-left pl-4 pt-4 border-b pb-4">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-2 mt-6">
                <NavLink
                  onClick={() => setisopen(false)}
                  to="/"
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({
                        variant: isActive ? "activeBtn" : "secondary",
                      }),
                      "justify-start w-full text-lg h-12", //
                    )
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setisopen(false)}
                  to="/product"
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({
                        variant: isActive ? "activeBtn" : "secondary",
                      }),
                      "justify-start w-full text-lg h-12", //
                    )
                  }
                >
                  Product
                </NavLink>

                <NavLink
                  onClick={() => setisopen(false)}
                  to="/about"
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({
                        variant: isActive ? "activeBtn" : "secondary",
                      }),
                      "justify-start w-full text-lg h-12",
                    )
                  }
                >
                  About
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <nav></nav>
    </>
  );
};
export default Navbar;
