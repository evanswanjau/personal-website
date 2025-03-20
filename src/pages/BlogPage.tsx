import { motion } from "framer-motion";
import blogData from "@/db/blogs.json";
import { BlogCard } from "@/components/BlogCard";

interface BlogPost {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  link: string;
}

export const BlogPage = () => {
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
    <section
      id="blogs"
      className="pt-32 pb-24 relative overflow-hidden font-outfit"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-relaxed text-gray-800">
            Blog
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
          {blogData.map((post: BlogPost, index: number) => (
            <BlogCard post={post} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;
