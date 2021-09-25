export const Slice = ({ piedata, width, height, colors, arcRad, tooltip }) => {
  return (
    <>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {piedata.map((d) => {
          return (
            <>
              {" "}
              <path
                fill={colors(d)}
                d={arcRad(d)}
                onMouseOver={(e) => {
                  tooltip.current.style.visibility = "visible";
                }}
                onMouseMove={(e) => {
                  tooltip.current.style.top = `${e.pageY - 50}px`;
                  tooltip.current.style.left = `${e.pageX - 50}px`;
                  tooltip.current.innerHTML = `${d.data.region}`;
                }}
                onMouseLeave={(e) => {
                  tooltip.current.style.visibility = "hidden";
                }}
              />
            </>
          );
        })}
      </g>
    </>
  );
};
