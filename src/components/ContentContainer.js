import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

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
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
      <div class="container" id="work">
        <h1 class="text-center m-1">My Work</h1>
        <hr class="featurette-divider" />
        {renderPage()}
      </div>
      <Footer />
    </>
  );
};
export default ContentContainer;
