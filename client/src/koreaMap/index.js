import React, { useRef } from "react";
import styled from "styled-components";

import { Marks } from "./Marks";

export const KoreanMap = ({ mapdata, setCity, city }) => {
  const tooltip = useRef();

  if (!mapdata) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      <h1>{city}</h1>
      <Tooltip ref={tooltip} />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        perserveaspectratio="none"
      >
        <Marks
          mapdata={mapdata}
          tooltip={tooltip}
          setCity={setCity}
          city={city}
        />
      </svg>
    </>
  );
};

const Tooltip = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: red;
  font-size: 1rem;
`;
