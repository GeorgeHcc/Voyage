import React, { useEffect } from "react";
import { DefaultLayout } from "@/layout/defaultLayout";
import Video from "./component/video";
import BottomToolBar from "./component/bottomToolBar";
import { AppDispatch, useAppSelector } from "@/redux";
import { removeConnection, addPeerConnection } from "@/redux/modules/peerConnetion";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { getLocalDevices } from "@/utils";

const Meeting: React.FC = () => {
  const dispatch = useDispatch();

  const pcBucket = useAppSelector((state) => {
    return state.peerConnetionReducer.peerConnectionBucket;
  });

  const pc = new RTCPeerConnection();

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(addPeerConnection({ userId: "1231", peerConnection: pc }));
  //   return () => {
  //     dispatch(removeConnection("1231"));
  //   };
  // });

  return (
    <DefaultLayout
      footer={<BottomToolBar />}
      content={<Video width={"100%"} height={"100%"}></Video>}
    ></DefaultLayout>
  );
};

export default Meeting;
