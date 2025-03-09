import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-center py-4 px-3 text-white">
      {/*custom CSS for mobile */}
      <style>{`
        @media (max-width: 640px) {
          .nav-text {
            font-size: 1rem; /* 16px, up from ~12px (text-sm) */
            font-weight: 500; /* Medium, up from light */
            color: #d1d5db; /* Gray-300 for contrast */
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Subtle shadow for pop */
          }
        }
      `}</style>
      {/* Navigation Links */}
      <ul className="flex gap-8 my-2 max-w-xl py-10 font-light tracking-tighter mx-auto text-sm sm:text-base md:text-lg lg:text-xl nav-text">
        <li>
          <a href="#projects" className="hover:text-sky-600 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-sky-600 transition">
            Experience
          </a>
        </li>
        <li>
          <a href="#contacts" className="hover:text-sky-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;