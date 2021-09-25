import { useRef, useEffect } from "react";
import { select, axisBottom } from "d3";

export const XAxis = ({ xScale, height, xValue }) => {
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);
    const xAxis = axisBottom(xScale)
      .tickPadding(1)
      .tickSize(0.5)
      .tickSizeInner(1)
      .tickSizeOuter(0);
    // .tickFormat((tickValue) => tickValue);
    xAxisG.call(xAxis);
  }, []);
  return <g transform={`translate(0,${height - 6.5})`} ref={ref} />;
};
