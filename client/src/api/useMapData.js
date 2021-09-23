import React, { useState, useEffect } from "react";
import { json } from "d3";
import { feature } from "topojson";

const jsonUrl =
  "https://gist.githubusercontent.com/himchan94/801fc9f88b1a86d4667c6a50f8205f2c/raw/5f993a5a59c8ca21074096560ae0076f30075297/SouthKoreaMap.json";

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
