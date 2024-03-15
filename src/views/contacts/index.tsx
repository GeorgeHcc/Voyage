import React, { Suspense, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import RightContainer from "./component/RightContainer";
import LeftContainer from "./component/LeftContainer";
import { ChatListItemData } from "./component/LeftContainer/ChatList";
const { Sider, Content } = Layout;
function Contacts() {
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
export default Contacts;

