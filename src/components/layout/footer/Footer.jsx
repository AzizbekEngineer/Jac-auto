import React from "react";
import footerLogo from "../../../assets/images/footer.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.scss";
import { Link } from "react-router-dom";
import { DATA } from "../../../static";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__container">
          <div className="footer__card">
            <div className="footer__img">
              <img src={footerLogo} alt="" />
            </div>
            <p className="footer__desc">
              Официальный дистрибьютор автомобилей марки JAC в Республике
              Узбекистан
            </p>
          </div>
          <div className="footer__middle">
            <ul className="footer__items">
              <li className="footer__item footer__item__top">Меню</li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>Модели</span>
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>Дилеры</span>
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>Новости и Блоги</span>
                </Link>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item footer__item__top">Модели</li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>Модели</span>
                </Link>
              </li>
              {DATA?.cars?.map((model) => (
                <li className="footer__item " key={model.id}>
                  <Link className="footer__link">
                    <MdOutlineNavigateNext />
                    <span>{model.model}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer__items">
              <li className="footer__item footer__item__top">Контакты</li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>
                    город Ташкент, Яшнабадский район, улица Корасувбуйи, дом 269
                  </span>
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <a href="tel:+998900331155">+998900331155 </a>
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <a href="tel:+998712004844">+998712004844 </a>
                </Link>
              </li>
              <li className="footer__item ">
                <Link className="footer__link">
                  <MdOutlineNavigateNext />
                  <span>info@jactashkent.uz</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <div className="footer__bottom__left">
            <p>
              Обращаем Ваше внимание, что вся представленная на сайте
              информация, касающаяся комплектаций, технических характеристик,
              цветовых сочетаний, а также стоимости автомобилей и сервисного
              обслуживания носит информационный характер и не является публичной
              офертой.
            </p>
            <p>
              © Официальный дистрибьютор JAC MOTORS. Все права защищены © 2024
            </p>
          </div>
          <div className="footer__socials">
            <Link className="footer__icon">
              <FaInstagram />
            </Link>
            <Link className="footer__icon">
              <FaTelegramPlane />
            </Link>
            <Link className="footer__icon">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
