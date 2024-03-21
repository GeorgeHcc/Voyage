import React, { Suspense, useEffect, useState } from "react";
import { Layout, message } from "antd";
import styled from "styled-components";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import useMessageStore from "@/store/modules/messageStore";

import useSocket from "@/hooks/useSocket";
import { ReceivedMsg } from "./RightContainer";
import { ChatListItemData } from "./LeftContainer/ChatListItem";
import { useStore } from "zustand";
import MainLayout from "@/layout/mainLayout";
const { Sider, Content } = Layout;

const Messages: React.FC = () => {
  

  const [receivedMsg, setReceivedMsg] = useState<ReceivedMsg | null>();

  const messages = useMessageStore((state) => state.messages);
  const cacheMessage = useMessageStore((state) => state.cacheMessage);

 

  //监听消息
  useEffect(() => {
    message.info("1111111");
    console.log("currentMessages:", messages);
  }, [messages]);


  //传递给rightContainer中的数据，用于header的数据展示
  const [chatData, setChatData] = useState<ChatListItemData | null>();
  
  useEffect(() => {
    const sessionChatData = sessionStorage.getItem("current-chat-data")
      ? JSON.parse(sessionStorage.getItem("current-chat-data")!)
      : null;
    setChatData(sessionChatData);
  }, []);
  //更新选中的好友聊天data并缓存到session，用于切换页面保活
  const setAndCacheData = (selectedVal: ChatListItemData) => {
    sessionStorage.setItem("current-chat-data", JSON.stringify(selectedVal));
    if (receivedMsg && selectedVal.friendID !== receivedMsg!.from) {
      cacheMessage(receivedMsg);
    }
    setChatData(selectedVal);
  };

  return (
    <Suspense fallback={"load"}>
      <MainLayout>
      <Layout>
        <InnerSider width={300}>
          <LeftContainer
            userSelectedChange={(selectedVal: ChatListItemData) => setAndCacheData(selectedVal)}
          />
        </InnerSider>
        <MainContent>
          <Resizer />
          <RightContainer data={chatData} />
        </MainContent>
      </Layout>
      </MainLayout>
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
