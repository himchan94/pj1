import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default Wrapper;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
