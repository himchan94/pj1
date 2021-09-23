import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { useMapData } from "../api/useMapData.js";

import { Marks } from "./Marks";

const width = 960;
const height = 600;

export const KoreanMap = () => {
  const data = useMapData();
  const tooltip = useRef();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      <Tooltip ref={tooltip} />
      <svg viewBox="0 0 960 600">
        <Marks data={data} tooltip={tooltip} />
      </svg>
    </>
  );
};

const Tooltip = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: red;
  font-size: 1.5rem;
`;
