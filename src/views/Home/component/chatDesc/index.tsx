import React from "react";
import { Avatar, Empty, Tooltip } from "antd";
import george from "@/assets/georgeh.jpg";
import styled from "styled-components";
import { List } from "antd";
import { VideoCameraAddOutlined, UserAddOutlined } from "@ant-design/icons";
import { IconButton } from "@/components";
import { purple } from "@ant-design/colors";
import { css } from "styled-components";
const chat = [
  { isMe: true, data: "sjdashda" },
  { isMe: true, data: "sjdashddwkwlqa" },
  { isMe: false, data: "sjdashda" },
  { isMe: true, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  {
    isMe: false,
    data: "sjdashddkalllllllllllllllllllllllllllllllllllllllllldjkjfhjhjhjjhjhjh  da",
  },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
];
const ChatDesc: React.FC = () => {
  return (
    <div style={{ height: "100%", overflowY: "scroll", padding: 1 }}>
      {/* <div style={{ height: "100%", width: "100%", display: "flex" }}>
        <Empty description={false} imageStyle={{ height: 160 }} style={{ margin: "auto " }}></Empty>
      </div> */}
      <ChatHeader />
      <ChatContent>
        {chat.map((item) => {
          return <ChatRecord isMe={item.isMe} imgUrl={george} data={item.data}></ChatRecord>;
        })}
      </ChatContent>
    </div>
  );
};

export default ChatDesc;

const headerData = [
  {
    AvatarUrl: george,
    title: "George H",
  },
];

const ChatHeader: React.FC = () => {
  return (
    <HeaderWrap>
      <List
        dataSource={headerData}
        itemLayout="horizontal"
        renderItem={(item) => {
          return (
            <List.Item
              actions={[
                <Tooltip title={<span style={{ fontSize: 12 }}>视频通话</span>}>
                  <IconButton icon={<VideoCameraAddOutlined />} />
                </Tooltip>,
                <Tooltip title={<span style={{ fontSize: 12 }}>创建群组</span>}>
                  <IconButton icon={<UserAddOutlined />} />
                </Tooltip>,
              ]}
            >
              <List.Item.Meta avatar={<Avatar src={item.AvatarUrl}></Avatar>} title={item.title} />
            </List.Item>
          );
        }}
      ></List>
    </HeaderWrap>
    // </ConfigProvider>
  );
};

function splitStringIntoArray(str: string, chunkSize: number) {
  const array = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    // Ensure we don't go beyond the string length
    const end = Math.min(i + chunkSize, str.length);
    const chunk = str.substring(i, end);
    array.push(chunk);
  }
  return array;
}
type ChatRecordProps = { data: string; imgUrl: string; isMe?: boolean };

const ChatRecord: React.FC<ChatRecordProps> = (props) => {
  return (
    <RecordItem isMe={props.isMe}>
      <ChatUserAvatar src={props.imgUrl}></ChatUserAvatar>
      <div className="chat-bubble">
        {splitStringIntoArray(props.data, 30).map((item) => (
          <p className="chat-bubble-content">{item}</p>
        ))}
      </div>
    </RecordItem>
  );
};

type P = Pick<ChatRecordProps, "isMe">;

const ChatUserAvatar = styled(Avatar)`
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
`;

const HeaderWrap = styled.div`
  border-bottom: 1px solid #c5c5c5;
  padding: 1px 20px;
  position: fixed;
  top: 0;
  width: calc(100% - 420px);
  z-index: 999;
  opacity: 1;
  height: 50px;
  background-color: #fff;
`;
const ChatContent = styled.div`
  z-index: 10;
  height: cacl(100% - 100px);
  margin-top: 70px;
`;
const RecordItem = styled.div<P>`
  /* width: 100%; */

  margin: 20px;
  display: flex;
  ${(p) =>
    p.isMe
      ? css`
          flex-direction: row-reverse;
        `
      : ""}

  & .chat-bubble {
    display: inline-block;
    max-width: 50%;
    position: relative;
    padding: 10px;
    border-radius: 6px;
    margin: 10px;
    ${(p) =>
      !p.isMe
        ? css`
            background-color: white;
          `
        : css`
            background-color: ${purple[3]};
          `}

    &::before {
      content: "";
      position: absolute;
      left: ${(p) => (p.isMe ? "none;" : "-6px;")};
      right: ${(p) => (p.isMe ? "-6px;" : "none;")};
      top: 10px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-width: 7px;
      border-left: ${(p) => (p.isMe ? `7px solid ${purple[3]};` : "none;")};
      border-right: ${(p) => (p.isMe ? "none;" : `7px solid #fff;`)};
      /* ${(p) =>
        p.isMe
          ? css`
              border-left: 7px solid ${purple[3]};
              right: -6px;
            `
          : css`
             left: 6px;
              border-right: 7px solid #fff};
            `} */
    }
    &-content {
      margin: 0px;
    }
  }
`;
