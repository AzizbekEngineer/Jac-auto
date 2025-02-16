import React from "react";
import "./info.scss";

import logo from "../../assets/images/logo.png";

const Info = () => {
  return (
    <div className="info container">
      <div className="info__left">
        <h2>Дистрибьютор JAC в Узбекистане</h2>
        <div className="info__left__text">
          <p>
            Теперь появилась возможность{" "}
            <strong>купить новый легковой автомобиль JAC в Узбекистане</strong>
          </p>
          <p>
            Актуальные цены, наличие и условия покупки автомобилей JAC (Джак) Вы
            можете узнать в дилерских центрах Вашего региона.
          </p>
        </div>
      </div>
      <div className="info__right">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Info;
