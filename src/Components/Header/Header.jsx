import logo from "../../icons/svg/logo.svg";
import menu from "../../icons/svg/hamburguer_menu_icon.svg"
import extrLink from "../../icons/svg/external-link.svg";
import React from "react";
import "./Header.scss";

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <img src={menu} className='menu' alt='menu' />
        <img src={logo} className="App-logo" alt="logo" />
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
