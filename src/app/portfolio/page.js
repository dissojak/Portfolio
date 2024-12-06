"use client"; // This tells Next.js to treat this component as a Client Component

import React, { useState } from "react";
import FilterList from "./components/FilterList";
import ProjectList from "./components/ProjectList";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Pass the active filter and the setter to FilterList */}
        <FilterList activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        {/* Pass the active filter to ProjectList */}
        <ProjectList activeFilter={activeFilter} />
      </section>
    </>
  );
};

export default Portfolio;
