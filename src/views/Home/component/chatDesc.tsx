import React, { useContext, useState } from "react";
import { Avatar, Empty, Layout, Tooltip, Input, Button, Alert } from "antd";
import george from "@/assets/georgeh.jpg";
import styled from "styled-components";
import { List } from "antd";
import { VideoCameraAddOutlined, UserAddOutlined, SendOutlined } from "@ant-design/icons";
import { IconButton } from "@/components";
import { purple } from "@ant-design/colors";
import { css } from "styled-components";
import { LayoutContext } from "@/views/Home/contexts";
import { EmojiOutlined } from "@/assets/icons";
const { Content, Footer } = Layout;
const { TextArea } = Input;
type ChatMsgType = {
  isMe: boolean;
  data: string;
};
const chat = [
  { isMe: true, data: `\n \n 11111111111111` },
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
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
  { isMe: false, data: "sjdashda" },
];
export default function ChatDesc() {
  const [chatMessages, setChatMessages] = useState<ChatMsgType[]>(chat);
  const [msgValue, setMsgValue] = useState<string>("");
  function sendMessage(msg: string) {
    if (msg.trim().length > 0) {
      const newMsgs = [...chatMessages, { data: msgValue!, isMe: true }];
      setChatMessages(newMsgs);
      setMsgValue("");
    } else {
      alert("!!!");
      setMsgValue("");
    }
  }
  return (
    <>
      <div style={{ width: "100%", height: "100%", display: "inline-block" }}>
        {/* <div style={{ height: "100%", width: "100%", display: "flex" }}>
        <Empty description={false} imageStyle={{ height: 160 }} style={{ margin: "auto " }}></Empty>
      </div> */}
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ height: "60px", width: "100%", flexShrink: 0 }}></div>
          <ContentHeader />
          <Layout>
            <ChatContent>
              <div>
                {chatMessages.map((item, index) => {
                  return (
                    <ChatRecord
                      key={`${index}`}
                      isMe={item.isMe}
                      imgUrl={george}
                      data={item.data}
                    ></ChatRecord>
                  );
                })}
              </div>
            </ChatContent>

            <SendMessageBar>
              <Emoji />
              <TextArea
                allowClear
                placeholder="发送给George"
                value={msgValue}
                autoSize={{ minRows: 1, maxRows: 4 }}
                onChange={(e) => {
                  setMsgValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    return sendMessage(msgValue!);
                  }
                }}
              />
              {/* <SendOutlined twoToneColor={purple[5]} /> */}
              <Button
                type="primary"
                icon={<SendOutlined />}
                disabled={msgValue.length === 0}
                onClick={() => sendMessage(msgValue!)}
              >
                发送
              </Button>
            </SendMessageBar>
          </Layout>
        </div>
      </div>
    </>
  );
}

const headerData = [
  {
    AvatarUrl: george,
    title: "George H",
  },
];

const ContentHeader: React.FC = () => {
  const { innerSiderWidth, outSiderWidth } = useContext(LayoutContext);

  return (
    <ContentHeaderWrap innersiderwidth={innerSiderWidth} outsiderwidth={outSiderWidth}>
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
    </ContentHeaderWrap>
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
type ChatRecordProps = { data: string; imgUrl: string; isMe: boolean };

const ChatRecord: React.FC<ChatRecordProps> = (props) => {
  return (
    <RecordItem isme={props.isMe}>
      <ChatUserAvatar src={props.imgUrl}></ChatUserAvatar>
      <div className="chat-bubble">
        {splitStringIntoArray(props.data, 30).map((item, key) => (
          <p key={key} className="chat-bubble-content">
            {item}
          </p>
        ))}
      </div>
    </RecordItem>
  );
};

const SendMessageBar = styled(Footer)`
  background-color: #fff;
  display: flex;
  gap: 25px;
  align-items: center;
  padding: 20px 10px;
  & > span.anticon:first-child {
    cursor: pointer;
    color: ${purple[5]} !important;
    font-size: 25px !important;
    transition: all 0.5s ease;
    &:hover {
      transform: rotate(180deg);
    }
  }
`;
const Emoji = styled(EmojiOutlined)`
  font-size: 25;
  cursor: pointer;
  color: yellow;
`;

type P = { isme: boolean };

const ChatUserAvatar = styled(Avatar)`
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
`;

type headerWrap = {
  innersiderwidth: number;
  outsiderwidth: number;
};
const ContentHeaderWrap = styled.div<headerWrap>`
  /* border-bottom: 1px solid #c5c5c5; */
  padding: 1px 20px;
  position: fixed;
  width: calc(100% - ${(props) => `${props.innersiderwidth + props.outsiderwidth}px`});
  z-index: 99;
  opacity: 1;
  height: 60px;
  background-color: #fff;
`;
const ChatContent = styled(Content)`
  z-index: 10;
  overflow-y: scroll;
  /* height: cacl(100% - 100px); */
  /* margin-top: 70px; */
  flex-grow: 1;
`;
const RecordItem = styled.div<P>`
  /* width: 100%; */

  margin: 20px;
  display: flex;
  ${(p) =>
    p.isme
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
      !p.isme
        ? css`
            background-color: white;
          `
        : css`
            background-color: ${purple[3]};
          `}

    &::before {
      content: "";
      position: absolute;
      left: ${(p) => (p.isme ? "none;" : "-6px;")};
      right: ${(p) => (p.isme ? "-6px;" : "none;")};
      top: 10px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-width: 7px;
      border-left: ${(p) => (p.isme ? `7px solid ${purple[3]};` : "none;")};
      border-right: ${(p) => (p.isme ? "none;" : `7px solid #fff;`)};
    }
    &-content {
      margin: 0px;
      user-select: text;
    }
  }
`;
