import project1 from "./assets/images/dermpalhome.png";
import project2 from "./assets/images/picniqapp.png";
import project3 from "./assets/images/habit1.png";
import project4 from "./assets/images/weatherdashboard.png";

export default {
  projects: [
    {
      id: 1,
      title: "DermPal",
      para:
        "A barcode scanning app that is designed to help the user find skincare products that are compatible with their skin.",
      tools: "Utilized: React, Mongo, Heroku, Material-UI, Server-side API, Express, NodeJS, Axios, Postman, CSS, HTTP",
      imageSrc: project1,

      projectDemo: "https://dermpal1.herokuapp.com/",
      projectGithub: "https://github.com/Bbeyenene/dermpal1",
    },

    {
      id: 2,
      title: "Picniq", 
      para:
        "A single search, location-based application, providing users with nearby parks and restaurants offering takeout/delivery.",
      tools: "HTML5, CSS, Bootstrap, PureCSS, Javascript, FourSquare, OpenCage Geocoder API, Google Fonts",
      imageSrc: project2,
      projectDemo: "https://jpbrickhouse.github.io/Picniq/",
      projectGithub: "https://github.com/JPBrickhouse/Picniq",
    },

    {
      id: 3,
      title: "Habitude",
      para: "A tracker application to help monitor and form daily habits",
      tools:
        "Utilized: HTML5, CSS, JavaScript, Handlebars, Chart.js, Google Analytics",
      imageSrc: project3,
      projectDemo: "https://habitudeapp.herokuapp.com/",
      projectGithub: "https://github.com/carolinetwyman/Habitude",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      para:
        "A one-page dashboard that displays weather conditions for multiple cities.",
      tools: "Utilized: HTML5, CSS, jQuery, Moment.js, Open Weather API",
      imageSrc: project4,
      projectDemo: "https://dresroldan.github.io/weather-dashboard/",
      projectGithub: "https://github.com/dresroldan/weather-dashboard",
    },
  ],

  skillSet:
    "HTML5, Javascript, ES6, jQuery, CSS, SASS, Bootstrap, Material UI, React JS, JSX, Mobile Responsive Design - MySQL, ExpressJS, MongoDB, JSON, REST APIs, AJAX - NPM, Testing, Handlebars, GIT, Github, Gitlab, Heroku, Postman, Figma, Trello, Google Workspace",
};

// {
//   id: 4,
//   title: "Weather Dashboard",
//   para:"A one-page dashboard that displays weather conditions for multiple cities.",
//   tools: "Utilized: HTML5, CSS, jQuery, Moment.js, Open Weather API",
//   imageSrc: project4,
//   projectDemo: "https://dresroldan.github.io/weather-dashboard/",
//   projectGithub: "https://github.com/dresroldan/weather-dashboard",
// },
