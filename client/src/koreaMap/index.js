import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { useMapData } from "../api/useMapData.js";

import { Marks } from "./Marks";

const width = 500;
const height = 500;

export const KoreanMap = () => {
  const data = useMapData();
  const tooltip = useRef();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      <Tooltip ref={tooltip} />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Marks data={data} tooltip={tooltip} />
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
