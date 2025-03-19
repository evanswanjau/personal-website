import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion"; // Removed unused AnimatePresence
import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaMusic,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  // FaBriefcase,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/Hero";
import { BlogSection } from "@/components/sections/Blog";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mouse movement setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / totalHeight) * 100);

      if (scrollY > lastScrollY && scrollY > 80) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(scrollY);

      const sections = ["home", "about", "experience", "projects", "blogs"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY, lastScrollY]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden font-sans selection:bg-gray-600/20">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-700 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <Header activeSection={activeSection} isHeaderVisible={isHeaderVisible} />

      <HeroSection />

      {/* About Me */}
      <section id="about" className="py-24 bg-white relative">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-gray-50 rounded-bl-3xl opacity-70"></div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-col md:flex-row gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-2 bg-gray-200 text-gray-700 hover:bg-gray-300 font-normal px-4 py-2 rounded-full">
                  About Me
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Professional Software Engineer with a Focus on Modern Web
                  Technologies
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg leading-relaxed">
                  I'm Evans Wanjau, a Full Stack Developer with over 12 years of
                  experience, based in Nairobi, Kenya. My career is built on
                  delivering robust, scalable solutions for industries like
                  healthcare, e-commerce, and education, often leading
                  distributed teams to achieve exceptional results.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in modern JavaScript frameworks—React, Node.js,
                  TypeScript—and have a knack for enhancing user experiences,
                  optimizing performance, and ensuring compliance with standards
                  like GDPR. My work has driven outcomes like{" "}
                  <span className="font-semibold text-gray-800">
                    35% engagement boosts
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-gray-800">
                    80% efficiency improvements
                  </span>
                  .
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond code, I'm passionate about staying ahead in tech,
                  diving into cloud platforms, and honing my craft. You'll find
                  me reading, hiking, or strategizing over coffee when I'm not
                  building.
                </p>
              </motion.div>

              <motion.div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <FaUser className="text-gray-700" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Name:</p>
                    <p className="text-gray-600">Evans Wanjau</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <FaMapMarkerAlt className="text-gray-700" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Location:</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <FaEnvelope className="text-gray-700" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Email:</p>
                    <p className="text-gray-600">evanswanjau@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <FaClock className="text-gray-700" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">
                      Experience:
                    </p>
                    <p className="text-gray-600">12+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-gray-200 shadow-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full opacity-70"></div>

                <CardHeader className="border-b border-gray-100 relative z-10">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Core Skills
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Technologies I excel in
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-6 text-gray-600">
                    {[
                      {
                        skill: "TypeScript",
                        icon: <FaJsSquare className="text-blue-500" />,
                        level: 95,
                      },
                      {
                        skill: "React",
                        icon: <FaReact className="text-blue-400" />,
                        level: 90,
                      },
                      {
                        skill: "Node.js",
                        icon: <FaNodeJs className="text-green-600" />,
                        level: 85,
                      },
                      {
                        skill: "Python",
                        icon: <FaPython className="text-blue-600" />,
                        level: 80,
                      },
                      {
                        skill: "GraphQL",
                        icon: <FaDatabase className="text-pink-600" />,
                        level: 75,
                      },
                    ].map(({ skill, icon, level }, index) => (
                      <motion.li
                        key={skill}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-xl">{icon}</div>
                            <span className="font-medium">{skill}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + 0.1 * index,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Updated March 2025
                  </span>
                  <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                    12+ Years Experience
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ExperienceSection />

      <ProjectsSection />

      <BlogSection />
    </div>
  );
};

export default App;
