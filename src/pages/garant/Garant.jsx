import React, { useEffect } from "react";
import "./garant.scss";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import GarantImg from "../../components/garantImg/GarantImg";

const Garant = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="garant">
      <GarantImg />
      <div className="garant__bottom container">
        <div className="garant__bottom__card">
          <h2>Гарантия на автомобиль</h2>
          <button>
            <BsFillFileEarmarkPdfFill />
          </button>
          <p>Подробнее</p>
        </div>
      </div>
    </div>
  );
};

export default Garant;
