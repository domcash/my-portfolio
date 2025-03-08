import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-8 w-full"
          >
            {/* Image Section with Link */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0 lg:w-1/3"
            >
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded w-full lg:w-auto border-none shadow-none"
                />
              </a>
            </motion.div>
            {/* Text Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left lg:w-2/3"
            >
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-4 text-2xl font-semibold text-white hover:text-sky-600">
                  {project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.showGithubIcon && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`} // For accessibility
                  >
                    <FaGithub className="w-7 h-7 mr-2 text-white hover:text-sky-600 cursor-pointer" />
                  </a>
                )}
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="m-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;