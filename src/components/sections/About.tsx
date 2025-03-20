import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-[60%]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-200 text-blue-700 hover:bg-blue-300 font-medium py-1.5 px-3 rounded-full transition-all delay-100">
                About Me
              </Badge>
              <h2 className="text-5xl md:text-4xl mb-5 font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 text-transparent bg-clip-text">
                Professional Full Stack Developer with a Focus on Modern Web
                Technologies
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                I'm Evans Wanjau, a Full Stack Developer with over 12 years of
                experience, based in Nairobi, Kenya. My career is built on
                delivering robust, scalable solutions for industries like
                healthcare, e-commerce, and education, often leading distributed
                teams to achieve exceptional results.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in modern JavaScript frameworks—React, Node.js,
                TypeScript—and have a knack for enhancing user experiences,
                optimizing performance, and ensuring compliance with software
                standards. .
              </p>
              <p className="text-lg leading-relaxed">
                Beyond code, I'm passionate about staying ahead in tech, diving
                into cloud platforms, and honing my craft. You'll find me
                reading, hiking, or strategizing over coffee when I'm not
                building.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="w-[40%] flex items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="/image.png" className="rounded-full w-full bg-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
