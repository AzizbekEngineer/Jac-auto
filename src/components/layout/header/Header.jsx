import React, { Fragment, useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import Language from "../../language/Language.jsx";
import "./header.scss";
import HoverImage from "../../hoverImg/HoverImg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="header__top">
        <div className="header__top__left">
          <p>Автосалон JAC – ваша надежная покупка автомобиля!</p>
          <p className="header__top__left-title">
            <Link to={"/link"}>Получите бесплатный тест-драйв</Link>
          </p>
        </div>
        <div className="header__top__right">
          <div className="header__top__call__center">
            <IoCall />
            <a href="tel: +998937714320">
              <span>Телефон поддержки</span> +99893-771-43-20
            </a>
          </div>
          <div className="header__top__icons">
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTelegramPlane />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header__logo">
          <Link>
            <h2>
              <img width={65} height={18} src={logo} alt="" />
            </h2>
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ul className={`header__list ${show ? "header__show" : ""}`}>
            <li onClick={() => setShow(false)} className="header__close">
              <IoClose />
            </li>
            <li className="header__item">
              <NavLink to={"/"}>ГЛАВНАЯ</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/model"}>МОДЕЛЬНЫЙ РЯД</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/blog"}>НОВОСТИ И БЛОГИ</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/dealer"}>ДИЛЕРЫ</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/guarantee"}>ГАРАНТИЯ</NavLink>
            </li>
            <li>
              <Language />
            </li>
          </ul>
          <button onClick={() => setShow(true)} className="header__menu">
            <RxHamburgerMenu />
          </button>
          <div className="header__phone">
            <HoverImage />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
