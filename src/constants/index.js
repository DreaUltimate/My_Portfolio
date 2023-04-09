import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  codingchiefs,
  webhub,
  baker,
  tco,
  portfolio,
  dsgleam,
  dstube,
  travigo,
  morent,
  easybank,
  loop,
  rea,
  huddle,
  bookmark,
  Insure,
  fylo,
  threejs,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "No Code Developer",
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Management - Virtual Assistant",
    company_name: "T&Co. Virtual Assistance",
    icon: tco,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Manage website content, update media, ensure good UX/UI.",
      "Optimize content, understand SEO and meta descriptions to improve rankings.",
      "Track analytics, report traffic/behavior, improve site performance.",
      "Ensure website's technical functionality by backing up, updating software/plugins, and troubleshooting.",
    ],
  },
  {
    title: "CWC - Driller / Machine Operator",
    company_name: "Franklin Baker Company of the Philippines",
    icon: baker,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Maintain conveyor system.  ",
      "Maintain drilling tools and machinery.",
      "Drill coconut for water extraction.",
      "Operate conveyor for coconut transport.",
    ],
  },
  {
    title: "Frontend Web Developer - Wix",
    company_name: "WebHub Solutions IT Services",
    icon: webhub,
    iconBg: "#FFFFFF",
    date: "June 2021 - Dec 2021",
    points: [
      "Collaborate with designers, project managers, and clients to create customized solutions.",
      "Utilize HTML, CSS, JavaScript, and other tools to customize Wix templates and build custom pages.",
      "Develop and implement responsive Wix websites with a focus on aesthetics, usability, and functionality.",
      "Optimize website speed, troubleshoot issues, and maintain cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer - trainee (Remote)",
    company_name: "Codingchiefs",
    icon: codingchiefs,
    iconBg: "#000000",
    date: "Mar 2021 - May 2021",
    points: [
      "Learn and follow coding standards, development best practices, and emerging technologies.",
      "Assist in developing responsive websites, user interfaces, and components using HTML, CSS, and JavaScript.",
      "Support in implementing SEO strategies, web accessibility, and performance optimization.",
      "Conduct research and testing to identify and fix issues with user experience and compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Portfolio",
    description:
      "A showcase of my skills, experience, and projects as a developer. Highlighting my expertise and demonstrating my ability to deliver successful solutions.",
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/DreaUltimate/My_Portfolio",
  },
  {
    name: "DS - Gleam Social Media",
    description:
      "DS-Gleam is a MERN-based social media app with CRUD posts, adding friends, messaging, and real-time updates. Built with Redux Toolkit, Formik, and Material UI.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: dsgleam,
    source_code_link: "https://github.com/DreaUltimate/Project_Social-Gleam",
  },
  {
    name: "DStube - YouTube Clone",
    description:
      "DSTube is a React and Node.js YouTube clone project with video uploading, sharing, and a powerful search engine. Ideal for finding and enjoying content with friends and family.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: dstube,
    source_code_link: "https://github.com/DreaUltimate/dstube_ytclone",
  },
  {
    name: "EasyBank",
    description:
      "Easybank landing page is a responsive website that offers banking services, cryptocurrency & financial management with user-friendly features and modern design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: easybank,
    source_code_link: "https://github.com/DreaUltimate/FrontendMentor_DS-EasyBank",
  },
  {
    name: "Travigo",
    description:
      "Book travel with Travigo! Plan your trip and save with exclusive discounts on flights, hotels, and car rentals. Create unforgettable experiences with our easy-to-use platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: travigo,
    source_code_link: "https://github.com/DreaUltimate/DS-Gleam_Travigo",
  },
  {
    name: "Morent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: morent,
    source_code_link: "https://github.com/DreaUltimate/Project_Morent",
  },
  {
    name: "Loop Studios",
    description:
      "Loopstudios landing page showcases a portfolio of videos with an interactive and modern design. It highlights the company's creativity and attention to detail.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: loop,
    source_code_link: "https://github.com/DreaUltimate/FrontendMentor-DS_LoopStudios",
  },
  {
    name: "REA AI Chatbot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "GPT-3",
        color: "pink-text-gradient",
      },
    ],
    image: rea,
    source_code_link: "https://github.com/DreaUltimate/REA-AI_chatbot_by_dius/",
  },
  {
    name: "Bookmark",
    description:
      "Bookmark lets you easily save and organize your favorite websites from Chrome, Safari, and Firefox. Never lose track of your go-to sites again.",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookmark,
    source_code_link: "https://github.com/DreaUltimate/responsivelandingpage",
  },
  {
    name: "Huddle",
    description:
      "Huddle is a landing page for a project management app. It features a clean design, sign-up form, and testimonials from satisfied users.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: huddle,
    source_code_link: "https://github.com/DreaUltimate/FrontendMentor-DS_Huddle",
  },
  {
    name: "Fylo",
    description:
      "Fylo stores all your most important files in one location. Access them wherever you need, share and collaborate with friends and family, and co-workers.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: fylo,
    source_code_link: "https://github.com/DreaUltimate/FrontendMentor-DS_Fylo",
  },
  {
    name: "Insure",
    description:
      "Get your life insurance coverage easier and faster. We blend our expertise and technology to find the plan that's right for you. Ensure you and your loved one are protected.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Insure,
    source_code_link: "https://github.com/DreaUltimate/FrontendMentor-DS_Insure",
  },
];

export { services, technologies, experiences, testimonials, projects };
