export const Marks = ({
  data,
  xScale,
  yScale,
  yTotal,
  height,
  xValue,
  tooltip,
}) => {
  return data.map((d, idx) => {
    return (
      <g key={idx}>
        <rect
          className="mark-male"
          x={xScale(xValue(d))}
          y={yScale(yTotal(d))}
          width={xScale.bandwidth()}
          height={height - 65 - yScale(yTotal(d))}
          fill="#688BAB"
          onMouseOver={(e) => {
            tooltip.current.style.visibility = "visible";
          }}
          onMouseMove={(e) => {
            tooltip.current.style.top = `${e.pageY - 50}px`;
            tooltip.current.style.left = `${e.pageX - 50}px`;
            tooltip.current.innerHTML = `${d.total}명`;
          }}
          onMouseLeave={(e) => {
            tooltip.current.style.visibility = "hidden";
          }}
        />
      </g>
    );
  });
};
