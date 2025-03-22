import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaTimes,
} from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiApollographql,
  SiSocketdotio,
  SiPostgresql,
  SiRedis,
  SiNetlify,
  SiShadcnui,
  SiNestjs,
  SiMui,
  SiDjango,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiFilmStrip } from "react-icons/gi";
import { BiCodeCurly } from "react-icons/bi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import projectsData from "@/db/projects.json";
import { ProjectCard } from "@/components/ProjectCard";
import { SEO } from "@/components/SEO";

const techIcons: { [key: string]: React.ReactElement } = {
  Vite: <SiVite />,
  React: <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Firebase: <SiFirebase />,
  "Shadcn/UI": <SiShadcnui />,
  TypeScript: <SiTypescript />,
  "Framer Motion": <TbBrandFramerMotion />,
  Netlify: <SiNetlify />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  FFmpeg: <GiFilmStrip />,
  "React Native": <FaReact />,
  GraphQL: <SiGraphql className="text-gray600" />,
  "Apollo Client": <SiApollographql />,
  TailwindCSS: <SiTailwindcss />,
  "Socket.io": <SiSocketdotio />,
  "Monaco Editor": <BiCodeCurly />,
  WebRTC: <LiaNetworkWiredSolid />,
  PostgreSQL: <SiPostgresql />,
  Redis: <SiRedis />,
  "Nest.js": <SiNestjs />,
  Mui: <SiMui />,
  Python: <FaPython />,
  Django: <SiDjango />,
  Docker: <FaDocker />,
  AWS: <FaAws />,
};

export const ProjectsPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(
    new Set(projectsData.flatMap((project) => project.tags))
  ).sort();

  const filteredProjects = projectsData.filter((project) =>
    selectedTags.length === 0
      ? true
      : selectedTags.every((tag) => project.tags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section
      id="projects"
      className="pt-32 pb-24 relative overflow-hidden bg-white"
    >
      <SEO
        title="Projects"
        description="Explore my diverse portfolio, showcasing a wide range of projects across various technologies and industries, highlighting innovative solutions and technical expertise."
        keywords="portfolio, web development, software projects, innovative solutions, technical expertise, React, TypeScript, JavaScript, software engineering"
        url="evanswanjau.vercel.app/projects"
        image="https://evanswanjau.vercel.app/logo.png"
      />

      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed text-gray-900">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12 text-lg">
            Explore my diverse portfolio, showcasing a wide range of projects
            across various technologies and industries, highlighting innovative
            solutions and technical expertise.
          </p>
        </motion.div>

        <div className="gap-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Filter by Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer px-3 py-1 rounded-full transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-gray-600 text-white hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  {techIcons[tag] || <BiCodeCurly />}
                  {tag}
                  {selectedTags.includes(tag) && (
                    <FaTimes
                      className="text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTag(tag);
                      }}
                    />
                  )}
                </span>
              </Badge>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <Button
              variant="link"
              className="mt-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedTags([])}
            >
              Clear All Filters
            </Button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} techIcons={techIcons} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-gray-600 text-center mt-8">
            No projects match the selected tags. Try different filters!
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
