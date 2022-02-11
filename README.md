# React Portfolio - Andrés Roldán


## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

An updated and dynamic portfolio showcasing my resume and recent projects for potential employers and clients.

### Screenshot

![](./src/images/portfolio-screenshot-1.png)
![](./src/images/portfolio-screenshot-2.png)

### Links

- Live Site URL: [https://www.andresroldan.com](https://www.andresroldan.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- React


### Challenges

After deploying to GitHub Pages, everything looked fine until I refreshed the page or navigated throught the browser. Whenever I clicked on a link or refreshed the page I would get a 404 error.  

### What I learned / Solution 

GitHub Pages does not support browser history like the browser does. Hash Router solves this issue by using the hash portion of the URL to keep the UI in sync with the URL. 


```css
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```



### Continued development

To develop this portfolio even further, I would like to add a contact form that allows users to send a direct message from the site, instead of using :mailto which is used to to redirect to an email address instead of a web page URL. When a user clicks on the Mailto link, the default email client on the visitor's computer opens and suggests sending a message to the email address mentioned in the Mailto link.


### Useful resources

- [React deployment on GitHub Pages ](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom) - How to deploy a routed React app to GitHub Pages

- [React deployment on GitHub Pages using Hash Router ](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/) - How to deploy a routed React app to GitHub Pages using Hash Router


## Author

- Website - [Andrés Roldán](https://www.andresroldan.com)
- LinkedIn - [Andrés Roldán](https://www.linkedin.com/in/andresroldan23/)
