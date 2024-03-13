import React, { Suspense, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import george from "@/assets/georgeh.jpg";
import RightContainer from "./component/RightContainer";
import LeftContainer from "./component/LeftContainer";
import { ChatListItemData } from "./component/LeftContainer/Chat_List";
const { Sider, Content } = Layout;
const Messages: React.FC = () => {
  // const contentData: RightContainerProps = {
  //   receiverId: "user001",
  //   receiverAvatarUrl: george,
  //   receiverName: "George H",
  //   reciverStatus: "在线",
  // };
  const [data, setData] = useState<ChatListItemData | null>(null);
  return (
    <Suspense fallback={"load"}>
      <Layout>
        <InnerSider width={350}>
          <LeftContainer
            userSelectedChange={(selectedVal: ChatListItemData) => setData(selectedVal)}
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
export default Messages;
