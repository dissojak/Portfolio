import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  { title: "Finance", category: "Web development", imgSrc: "/assets/images/project-1.jpg" },
  { title: "Orizon", category: "Web development", imgSrc: "/assets/images/project-2.png" },
  { title: "Fundo", category: "Web design", imgSrc: "/assets/images/project-3.jpg" },
  { title: "Brawlhalla", category: "Applications", imgSrc: "/assets/images/project-4.png" },
  { title: "DSM.", category: "Web design", imgSrc: "/assets/images/project-5.png" },
  { title: "MetaSpark", category: "Web design", imgSrc: "/assets/images/project-6.png" },
  { title: "Summary", category: "Web development", imgSrc: "/assets/images/project-7.png" },
  { title: "Task Manager", category: "Applications", imgSrc: "/assets/images/project-8.jpg" },
  { title: "Arrival", category: "Web development", imgSrc: "/assets/images/project-9.png" },
];

const ProjectList = ({ activeFilter }) => {
  // Filter projects based on the active filter
  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <ul className="project-list">
      {filteredProjects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          category={project.category}
          imgSrc={project.imgSrc}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
