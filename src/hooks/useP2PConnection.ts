
import { useEffect } from "react";

export interface P2PConnectionOptions {
  constraints?: MediaStreamConstraints;
  mountDom?: React.RefObject<HTMLMediaElement> | null;
}
const defaultOptions: P2PConnectionOptions = {
  constraints: {
    audio: true,
    video: true,
  },
  mountDom: null,
};
export interface IResult {
  stream?: MediaStream;
  devices: MediaDeviceInfo[];
}
export default function useP2PConnection(
  props: P2PConnectionOptions = defaultOptions,
  errorCallBack: (e: Error) => void
) {
  const result: IResult = {
    stream: undefined,
    devices: [],
  };

  const initLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia(props.constraints)
      .then((stream) => {
        if (props.mountDom) {
          props.mountDom.current!.srcObject = stream;
          props.mountDom.current!.onloadedmetadata = () => {
            props.mountDom!.current!.play();
          };
        }
        result.stream = stream;
        navigator.mediaDevices.enumerateDevices().then((devices) => (result.devices = devices));
      })
      .catch((e) => {
        errorCallBack(e);
      });
  };

  useEffect(() => {
    initLocalStream();
  });
  return result;
}
