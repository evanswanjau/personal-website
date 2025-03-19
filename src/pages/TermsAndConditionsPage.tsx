import { motion } from "framer-motion";

const TermsAndConditionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-6">Last Updated: March 19, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Introduction and Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            Welcome to my personal portfolio website ("Site"), operated by Evans
            Wanjau ("I", "me", or "my"), a Full Stack Developer with over 12
            years of experience showcasing my technical projects, blog content,
            and professional journey. By accessing, browsing, or utilizing any
            part of this Site—including but not limited to its pages, project
            demonstrations, blog posts, or linked resources—you agree to be
            legally bound by these Terms and Conditions ("Terms"). These Terms
            constitute a binding agreement between you, the user, and me,
            governing your use of the Site in its entirety. If you do not agree
            with any provision outlined herein, you are expressly prohibited
            from using or accessing the Site. I reserve the right to modify,
            amend, or update these Terms at any time without prior notice to
            you. Such changes will be effective immediately upon posting the
            revised Terms on this page, and a new "Last Updated" date will
            reflect the modification. Your continued use of the Site following
            any such updates signifies your acceptance of the revised Terms, so
            it is your responsibility to review this page periodically to stay
            informed of any changes. This Site serves as a professional
            portfolio to demonstrate my expertise in web development, featuring
            projects such as VideoHub, Clean Cooking Association (CCA),
            Aquaculture Information System (AIS), and WapidDoc, among others. It
            also includes a blog section where I share insights on technologies
            like React, Node.js, and TypeScript. These Terms apply universally
            to all content, functionalities, and interactions available through
            the Site, whether you are a casual visitor, a potential employer, or
            a collaborator exploring my work.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Use of the Site and Permitted Activities
          </h2>
          <p className="text-gray-600">
            The Site is provided solely for personal, non-commercial use to
            explore my portfolio, review my projects, and read my blog posts.
            You are granted a limited, non-exclusive, non-transferable,
            revocable license to access and use the Site for these purposes
            only. This license permits you to view project descriptions,
            interact with live demo links (where available), access blog
            articles, and navigate between pages such as the Home, Blog,
            Projects, Terms, and Privacy sections. You agree not to use the Site
            for any unlawful, unauthorized, or prohibited purposes. Prohibited
            activities include, but are not limited to: (a) reproducing,
            duplicating, copying, or distributing any content—such as project
            code, blog text, or design elements—without my explicit written
            consent; (b) attempting to reverse-engineer, decompile, or extract
            source code from any project demonstrations; (c) using the Site to
            transmit malicious software, spam, or any content that infringes on
            third-party rights; (d) engaging in excessive automated requests
            (e.g., scraping) that may overload or disrupt the Site’s
            functionality; and (e) impersonating any person or entity, including
            me, or misrepresenting your affiliation with others. To illustrate,
            if you access the VideoHub project demo, you may explore its
            features as presented but may not copy its underlying code or
            redistribute its content elsewhere. Similarly, blog posts like
            "Mastering React Hooks in 2025" are available for your reading and
            educational benefit, but you may not republish them on your own
            platforms without permission. I reserve the right to terminate or
            restrict your access to the Site at my sole discretion if I
            determine that your use violates these Terms or adversely affects
            the Site’s operation or integrity. Furthermore, the Site may contain
            links to external websites (e.g., GitHub repositories, live project
            demos hosted on Netlify or Render). These links are provided for
            convenience and informational purposes only. I am not responsible
            for the content, availability, or policies of these third-party
            sites, and your interaction with them is governed by their
            respective terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Intellectual Property Rights and Ownership
          </h2>
          <p className="text-gray-600">
            All content displayed on the Site—including but not limited to text,
            project descriptions, source code snippets, blog articles, graphics,
            user interfaces, layouts, and design elements—is either owned by me,
            Evans Wanjau, or licensed to me by third parties where applicable.
            This content is protected by copyright, trademark, and other
            intellectual property laws of [Your Country, e.g., Kenya] and
            international treaties. Examples of protected content include the
            custom React components in my Personal Website project, the Node.js
            backend logic in AIS, and the written insights in my blog posts. You
            are not permitted to copy, modify, distribute, sell, lease, or
            create derivative works from any Site content without my prior
            written authorization, except as permitted under applicable fair use
            laws. For instance, you may quote a small excerpt from a blog post
            like "TypeScript: Beyond Basics" for educational purposes with
            proper attribution (e.g., "Source: Evans Wanjau, [Site URL]"), but
            you may not reproduce the entire article or use it commercially. The
            Site’s branding, including my name "Evans Wanjau" and any associated
            logos or visual identifiers, may not be used in any manner that
            suggests endorsement, affiliation, or partnership without my
            consent. If you wish to feature my work (e.g., linking to a project
            like WapidDoc in an article), you must contact me at
            [your-email@example.com] to request permission and discuss the
            intended use. I retain full ownership of the intellectual property
            developed for my projects, even when source code is publicly
            accessible via repositories like GitHub (e.g.,
            `https://github.com/evanswanjau/portfolio`). Open-source licenses,
            where applicable, govern specific repositories, and you must comply
            with those licenses (e.g., MIT, GPL) when using or contributing to
            such code. However, the Site itself and its non-repository content
            remain proprietary unless explicitly stated otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. User Conduct and Responsibilities
          </h2>
          <p className="text-gray-600">
            As a user of the Site, you are responsible for ensuring your conduct
            aligns with these Terms and applicable laws. You agree to use the
            Site in a manner that respects its purpose as a professional
            portfolio and does not interfere with its operation or the
            experience of other users. This includes refraining from submitting
            false information (e.g., via a contact form, if implemented),
            attempting to bypass security measures, or engaging in activities
            that could damage my reputation or the Site’s infrastructure. If the
            Site includes interactive features in the future (e.g., blog
            comments or project feedback forms), you agree to: (a) provide
            accurate and truthful information; (b) avoid posting content that is
            defamatory, obscene, abusive, or otherwise objectionable; and (c)
            respect the intellectual property and privacy rights of others. I
            reserve the right to moderate, edit, or remove any user-generated
            content at my discretion, though no such features exist as of the
            last update. You acknowledge that your use of the Site is at your
            own risk. While I strive to maintain its availability and accuracy,
            technical issues (e.g., server downtime, broken links) may occur.
            You are responsible for maintaining the security of your own devices
            and networks when accessing the Site, including protecting against
            malware or unauthorized access that could arise from external links
            or downloads (e.g., project demo files, if offered).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Limitation of Liability and Disclaimers
          </h2>
          <p className="text-gray-600">
            The Site is provided on an "as is" and "as available" basis without
            any warranties, express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, or
            non-infringement. I do not guarantee that the Site will be
            uninterrupted, error-free, secure, or free of viruses or other
            harmful components. For example, while projects like VideoHub may
            include live demos hosted on platforms like Render, I cannot ensure
            their constant availability due to third-party hosting constraints.
            To the fullest extent permitted by law, I shall not be liable for
            any direct, indirect, incidental, consequential, special, or
            punitive damages arising from your use of or inability to use the
            Site. This includes, but is not limited to, damages for loss of
            data, profits, goodwill, or business opportunities, even if I have
            been advised of the possibility of such damages. For instance, if
            you rely on a blog post like "Scaling Node.js with Microservices"
            for a commercial project and encounter issues, I am not responsible
            for any resulting losses. Additionally, the Site may contain
            technical inaccuracies or typographical errors (e.g., outdated
            project links or blog dates). I make reasonable efforts to keep
            content current but do not warrant its completeness or accuracy at
            all times. External links to platforms like GitHub or Netlify are
            provided for convenience, and I disclaim liability for any issues
            arising from their use, such as service outages or policy changes by
            those providers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Governing Law and Dispute Resolution
          </h2>
          <p className="text-gray-600">
            These Terms and your use of the Site are governed by and construed
            in accordance with the laws of [Your Country/State, e.g., Kenya],
            without regard to its conflict of law principles. Any legal action,
            suit, or proceeding arising out of or relating to these Terms shall
            be instituted exclusively in the courts of [Your Jurisdiction, e.g.,
            Nairobi], and you consent to the personal jurisdiction of such
            courts. In the event of a dispute, I encourage you to first contact
            me at [your-email@example.com] to attempt an informal resolution. If
            we cannot resolve the matter amicably within 30 days, either party
            may pursue formal legal action. You agree to waive any right to a
            jury trial and to resolve disputes individually rather than as part
            of a class action or collective proceeding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Miscellaneous Provisions
          </h2>
          <p className="text-gray-600">
            If any provision of these Terms is found to be invalid or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall remain in full force and effect. My failure to
            enforce any right or provision herein does not constitute a waiver
            of that right or provision. These Terms represent the entire
            agreement between you and me regarding the use of the Site,
            superseding any prior agreements or understandings, whether written
            or oral. Questions, comments, or concerns about these Terms should
            be directed to me at [your-email@example.com]. I aim to respond to
            inquiries within a reasonable timeframe, typically within 5 business
            days, though this may vary based on volume or availability.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsAndConditionsPage;
