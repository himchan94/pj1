import styled from "styled-components";

const ContentPage = ({ children }) => {
  return (
    <>
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};

export default ContentPage;

const PageWrapper = styled.div`
  flex: 3;
`;
