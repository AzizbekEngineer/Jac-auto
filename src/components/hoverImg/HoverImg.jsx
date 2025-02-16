import React from "react";
import styled from "styled-components";
import call from "../../assets/images/call.jpg";
import { FaPhoneVolume } from "react-icons/fa6";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";

const ImageWrapper = styled(animated.div)`
  display: inline-block;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px; /* Boshlang'ich rasm o'lchami */
  height: 50px;
`;

const HoverImage = () => {
  const [hovered, setHovered] = React.useState(false);

  const springRef = useSpringRef();
  const props = useSpring({
    ref: springRef,
    to: async (next) => {
      while (hovered) {
        await next({ transform: "scale(1.2)" });
        await next({ transform: "scale(1)" });
      }
    },
    from: { transform: "scale(1)" },
    config: { duration: 600 },
    reset: true,
  });

  useChain([springRef], [0]);

  return (
    <ImageWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
    >
      <FaPhoneVolume />
    </ImageWrapper>
  );
};

export default HoverImage;
