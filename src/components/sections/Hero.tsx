import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 z-10 relative w-full flex flex-col justify-center min-h-screen">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge className="mb-4 bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-full">
              Full Stack Developer
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Building exceptional digital experiences.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mt-6 max-w-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I'm Evans Wanjau, a full stack developer with 12+ years of
            professional excellence. Specializing in creating robust, scalable
            applications that deliver outstanding user experiences.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <Button
              asChild
              variant={"default"}
              className="border border-gray-900 bg-gray-900 text-white hover:bg-gray-800 transition-all p-5 delay-200 shadow-none"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-gray-900 text-gray-800 hover:bg-gray-900 hover:text-white transition-all delay-200 p-5 px-5 shadow-none"
            >
              <a href="/Evans-Wanjau-CV.pdf" download>
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="text-sm text-gray-500">Connect with me:</span>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/evanswanjau"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/evanswanjau"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/evanswanjau"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FaXTwitter size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
