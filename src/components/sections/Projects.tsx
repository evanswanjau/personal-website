import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
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
import projectsData from "@/db/projects.json";
import { ProjectCard } from "@/components/ProjectCard";
import { useRef } from "react";

// Tech-to-Icon mapping
const techIcons: { [key: string]: React.ReactElement } = {
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

export const ProjectsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "projects-carousel",
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge className="mb-4 bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-full">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed text-gray-800">
            Featured Works
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mb-12">
            Explore my diverse portfolio, showcasing a wide range of projects
            across various technologies and industries, highlighting innovative
            solutions and technical expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Slider ref={sliderRef} {...settings}>
            {projectsData.map((project) => (
              <div key={project.name} className="mt-3 mb-12 px-3">
                <ProjectCard project={project} techIcons={techIcons} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
