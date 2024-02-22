import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { createFromIconfontCN, UpOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useAppSelector } from "@/redux";
import account, { IMeetingState, changeMeetingState } from "@/redux/modules/account";
import { useDispatch } from "react-redux";

const audioInputGroup = {
  key: "1",
  type: "group",
  label: <span style={{ fontSize: "12px", userSelect: "none" }}>选择麦克风</span>,
  children: [] as ItemType[],
};
const audioOutputGroup = {
  key: "2",
  type: "group",
  label: <span style={{ fontSize: "12px", userSelect: "none" }}>选择扬声器</span>,
  children: [] as ItemType[],
};
const videoInputGroup = {
  key: "1",
  type: "group",
  label: <span style={{ fontSize: "12px" }}>选择摄像头</span>,
  children: [] as ItemType[],
};

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/c/font_4432684_ird6gctqwu.js"],
  extraCommonProps: {
    style: {
      fontSize: "24px",
    },
  },
});

const audioIconTypes = ["icon-icon-audio-off", "icon-audio-fill"];
const videoIconTypes = ["icon-video-off", "icon-video"];

const BottomToolBar: React.FC = React.memo(() => {
  const [isAudioOpen, setIsAudioOpen] = useState<0 | 1>(0);
  const [isVideoOpen, setIsVideoOpen] = useState<0 | 1>(1);
  const [audioDevice, setAudioDevice] = useState<MenuProps["items"]>([]);
  const [videoDevice, setVideoDevice] = useState<MenuProps["items"]>([]);

  const dispatch = useDispatch();

  function changeMediaState(mediaType: "audio" | "video") {
    switch (mediaType) {
      case "audio":
        setIsAudioOpen(isAudioOpen === 0 ? 1 : 0);
        // queueMicrotask(()=>{
        //   dispatch(changeMeetingState({ audio: Boolean(isAudioOpen), video: Boolean(isVideoOpen) }));
        // })
        break;
      case "video":
        setIsVideoOpen(isVideoOpen === 0 ? 1 : 0);

        break;
      default:
    }
    queueMicrotask(() => {
      dispatch(changeMeetingState({ audio: Boolean(isAudioOpen), video: Boolean(isVideoOpen) }));
    });
  }

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device: MediaDeviceInfo) => {
        const item = { key: device.deviceId, label: device.label };
        device.kind === "audioinput"
          ? audioInputGroup.children.push({ ...item, key: `1-${device.deviceId}` })
          : device.kind === "audiooutput"
          ? audioOutputGroup.children.push({ ...item, key: `2-${device.deviceId}` })
          : videoInputGroup.children.push(item);
      });

      setAudioDevice([audioInputGroup, audioOutputGroup]);
      setVideoDevice([videoInputGroup]);
    });
  }, []);

  return (
    <ToolBarWrap>
      <div className="item left">
        <div className="switch" onClick={() => changeMediaState("audio")}>
          <IconFont type={audioIconTypes[isAudioOpen]} />
        </div>
        <Dropdown
          menu={{ items: audioDevice, selectable: true }}
          trigger={["click"]}
          placement="top"
        >
          <div className="switch" style={{ padding: "10px 0" }}>
            <UpOutlined style={{ fontSize: "10px" }} />
          </div>
        </Dropdown>
      </div>

      <div className="item left">
        <div className="switch" onClick={() => changeMediaState("video")}>
          <IconFont type={videoIconTypes[isVideoOpen]} style={{ fontSize: "24px" }} />
        </div>
        <Dropdown
          menu={{ items: videoDevice, selectable: true }}  
          trigger={["click"]}
          placement="top"
        >
          <div className="switch" style={{ padding: "10px 0" }}>
            <UpOutlined style={{ fontSize: "10px" }} />
          </div>
        </Dropdown>
      </div>
      <div className="item center"></div>
      <div className="item center"></div>
      <div className="item center"></div>
      <div className="item right">
        <Button type="primary" danger>
          结束会议
        </Button>
      </div>
    </ToolBarWrap>
  );
});

export default BottomToolBar;

const ToolBarWrap = styled.div`
  padding: 10px 5px;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  & .item {
  }
  & .left,
  & .right {
    flex-shrink: 0;
    padding: 0 5px;
  }

  & .left {
    display: flex;
    margin: 0 auto;
  }
  & .left .switch {
    display: inline-block;
    padding: 8px 5px;
    border-radius: 5px;
    &:hover {
      background-color: #e8e8e8;
    }
  }
  & .center {
    flex: 1;
    min-width: 50px;
  }
`;
