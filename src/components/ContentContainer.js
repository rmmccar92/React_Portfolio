import React from "react";
// import Nav from "./Nav";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "../utils/GlobalState";

document.body.style.backgroundColor = "black";

const ContentContainer = () => {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Home />;
  //   }
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentPage === "Project") {
  //     return <Project />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Resume />;
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Router>
        <PortfolioProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/contact" element={Contact} />
            <Route path="/project" element={Project} />
            <Route path="/resume" element={Resume} />
          </Routes>
        </PortfolioProvider>
      </Router>
      {/* <div>{renderPage()}</div> */}
      <Footer />
    </>
  );
};
export default ContentContainer;
