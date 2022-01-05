import React, { Component } from 'react';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about" component={AboutPage} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
