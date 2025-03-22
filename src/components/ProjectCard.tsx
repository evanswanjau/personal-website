import { FaGithub, FaLink } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  desc: string;
  tech: string;
  tags: string[];
  liveLink: string;
  repoLink: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  techIcons: { [key: string]: React.ReactElement };
}

export const ProjectCard = ({ project, techIcons }: ProjectCardProps) => {
  const techList = project.tech.split(", ").map((tech) => ({
    name: tech,
    icon: techIcons[tech] || <BiCodeCurly className="text-gray-600" />,
  }));

  return (
    <div className="p-6 rounded-2xl bg-white hover:shadow-2xl hover:shadow-gray-800/20 transition-all duration-400">
      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="p-0">
          <p className="font-bold text-gray-400 text-sm -mb-2">
            {project.year}
          </p>
          <CardTitle className="flex items-center gap-3 text-xl font-semibold text-gray-800">
            <h3>{project.name}</h3>
          </CardTitle>
          <CardDescription className="text-gray-400 text-base leading-relaxed">
            <p className="line-clamp-3" title={project.desc}>{project.desc}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-3 p-0 flex space-x-2 justify-between">
          <div className="text-sm text-gray-500 font-medium ">
            <div className="flex flex-wrap gap-2 mt-1 space-x-3 leading-6">
              {techList.slice(0, 3).map((tech) => (
                <span key={tech.name} className="flex items-center gap-1">
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="outline" className="text-xs">
                  +{techList.length - 3}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex flex-col gap-1">
                  {techList.slice(3).map((tech) => (
                    <span key={tech.name} className="flex items-center gap-1">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
        <CardFooter className="p-0 mt-4 flex flex-wrap gap-4">
          {project.liveLink && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white transition-colors text-sm"
            >
              <a
                href={project.liveLink}
                className="flex items-center gap-2 text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink /> <span className="text-xs">Demo Link</span>
              </a>
            </Button>
          )}
          {project.repoLink && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-transparent border-gray-200 hover:bg-gray-800 text-gray-700 hover:text-white transition-colors"
            >
              <a
                href={project.repoLink}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Respository
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
