import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/himchan94/d6578bbd50155664c2b070fa5ece38aa/raw/c20e0762c34f6a7eaa2ce82e39b84ba2cb469635/cancer.csv";

export const useCancerData = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    d["male"] = +d["male"];
    d["female"] = +d["female"];
    d["total"] = d["male"] + d["female"];
    return d;
  };

  if (data) console.log(data);

  useEffect(() => {
    csv(csvUrl, row).then((d) => {
      const sorted = d.sort((a, b) => b.total - a.total);
      setData(sorted);
    });
  }, []);

  return data;
};
