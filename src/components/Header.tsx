import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

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
      className="fixed top-0 left-0 w-full z-40 border-b border-gray-200"
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-800 flex items-center gap-2"
        >
          <img src="logo.png" className="w-12" />
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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-100 transition-colors rounded-full px-4"
                >
                  <FaEnvelope className="text-gray-500" /> Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white p-8 rounded-xl shadow-lg w-11/12 max-w-md border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                  <FaEnvelope className="text-gray-500" /> Get In Touch
                </h3>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Message
                    </label>
                    <textarea
                      placeholder="What would you like to discuss?"
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800"
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-2 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-md py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
