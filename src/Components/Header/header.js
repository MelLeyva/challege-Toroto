import logo from "../../icons/svg/logo.svg";
import extrLink from "../../icons/svg/external-link.svg";
import React from "react";
import "./header.scss";

function NavBar() {
  return (
    <header>
    <div className="navbar">
      <a href="/home">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
    </div>
    <span className="links">
      <ul className="projects">PROYECTOS</ul>
      <ul className="about">SOBRE TOROTO</ul>
      <ul className="blog">BLOG</ul>
      <ul className="meta">
        <img src={extrLink} className="external-link" alt="external-link" />
        META REGISTRO
      </ul>
      <button href="/contact">CONTACTO</button>
    </span>
    </header>
  );
}

export default NavBar;
