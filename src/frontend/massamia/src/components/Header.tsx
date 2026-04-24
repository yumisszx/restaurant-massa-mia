import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="name">Massa Mia</Link>

        <button
          className="btn btn-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul id="nav-links" className={menuOpen ? "show" : ""}>
          <li>
            <Link to="/menu" onClick={() => setMenuOpen(false)}>Produtos</Link>
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