import { scaleBand, extent, scaleLog } from "d3";
import { useRef } from "react";
import styled from "styled-components";
import { useCancerData } from "../api/useCancerData";

import React, { useEffect } from "react";
import * as d3 from "d3";

import { YAxis } from "./YAxis";
import { XAxis } from "./XAxis";
import { Marks } from "./Marks";

const width = 960;
const height = 700;
const margin = { top: 20, right: 20, bottom: 65, left: 80 };

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
    .range([height - 65, 0])
    .nice();

  return (
    <>
      <Tooltip ref={tooltip} />
      <svg viewBox="0 0 960 700">
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
  font-size: 1.5rem;
`;

const data = [
  { item: "A", count: 590 },
  { item: "B", count: 291 },
  { item: "C", count: 348 },
  { item: "D", count: 145 },
  { item: "E", count: 46 },
];

export const Pie = () => {
  const pieChart = useRef();

  useEffect(() => {
    // Get positions for each data object
    const piedata = d3.pie().value((d) => d.count)(data);
    // Define arcs for graphing
    const arc = d3.arc().innerRadius(0).outerRadius(200);

    const colors = d3.scaleOrdinal([
      "#ffa822",
      "#134e6f",
      "#ff6150",
      "#1ac0c6",
      "#dee0e6",
    ]);

    // Define the size and position of svg
    const svg = d3
      .select(pieChart.current)

      // .style('background-color','yellow')
      .append("g")
      .attr("transform", "translate(300,300)");

    // Add tooltip
    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "red");

    // Draw pie
    svg
      .append("g")
      .selectAll("path")
      .data(piedata)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "white")
      .on("mouseover", (e, d) => {
        console.log(e);
        console.log(d);

        tooldiv
          .style("visibility", "visible")
          .text(`${d.data.item}:` + `${d.data.count}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });
  });

  return (
    <div id="chartArea">
      <svg viewBox="0 0 960 760 " ref={pieChart}></svg>
    </div>
  );
};
