import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { FaTag } from "react-icons/fa";
import blogData from "@/db/blogs.json";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/BlogCard";
import { SEO } from "@/components/SEO";

interface BlogPost {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  link: string;
  content: string;
}

const enhanceHtml = (html: string) => {
  const enhanced = html
    .replace(
      /<h([1-6])>(.*?)<\/h\1>/g,
      '<h$1 class="mb-6 text-gray-800 font-semibold">$2</h$1>'
    )
    .replace(/<p>(.*?)<\/p>/g, '<p class="mb-4 text-lg text-gray-500">$1</p>')
    .replace(
      /<pre><code>(.*?)<\/code><\/pre>/gs,
      '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-6 overflow-x-auto"><code class="font-mono text-sm">$1</code></pre>'
    );

  return enhanced;
};

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const foundPost = blogData.find(
      (p: BlogPost) => p.link === `/blog/${slug}`
    );
    setPost(foundPost || null);

    if (foundPost) {
      const parseDate = (dateStr: string) => new Date(dateStr);

      const sorted = [...blogData]
        .filter((p) => p.link !== foundPost.link)
        .sort(
          (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
        )
        .slice(0, 3);

      setRecentPosts(sorted);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(post.content);
  const enhancedContent = enhanceHtml(sanitizedContent);

  return (
    <div className="container mx-auto pt-32 pb-16">
      <SEO
        title={post.title}
        description={post.desc}
        keywords={post.tags.join(", ")}
        url={`evanswanjau.vercel.app/+ ${slug}`}
        image="https://evanswanjau.vercel.app/logo.png"
      />

      <article className="prose prose-lg dark:prose-invert mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <a href={`/blog/tags/${tag.toLowerCase()}`} key={tag}>
              <Badge className="bg-gray-100 text-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer transition-all duration-300 font-normal px-3 py-1">
                <FaTag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            </a>
          ))}
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="mt-8">{parse(enhancedContent)}</div>
      </article>

      {recentPosts.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <hr className="border-gray-200 dark:border-gray-700 mb-12" />
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((recentPost, index) => (
              <BlogCard post={recentPost} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostDetail;
