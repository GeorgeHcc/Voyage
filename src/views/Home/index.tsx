import React from "react";
import { Layout } from "antd";
import { StyledHome } from "@/views/Home/style/index";
const { Sider, Content } = Layout;
import { gray } from "@ant-design/colors";
import george from "@/assets/georgeh.jpg";
import ChatDesc from "./component/chatDesc";
import { UserAvatar } from "@/views/Home/style/index";
import ChatList from "@/views/Home/component/chatList";
const Home: React.FC = () => {
  return (
    <StyledHome>
      <Layout className="layout">
        <Sider className="nav-sider" width={70}>
          <UserAvatar size={42} src={george} />
        </Sider>
        {/* {gray[0]} */}
        <Layout>
          <Sider className="content-sider" width={350}>
            <ChatList />
          </Sider>
          <Content className="content">
            <ChatDesc />
          </Content>
        </Layout>
      </Layout>
    </StyledHome>
  );
};

export default Home;
