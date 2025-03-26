import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaTag, FaArrowRight, FaCalendarAlt } from "react-icons/fa";

interface BlogPost {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group pb-8 hover:border-gray-900 flex flex-col h-full"
    >
      <div
        className="flex flex-col h-full cursor-pointer"
        onClick={() => {
          window.location.href = post.link;
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarAlt className="text-gray-500 text-sm" />
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-700 group-hover:text-gray-900 transition-colors mb-3">
          {post.title}
        </h3>

        <p className="text-gray-400 group-hover:text-gray-700 mb-4 leading-relaxed">
          {post.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <a href={`/blog/tags/${tag.toLowerCase()}`} key={tag}>
              <Badge className="bg-gray-100 text-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer transition-all duration-300 font-normal px-3 py-1">
                <FaTag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center text-gray-900 hover:text-gray-800 font-medium transition-transform duration-300">
            Read Article
            <FaArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
