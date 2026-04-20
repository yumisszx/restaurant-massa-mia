import React, { useState } from "react";
import './header.css'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <p className="name">Massa Mia</p>

        <button
          className="btn btn-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul id="nav-links" className={menuOpen ? "show" : ""}>
          <li>
            <a href="#produtos">Produtos</a>
          </li>

          <li>
            <a href="">Sobre Nós</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;