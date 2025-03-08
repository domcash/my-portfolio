import PMockup2 from "../assets/projects/P-MockUp2.png";
import PMockup from "../assets/projects/P-MockUp.png";
import MapMockup from "../assets/projects/MapMockup4.png";
import { FaGithub } from "react-icons/fa";


export const HERO_CONTENT = `Hi, I'm Dom. I have full stack experience and a passion for developing innovative sotware solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2022 - June 2024",
    role: "Imaging Bookings",
    company: "HCA Healthcare",
    description: `Accurately coordinated over 50 daily appointments for medical imaging, demonstrating an efficient workflow in a high-pressure environment.`,
    technologies: ["Database Management", "MS Office", "Customer Service"],
  },
  {
    year: "April 2021 - Feb 2022",
    role: "Project Support Officer",
    company: "Flintshire County Council",
    description: `Contributed to the award-winning “Small-Scale Project of the Year” initiative by advising clients on government energy funding, showcasing stakeholder engagement skills.`,
    technologies: ["Project Support", "Administration", "Customer Support"],
  },
];

export const EDUCATION = [
  {
    year: "2024 - Present",
    role: "Msc Computer Science",
    company: "Manchester Metropolitan University - Distinction",
    description: `Pursuing a Master's in Computer Science. On track to graduate with a distinction in 2025, having studied advanced topics in Object Oriented Programming, Data Structures, Algorithms, and Database Management.`,
    technologies: ["Java", "React.js", "Python", "JavaScript", "HTML", "SQL"],
  },
  {
    year: "2016 - 2020",
    role: "Bsc Business Management",
    company: "Manchester Metropolitan University - 2:1",
    description: `Integrated business acumen with technical ability, studying modules in Strategy, Finance and Enterprise. Achieved top marks in the design of a Virtual Pantry Smartphone App.`,
    technologies: ["SQL", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "NW Trails",
    image: MapMockup,
    description:
      "An interactive map of hiking trails in North Wales using Mapbox GL JS.",
      websiteLink: "https://nw-trails.vercel.app/",
      githubLink: "https://github.com/domcash/NW-Trails",
    technologies: ["JavaScript", "HTML", "CSS", "Mapbox GL JS"],
    showGithubIcon: true,
  },
  {
    title: "Home Appliance Store",
    image: PMockup2,
    description:
      "Functional website to browse and purchase home appliances.",
      websiteLink: "https://github.com/domcash/HomeApplianceStore",
      githubLink: "https://github.com/domcash/HomeApplianceStore",
    technologies: ["Java", "HTML", "SQLite"],
    showGithubIcon: true,
  },
  {
    title: "Portfolio Website",
    image: PMockup,
    description:
      "Personal portfolio website to showcase projects, experience, and education.",
      websiteLink: "https://www.domcash.net/",
      githubLink: "https://github.com/domcash/my-portfolio",
    technologies: ["React.js", "JavaScript", "Tailwind"],
    showGithubIcon: true,
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
