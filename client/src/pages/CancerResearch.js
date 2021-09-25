import styled from "styled-components";
import { KoreanMap } from "../koreaMap";
import { CancerBar } from "../cancerChart";
import { Pie } from "../cancerChart";
import { style } from "d3";

const CancerResearch = () => {
  return (
    <PageWrapper>
      <Container>
        <RightWrapper>
          <RightUpper>
            <KoreanMap />
          </RightUpper>
          <RightBottom>
            <Pie />
          </RightBottom>
        </RightWrapper>
        <LeftWrapper>
          <LeftContent>
            <CancerBar />
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
  border-radius: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const RightBottom = styled.div`
  height: 50%;
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
