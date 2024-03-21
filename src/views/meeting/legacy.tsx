import React, { Suspense, useEffect, useRef } from "react";
import { DefaultLayout } from "@/layout/defaultLayout";
import Video from "./component/video";
import BottomToolBar from "./component/bottomToolBar";
import { AppDispatch, useAppSelector } from "@/redux";
import { removeConnection, addPeerConnection } from "@/redux/modules/peerConnetion";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { getLocalDevices } from "@/utils";
import styled from "styled-components";
import useP2PConnection from "@/hooks/useP2PConnection";
import { GlobalToken, message, theme, Button } from "antd";
import MainLayout from "@/layout/mainLayout";

const { useToken } = theme;

const Legacy: React.FC = () => {
  const { token } = useToken();
  const videoRef = useRef(null);
  const { video, audio } = useAppSelector((state) => {
    return state.accountReducer.meetingState;
  });

  console.log(video, audio);
  const [messageApi, contextHolder] = message.useMessage();
  const { devices } = useP2PConnection(
    {
      constraints: {
        audio: audio,
        video: video,
      },
      mountDom: videoRef,
    },
    (e) => {
      messageApi.open({
        type: "error",
        content: `${e}`,
      });
    }
  );
  console.log(devices);

  return (
    <>
      {contextHolder}
      <Suspense fallback="loading">
        <DefaultLayout
          header={<div style={{ height: "100%", backgroundColor: "white" }}>header</div>}
          footer={<BottomToolBar />}
          content={<Video width={"100%"} height={"100%"} ref={videoRef} reverse></Video>}
        ></DefaultLayout>
      </Suspense>
    </>
  );
};

export default Legacy;

const Container = styled.div<{ token: GlobalToken }>`
  display: flex;
  width: 100%;
  height: 100%;
  & .meeting-wrap {
    padding: 20px 105px;
    margin: auto;
    width: 550px;
    height: 450px;
    border-radius: 10px;
    box-shadow: ${(t) => ` ${t.token.boxShadowSecondary}`};
    color: ${(t) => t.token.colorTextHeading};
    background-color: ${(t) => t.token.colorBgContainer};
    & .content {
      display: flex;
      height: 100%;
      flex-direction: column;
      flex: 1;
      & .title {
        font-size: 2rem;
      }
      & .btn {
        margin-inline: 30px;
        margin-top: 20px;
      }
      & .gap {
        padding-inline: 30px;
        margin: 70px 0 20px;
        display: flex;
        &-line {
          flex: 1;
          height: 10px;
          border-bottom: 1px solid #a9a9a94e;
        }
      }
      & .some-info {
        margin: 0 auto;
      }
    }
  }
`;
