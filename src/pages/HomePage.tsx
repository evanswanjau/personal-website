import { HeroSection } from "@/components/sections/Hero";
import { BlogSection } from "@/components/sections/Blog";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import AboutSection from "@/components/sections/About";
import { SEO } from "@/components/SEO";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden font-sans selection:bg-gray-600/20">
      <SEO
        title="Hi, I'm Evans Wanjau"
        description="I'm Evans Wanjau, a full stack developer with 12+ years of professional excellence. Specializing in creating robust, scalable applications that deliver outstanding user experiences."
        keywords="full stack developer, software engineer, web apps, personal website"
        url="evanswanjau.vercel.app"
        image="https://evanswanjau.vercel.app/logo.png"
      />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <BlogSection />
    </div>
  );
};

export default App;
