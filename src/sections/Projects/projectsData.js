export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 610 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 610, min: 0 },
    items: 1,
  },
};

export const projectData = [
  {
    id: 1,
    imageurl: "assets/img/thewonderlandofbooks.png",
    name: "The Wonderland of Books",
    description:
      "Project #8 Final project for the Master in Full Stack Development. Made with React, NodeJS and MongoDB.",
    link: "https://wonderlandofbooks.netlify.app/",
  },
  {
    id: 2,
    imageurl: "assets/img/wordpress.png",
    name: "Pomelia Hotel Wordpress Theme",
    description:
      "Project #7 This is a custom theme built with WordPress for Hotel Pomelia.",
    link: "https://github.com/LisaB404/WordPress-Project-PomeliaHotel",
  },
  {
    id: 3,
    imageurl: "assets/img/nytclone.png",
    name: "New York Times Clone - React",
    description:
      "Project #6 The New York Times Clone created with React, Vite, Axios and the official NYT API.",
    link: "https://lisab404.github.io/React-Project-NYT-Clone/",
  },
  {
    id: 4,
    imageurl: "assets/img/nodejs.png",
    name: "Node.js",
    description:
      "Project #5 for the NodeJS course - My project allows the management of training courses with RESTful JSON APIs.",
    link: "https://github.com/LisaB404/NodeJS-Project",
  },
  {
    id: 5,
    imageurl: "assets/img/typescript.png",
    name: "TypeScript",
    description:
      "Project #4 Project for the TypeScript course. It is a TypeScript system to model the operational structure of a company.",
    link: "https://codepen.io/LisaB404/pen/MYgrPPq",
  },
  {
    id: 6,
    imageurl: "assets/img/book-searcher.png",
    name: "Book Searcher - JavaScript Advanced",
    description: "Project #3 Project for the Javascript Advanced course. Made with HTML, CSS, JavaScript, Webpack, Lodash, Axios and the Open Library API.",
    link: "https://booksearcher-lisab.netlify.app/",
  },
  {
    id: 8,
    imageurl: "assets/img/counter.png",
    name: "Counter - JavaScript Basic",
    description:
      "Project #2 A basic Counter created with Javascript, HTML and CSS for the Start2Impact Master in Full Stack Development.",
    link: "https://basic-js-counter-lisab.netlify.app",
  },
  {
    id: 9,
    imageurl: "assets/img/portfolio.png",
    name: "My Website - HTML & CSS",
    description:
      "Project #1 created for the Start2Impact Master in Full Stack Development. The website in my portfolio created only with HTML and CSS.",
    link: "https://lisab404.github.io/",
  },
];
