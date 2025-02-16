import React, { useEffect } from "react";
import GarantImg from "../../components/garantImg/GarantImg";
import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";

import "./blog.scss";

const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="blog">
      <GarantImg />
      <div className="blog__info container">
        <div className="blog__info__left">
          <div className="blog__info__left__card">
            <div className="blog__info__left__card-img">
              <img src={img1} alt="" />
            </div>
            <div className="blog__info__left__card-info">
              <h2>Команда JAC Motors поздравляет с 8 Марта!</h2>
              <p>08.03.2024</p>
              <p>
                Милые женщины, поздравляем Вас с прекрасным праздником — с
                Международным женским днем!
              </p>
            </div>
          </div>
          <div className="blog__info__left__card">
            <div className="blog__info__left__card-img">
              <img src={img2} alt="" />
            </div>
            <div className="blog__info__left__card-info">
              <h2>
                JAC с новейшими моделями дебютирует на автосалоне в Чэнду 2023
              </h2>
              <p>14.08.2023</p>
              <p>
                25 августа в Чэнду торжественно открылся Чэндуский автосалон на
                тему «Дорога в Западный…
              </p>
            </div>
          </div>
          <div className="blog__info__left__card">
            <div className="blog__info__left__card-img">
              <img src={img3} alt="" />
            </div>
            <div className="blog__info__left__card-info">
              <h2>Команда JAC Motors подарит вам особенный подарок.</h2>
              <p>14.08.2023</p>
              <p>
                Команда JAC Motors подарит вам особенный подарок. эксклюзивную
                скидку нашей модели JAC J7.
              </p>
            </div>
          </div>
        </div>
        <div className="blog__info__right">
          <h2 className="blog__info__right__title">Искать здесь</h2>
          <div className="blog__info__right__form">
            <input type="search" />
            <button>Search</button>
          </div>
          <h2 className="blog__info__right__title blog__info__right__title-bottom">
            Недавние Посты
          </h2>
          <div className="blog__info__right__cards">
            <div className="blog__info__right__card">
              <div className="blog__info__right__card__img">
                <img src={img1} alt="" />
              </div>
              <div className="blog__info__right__card__info">
                <h4>Команда JAC Motors поздравляет с 8 Марта!</h4>
                <p className="blog__info__right__date">08 Мар 2024</p>
              </div>
            </div>
            <div className="blog__info__right__card">
              <div className="blog__info__right__card__img">
                <img src={img2} alt="" />
              </div>
              <div className="blog__info__right__card__info">
                <h4>
                  JAC с новейшими моделями дебютирует на автосалоне в Чэнду 2023
                </h4>
                <p>14 Авг 2023</p>
              </div>
            </div>
            <div className="blog__info__right__card">
              <div className="blog__info__right__card__img">
                <img src={img3} alt="" />
              </div>
              <div className="blog__info__right__card__info">
                <h4>Команда JAC Motors подарит вам особенный подарок.</h4>
                <p>14 Авг 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
