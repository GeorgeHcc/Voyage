import React, { forwardRef, LegacyRef } from "react";
import VideoWrap from "../style/videoStyl";
import { Select } from "antd";
export interface IVideoProps {
  width: string | number;
  height: string | number;
  label?: "caller" | "callee";
  reverse?: boolean;
}

const Video = forwardRef((props: IVideoProps, ref: LegacyRef<HTMLVideoElement> | undefined) => {
  const { label, ...otherProps } = props;
  return (
    <VideoWrap {...otherProps} label={label}>
      <div className="video-mask">
    
      </div>
      <video ref={ref} {...otherProps}></video>
    </VideoWrap>
  );
});

export default Video;
