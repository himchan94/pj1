import styled from "styled-components";
import { KoreanMap } from "../koreaMap";
import { CancerBar } from "../cancerChart";
import { Pie } from "../cancerChart";
import { style } from "d3";

const CancerResearch = () => {
  return (
    <PageWrapper>
      <Upper>
        <MapWrapper>
          <KoreanMap />
          <Pie />
        </MapWrapper>
        <BarWrapper>
          <CancerBar />
        </BarWrapper>
      </Upper>
    </PageWrapper>
  );
};

export default CancerResearch;

const PageWrapper = styled.div`
  flex: 5;
  padding-right: 20px;
`;

const Upper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
`;

const MapWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const BarWrapper = styled.div`
  flex: 2;
`;
