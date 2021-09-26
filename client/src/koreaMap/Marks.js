import { geoPath, geoMercator, geoBounds, geoCentroid, geoDistance } from "d3";

const width = 100;
const height = 100;

const projection = geoMercator().translate([width / 2, height / 2]);
const path = geoPath(projection);

export const Marks = ({ mapdata: { land }, tooltip, setCity, city }) => {
  const bounds = geoBounds(land);
  const center = geoCentroid(land);
  const distance = geoDistance(bounds[0], bounds[1]);
  const scale = (height / distance / Math.sqrt(2)) * 1;

  projection.scale(scale).center(center);

  return (
    <>
      <g className="marks">
        {land.features.map((feature) => {
          return (
            <path
              className="land"
              d={path(feature)}
              onMouseOver={(e) => {
                tooltip.current.style.visibility = "visible";
              }}
              onMouseMove={(e) => {
                tooltip.current.style.top = `${e.pageY - 50}px`;
                tooltip.current.style.left = `${e.pageX - 50}px`;
                tooltip.current.innerHTML = `${feature.properties.name}`;
              }}
              onMouseLeave={(e) => {
                tooltip.current.style.visibility = "hidden";
              }}
              onClick={(e) => {
                setCity(feature.properties.name);
              }}
              fill={city === feature.properties.name ? "red" : "gainsboro"}
            />
          );
        })}
      </g>
    </>
  );
};
