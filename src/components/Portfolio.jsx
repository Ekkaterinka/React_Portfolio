import React, { Component } from 'react'
import { useState, useEffect } from "react";
import { ProjectList } from '../Img';

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setProjects(ProjectList);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = ProjectList.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  },

    [filter]);

  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "Websites"}
          onClick={() => setFilter("Websites")}
        >
          Websites
        </a>
        <a
          href="/#"
          active={filter === "Flayers"}
          onClick={() => setFilter("Flayers")}
        >
          Flayers
        </a>
        <a
          href="/#"
          active={filter === "Business Cards"}
          onClick={() => setFilter("Business Cards")}
        >
          Business Cards
        </a>
      </div>
      <div className="portfolio__container">

        {projects.map(item =>
          item.filtered === true ? <img src={item.img}></img> : ""
        )}
      </div>

    </>
  );
}
