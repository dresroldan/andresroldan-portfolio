import project1 from './assets/images/record-store.jpg';
import project2 from './assets/images/bv-dj.png';
import project3 from './assets/images/picnic.jpeg';
import project4 from './assets/images/weather-dash.jpeg';

const data = {
  projects: [
    {
      id: 1,
      title: 'Vinyl Record eCommmerce Store',
      description:
        'An online vinyl record shop, allowing users the ability to browse and shop various vinyl records with full description and genre.',
      tools:
        'Utilized: React, Redux, NodeJS, Express, MongoDB, Passport.js, Material-UI',
      img: project1,

      demo: 'https://vinyl-record-store.herokuapp.com/',
      github: 'https://github.com/dresroldan/vinyl-record-ecommerce-store',
    },
    {
      id: 2,
      title: 'Buen Viaje Radio',
      description:
        'A single page website for Buen Viaje Radio, a monthly DJ livestream platform.',
      tools: 'Utilized: Gatsby, React-Bootstrap, Figma, Vimeo',
      img: project2,

      demo: 'https://www.buenviajeradio.com/',
      github: 'https://github.com/dresroldan/buen_viaje_radio',
    },

    {
      id: 3,
      title: 'Picniq',
      description:
        'A single search, location-based application, providing users with nearby parks and restaurants offering takeout/delivery.',
      tools:
        'Utilized: HTML5, CSS, Bootstrap, PureCSS, Javascript, FourSquare, OpenCage Geocoder API, Google Fonts',
      img: project3,
      demo: 'https://jpbrickhouse.github.io/Picniq/',
      github: 'https://github.com/JPBrickhouse/Picniq',
    },

    {
      id: 4,
      title: 'Weather Dashboard',
      description:
        'A one-page dashboard that displays weather conditions for multiple cities.',
      tools: 'Utilized: HTML5, CSS, jQuery, Moment.js, Open Weather API',
      img: project4,
      demo: 'https://dresroldan.github.io/weather-dashboard/',
      github: 'https://github.com/dresroldan/weather-dashboard',
    },
  ],

  skillSet:
    'HTML5, Javascript, ES6, jQuery, CSS, SASS, Bootstrap, Material UI, React JS, JSX, Mobile Responsive Design - MySQL, ExpressJS, MongoDB, JSON, REST APIs, AJAX - NPM, Testing, Handlebars, GIT, Github, Gitlab, Heroku, Postman, Figma, Trello, Google Workspace',
};

export default data;
