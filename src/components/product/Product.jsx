import React, { useEffect } from "react";
import "./product.scss";
import { DATA } from "../../static";
import { Link } from "react-router-dom";

const Product = () => {
  console.log(DATA?.cars);
  const productData = DATA?.cars?.slice(0, 4)?.map((el) => (
    <div data-aos="zoom-in" className="product__card" key={el?.id}>
      <div className="product__img">
        <Link to={`/products/${el?.id}`}>
          <img src={el?.variants[2]?.image_url} alt="" />
        </Link>
      </div>
      <div className="product__info">
        <h3 className="product__title">{el?.model}</h3>
        <p className="product__desc">от {el?.variants[2].price} Cум</p>
      </div>
    </div>
  ));
  return (
    <div className="product">
      <div className="product__info container">
        <h2>МОДЕЛЬНЫЙ РЯД</h2>
        <p className="product__info-desc">
          Представляем вашему вниманию модельный ряд автомобилей марки JAC.
        </p>
      </div>
      <div className="product__cards container">{productData}</div>
      <div className="product__btns">
        <button className="product__btn">Все Модел</button>
      </div>
    </div>
  );
};

export default Product;
