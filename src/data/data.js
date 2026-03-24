import expenseTrackerBW from "../assets/image/expenseTrackerBW.png";
// import todoAppBW from "../assets/image/todoAppBW.png";
import travelModalBW from "../assets/image/travelModalBW.png";
import starRatingBW from "../assets/image/starRatingBW.png";
import websiteHeaderBW from "../assets/image/websiteHeaderBW.png";
import faqBW from "../assets/image/faqBW.png";
import expenseTrackerColored from "../assets/image/expenseTrackerColored.png";
// import todoAppColored from "../assets/image/todoAppColored.png";
import travelModalColored from "../assets/image/travelModalColored.png";
import starRatingColored from "../assets/image/starRatingColored.png";
import websiteHeaderColored from "../assets/image/websiteHeaderColored.png";
import faqColored from "../assets/image/faqColored.png";
import chatAiBW from "../assets/image/chatWithAiBW.png";
import chatAiColored from "../assets/image/chatWithAiColored.png";

export const project = [
  {
    id: 1,
    title: "Chat With AI",
    description:
      "AI-powered chat application with multi-chat support, built using React, Vite, and Vercel serverless functions.",
    imageBW: chatAiBW,
    imageColored: chatAiColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://chat-with-ai-navy.vercel.app/",
    github: "https://github.com/hsb-ini-14/chat-with-ai",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A responsive expense tracker built with React and Tailwind, featuring CRUD operations, local storage, and real-time balance updates.",
    imageBW: expenseTrackerBW,
    imageColored: expenseTrackerColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://hsb-ini-14.github.io/expense-tracker-app/",
    github: "https://github.com/hsb-ini-14/expense-tracker-app",
  },
  // {
  //   id: 3,
  //   title: "To-Do App",
  //   description:
  //     "A modern React-based To-Do App with CRUD operations, state management, and localStorage support.",
  //   imageBW: todoAppBW,
  //   imageColored: todoAppColored,
  //   tech: ["React", "Tailwind", "Vite"],
  //   live: "https://hsb-ini-14.github.io/todo-app/",
  //   github: "https://github.com/hsb-ini-14/todo-app",
  // },
  {
    id: 4,
    title: "Travel Modal",
    description:
      "An interactive travel booking modal featuring smooth animations and responsive design.",
    imageBW: travelModalBW,
    imageColored: travelModalColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://hsb-ini-14.github.io/dummy-travel-modal/",
    github: "https://github.com/hsb-ini-14/dummy-travel-modal",
  },
  {
    id: 5,
    title: "StarRating Component",
    description:
      "An interactive star rating component, featuring half-star support and responsive design.",
    imageBW: starRatingBW,
    imageColored: starRatingColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://hsb-ini-14.github.io/dummy-star-rating-system/",
    github: "https://github.com/hsb-ini-14/dummy-star-rating-system",
  },
  {
    id: 6,
    title: "Website Header",
    description:
      "A responsive website header with a dark/light mode toggle, featuring theme persistence and smooth UI transitions.",
    imageBW: websiteHeaderBW,
    imageColored: websiteHeaderColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://hsb-ini-14.github.io/website-header-dark-light-toggle/",
    github: "https://github.com/hsb-ini-14/website-header-dark-light-toggle",
  },
  {
    id: 7,
    title: "FAQ Website",
    description:
      "A modern FAQ interface with expandable sections, dark mode, and smooth transitions.",
    imageBW: faqBW,
    imageColored: faqColored,
    tech: ["React", "Tailwind", "Vite"],
    live: "https://hsb-ini-14.github.io/faq-tailwind-website/",
    github: "https://github.com/hsb-ini-14/faq-tailwind-website",
  },
];

export const skillsData = [
  {
    category: "Frontend",
    icon: "bx bx-code-alt",
    skills: [
      { name: "HTML", icon: "bxl bx-html5" },
      { name: "CSS", icon: "bxl bx-css3" },
      { name: "JavaScript", icon: "bxl bx-javascript" },
      { name: "React", icon: "bxl bx-react" },
      { name: "Tailwind CSS", icon: "bxl bx-tailwind-css" },
      { name: "Vite", icon: "bxl bx-vite-js" },
    ],
  },
  {
    category: "Tools",
    icon: "bx bx-spanner",
    skills: [
      { name: "Git", icon: "bxl bx-git" },
      { name: "Github", icon: "bxl bx-github" },
      { name: "VS Code", icon: "bxl bx-visual-studio" },
      { name: "Redux", icon: "bxl bx-redux" },
      { name: "DevTools", icon: "bxl bx-chrome" },

      //   { name: "Netlify", icon: "bxl bx-netlify" },
    ],
  },
];

export const educationData = [
  {
    id: 1,
    degree: "Executive Post Graduate Diploma in Software Development",
    institute: "IIIT Bangalore & upGrad",
    duration: "June 2023 – August 2024",
  },
  {
    id: 2,
    degree: "B. Tech in Mechatronics Engineering",
    institute: "SRM Institute of Science and Technology",
    duration: "July 2015 – May 2019",
  },
];
