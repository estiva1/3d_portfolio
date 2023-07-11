import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  styledcomponents,
  nodejs,
  firebase,
  git,
  figma,
  magisoft,
  fourtyTwoFlowsTech,
  salesSupport,
  threejs,
  materialui,
  theformat,
  predictoria,
  salessupport,
  clothingshop,
  simplenews,
  weatherapp,
  postshandler,

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
    title: "React Developer",
    icon: mobile,
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Styled Components",
    icon: styledcomponents,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Trainee Frontend Developer",
    company_name: "Magisoft Solutions",
    icon: magisoft,
    iconBg: "#383E56",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Magisoft Solutions",
    icon: magisoft,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Oct 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "42flows.tech",
    icon: fourtyTwoFlowsTech,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Sales.Support",
    icon: salesSupport,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - present",
    points: [
      "Redesigning the site, optimizing UI/UX",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "The Format",
    description:
      "The Format — is the art studio where painting lessons are conducted for children and adults.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: theformat,
    source_code_link: "https://www.facebook.com/groups/1446752648709961/",
  },
  {
    name: "Predictoria.com",
    description:
      "Predictoria — is a streaming platform with the most popular games streamed on. Still in beta.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-pink-text-gradient",
      },
    ],
    image: predictoria,
    source_code_link: "https://predictoria.com",
  },
  {
    name: "Sales.Support",
    description:
      "SALES.SUPPORT is an all in one tool Amazon for Sellers and Vendores.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "purpleblue-text-gradient",
      },
      {
        name: "recharts",
        color: "orange-text-gradient",
      },
    ],
    image: salessupport,
    source_code_link: "https://sales.support",
  },
];

const petprojects = [
  {
    name: "Clothing Shop",
    description:
      "Clothing shop made with TypeScript, React, React Parallax Tilt, Redux, Redux Logger, Redux Persist, Redux Saga, Styled Components, Firebase and Stripe.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "green-pink-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: clothingshop,
    source_code_link: "https://github.com/estiva1/estiva-clothing-shop",
    live_view: "https://estiva-shop.netlify.app",
  },
  {
    name: "Simple News",
    description:
      "Here you can read some latest news. Made with TypeScript, React, Redux, Redux Logger, Redux Saga, Styled Components and Material UI",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "green-pink-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "material-ui",
        color: "purpleblue-text-gradient",
      },
    ],
    image: simplenews,
    source_code_link: "https://github.com/estiva1/cb-spa",
    live_view: "https://estiva-simple-news.netlify.app",
  },
  {
    name: "Weather App",
    description:
      "Simple weather app made with React, CSS and Axios",
    tags: [
      {
        name: "react",
        color: "purpleblue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "orange-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/estiva1/weather-app",
    live_view: "https://estiva-weather.netlify.app",
  },
  {
    name: "Posts Handler",
    description:
      "Posts handler that uses fake API with dynamic pagination. Fetch, find, sort, create, delete - here you can do all the things :)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-transition-group",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: postshandler,
    source_code_link: "https://github.com/estiva1/posts-handler",
    live_view: "https://posts-handler.netlify.app",
  },
  
];

export { services, technologies, experiences, projects, petprojects }; // +testimonials
