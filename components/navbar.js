import GetInTouchButton from "./getin-touch-button";
import Image from "next/image";
import MenuContext from "./MenuContext";
import { useContext } from "react";
import NavMenu from "./nav-menu";

export default function Navbar() {
  const menus = useContext(MenuContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          <Image
            src="/images/logo.svg"
            alt="Sikara dev logo"
            width={150}
            height={60}
          />
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            {menus.map((menu, index) => (
              <NavMenu key={index} {...menu} />
            ))}
            <li className="nav-item">
              <GetInTouchButton text="GET IN TOUCH" navLink />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
