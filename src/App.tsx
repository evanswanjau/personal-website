import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/footer";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderVisible(scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Header isHeaderVisible={isHeaderVisible} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
