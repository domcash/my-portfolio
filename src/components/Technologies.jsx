import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import javaIcon from "../assets/javaIcon.svg";
import sqlIcon from "../assets/sqlIcon.svg";
import javascriptIcon from "../assets/javascriptIcon.svg";
import pythonIcon from "../assets/pythonIcon.svg";
import gitIcon from "../assets/gitIcon.svg";
import tailwindIcon from "../assets/tailwindIcon.svg";
import springbootIcon from "../assets/springbootIcon.svg";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity:1, y:0 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl text-white">Tech Stack</motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        {/* Grid layout with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
          {/* Left Column: First 5 Technologies */}
          <div className="space-y-8">
            {/* React */}
            <motion.div 
            whileInView={{ opacity:1, x:0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5  }}
            className="flex items-center space-x-4">
              <RiReactjsLine className="w-12 h-12 text-4xl text-cyan-400" />
              <div>
                <h3 className="text-xl text-white">React</h3>
                <p className="text-sm text-white text-white">JavaScript library</p>
              </div>
            </motion.div>

              {/* Git */}
              <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={gitIcon} alt="Git" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">Git</h3>
                <p className="text-sm text-white">Version Control</p>
              </div>
            </motion.div>


            {/* Node.js */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <FaNodeJs className="w-12 h-12 text-4xl text-green-500" />
              <div>
                <h3 className="text-xl text-white">Node.js</h3>
                <p className="text-sm text-white">JavaScript Runtime</p>
              </div>
            </motion.div>

             {/* JavaScript */}
             <motion.div 
            whileInView={{ opacity:1, x:0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          
            className="flex items-center space-x-4">

              <img src={javascriptIcon} alt="JavaScript" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">JavaScript</h3>
                <p className="text-sm text-white">Programming Language</p>
              </div>
            </motion.div>

            {/* SQL */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={sqlIcon} alt="SQL" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">SQL</h3>
                <p className="text-sm text-white">Relational Databases</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Last 4 Technologies */}
          <div className="space-y-8">

            {/* Java */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={javaIcon} alt="Java" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">Java</h3>
                <p className="text-sm text-white">Programming Language</p>
              </div>
            </motion.div>

            {/* Python */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={pythonIcon} alt="Python" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">Python</h3>
                <p className="text-sm text-white">Programming Language</p>
              </div>
            </motion.div>

           {/* MongoDB */}
           <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <SiMongodb className="w-12 h-12 text-4xl text-green-500" />
              <div>
                <h3 className="text-xl text-white">MongoDB</h3>
                <p className="text-sm text-white">Database</p>
              </div>
            </motion.div>


            {/* Tailwind CSS */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={tailwindIcon} alt="Tailwind CSS" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">Tailwind</h3>
                <p className="text-sm text-white">CSS Framework</p>
              </div>
            </motion.div>

            {/* Springboot CSS */}
            <motion.div 
                    whileInView={{ opacity:1, x:0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
            className="flex items-center space-x-4">
              <img src={springbootIcon} alt="Springboot CSS" className="w-12 h-12" />
              <div>
                <h3 className="text-xl text-white">Springboot CSS</h3>
                <p className="text-sm text-white">Backend Framework</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;