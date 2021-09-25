import { scaleBand, extent, scaleLog, pie, arc, scaleOrdinal } from "d3";
import { useRef } from "react";
import styled from "styled-components";
import { useCancerData } from "../api/useCancerData";

import React, { useEffect } from "react";

import { YAxis } from "./YAxis";
import { XAxis } from "./XAxis";
import { Marks } from "./Marks";
import { Slice } from "./Slice.js";

const width = 100;
const height = 100;
const margin = { top: 3, right: 2, bottom: 6.5, left: 5 };

export const CancerBar = () => {
  const data = useCancerData();
  const tooltip = useRef();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  // useEffect(() => {}, []);

  const xValue = (d) => d.region;
  const yFemale = (d) => d.female;
  const yMale = (d) => d.male;
  const yTotal = (d) => d.total;

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, width - margin.left])
    .paddingInner(0.2)
    .paddingOuter(0.5);

  const yScale = scaleLog()
    .domain(extent(data, yTotal))
    .range([height - 6.5, 0])
    .nice();

  return (
    <>
      <Tooltip ref={tooltip} />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <XAxis xScale={xScale} height={height} xValue={xValue} />
          <YAxis yScale={yScale} width={width} height={height} />
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            yTotal={yTotal}
            height={height}
            xValue={xValue}
            tooltip={tooltip}
          />
        </g>
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

export const Pie = () => {
  const tooltip = useRef();
  const data = [
    { region: "경기", number: 1000 },
    { region: "경기", number: 500 },
  ];

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const piedata = pie().value((d) => d.number)(data);
  const arcRad = arc().innerRadius(0).outerRadius(50);
  const colors = scaleOrdinal(["#156B90", "#9A3E25"]);

  console.log(piedata);

  return (
    <>
      <Tooltip ref={tooltip} />
      <div className="container">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <Slice
            piedata={piedata}
            width={width}
            height={height}
            colors={colors}
            arcRad={arcRad}
            tooltip={tooltip}
          />
        </svg>
      </div>
    </>
  );
};
