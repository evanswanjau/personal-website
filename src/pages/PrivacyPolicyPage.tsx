import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b bg-white py-24"
    >
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6">Last Updated: March 19, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Introduction to Our Privacy Commitment
          </h2>
          <p className="text-gray-600">
            Welcome to my personal portfolio website ("Site"), operated by Evans
            Wanjau ("I", "me", or "my"), a Full Stack Developer showcasing over
            12 years of experience through projects, blog posts, and
            professional insights. This Privacy Policy outlines how I collect,
            use, disclose, and protect your personal information when you
            interact with the Site, including its Home, Blog, Projects, Terms,
            and Privacy pages. Your privacy is a top priority, and I am
            committed to handling any data you provide with care, transparency,
            and respect. This Site serves as a professional showcase of my work,
            including projects like VideoHub (a video-sharing platform), Clean
            Cooking Association (a CMS-driven site), and WapidDoc (a healthcare
            directory). It also features a blog where I share technical
            knowledge on topics like React Hooks, Node.js scalability, and
            TypeScript advancements. Whether you’re a visitor exploring my
            portfolio, a potential collaborator, or an employer reviewing my
            skills, this Privacy Policy applies to you. By using the Site, you
            consent to the practices described herein, though you may opt out by
            ceasing use if you disagree with any terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Information I Collect and How It’s Gathered
          </h2>
          <p className="text-gray-600">
            When you visit the Site, I may collect two main types of
            information: Personal Information and Non-Personal Information.
            Personal Information refers to data that can identify you as an
            individual, such as your name or email address. Currently, the Site
            does not feature a contact form or user registration, but if you
            reach out to me directly via email (e.g., [your-email@example.com]),
            I may collect your name, email address, and any details you provide
            in your message. This information is only gathered with your
            explicit action and consent. Non-Personal Information includes
            anonymized or aggregated data that does not identify you personally.
            This may include your IP address, browser type (e.g., Chrome,
            Firefox), operating system (e.g., Windows, macOS), device type
            (e.g., mobile, desktop), pages visited (e.g., "/blog" or
            "/projects"), and the date/time of your visit. I collect this data
            using third-party analytics tools like Google Analytics, which helps
            me understand how visitors interact with the Site—such as which
            project demos (e.g., AIS) are most popular or how long users spend
            reading blog posts like "Vite vs. Webpack." I do not collect
            sensitive personal data (e.g., financial details, social security
            numbers) unless explicitly provided by you in a direct
            communication, which is rare and not encouraged through the Site. No
            cookies or tracking technologies beyond basic analytics are
            currently implemented, but if added in the future (e.g., for session
            management), this policy will be updated, and you’ll be notified via
            the "Last Updated" date. My goal is to minimize data collection to
            what’s necessary for improving the Site’s functionality and user
            experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. How I Use and Process Your Information
          </h2>
          <p className="text-gray-600">
            Any information I collect serves specific, limited purposes aligned
            with operating and enhancing the Site. Personal Information, such as
            your email if you contact me, is used solely to: (a) respond to your
            inquiries or feedback (e.g., about a project like QuantDisco); (b)
            facilitate potential collaboration or professional opportunities; or
            (c) address technical issues you report. I do not use this
            information for marketing, newsletters, or any unsolicited
            communication unless you explicitly request it. Non-Personal
            Information from analytics is used to: (a) analyze usage trends
            (e.g., which blog post—"AI in Web Development"—gets the most views);
            (b) optimize Site performance (e.g., improving load times for
            project demos); and (c) enhance content relevance based on visitor
            behavior (e.g., adding more TypeScript guides if popular). This data
            is aggregated and anonymized, meaning it cannot be linked back to
            you as an individual. I do not sell, rent, or trade your information
            to third parties for commercial purposes. However, Non-Personal
            Information may be shared with analytics providers (e.g., Google
            Analytics) to process usage statistics, governed by their own
            privacy policies. If legally required (e.g., by a court order), I
            may disclose information, but only to the extent necessary and with
            efforts to notify you unless prohibited by law. My use of your data
            is minimal and focused on maintaining a functional, informative
            portfolio site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600">
            As of the last update, the Site does not use cookies or advanced
            tracking technologies beyond basic analytics (e.g., Google Analytics
            scripts). Cookies are small text files stored on your device to
            enhance functionality, such as remembering preferences or tracking
            sessions. Since the Site is primarily informational—showcasing
            projects like Onima Dashboard and blog posts—no cookies are
            currently needed for user sessions or personalization. However,
            Google Analytics may use cookies or similar technologies to collect
            Non-Personal Information (e.g., time spent on the "/projects" page).
            These cookies are managed by Google, and you can opt out via your
            browser settings or tools like the Google Analytics Opt-Out Browser
            Add-On. If I introduce cookies in the future (e.g., for blog comment
            functionality), I will update this Privacy Policy and provide clear
            notice, potentially via a cookie consent banner, allowing you to
            accept or decline their use. You have full control over cookies
            through your browser. Most browsers allow you to block or delete
            cookies, though disabling them may not significantly impact the
            Site’s current functionality, given its minimal reliance on such
            technologies. My approach is to keep tracking lightweight, ensuring
            your privacy while still gaining insights to improve the Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Data Security Measures
          </h2>
          <p className="text-gray-600">
            I take reasonable steps to protect any information collected through
            the Site from unauthorized access, use, disclosure, alteration, or
            destruction. For Personal Information (e.g., your email from a
            direct message), I store it securely on encrypted platforms (e.g.,
            my email provider’s servers) and avoid retaining it longer than
            necessary to address your inquiry. Non-Personal Information from
            analytics is processed by reputable third-party services with their
            own security protocols (e.g., Google’s infrastructure). Technical
            measures include using secure hosting (e.g., Netlify or Vercel for
            deployment), HTTPS encryption for data transmission, and regular
            updates to the Site’s codebase to patch vulnerabilities. However, no
            method of online transmission or storage is entirely secure. While I
            strive to protect your data, I cannot guarantee absolute security
            against sophisticated cyberattacks, data breaches, or unforeseen
            technical failures. If a data breach occurs that compromises your
            Personal Information, I will notify affected users via email (if
            available) within a reasonable timeframe, typically within 72 hours
            of discovery, unless law enforcement advises otherwise. My
            commitment is to transparency and swift action to mitigate any risks
            to your privacy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Your Privacy Rights and Choices
          </h2>
          <p className="text-gray-600">
            You have rights regarding any Personal Information I may hold about
            you. These include the right to: (a) access any data I’ve collected
            (e.g., your email from a past message); (b) request corrections if
            it’s inaccurate; (c) ask for deletion of your data; and (d) object
            to its processing for specific purposes. To exercise these rights,
            contact me at [your-email@example.com] with your request, and I will
            respond within 30 days, often sooner, depending on the complexity.
            Since the Site currently collects minimal Personal Information (only
            via direct email contact), exercising these rights is
            straightforward. For Non-Personal Information (e.g., analytics
            data), you can limit collection by disabling cookies or using
            privacy-focused browser settings (e.g., Do Not Track). I respect
            your preferences and will comply with applicable privacy laws, such
            as [Your Country’s Data Protection Laws, e.g., Kenya Data Protection
            Act], or international regulations like GDPR if you’re in the EU. If
            you believe your privacy has been violated, you may also file a
            complaint with your local data protection authority, though I
            encourage you to reach out to me first to resolve any issues
            directly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            I may update this Privacy Policy periodically to reflect changes in
            Site functionality, legal requirements, or my data practices.
            Updates will be posted on this page with a revised "Last Updated"
            date, and significant changes (e.g., introducing new data collection
            methods) may be highlighted via a notice on the Home or Blog page.
            Your continued use of the Site after such updates constitutes
            acceptance of the revised policy, so please check back regularly.
            For example, if I add a contact form to the Blog page or user
            accounts to a project like VideoHub, I’ll expand this policy to
            detail how that data is handled, ensuring full transparency. My goal
            is to keep you informed and maintain trust in how your information
            is managed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-600">
            For any questions, concerns, or requests related to this Privacy
            Policy, please contact me at [your-email@example.com]. I’m available
            to address inquiries about data collection, usage, security, or your
            rights, typically responding within 5 business days. Your feedback
            helps me improve the Site and its privacy practices. Thank you for
            visiting my portfolio. I value your trust and am dedicated to
            protecting your privacy while showcasing my work as a Full Stack
            Developer.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
