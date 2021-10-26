import logo from "../../icons/svg/logo.svg";
import extrLink from "../../icons/svg/external-link.svg";
import React from "react";
import "./header.scss";

function NavBar() {
  return (
    <div className="navbar">
      <a href="/home">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <ul className="projects">PROYECTOS</ul>
      <ul className="about">SOBRE TOROTO</ul>
      <ul className="blog">BLOG</ul>
      <ul className="meta">
        <img src={extrLink} className="external-link" alt="external-link" />
        META REGISTRO
      </ul>
      <button href="/contact">CONTACTO</button>
    </div>
  );
}

export default NavBar;
