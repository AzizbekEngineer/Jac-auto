import React from "react";
import "./image.scss";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const Image = () => {
  return (
    <div className="image">
      <div className="container ">
        <div className="image__info">
          <h2>ГАЛЕРЕЯ</h2>
          <button>Подробнее</button>
        </div>
        <div className="image__cards">
          <div className="image__card">
            <img src={img1} alt="" />
          </div>
          <div className="image__card">
            <img src={img2} alt="" />
          </div>
          <div className="image__card">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
