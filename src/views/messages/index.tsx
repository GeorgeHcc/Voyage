import React, { Suspense, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import { ChatListItemData } from "./LeftContainer/ChatList";

const { Sider, Content } = Layout;

const Messages: React.FC = () => {
  const sessionChatData = sessionStorage.getItem("current-chat-data")
    ? JSON.parse(sessionStorage.getItem("current-chat-data")!)
    : null;
  const [data, setData] = useState<ChatListItemData | null>(sessionChatData);

  //更新选中的好友聊天data并缓存到session，用于切换页面保活
  const setAndCacheData = (selectedVal: ChatListItemData) => {
    sessionStorage.setItem("current-chat-data", JSON.stringify(selectedVal));
    setData(selectedVal);
  };

  return (
    <Suspense fallback={"load"}>
      <Layout>
        <InnerSider width={300}>
          <LeftContainer
            userSelectedChange={(selectedVal: ChatListItemData) => setAndCacheData(selectedVal)}
          />
        </InnerSider>
        <MainContent>
          <Resizer />
          <RightContainer data={data} />
        </MainContent>
      </Layout>
    </Suspense>
  );
};

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
  width: 2px;
  height: 100%;
  cursor: ew-resize;
`;
export default React.memo(Messages);
