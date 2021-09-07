import styled from "styled-components";

import SideMenu from "./SideMenu";

const Sidebar = () => {
  return (
    <>
      <SideWrapper>
        <SideMenu />
      </SideWrapper>
    </>
  );
};

export default Sidebar;

const SideWrapper = styled.div`
  height: calc(100vh-50px);
  flex: 1;
  background-color: rgb(251, 251, 255);
`;
