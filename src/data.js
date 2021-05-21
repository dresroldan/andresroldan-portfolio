import project1 from './assets/images/dermpalhome.png';
import project2 from './assets/images/picniqapp.png';
import project4 from './assets/images/weatherdashboard.png';
import project5 from './assets/images/ecommerce.png';

export default {
  projects: [
    {
      id: 1,
      title: 'Vinyl Record eCommmerce Store',
      para: 'An online vinyl record shop, allowing users the ability to browse through various vinyl records with full description and genre. Users will also be able to place products in a shopping cart, where it is presented as an order at checkout.',
      tools:
        'Utilized: React, Redux, NodeJS, Express, MongoDB, Passport.js, Material-UI',
      imageSrc: project5,

      projectDemo: 'https://vinyl-record-store.herokuapp.com/',
      projectGithub:
        'https://github.com/dresroldan/vinyl-record-ecommerce-store',
    },
    {
      id: 2,
      title: 'DermPal',
      para: 'A barcode scanning app that is designed to help the user find skincare products that are compatible with their skin.',
      tools:
        'Utilized: React, Mongo, Heroku, Material-UI, Server-side API, Express, NodeJS, Axios, Postman, CSS, HTTP',
      imageSrc: project1,

      projectDemo: 'https://dermpal1.herokuapp.com/',
      projectGithub: 'https://github.com/Bbeyenene/dermpal1',
    },

    {
      id: 3,
      title: 'Picniq',
      para: 'A single search, location-based application, providing users with nearby parks and restaurants offering takeout/delivery.',
      tools:
        'HTML5, CSS, Bootstrap, PureCSS, Javascript, FourSquare, OpenCage Geocoder API, Google Fonts',
      imageSrc: project2,
      projectDemo: 'https://jpbrickhouse.github.io/Picniq/',
      projectGithub: 'https://github.com/JPBrickhouse/Picniq',
    },

    {
      id: 4,
      title: 'Weather Dashboard',
      para: 'A one-page dashboard that displays weather conditions for multiple cities.',
      tools: 'Utilized: HTML5, CSS, jQuery, Moment.js, Open Weather API',
      imageSrc: project4,
      projectDemo: 'https://dresroldan.github.io/weather-dashboard/',
      projectGithub: 'https://github.com/dresroldan/weather-dashboard',
    },
  ],

  skillSet:
    'HTML5, Javascript, ES6, jQuery, CSS, SASS, Bootstrap, Material UI, React JS, JSX, Mobile Responsive Design - MySQL, ExpressJS, MongoDB, JSON, REST APIs, AJAX - NPM, Testing, Handlebars, GIT, Github, Gitlab, Heroku, Postman, Figma, Trello, Google Workspace',
};
