import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="flex h-screen items-center justify-center border-b border-neutral-900 px-4">
      {/* Inject custom CSS for mobile */}
      <style>{`
        @media (max-width: 640px) {
          .hero-text {
            color: #d1d5db; /* Tailwind gray-300 */
            font-weight: 600; /* Semibold */
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Subtle shadow */
          }
        }
      `}</style>
      <div className="text-center">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="mt-[-380px] pb-0 text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] font-thin tracking-tight text-white"
        >
          Dominic Cash
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-sky-600 via-slate-500 to-green-800 bg-clip-text text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-transparent"
        >
          Software Engineer | Manchester
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-10 font-light tracking-tighter mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 hero-text"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 flex items-center justify-center gap-8 text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/dominic-cash-8076261b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/domcash"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:dominiccash44@gmail.com"
          className="hover:text-sky-600 transition"
        >
          <MdEmail />
        </a>
      </div>
    </div>
  );
};

export default Hero;