import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaTag, FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import blogData from "@/db/blogs.json";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="blogs"
      className="py-24 bg-gradient-to-b from-blue-50 to-gray-50 relative overflow-hidden font-outfit"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute top-80 right-40 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700 font-medium px-4 py-1.5 rounded-full shadow-sm">
            Blog
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-relaxed bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Thoughts & Articles
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
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
            <motion.div
              key={index}
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
                    <Badge
                      key={tag}
                      className="bg-blue-50 text-gray-400 hover:bg-blue-700 hover:text-white group-hover:text-gray-800 transition-all duration-100 font-normal px-3 py-1 rounded-full"
                    >
                      <FaTag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
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
              className="bg-blue-700 text-white hover:bg-blue-800 transition-all delay-100 py-6 px-36 shadow-none hover:-translate-y-1 w-full md:w-auto max-w-md"
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
