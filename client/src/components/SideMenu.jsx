import styled from "styled-components";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const SideMenu = () => {
  return (
    <>
      {" "}
      <SideWrapper>
        <SidebarTitle>DashBoard</SidebarTitle>
        <IconWrapper>
          <IconInnerWrapper>
            <IconMargin>
              <LineStyle />
            </IconMargin>
            Home
          </IconInnerWrapper>
          <IconInnerWrapper>
            <IconMargin>
              <Timeline />
            </IconMargin>
            Analytics
          </IconInnerWrapper>
          <IconInnerWrapper>
            <IconMargin>
              <TrendingUp />
            </IconMargin>
            Sales
          </IconInnerWrapper>
        </IconWrapper>
      </SideWrapper>
    </>
  );
};

export default SideMenu;

const SideWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const IconWrapper = styled.div`
  padding: 5px;
`;

const IconInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const IconMargin = styled.div`
  margin-right: 5px;
`;
