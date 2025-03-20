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
      className="group border-b border-gray-200 pb-8 hover:border-blue-300 flex flex-col h-full"
    >
      <a href={post.link} className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarAlt className="text-gray-500 text-sm" />
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors mb-3">
          {post.title}
        </h3>

        <p className="text-gray-400 group-hover:text-gray-700 mb-4 leading-relaxed">
          {post.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <a href={`/blog/tags/${tag.toLowerCase()}`} key={tag}>
              <Badge className="bg-blue-50 text-gray-500 hover:bg-blue-700 hover:text-white cursor-pointer group-hover:text-gray-800 transition-all duration-100 font-normal px-3 py-1 rounded-full">
                <FaTag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <div className="flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform duration-300">
            Read Article
            <FaArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </a>
    </motion.div>
  );
};
