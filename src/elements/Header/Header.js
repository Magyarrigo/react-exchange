import "./Header.css";

import Link from "./Link/Link";

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <img className="logo" src="logo-magyarrigo.svg" alt="logoOfCompany" />
        <p className="projectTitle">CurrencyConverter</p>
        <nav className="navContainer">
          <ul className="navContainerButtons">
            <Link id="#converter" text="CONVERTER" />
            <Link id="#description" text="DESCRIPTION" />
            <Link id="#aboutMe" text="ABOUTME" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
