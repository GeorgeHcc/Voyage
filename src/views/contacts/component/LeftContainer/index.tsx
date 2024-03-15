import React, { useState } from "react";
import { Button, Input, Dropdown, theme, message ,Modal} from "antd";
import type { GlobalToken, MenuProps } from "antd";
import styled from "styled-components";
import ChatList from "./ChatList";
import { ChatListItemData } from "./ChatList";
import george from "@/assets/georgeh.jpg";
import {
  SearchOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
  VideoCameraAddOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  { key: "1", label: "添加联系人", icon: <UserAddOutlined /> },
  { key: "2", label: "创建群组", icon: <UsergroupAddOutlined /> },
  { key: "3", label: "加入会议", icon: <VideoCameraAddOutlined /> },
];
const { useToken } = theme;

const data: ChatListItemData[] = Array.from({ length: 30 }, (_, i) => ({
  userId: i,
  userAvatar: george,
  title: `Geroge H ${i + 1}`,
  lastMsg: "你好啊",
  lastTime: "昨天",
  userStatus: "在线",
}));

export type LeftContainerProps = {
  userSelectedChange: (userData: any) => void;
};

const LeftContainer: React.FC<LeftContainerProps> = ({ userSelectedChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useToken();
  const handleClick: MenuProps["onClick"] = ({ key }) => {
    setIsModalOpen(true);
    message.info(`Click on item ${key}`);
  };
  return (
    <Container token={token}>
      <div className="header">
        <Input
          placeholder="搜索"
          maxLength={250}
          minLength={250}
          prefix={<SearchOutlined />}
          suffix={"(ctrl+k)"}
          onChange={(e) => console.log(e.target.value)}
        />
       
      </div>
      <ChatList
        data={data}
        onSelected={(seletedVal: ChatListItemData) => userSelectedChange(seletedVal)}
      ></ChatList>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // closeIcon={false}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Container>
  );
};

const Container = styled.div<{ token: GlobalToken }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${(t) => t.token.colorText};
  background-color: ${(t) => t.token.colorBgContainer};
  & .header {
    padding: 15px 10px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    & .ant-input-suffix {
      color: ${(t) => t.token.colorTextDescription};
    }
  }
`;

export default LeftContainer;
