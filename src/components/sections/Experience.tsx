import { useState } from "react";
import { motion } from "framer-motion";
import jobData from "@/db/jobs.json";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="py-48 bg-white relative scroll-mt-16 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6"
        >
          <Tabs
            value={jobData[activeTab].company}
            onValueChange={(value) =>
              setActiveTab(jobData.findIndex((job) => job.company === value))
            }
            className="w-full flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TabsList className="flex md:flex-col h-auto p-2 bg-white rounded-lg shadow-none w-full">
                  {jobData.map((job, index) => (
                    <TabsTrigger
                      key={index}
                      value={job.company}
                      className={`text-md text-left py-3 px-4 justify-start data-[state=active]:bg-gray-800 data-[state=active]:text-white transition-all duration-300 w-full ${
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

            <div className="flex-grow">
              {jobData.map((job, index) => (
                <TabsContent
                  key={index}
                  value={job.company}
                  className="focus:outline-none"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeTab === index ? 1 : 0,
                      y: activeTab === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white p-6 rounded-lg shadow-none"
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

                    <div>
                      <ul className="space-y-2 text-gray-400">
                        {job.description.map((detail, i) => (
                          <li
                            key={i}
                            className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
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
