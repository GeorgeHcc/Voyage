import React from "react";
import { Layout } from "antd";
import { purple } from "@ant-design/colors";
import styled from "styled-components";
import george from "@/assets/georgeh.jpg";
import ChatDesc from "@/views/Home/component/chatDesc";
import { UserAvatar } from "@/views/Home/style/index";
import ChatList from "@/views/Home/component/chatList";
import V_Menu from "@/views/Home/component/menu";
import { LayoutContext } from "@/views/Home/contexts";
const { Header, Sider, Content } = Layout;
const Home: React.FC = () => {
  const [outSiderWidth, setOutSiderWidth] = React.useState(60);
  const [innerSiderWidth, setInnerSiderWidth] = React.useState(350);
  return (
    <LayoutContext.Provider value={{ outSiderWidth, innerSiderWidth }}>
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
export default Home;
