import React from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import "../../styles/header/header.scss";

export default function Header() {
  let location = useLocation();
  const menuData = [
    {
      id: 1,
      title: "Главная",
      href: "/",
    },
    {
      id: 2,
      title: "Новости",
      href: "/news",
    },
    {
      id: 3,
      title: "Профиль",
      href: "/profile",
    },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container container">
          <div className="logo">
            <Link to="/">
              <h2 className="logo__name">Logo</h2>
            </Link>
          </div>
          <ul className="menu">
            {menuData?.map((el) => {
              return (
                <li
                  className={
                    location.pathname == el.href
                      ? "menu__items active-list"
                      : "menu__items "
                  }
                  key={el.id}
                >
                  <Link to={el.href}>{el.title}</Link>
                </li>
              );
            })}
          </ul>

          <div className="hamburger-icon d-none">
            <MdOutlineMenuOpen size="2rem" />
          </div>
        </div>
      </nav>
    </header>
  );
}
