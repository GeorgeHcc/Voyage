import React, { Suspense, useEffect, useState } from "react";
import { Layout, Avatar,Spin } from "antd";
import { purple } from "@ant-design/colors";
import styled from "styled-components";
import george from "@/assets/georgeh.jpg";
import ChatDesc from "@/views/messages/component/chatDesc";

import ChatList from "@/views/messages/component/chatList";
import V_Menu from "@/components/menu";
import { LayoutContext } from "@/views/messages/contexts";
const { Sider, Content } = Layout;
// const {Header}=Layout
const Messages: React.FC = () => {
  //@ts-ignore
  const [outSiderWidth, setOutSiderWidth] = useState(60);
  const [innerSiderWidth, setInnerSiderWidth] = useState(350);
  // const [spinning, setSpinning] = React.useState<boolean>(false);
 
  return (
    <LayoutContext.Provider value={{ outSiderWidth, innerSiderWidth }}>
      <Suspense fallback={"load"} >
      <Layout style={{ height: "100%" }}>
        {/* <Header>广告栏 or系统通告占位</Header> */}
        <Layout style={{ height: "100%" }}>
          {/* 菜单栏 */}
          <OutterSider width={outSiderWidth}>
            <UserAvatar src={george} size={40} />
            <V_Menu />
          </OutterSider>
          <Layout>
            {/* 内侧边栏 */}
            <InnerSider width={innerSiderWidth}>
              <ChatList />
            </InnerSider>
            {/* 内容区 */}
            <MainContent>
              <Resizer />
              <ChatDesc />
            </MainContent>
          </Layout>
        </Layout>
      </Layout>
      </Suspense>
    </LayoutContext.Provider>
  );
};

const OutterSider = styled(Sider)`
  width: ${(props) => props.width};
  height: 100%;
  background: ${purple[6]} !important;
  text-align: center;

  & li {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 20px 0;
`;
const InnerSider = styled(Sider)`
  background-color: transparent !important;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const MainContent = styled(Content)`
  display: flex;
  flex-direction: row;
`;

const Resizer = styled.div`
  display: inline-block !important;
  /* left: -5px; */
  /* background-color: red; */
  width: 2px;
  height: 100%;
  cursor: ew-resize;
`;
export default Messages;
