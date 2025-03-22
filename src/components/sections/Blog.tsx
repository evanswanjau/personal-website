import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import blogData from "@/db/blogs.json";
import { BlogCard } from "@/components/BlogCard";

export const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="blogs" className="py-24 relative overflow-hidden font-outfit bg-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <Badge className="mb-4 bg-gray-200 text-gray-700 font-medium py-1.5 px-3 rounded-full">
            Blog
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-5 font-bold tracking-tight leading-tight text-gray-800">
            Thoughts & Articles
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            My latest ideas, guides, and reflections on web development,
            programming practices, and technology trends.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogData.slice(0, 3).map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-24 mb-12 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/blog">
            <Button
              variant="secondary"
              className="bg-gray-900 text-white hover:bg-gray-800 transition-all delay-300 p-5 shadow-none w-full md:w-auto max-w-md cursor-pointer"
            >
              View All Articles
              <FaArrowRight />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
