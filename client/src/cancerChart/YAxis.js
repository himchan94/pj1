import { useRef, useEffect } from "react";
import { select, axisLeft } from "d3";

export const YAxis = ({ yScale, width, height }) => {
  const ref = useRef();
  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(yScale)
      .tickSize(-width)
      .tickPadding(10)
      .ticks(10, "~m");

    //.tickFormat((tickValue) => tickValue);
    yAxisG.call(yAxis);
  }, []);
  return <g ref={ref} />;
};
