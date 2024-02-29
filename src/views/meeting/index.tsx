import React, { Suspense, useEffect, useRef } from "react";
import { DefaultLayout } from "@/layout/defaultLayout";
import Video from "./component/video";
import BottomToolBar from "./component/bottomToolBar";
import { AppDispatch, useAppSelector } from "@/redux";
import { removeConnection, addPeerConnection } from "@/redux/modules/peerConnetion";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { getLocalDevices } from "@/utils";
import useP2PConnection from "@/hooks/useP2PConnection";
import { message } from "antd";
const Meeting: React.FC = () => {
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

export default Meeting;
