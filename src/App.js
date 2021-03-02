import "./App.scss";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      {/* <About/>
      <Skills/>
      <Footer/> */}
    </div>
  );
}

export default App;
