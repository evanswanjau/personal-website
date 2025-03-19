import { motion } from "framer-motion";
import {
  // FaEye,
  FaGithub,
  FaLink,
  FaTimes,
  FaReact, // React
  FaNodeJs, // Node.js
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiVite, // Vite
  SiTypescript, // TypeScript
  SiTailwindcss, // Tailwind CSS
  SiFirebase, // Firebase
  SiExpress, // Express
  SiMongodb, // MongoDB
  // SiAmazonaws, // AWS S3
  SiGraphql, // GraphQL
  SiApollographql, // Apollo Client
  SiSocketdotio, // Socket.io
  SiPostgresql, // PostgreSQL
  SiRedis, // Redis
  SiNetlify, // Netlify
  SiShadcnui,
  SiNestjs,
  SiMui,
  SiDjango,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb"; // Framer Motion
import { GiFilmStrip } from "react-icons/gi"; // FFmpeg (no specific icon, using a film strip)
import { BiCodeCurly } from "react-icons/bi"; // Monaco Editor (no specific icon, using curly braces)
import { LiaNetworkWiredSolid } from "react-icons/lia"; // WebRTC (no specific icon, using network icon)
// import { RiJwtIcon } from "react-icons/ri"; // JWT (custom icon from react-icons/ri)
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import projectsData from "@/db/projects.json"; // Adjust path as needed

// TypeScript interface for a Project
interface Project {
  name: string;
  desc: string;
  tech: string;
  tags: string[];
  liveLink: string;
  repoLink: string;
  year: string;
}

// Tech-to-Icon mapping
const techIcons: { [key: string]: JSX.Element } = {
  Vite: <SiVite className="text-gray-500" />,
  React: <FaReact className="text-gray-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-gray-500" />,
  Firebase: <SiFirebase className="text-gray-500" />,
  "Shadcn/UI": <SiShadcnui className="text-gray-500" />,
  TypeScript: <SiTypescript className="text-gray-500" />,
  "Framer Motion": <TbBrandFramerMotion className="text-gray-600" />,
  Netlify: <SiNetlify className="text-gray-500" />,
  "Node.js": <FaNodeJs className="text-gray-600" />,
  Express: <SiExpress className="text-gray-800" />,
  MongoDB: <SiMongodb className="text-gray-700" />,
  FFmpeg: <GiFilmStrip className="text-gray-600" />,
  "React Native": <FaReact className="text-gray-500" />,
  GraphQL: <SiGraphql className="text-gray600" />,
  "Apollo Client": <SiApollographql className="text-gray-700" />,
  TailwindCSS: <SiTailwindcss className="text-gray-500" />,
  "Socket.io": <SiSocketdotio className="text-gray-500" />,
  // JWT: <RiJwtIcon className="text-blue-700" />,
  "Monaco Editor": <BiCodeCurly className="text-gray-500" />,
  WebRTC: <LiaNetworkWiredSolid className="text-gray-500" />,
  PostgreSQL: <SiPostgresql className="text-gray-500" />,
  Redis: <SiRedis className="text-gray-500" />,
  "Nest.js": <SiNestjs className="text-gray-500" />,
  Mui: <SiMui className="text-gray-500" />,
  Python: <FaPython className="text-gray-500" />,
  Django: <SiDjango className="text-gray-500" />,
  Docker: <FaDocker className="text-gray-500" />,
  AWS: <FaAws className="text-gray-500" />,
};

// ProjectCard component with tech icons
const ProjectCard = ({ project }: { project: Project }) => {
  const techList = project.tech.split(", ").map((tech) => ({
    name: tech,
    icon: techIcons[tech] || <BiCodeCurly className="text-gray-600" />, // Fallback icon
  }));

  return (
    <motion.div
      className="p-6 rounded-2xl bg-white hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-200"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="p-0">
          <p className="font-bold text-gray-400 text-sm -mb-2">
            {project.year}
          </p>
          <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-800">
            <h3>{project.name}</h3>
          </CardTitle>
          <CardDescription className="text-gray-400 text-base leading-relaxed">
            <p className="line-clamp-5">{project.desc}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-3 p-0">
          <div className="text-sm text-gray-500 font-medium ">
            <div className="flex flex-wrap gap-2 mt-1 space-x-4 leading-6">
              {techList.map((tech) => (
                <span key={tech.name} className="flex items-center gap-1">
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0 mt-4 flex flex-wrap gap-4">
          {project.repoLink && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-transparent border-blue-200 hover:bg-blue-50 text-blue-700 hover:text-blue-800 transition-colors"
            >
              <a
                href={project.repoLink}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Repository
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm"
            >
              <a
                href={project.liveLink}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink /> Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// ProjectsGrid component
const ProjectsGrid = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </div>
);

// SectionHeader component
const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <Badge className="mb-4 bg-blue-900 text-white hover:bg-blue-800 font-medium px-4 py-1.5 rounded-full shadow-md">
      Projects
    </Badge>
    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
      Selected Works
    </h2>
    <p className="text-gray-600 max-w-3xl mb-12">
      Browse through my portfolio of projects spanning various technologies and
      domains. Filter by tech stacks to explore specific tools I’ve mastered.
    </p>
  </motion.div>
);

export const ProjectsSection = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projectsData.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on selected tags
  const filteredProjects = projectsData.filter((project) =>
    selectedTags.length === 0
      ? true
      : selectedTags.every((tag) => project.tags.includes(tag))
  );

  // Handle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-100 to-blue-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader />

        {/* Tag Filter */}
        <div className="mb-8">
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
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  {techIcons[tag] || <BiCodeCurly className="text-gray-600" />}
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
              className="mt-4 text-blue-600 hover:text-blue-800"
              onClick={() => setSelectedTags([])}
            >
              Clear All Filters
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectsGrid projects={filteredProjects} />
          {filteredProjects.length === 0 && (
            <p className="text-gray-600 text-center mt-8">
              No projects match the selected tags. Try different filters!
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
