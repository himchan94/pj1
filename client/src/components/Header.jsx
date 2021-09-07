import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo>Himchan Hospital</Logo>
          <RightWrapper>
            <IconWrapper>
              <NotificationsNone />
            </IconWrapper>

            <IconWrapper>
              <Language />
            </IconWrapper>

            <IconWrapper>
              <Settings />
            </IconWrapper>
            <Avatar />
          </RightWrapper>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding-right: 10px;
  position: relative;
  cursor: pointer;
  color: #555;
`;

const Avatar = styled.div`
  background-image: url("https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg");
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
