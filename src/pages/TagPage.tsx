import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blogData from "@/db/blogs.json";
import { BlogCard } from "@/components/BlogCard";
import { SEO } from "@/components/SEO";

interface BlogPost {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  link: string;
}

export const TagPage = () => {
  const { tag } = useParams<{ tag: string }>();

  const filteredPosts: BlogPost[] = tag
    ? blogData.filter((post: BlogPost) =>
        post.tags.some(
          (postTag) => postTag.toLowerCase() === tag?.toLowerCase()
        )
      )
    : [];

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
      <SEO
        title="Projects"
        description="Explore my diverse portfolio, showcasing a wide range of projects across various technologies and industries, highlighting innovative solutions and technical expertise."
        keywords="portfolio, web development, software projects, innovative solutions, technical expertise, React, TypeScript, JavaScript, software engineering"
        url="evanswanjau.vercel.app/projects"
        image="https://evanswanjau.vercel.app/logo.png"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-relaxed text-gray-800">
            Blog Posts Tagged: {tag}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Showing all posts related to "{tag}"
          </p>
          <a
            href="/blog"
            className="mt-4 text-gray-600 hover:text-gray-800 font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            aria-label="Back to all posts"
          >
            <span>←</span> Back to all posts
          </a>
        </motion.div>

        {filteredPosts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {filteredPosts.map((post: BlogPost, index: number) => (
              <BlogCard post={post} key={index} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              No posts found with the tag{" "}
              <b className="text-gray-600">"{tag}"</b>
            </p>
            <a
              href="/blog"
              className="mt-4 text-gray-600 hover:text-gray-800 font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer"
              aria-label="Back to all posts"
            >
              <span>←</span> Back to all posts
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TagPage;
