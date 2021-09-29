import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default Wrapper;

const PageWrapper = styled.div`
  width: 100w;
  display: flex;
  margin-top: 20px;
  max-height: calc(100vh - 70px);
`;
