import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const FooterSection = () => {
  return (
    <footer className="py-12 text-center bg-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <p className="text-gray-400 text-sm flex justify-center space-x-8">
          <span>© 2025 Evans Wanjau</span>
          <a
            href="terms-and-conditions"
            className="text-gray-400 hover:text-gray-800"
          >
            Terms & Conditions
          </a>
          <a
            href="privacy-policy"
            className="text-gray-400 hover:text-gray-800"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="https://github.com/evanswanjau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/evanswanjau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/evanswanjau"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
