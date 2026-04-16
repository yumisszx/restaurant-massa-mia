import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <p className="name">Massa Mia</p>

        <button className="btn btn-mobile">
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul id="nav-links">
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