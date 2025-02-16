import React, { useEffect } from "react";
import "./dealer.scss";
import { CONTACT, MAPCARD } from "../../static";
import { FaPhone, FaMapLocation } from "react-icons/fa6";
import { IoStopwatchOutline } from "react-icons/io5";

const Dealer = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const CART = MAPCARD?.map((el) => (
    <div key={el?.id} className="dealer__bottom__cart-info">
      <h2 className="dealer__bottom__cart-title">{el?.title}</h2>
      <p className="dealer__bottom__cart-desc">
        <FaPhone />
        {el?.number}
      </p>
      <p className="dealer__bottom__cart-desc">
        <FaMapLocation />
        {el?.map}
      </p>
      <p className="dealer__bottom__cart-desc">
        <IoStopwatchOutline />
        {el?.calc}
      </p>
      <h2 className="dealer__bottom__cart-title">{el?.desc}</h2>
    </div>
  ));

  const CONTACTDATA = CONTACT?.map((el) => (
    <div key={el?.id} className="dealer__bottom__cart-info">
      <h2 className="dealer__bottom__contact-title">{el?.title}</h2>
      <a href={`tel: ${el?.number}`} className="dealer__bottom__cart-desc">
        <FaPhone />
        {el?.number}
      </a>
      <p className="dealer__bottom__cart-desc">
        <FaMapLocation />
        {el?.map}
      </p>
      <p className="dealer__bottom__cart-desc">
        <IoStopwatchOutline />
        {el?.calc}
      </p>
      <h2 className="dealer__bottom__cart-title">{el?.desc}</h2>
    </div>
  ));

  console.log(CONTACT);

  return (
    <div className="dealer">
      <div className="dealer__top container">
        <div className="dealer__info">
          <h1>
            НАЙТИ <span>ДИЛЕРА</span>
          </h1>
          <p>
            ИП ООО «JAC AUTO», официальный дистрибьютор автомобилей JAC в
            Узбекистане, контакты с официальными дилерами на сайте нашей
            компании, поиск дилерского центра – информация о дилерских центрах
            ООО «JAC AUTO» JK, официального дистрибьютора бренд JAC MOTORS в
            Узбекистане
          </p>
        </div>
      </div>
      <div className="dealer__map">
        <iframe
          className="dealer__map__frame"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47972.108503886855!2d69.2057574!3d41.2815156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722683979638!5m2!1sen!2s"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="dealer__bottom">
        <div className="dealer__bottom__cart">{CART}</div>
        <div className="dealer__bottom__contact">{CONTACTDATA}</div>
      </div>
    </div>
  );
};

export default Dealer;
