import React, { useState, useEffect } from "react";
import { json } from "d3";
import { feature } from "topojson";

const jsonUrl =
  "https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-topo-simple.json";

const geoColumn = "skorea_provinces_2018_geo";

export const useMapData = () => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      console.log("topo", topology);

      setData({
        land: feature(topology, topology.objects[geoColumn]),
      });
    });
  }, []);

  return data;
};
