import React from "react";
import styled, { css } from "styled-components";
import { purple } from "@ant-design/colors";
import { Avatar, GlobalToken, theme } from "antd";
const { useToken } = theme;
type ChatRecordProps = {
  data: string;
  imgUrl: string;
  isMe: boolean;
};

function splitStringIntoArray(str: string, chunkSize: number) {
  const array = [];
  // const reg = /\\n/g;
  for (let i = 0; i < str.length; i += chunkSize) {
    // Ensure we don't go beyond the string length
    const end = Math.min(i + chunkSize, str.length);
    const chunk = str.substring(i, end);
    array.push(chunk);
  }
  return array;
}

const ChatRecord: React.FC<ChatRecordProps> = (props) => {
  const { token } = useToken();
  return (
    <RecordItem isme={props.isMe} token={token}>
      <ChatUserAvatar src={props.imgUrl} size={40}></ChatUserAvatar>
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

const ChatUserAvatar = styled(Avatar)`
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
`;

type P = { isme: boolean; token: GlobalToken };

const RecordItem = styled.div<P>`
  /* width: 100%; */
  background-color: ${(t) => t.token.colorBgLayout};
  color: ${(t) => t.token.colorTextHeading};
  margin: 20px;
  display: flex;
  ${(p) =>
    p.isme
      ? css`
          flex-direction: row-reverse;
        `
      : ""}

  & .chat-bubble {
    white-space: pre-wrap; //控制显示换行
    display: inline-block;
    max-width: 50%;
    position: relative;
    padding: 10px;
    border-radius: 6px;
    margin: 10px;

    ${(p) =>
      !p.isme
        ? `background-color:${p.token.colorBgElevated};`
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
      border-right: ${(p) => (p.isme ? "none;" : `7px solid ${p.token.colorBgElevated};`)};
    }
    &-content {
      margin: 0px;
      user-select: text;
      font-size: 16px;
    }
  }
`;

export default ChatRecord;
