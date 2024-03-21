import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, theme, Badge } from "antd";
import type { MenuProps } from "antd";
import useMessageStore from "@/store/modules/messageStore";
// import useSocket from "@/hooks/useSocket";
// import getUserInfo from "@/utils/getUserInfo";
import formatTime from "@/utils/format";
// const { useToken } = theme;

export interface ChatListItemData {
  friendID: string;
  userStatus?: string;
  avatarImage?: string;
  remark?: string;
  nick_name?: string;
  title?: string;
  lastMsg?: string;
  lastTime: string;
  lastChatRecords?: [];
}
export interface ChatListProps {
  data: ChatListItemData;
  onSelected: (selectedVal: ChatListItemData) => void;
  currentSelect: string|null;
}

const items: MenuProps["items"] = [
  {
    label: "置顶",
    key: "1",
  },
  {
    label: "消息免打扰",
    key: "2",
  },
  {
    label: "标记为未读",
    key: "3",
  },
  {
    label: "删除消息",
    key: "4",
  },
];

const ChatListItem: React.FC<ChatListProps> = ({ data, onSelected, currentSelect }) => {
  // const { token } = useToken();
  console.log("data:", data);
  // const io = useSocket();
  // const [selectItem, setSelectedItem] = useState<string | number | null>(null); //当前选中的好友
  const [unRead, setUnRead] = useState(0);

  const currentMsg = useMessageStore((state) => state.messages);
  const consumeMessage = useMessageStore((state) => state.consumeMessage);

  // const [msg,setMsg]=useState(()=>currentMsg.get(data.friendID))
  // useEffect(() => {
  //   const currentChatData = JSON.parse(sessionStorage.getItem("current-chat-data")!);
  //   setSelectedItem(currentChatData?.friendID);
  // }, []);



  useEffect(() => {
    if (currentMsg.has(data.friendID)) {
      setUnRead(currentMsg.get(data.friendID)!.length);
    }
  }, [currentMsg, data.friendID]);

  //右键菜单选中事件
  const handleDropDownClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        setUnRead(1);
        break;
      case "4":
        break;
    }
  };






  return (
    <Dropdown
      menu={{ items, onClick: handleDropDownClick }}
      trigger={["contextMenu"]}
      key={data.friendID}
    >
      <li
        className={`list-item ${data.friendID === currentSelect && "selected"}`}
        key={data.friendID}
        onClick={() => {
          consumeMessage(data.friendID);
          // setSelectedItem(data.friendID);
          onSelected(data);
          setUnRead(0);
        }}
      >
        <div className="left">
          <Badge count={unRead} size="small">
            {data.avatarImage ? (
              <Avatar size={40} shape="square" src={data.avatarImage} />
            ) : (
              <Avatar size={40} shape="square">
                {data.nick_name}
              </Avatar>
            )}
          </Badge>

          <span className="chat-info">
            <p className="chat-title">{data.remark||data.nick_name}</p>
            <p className="chat-last-msg">{data.lastMsg}</p>
          </span>
        </div>
        <div className="right">
          <div className="chat-last-time">{formatTime(data.lastTime)}</div>
          <div className="other"></div>
        </div>
      </li>
    </Dropdown>

    // </ChatListItemContainer>
  );
};

export default React.memo(ChatListItem);
