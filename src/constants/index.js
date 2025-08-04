import {
  // mobile,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  
  
  sih,
  bits,
  ide,
  gid,
  gemini,
  geopulse,
  tripizone,
  threejs,
  web,
  github,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "education",
    title: "Education",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Exploring AI & ML",
    icon: web,
  },
  {
    title: "UI & Graphic Designer",
    icon: figma,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Hackathon Finalist",
    company_name: " Smart India Hackathon (SIH) 2024",
    icon: sih,
    iconBg: "#383E56",
    date: "2024",
    points: [
      " Qualified in the internal hackathon round with an innovative tech solution proposal.",
    ],
  },
  
  {
    title: "Finalist – Global Innovation Drive 2025",
    company_name: "Startup Grind Bhubaneswar",
    icon: gid,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      " Pitched AbleLearn - AI-powered and gamified learning platform for specially-abled children with interactive modules and a friendly UI. My work is to integrate an AI chatbot with voice assistant for austistic kids and also for parents help.",
    ],
  },
  {
    title: " IDE Bootcamp Phase 2 (MoE–AICTE)",
    company_name: "Participant",
    icon: ide,
    iconBg: "#E6DEDD",
    date: "Feb 2025 ",
    points: [
      "5-Day Innovation Bootcamp | Feb 2025 Collaborated in multi-disciplinary teams to explore and present startup ideas",
    ],
  },
  {
    title: "[Finalist in Hackatron(National Hackathon) ",
    company_name: " by BIT Sindri]",
    icon: bits,
    iconBg: "#E6DEDD",
    date: "May 2025",
    points: [
      "Designed the front-end UI/UX for geolocation-based attendance tracking app using Figma.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Life isn’t just about the next tech stack—sometimes, it’s about a good cup of chai, a fresh drawing, or that one smile from someone who believes in you.",
    name: "Anisha Kumari",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I’ve participated in multiple hackathons — I thrive under pressure and love turning caffeine into code and ideas into solutions!",
    name: "Hackathon Buff",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "One day, I’d love to speak at a tech conference — or build a startup that helps people learn smarter.",
    name: " Dream Goal",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gemini Clone",
    description:
      " A sleek AI-powered chatbot built with React + Vite, using Google's Gemini 1.5 models to simulate conversational intelligence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/AnishaKumari82/gemini-clone",
  },
  {
    name: "GeoPulse",
    description:
      "Built interface dashboard for geolocation-based attendance tracking app using Figma.  ",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      }
      
    ],
    image: geopulse,
    source_code_link: "https://github.com/AnishaKumari82/GeoPulse",
  },
  {
    name: "Tripizon",
    description:
      " Responsive travel web app using Next.js and modern UI.  \n Focused on clean UI/UX design showcasing travel packages ,reviews, hotels and locations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripizone,
    source_code_link: "https://github.com/AnishaKumari82/Triprizon",
  },
];

export { services, technologies, experiences, testimonials, projects };