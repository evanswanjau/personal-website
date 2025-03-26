import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Link, useLocation } from "react-router-dom";
import { MessageModal } from "@/components/modals/MessageModal";

export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navigationItems = [
    { name: "Home", path: "/", isAnchor: false },
    { name: "About", path: "/#about", isAnchor: true },
    { name: "Experience", path: "/#experience", isAnchor: true },
    { name: "Projects", path: "/projects", isAnchor: false },
    { name: "Blog", path: "/blog", isAnchor: false },
  ];

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const anchor = path.split("#")[1];
    const element = document.getElementById(anchor);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname !== "/") {
      window.location.href = path;
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-40 border-b border-gray-200 backdrop-blur-md"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center group">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-800 flex items-center gap-2"
        >
          <div className="relative w-14 h-14 overflow-hidden">
            <img
              src="/logo.png"
              className="w-12 absolute top-0 left-0 transition-all duration-100 ease-in-out"
            />
            <img
              src="/logo-switch.png"
              className="w-12 absolute top-0 left-0 opacity-0 transition-all duration-100 ease-in-out"
            />
          </div>
        </Link>

        <div className="flex space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-8">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.isAnchor ? (
                    <a
                      href={item.path}
                      className="flex items-center gap-2 transition-colors relative py-2 text-gray-500 hover:text-gray-800"
                      onClick={(e) => handleAnchorClick(e, item.path)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 transition-colors relative py-2 text-gray-500 hover:text-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-3">
            <MessageModal
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
