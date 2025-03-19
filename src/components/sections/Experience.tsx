import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JobData {
  company: string;
  period: string;
  role: string;
  details: string[];
  responsibilities: string[];
  technologies: string[];
  achievements: string;
}

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  const jobs: JobData[] = [
    {
      company: "RemoteMore",
      period: "Sep 2023 – Feb 2025",
      role: "Full Stack Developer",
      details: [
        "Led front-end development for QuantDico and Onima Projects with React.js across 30 screens.",
        "Improved Onima's engagement by 35% through animations and SEO.",
        "Achieved 90% sprint success with cross-functional teams.",
        "Coordinated with designers to implement responsive layouts for all device sizes.",
        "Optimized application performance by implementing lazy loading and code splitting.",
      ],
      responsibilities: [
        "Led architecture planning for scalable frontend applications",
        "Integrated third-party APIs for payment processing and data analytics",
        "Collaborated with UX designers to implement intuitive user interfaces",
        "Conducted code reviews and mentored junior developers",
        "Participated in daily stand-ups and sprint planning meetings",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "Jest",
        "GitHub Actions",
      ],
      achievements:
        "Successfully delivered 5 major features ahead of schedule, resulting in early client approval and positive feedback from stakeholders.",
    },
    {
      company: "WapiDoc",
      period: "Jan 2022 – Aug 2023",
      role: "Full Stack Developer",
      details: [
        "Directed WapiDoc for 10,000+ users using Next.js and Node.js.",
        "Built a real-time React dashboard, boosting adoption by 25%.",
        "Enhanced retention by 60% with a Node.js reporting tool.",
        "Implemented GraphQL API for efficient data querying across multiple services.",
        "Designed and implemented database schemas for optimized performance.",
      ],
      responsibilities: [
        "Managed backend systems using Node.js and Express",
        "Implemented and maintained RESTful and GraphQL APIs",
        "Deployed and monitored production environments",
        "Collaborated with product managers to define feature requirements",
        "Conducted performance optimization for high-traffic endpoints",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "GraphQL",
        "MongoDB",
        "Redis",
        "AWS",
      ],
      achievements:
        "Reduced server response time by 40% through implementing caching strategies and optimizing database queries.",
    },
    {
      company: "Tehy Care",
      period: "Jan 2021 – Dec 2021",
      role: "Full Stack Developer",
      details: [
        "Reduced planning time by 30% with technical guidelines.",
        "Designed a React/Django health system, increasing efficiency by 80%.",
        "Ensured 100% GDPR compliance.",
        "Created comprehensive documentation for API endpoints and system architecture.",
        "Implemented secure authentication and authorization protocols.",
      ],
      responsibilities: [
        "Developed healthcare management systems with strict security requirements",
        "Implemented data encryption for sensitive patient information",
        "Collaborated with healthcare professionals to understand domain-specific needs",
        "Created automated testing pipelines for continuous integration",
        "Conducted security audits and implemented necessary safeguards",
      ],
      technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Docker",
        "Pytest",
        "HIPAA compliance tools",
      ],
      achievements:
        "Successfully implemented a fully GDPR-compliant system that passed external security audits with zero critical findings.",
    },
    {
      company: "Webhost Kenya",
      period: "Jul 2019 – Jan 2021",
      role: "Web Developer",
      details: [
        "Developed blueprints for 20+ client projects.",
        "Delivered 20+ websites with 80% approval rating.",
        "Implemented responsive designs across multiple device sizes.",
        "Optimized websites for search engine rankings and performance.",
        "Created custom WordPress themes and plugins for client-specific needs.",
      ],
      responsibilities: [
        "Managed client relationships and expectation setting",
        "Designed and implemented custom WordPress solutions",
        "Provided technical support and maintenance for existing websites",
        "Conducted website performance audits and optimizations",
        "Collaborated with content creators for effective website copy",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "CSS/SCSS",
      ],
      achievements:
        "Established a templating system that reduced development time for new projects by 35%, allowing for faster deliveries and higher client satisfaction.",
    },
    {
      company: "Wingu",
      period: "Jan 2017 – Jun 2019",
      role: "Full Stack Developer",
      details: [
        "Supported a Laravel school system for 40+ schools.",
        "Improved usability by 30% and cut onboarding by 60% with docs.",
        "Implemented automated testing suites for critical system components.",
        "Created a centralized reporting system for administrative oversight.",
        "Developed a notification system for urgent communications.",
      ],
      responsibilities: [
        "Maintained and enhanced existing Laravel applications",
        "Designed database schemas for educational data management",
        "Implemented role-based access control systems",
        "Created reporting tools for educational administrators",
        "Conducted user training and documentation writing",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Vue.js",
        "Bootstrap",
        "GitLab CI",
      ],
      achievements:
        "Developed a comprehensive documentation system that reduced support tickets by 45% and improved user satisfaction scores by 3 points on a 10-point scale.",
    },
    {
      company: "People & Strategy",
      period: "Jan 2015 – Dec 2016",
      role: "Web Developer (Part-Time)",
      details: [
        "Built a recruitment portal for 1200+ jobs.",
        "Added filters for 5,000+ openings, increasing visibility by 15%.",
        "Implemented resumé parsing functionality for candidate applications.",
        "Created a dashboard for recruitment analytics and reporting.",
        "Developed an automated email notification system for job matching.",
      ],
      responsibilities: [
        "Designed and implemented recruitment website features",
        "Created search algorithms for job matching",
        "Maintained database of job listings and applicant data",
        "Implemented analytics tracking for recruitment metrics",
        "Developed user interfaces for both recruiters and job seekers",
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "JavaScript",
        "jQuery",
        "AJAX",
      ],
      achievements:
        "Successfully built a filtering system that increased job application rates by 23% and improved employer-candidate matching accuracy.",
    },
    {
      company: "BlackPoint",
      period: "Aug 2013 – Jan 2015",
      role: "Web Developer (Part-Time)",
      details: [
        "Revamped eCommerce UI/UX for 5,000+ users.",
        "Increased checkout rates by 20% with payment integrations.",
        "Implemented inventory management system with real-time updates.",
        "Created an automated email marketing system for abandoned carts.",
        "Developed product recommendation engine based on user behavior.",
      ],
      responsibilities: [
        "Designed and maintained eCommerce platform",
        "Implemented payment gateway integrations",
        "Optimized product catalog and search functionality",
        "Developed cart and checkout experiences",
        "Implemented analytics tracking for conversion metrics",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "HTML5",
        "CSS3",
        "Magento",
      ],
      achievements:
        "Redesigned checkout process reduced cart abandonment rate by 15% and increased overall conversion rate by 8%.",
    },
  ];

  // Fixed autoscroll to start immediately when section is in view
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Start or stop animation based on visibility
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });

      // Start auto-scrolling immediately when in view
      interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % jobs.length);
      }, 5000);
    } else {
      controls.start({ opacity: 0, y: 50 });
    }

    // Clean up interval on unmount or when view state changes
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView, controls, jobs.length]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gray-50 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge className="mb-2 bg-gray-200 text-gray-700 hover:bg-gray-300 font-normal">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Professional Journey
          </h2>
        </motion.div>

        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Tabs
            value={jobs[activeTab].company}
            onValueChange={(value) =>
              setActiveTab(jobs.findIndex((job) => job.company === value))
            }
            className="w-full flex flex-col md:flex-row gap-6"
          >
            {/* Side Tabs */}
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TabsList className="flex md:flex-col h-auto p-2 bg-white rounded-lg shadow-sm border border-gray-100 w-full">
                  {jobs.map((job, index) => (
                    <TabsTrigger
                      key={index}
                      value={job.company}
                      className={`text-left py-3 px-4 justify-start data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 transition-all duration-200  w-full ${
                        activeTab === index ? "font-medium" : ""
                      }`}
                    >
                      <div className="flex flex-col items-start">
                        <span>{job.company}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow">
              {jobs.map((job, index) => (
                <TabsContent
                  key={index}
                  value={job.company}
                  className="focus:outline-none"
                >
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeTab === index ? 1 : 0,
                      y: activeTab === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-medium text-gray-700">
                          {job.company}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-500">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                          <span className="w-6 h-px bg-gray-300 mr-2"></span>
                          Key Accomplishments
                        </h4>
                        <ul className="space-y-2 text-gray-600 pl-3">
                          {job.details.map((detail, i) => (
                            <li
                              key={i}
                              className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                          <span className="w-6 h-px bg-gray-300 mr-2"></span>
                          Responsibilities
                        </h4>
                        <ul className="space-y-2 text-gray-600 pl-3">
                          {job.responsibilities.map((responsibility, i) => (
                            <li
                              key={i}
                              className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full"
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                        <span className="w-6 h-px bg-gray-300 mr-2"></span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                        <span className="w-6 h-px bg-gray-300 mr-2"></span>
                        Notable Achievement
                      </h4>
                      <p className="text-gray-600 italic border-l-2 border-gray-200 pl-4">
                        {job.achievements}
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
