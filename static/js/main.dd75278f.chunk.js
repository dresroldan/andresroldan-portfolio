(this["webpackJsonpandresroldan-portfolio"]=this["webpackJsonpandresroldan-portfolio"]||[]).push([[0],{26:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(14),c=i.n(a),r=i(15),o=i(16),l=i(21),d=i(19),j=i(20),b=(i(26),i(0)),h=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),i=t[0],n=t[1];return Object(b.jsx)("nav",{role:"navigation",className:i?"nav--active":"nav",children:Object(b.jsxs)("div",{className:"navbar__container",children:[Object(b.jsx)("a",{href:"/",className:"navbar__logo",children:"Andr\xe9s Rold\xe1n"}),Object(b.jsx)("div",{className:"navbar__icon",onClick:function(){n(!i)},children:Object(b.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(b.jsx)("ul",{className:i?" navbar__menu active":"navbar__menu",children:[{link:"#/about",text:"About"},{link:"#/projects",text:"Projects"},{link:"mailto:dresroldan@gmail.com",text:"Contact"}].map((function(e){return Object(b.jsx)("li",{className:"navbar__item",children:Object(b.jsx)("a",{className:"navbar__link",href:e.link,children:e.text})},e.text)}))})]})})},u=(i(28),i(29),["btn--primary","btn--secondary","btn--warning"]),m=["btn--medium","btn--small"],p=function(e){var t=e.children,i=e.href,s=e.target,n=e.buttonStyle,a=e.buttonSize,c=e.rel,r=u.includes(n)?n:u[0],o=m.includes(a)?a:m[0];return Object(b.jsx)("a",{className:"btn ".concat(r," ").concat(o," "),href:i,target:s,rel:c,children:t})},O=function(){return Object(b.jsx)("section",{id:"hero",children:Object(b.jsxs)("div",{className:"hero__container",children:[Object(b.jsxs)("h1",{className:"hero__title",children:["Hello,",Object(b.jsx)("br",{}),"I'm Andr\xe9s"]}),Object(b.jsx)("p",{className:"hero__subheading",children:"Chicago-based developer focused on building clean, and user-friendly web experiences"}),Object(b.jsxs)(p,{href:"https://docs.google.com/document/d/1LREYfriGyXWa_r_W4FF4d51iLavuKqNZBSKON2j7Q4w/edit",rel:"noopener",target:"_blank",children:[" ","Resume"]})]})})},g=(i(30),function(e){var t=e.heading,i=e.paragraph,s=e.imgUrl,n=e.projectDemoLink,a=e.projectGithubLink,c=e.tools;return Object(b.jsxs)("div",{className:"card__grid-item",children:[Object(b.jsx)("img",{className:"card__image",src:s,alt:""}),Object(b.jsx)("div",{className:"card__title",children:t}),Object(b.jsx)("div",{className:"card__description",children:i}),Object(b.jsx)("div",{className:"card__description",children:c}),Object(b.jsxs)("div",{className:"card__button-wrapper",children:[Object(b.jsx)(p,{href:n,target:"_blank",buttonStyle:"btn--secondary",buttonSize:"btn--small",children:"demo"}),Object(b.jsx)(p,{href:a,target:"_blank",buttonStyle:"btn--secondary",buttonSize:"btn--small",children:"code"})]})]})}),v={projects:[{id:1,title:"Vinyl Record eCommmerce Store",description:"An online vinyl record shop, allowing users the ability to browse and shop various vinyl records with full description and genre.",tools:"Utilized: React, Redux, NodeJS, Express, MongoDB, Passport.js, Material-UI",img:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1641510480/PORTFOLIO/new%20pics/record-store.jpg",demo:"https://vinyl-record-store.herokuapp.com/",github:"https://github.com/dresroldan/vinyl-record-ecommerce-store"},{id:2,title:"Buen Viaje Radio",description:"A single page website for Buen Viaje Radio, a monthly DJ livestream platform.",tools:"Utilized: Gatsby, React-Bootstrap, Figma, Vimeo",img:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1641510481/PORTFOLIO/new%20pics/buen-viaje-radio.png",demo:"https://www.buenviajeradio.com/",github:"https://github.com/dresroldan/buen_viaje_radio"},{id:3,title:"Picniq",description:"A single search, location-based application, providing users with nearby parks and restaurants offering takeout/delivery.",tools:"Utilized: HTML5, CSS, Bootstrap, PureCSS, Javascript, FourSquare, OpenCage Geocoder API, Google Fonts",img:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1641510480/PORTFOLIO/new%20pics/picnic-outdoors.jpg",demo:"https://jpbrickhouse.github.io/Picniq/",github:"https://github.com/JPBrickhouse/Picniq"},{id:4,title:"Weather Dashboard",description:"A one-page dashboard that displays weather conditions for multiple cities.",tools:"Utilized: HTML5, CSS, jQuery, Moment.js, Open Weather API",img:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1641510480/PORTFOLIO/new%20pics/weather-dashboard.jpg",demo:"https://dresroldan.github.io/weather-dashboard/",github:"https://github.com/dresroldan/weather-dashboard"}],skillSet:"HTML5, Javascript, ES6, jQuery, CSS, SASS, Bootstrap, Material UI, React JS, JSX, Mobile Responsive Design - MySQL, ExpressJS, MongoDB, JSON, REST APIs, AJAX - NPM, Testing, Handlebars, GIT, Github, Gitlab, Heroku, Postman, Figma, Trello, Google Workspace"},x=(i(31),function(){return Object(b.jsx)("section",{id:"projects",children:Object(b.jsxs)("div",{className:"projects__container",children:[Object(b.jsx)("div",{className:"projects__title",children:"Projects"}),Object(b.jsx)("div",{className:"projects__grid",children:v.projects.map((function(e){return Object(b.jsx)(g,{heading:e.title,paragraph:e.description,tools:e.tools,imgUrl:e.img,projectDemoLink:e.demo,projectGithubLink:e.github},e.id)}))})]})})}),f=(i(32),function(){return Object(b.jsx)("section",{id:"skills",children:Object(b.jsxs)("div",{className:"skills__wrapper",children:[Object(b.jsx)("div",{className:"skills__title",children:"skill-set"}),Object(b.jsx)("div",{className:"skills__list",children:"HTML5, JavaScript, ES6, jQuery, CSS, SCSS, Bootstrap, Material UI, React JS, Redux, JSX, Mobile Responsive Design, Node.js, MySQL, ExpressJS, MongoDB, JSON, REST APIs, AJAX, NPM, Testing, Handlebars, GIT, GitHub, GitLab, Heroku, Postman, Figma, Trello, Google Workspace"})]})})}),_=(i(33),function(){return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"about__container",children:[Object(b.jsx)("div",{className:"profile-image__wrapper",children:Object(b.jsx)("img",{className:"profile-image",alt:"Andres Roldan Portfolio",src:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1641423723/PORTFOLIO/andres-roldan-profile-2.jpg"})}),Object(b.jsxs)("div",{className:"bio__container",children:[Object(b.jsx)("div",{className:"about-info__bio",children:"Full Stack Web Developer with a background in specialty coffee and music production seeking to leverage my skills and experience to join a creative and diverse team in tech. Recent certificate in Full Stack Web Development from Northwestern University in Chicago, IL. I'm determined to improve my code, and design skills everyday while bringing my passion for technology, design, and community to the table."}),Object(b.jsx)("div",{className:"about-info__bio",children:"I would love to hear from you. Whether it's a project, job opportunity, or just to chat. Feel free to contact me."}),Object(b.jsx)("div",{className:"about-info",children:Object(b.jsx)("ul",{className:"fa-ul",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"fa-li",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),"dresroldan@gmail.com"]})})}),Object(b.jsx)("div",{className:"about-info__buttons",children:Object(b.jsxs)(p,{href:"https://docs.google.com/document/d/1LREYfriGyXWa_r_W4FF4d51iLavuKqNZBSKON2j7Q4w/edit",target:"_blank",buttonStyle:"btn--secondary",children:[" ","Resume"]})})]})]})})}),N=(i(34),function(){return Object(b.jsx)("section",{id:"contact",children:Object(b.jsxs)("div",{className:"contact__container",children:[Object(b.jsx)("div",{className:"contact__title",children:"Let's Connect"}),Object(b.jsx)(p,{href:"mailto:dresroldan@gmail.com",children:"Email"})]})})});var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(x,{}),Object(b.jsx)(f,{}),Object(b.jsx)(_,{}),Object(b.jsx)(N,{})]})};var y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(x,{})})};var S=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(_,{})})},w=(i(35),function(){return Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"link__wrapper",children:[Object(b.jsx)("a",{className:"link",href:"https://github.com/dresroldan",children:"Contact"}),Object(b.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/andresroldan23/",children:"LinkedIn"}),Object(b.jsx)("a",{className:"link",href:"https://github.com/dresroldan",children:"Github"})]}),Object(b.jsx)("div",{className:"footer__copyright ",children:"\xa9 2021 Andr\xe9s Rold\xe1n"})]})}),R=i(17),L=i(2),P=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsx)(R.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(L.a,{exact:!0,path:"/",component:k}),Object(b.jsx)(L.a,{path:"/projects",component:y}),Object(b.jsx)(L.a,{path:"/about",component:S}),Object(b.jsx)(w,{})]})})}}]),i}(s.Component);i(41);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.dd75278f.chunk.js.map