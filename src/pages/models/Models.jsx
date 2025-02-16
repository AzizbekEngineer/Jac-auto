import React, { useEffect } from "react";
import Timeline from "../../components/car-animation/CarAnimation";
import "./model.scss";
import { DATA } from "../../static";
import { Link } from "react-router-dom";

const Models = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="models">
      <div className="container models__container">
        <div className="models__cards">
          {DATA.cars.slice(1, 7).map((el) => (
            <div key={el.id}>
              <div className="models__img">
                <Link to={`/products/${el?.id}`}>
                  <img src={el?.variants[3]?.image_url} alt="" />
                </Link>
              </div>
              <div className="models__info">
                <h3>{el.model}</h3>
                <h3>{el.variants[3].price}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Timeline />
        <div className="models__all__cards">
          {DATA.cars.map((el) => (
            <div key={el.id}>
              <div className="models__img">
                <Link to={`/products/${el?.id}`}>
                  <img src={el?.variants[3]?.image_url} alt="" />
                </Link>
              </div>
              <div className="models__info">
                <h3>{el.model}</h3>
                <h3>{el.variants[3].price}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="models__cards">
          {DATA.cars.slice(0, 6).map((el) => (
            <div key={el.id} className="models__card">
              <div className="models__img">
                <Link to={`/products/${el?.id}`}>
                  <img src={el?.variants[2]?.image_url} alt="" />
                </Link>
              </div>
              <div className="models__info">
                <h3>{el.model}</h3>
                <h3>{el.variants[2].price}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
