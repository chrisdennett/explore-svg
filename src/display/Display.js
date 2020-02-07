import React from "react";
import styled from "styled-components";
import { Line } from "./Line";

const Display = ({ element }) => {
  return (
    <Container>
      <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
        <Line
          attributeSettings={element.settings}
          styleSettings={element.styleSettings}
        />
      </svg>
    </Container>
  );
};

export default Display;

const Container = styled.div`
  background: yellow;
  width: 100%;
  height: 100%;

  svg {
    background: white;
  }
`;
