import { useState, useEffect } from "react";

export const useSexRatio = (data, city) => {
  const [db, setDb] = useState({
    male: { region: null, number: null },
    female: { region: null, number: null },
  });

  useEffect(() => {
    console.log("hi", data, city);
    if (data) {
      console.log("calced");
      const filtered = data.filter((d) => d.region === city);

      const arr1 = { region: filtered[0].region, number: filtered[0].male };
      const arr2 = { region: filtered[0].region, number: filtered[0].female };
      setDb({ ...db, male: arr1, female: arr2 });
    }
  }, [data]);

  return db;
};
