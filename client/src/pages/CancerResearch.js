import { useState, useEffect } from "react";

import styled from "styled-components";
import { KoreanMap } from "../koreaMap";
import { CancerBar } from "../cancerChart";
import { Pie } from "../cancerChart";

import { useCancerData } from "../api/useCancerData";
import { useMapData } from "../api/useMapData.js";
import { useSexRatio } from "../api/useSexRatio.js";

const CancerResearch = () => {
  const [city, setCity] = useState("서울");

  const cancerdata = useCancerData();
  const mapdata = useMapData();
  const filteredDb = useSexRatio(cancerdata, city);

  return (
    <PageWrapper>
      <Container>
        <RightWrapper>
          <RightUpper>
            <KoreanMap mapdata={mapdata} city={city} setCity={setCity} />
          </RightUpper>
          <RightBottom>
            <Pie data={filteredDb} />
          </RightBottom>
        </RightWrapper>
        <LeftWrapper>
          <LeftContent>
            <CancerBar data={cancerdata} city={city} setCity={setCity} />
          </LeftContent>
        </LeftWrapper>
      </Container>
    </PageWrapper>
  );
};

export default CancerResearch;

const PageWrapper = styled.div`
  flex: 5;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightUpper = styled.div`
  height: 50%;
  /* flex: 1; */

  border-radius: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const RightBottom = styled.div`
  height: 50%;
  /* flex: 1; */
  /* flex-shrink: 2; */
  border-radius: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const LeftWrapper = styled.div`
  flex: 2;
  display: flex;
  /* overflow: hidden; */
`;

const LeftContent = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
