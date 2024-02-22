import styled from "styled-components";
import { IVideoProps } from "../component/video";

// interface IVideoWrap extends IVideoProps{
//     children:ReactNode
// }

const VideoWrap = styled.div<IVideoProps>`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  & .video-mask {
    position: absolute;
    z-index: 10;
    ${(props) => `width:${props.width};`}
    ${(props) => `height:${props.height};`}
    opacity:0
  }

  & video {
    position: absolute;
    z-index: 1;
    ${(props) => (props.reverse ? "transform:rotateY(180deg);" : "")}
    ${(props) => `width:${props.width};`}
    ${(props) => `height:${props.height};`}
    background-color:#1c1c1c;
  }

  & .msg-input {
  }
`;

export default VideoWrap;
