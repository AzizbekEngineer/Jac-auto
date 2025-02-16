import React, { useEffect, useRef, useState } from "react";
import "./CarAnimation.scss";
import carImage from "../../assets/images/car.png"; // Car image path

const Timeline = () => {
  const timelineRef = useRef(null);
  const [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollY = window.scrollY;
        const timelineHeight = timelineRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollRatio = scrollY / (timelineHeight - windowHeight);
        setCarPosition(scrollRatio * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="timeline" ref={timelineRef}>
      <img
        src={carImage}
        alt="Car"
        className="car"
        style={{ transform: `translateY(${carPosition}vh)` }}
      />
    </div>
  );
};

export default Timeline;
