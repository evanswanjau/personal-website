import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import TagPage from "@/pages/TagPage";
import BlogPostDetail from "@/pages/BlogPostDetailPage";
import ProjectsPage from "@/pages/ProjectsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/blog/tags/:tag" element={<TagPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
