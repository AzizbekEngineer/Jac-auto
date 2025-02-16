import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../static";
import "./detail.scss";
import Modul from "../../components/modul/Modul";
const Detail = () => {
  const { id } = useParams();
  const data = DATA?.cars?.find((el) => el.id === id);
  const [selectedVariant, setSelectedVariant] = useState(data.variants[2]);
  const [show, setShow] = useState(false);

  const handleColorClick = (variant) => {
    setSelectedVariant(variant);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  return (
    <div
      className="detail"
      style={{ backgroundImage: `url(${data.variants[2].image_url})` }}
    >
      <div className="container">
        <div className="detail__top__info" data-aos="fade-right">
          <h3 className="detail__title">{data?.model}</h3>
          <p className="detail__desc">{data?.description}</p>
          <h3 className="detail__price">от {data?.variants[2]?.price}</h3>
          <p>CУМ СТАРТОВАЯ ЦЕНА</p>
          <div className="detail__buttons">
            <button>Характеристики</button>
            <button onClick={() => setShow(true)}>Заказать тест-драйв</button>
          </div>
        </div>
      </div>
      {show ? (
        <Modul width={800} close={setShow} bg={"#aaa6"}>
          <div className="detail__contact">
            <div className="detail__contact__left">
              <h2>Контакты</h2>
              <p>
                У дилеров Вы всегда можете узнать наличие автомобилей,
                забронировать и купить JAC.
              </p>
              <a href="tel:+998 90 122 02 34 (телефон поддержки) ">
                +998 90 122 02 34 (телефон поддержки)
              </a>
            </div>
            <div className="detail__contact__right">
              <h2>Форма обратной связи</h2>
              <p>
                Оставьте свои данные, и представитель автоцентра перезвонит Вам
                в ближайшее время
              </p>
              <form action="">
                <input placeholder="first name" type="text" />
                <input placeholder="phone number" type="text" />
                <select name="" id="">
                  <option value="Выбирите Дилера">Выбирите Дилера</option>
                  <option value="г.Ташкент. Сергели-Avtotexxizmat">
                    г.Ташкент. Сергели-Avtotexxizmat
                  </option>
                  <option value="г.Ташкент. Чиланзар- Avtotexxizmat">
                    г.Ташкент. Чиланзар- Avtotexxizmat
                  </option>
                  <option value="Наманганская область Chust-Avtotexxizmat">
                    Наманганская область Chust-Avtotexxizmat
                  </option>
                  <option value="Хорезмская область avtotexxizmat">
                    Хорезмская область avtotexxizmat
                  </option>
                  <option value="Ташкентская область Nurafshon Avtocentr">
                    Ташкентская область Nurafshon Avtocentr
                  </option>
                  <option value="Самаркандская область Beni-Motors">
                    Самаркандская область Beni-Motors
                  </option>
                  <option value="Ферганская область Farg'ona JAC Motors">
                    Ферганская область Farg'ona JAC Motors
                  </option>
                  <option value="Ферганская область Farg'ona `Avtotexxizmat`">
                    Ферганская область Farg'ona "Avtotexxizmat
                  </option>
                  <option value="Ферганская область Коканд `Avtotexxizmat`">
                    Ферганская область Коканд "Avtotexxizmat"
                  </option>
                  <option value="Ферганская область Farg'ona avto markaz">
                    Ферганская область Farg'ona avto markaz
                  </option>
                  <option value="Каракалпакстан Qaraqalpaqavtotexxizmet">
                    Каракалпакстан Qaraqalpaqavtotexxizmet
                  </option>
                </select>
                <textarea
                  placeholder="Сообшение"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </Modul>
      ) : (
        <></>
      )}
      <div className="detail__infos">
        <div className="container detail__info__container">
          <div className="detail__infos__left" data-aos="fade-up-right">
            <h2 className="detail__infos__title">{data.model}</h2>
            <h3 className="detail__infos__infor">Премиальный кроссовер</h3>
            <div className="detail__infos__desc">{data.description}</div>
          </div>
          <div className="detail__infos__right" data-aos="fade-up-left">
            <img
              src={data?.variants[1].image_url}
              alt={data?.variants[1].name}
            />
          </div>
        </div>
      </div>
      <div className="detail__colors">
        <h3 className="detail__color">ЦВЕТА</h3>
        <p className="detail__colors__title">{data.description}</p>
        <div className="color-options">
          {data.variants.map((variant) => (
            <div
              key={variant.name}
              className={`color-option ${
                selectedVariant.name === variant.name ? "active" : ""
              }`}
              style={{ backgroundColor: variant.code }}
              onClick={() => handleColorClick(variant)}
            />
          ))}
        </div>
        <div className="detail__colors__img" data-aos="flip-left">
          <img src={selectedVariant.image_url} alt={selectedVariant.name} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
