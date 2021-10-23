import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

document.body.style.backgroundColor = "black";

const ContentContainer = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage()}</div>
      <Footer />
    </>
  );
};
export default ContentContainer;