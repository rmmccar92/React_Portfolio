import "./App.css";
import React, { useEffect } from "react";
// import Nav from "./Nav";
import Navbar from "./components/Navbar";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "./utils/GlobalState";
document.body.style.backgroundColor = "black";
const App = () => {
  useEffect(() => {
    document.title = "Ryan McCarthy Portfolio";
  }, []);
  return (
    <>
      {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Router>
        <PortfolioProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </PortfolioProvider>
      </Router>
      {/* <div>{renderPage()}</div> */}
      <Footer />
    </>
  );
};
export default App;
