import { geoPath, geoMercator, geoBounds, geoCentroid, geoDistance } from "d3";

const width = 960;
const height = 500;

const projection = geoMercator().translate([width / 2, height / 2]);
const path = geoPath(projection);

export const Marks = ({ data: { land } }) => {
  const bounds = geoBounds(land);
  const center = geoCentroid(land);

  const distance = geoDistance(bounds[0], bounds[1]);
  const scale = (height / distance / Math.sqrt(2)) * 1.5;

  projection.scale(scale).center(center);

  return (
    <g className="marks">
      {land.features.map((feature) => {
        return (
          <g>
            <path className="land" d={path(feature)}></path>
          </g>
        );
      })}
    </g>
  );
};
