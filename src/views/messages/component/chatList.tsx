import React from "react";
import { Avatar, Button, List, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { Input } from "antd";
import styled from "styled-components";
import {
  SearchOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
  VideoCameraAddOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const data = Array.from({ length: 30 }, (_, i) => ({
  title: `Ant Design Title ${i + 1}`,
}));

const items: MenuProps["items"] = [
  { key: "1", label: "添加联系人",icon:<UserAddOutlined/> },
  { key: "2", label: "创建群组", icon: <UsergroupAddOutlined /> },
  { key: "3", label: "加入会议", icon: <VideoCameraAddOutlined /> },
];
const ChatList: React.FC = () => {
  const description =
    "Ant Design, a design language for background applications, is refined by Ant UED Team";

  return (
    <>
      <div style={{ height: 60 }}></div>
      <InnerSiderHeader>
        <div>
          <Input
            placeholder="搜索"
            width="250px"
            maxLength={60}
            style={{ minWidth: "250px" }}
            prefix={<SearchOutlined />}
          ></Input>
        </div>
        <Dropdown menu={{ items }}>
          <Button shape="circle" type="default">
            <PlusOutlined />
          </Button>
        </Dropdown>
      </InnerSiderHeader>

      <ChatMenuList
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              //@ts-ignore
              title={<a href="https://ant.design">{item.title}</a>}
              description={description.length > 30 ? description.slice(0, 40) + "..." : description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

const InnerSiderHeader = styled.div`
  position: fixed;
  /* margin-bottom: 5px; */
  padding: 10px 10px;
  z-index: 100;
  width: 350px;
  height: 60px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  & input {
    /* margin: 10px;
    width: 250px; */
  }
`;
const ChatMenuList = styled(List)`
  /* top: 60px; */
  background-color: #f9f9f9;
  /* height: calc(100% - 85px); */
  flex: 1;
  overflow-y: scroll;

  li:hover {
    background-color: #ececec;
  }
`;
export default ChatList;
