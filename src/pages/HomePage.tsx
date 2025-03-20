import { HeroSection } from "@/components/sections/Hero";
import { BlogSection } from "@/components/sections/Blog";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import AboutSection from "@/components/sections/About";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-x-hidden font-sans selection:bg-gray-600/20">
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <BlogSection />
    </div>
  );
};

export default App;
