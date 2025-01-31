import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-4 px-3 text-white">
      {/* Navigation Links */}
      <ul className="flex gap-8 my-2 max-w-xl py-10 font-light tracking-tighter mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
        <li>
          <a href="#experience" className="hover:text-sky-600 transition">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-sky-600 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" className="hover:text-sky-600 transition">
            Contact
          </a>
        </li>
        <li>
          <a href="/Dom_s_CV.pdf" target="_blank" className="hover:text-sky-600 transition">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;