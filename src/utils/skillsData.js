import html from "../assets/html.png";
import css from "../assets/css3.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";

import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import postgres from "../assets/postgres.png";
import sequelize from "../assets/sequelize.png";

import figma from "../assets/figma2.png";
import git from "../assets/git.png";
import illustrator from "../assets/illustrator.png";

// PROJECTS

import pokemon from "../assets/pokemon_project.png";
import fixer from "../assets/fixershoes.png";

export const frontSkills = [
  {
    name: "Html5",
    img: html,
  },
  {
    name: "Css3",
    img: css,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    name: "Javascript",
    img: javascript,
  },
  {
    name: "React.js",
    img: react,
  },
  {
    name: "Redux.js",
    img: redux,
  },
];

export const backSkills = [
  {
    name: "express.js",
    img: express,
  },
  {
    name: "Node.js",
    img: nodejs,
  },
  {
    name: "PostgreSQL",
    img: postgres,
  },
  {
    name: "Sequelize",
    img: sequelize,
  },
];

export const otherSkills = [
  {
    name: "Figma",
    img: figma,
  },
  {
    name: "Git",
    img: git,
  },
  {
    name: "Illustrator",
    img: illustrator,
  },
];

export const projects = [
  {
    name: "Fixer Shoes e-commerce",
    origin:
      "e-commerce for a Colombian company as part of the final project at soyHenry",
    img: fixer,
    description:
      "Single page application, completly functional. with login, database, register of user, dashboards, statistics and much more",
    tech: "React, Redux, Javascript, Tailwind, Css, PostgreSQL, Express, Sequelize, Apis, Node.js",
    link: "https://dev.fixershoes.com/",
  },
  {
    name: "Pokemon App",
    origin: "Individual Project for SoyHenry",
    img: pokemon,
    description:
      "Single page application, with filters and creation form. consuming the pokemon api. Using PostgreSQL to save the created pokemons.",
    tech: "React, Redux, Javascript, Css, PostgreSQL, Express, Sequelize, Apis, Node.js",
    link: "https://pi-pokemons-deploy.vercel.app/home",
  },
];
