import React from "react";
import { DefaultLayout } from "@/layout/defaultLayout";
import Video from "./component/video";
import BottomToolBar from "./component/bottomToolBar";
const Meeting: React.FC = () => {
  return (
    <DefaultLayout
      footer={<BottomToolBar/>}
      content={<Video width={600} height={400}></Video>}
    ></DefaultLayout>
  );
};

export default Meeting;
