import React, { forwardRef, LegacyRef, useEffect, useRef } from "react";
import VideoWrap from "../style/videoStyl";
import { useAppSelector } from "@/redux";
export interface IVideoProps {
  width: string | number;
  height: string | number;
  label?: "caller" | "callee";
  reverse?: boolean;
}

const Video = forwardRef((props: IVideoProps, ref: LegacyRef<HTMLVideoElement> | undefined) => {
  const { label, reverse, ...otherProps } = props;
  // reverse = reverse || false;
  const vref = useRef<HTMLDivElement>(null);
  // const offsetWidth=vref.current!.offsetWidth

  useEffect(() => {
    console.log(vref.current!.offsetWidth);
  });
  return (
    <VideoWrap {...otherProps} label={label} ref={vref} reverse={reverse}>
      <div className="video-mask"></div>
      <video ref={ref} ></video>
    </VideoWrap>
  );
});

export default Video;
