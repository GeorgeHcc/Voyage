import styled from "styled-components";
import { purple } from "@ant-design/colors";
import { Avatar } from "antd";

export const UserAvatar = styled(Avatar)`
  margin-top: 20px;
  display: block;
  border: 2px solid white;
`;
export const StyledHome = styled.div`
  height: 100%;
  & .layout {
    height: 100%;
  }
  & .nav-sider {
    width: 20px;
    max-width: 50px;
    min-width: 20px;
    height: 100%;
    background-color: #722ed1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .content-sider {
    /* background-color: ${purple[0]}; */
    background-color: #ffffff;
    height: 100%;
    /* overflow-y: scroll; */
    /* padding: 0 5px; */
  }
`;
