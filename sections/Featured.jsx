"use client";

import { useState } from "react";
import styles from "../styles";

import { exploreProjects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [active, setActive] = useState("Prism");

  return (
    <section className={`${styles.innerWidth} pt-2 mx-auto`}>
      <h3 className={`${styles.subHeading}`}>Featured Work</h3>
      <div className="flex flex-col min-h-[40vh] md:min-h-[20vh] gap-3 md:flex-row pt-5">
        {exploreProjects.map((world, index) => (
          <ProjectCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
      <p className={`${styles.disclaimerText} py-2`}>
        Self-taught by youtubing and googling it.
      </p>
    </section>
  );
};

export default Projects;
