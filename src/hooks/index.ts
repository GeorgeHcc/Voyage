import { RefObject, useEffect } from "react";


export const usePeerConnection = () => {
  const pc = new RTCPeerConnection();
};

const initLocalStream = async (constraints: MediaStreamConstraints) => {
  try {
    const localStream = await navigator.mediaDevices.getUserMedia(constraints);
    return localStream;
    //eslint-disable-next-line
  } catch (e: any) {
    throw new Error(e);
  }
};

export default function useLocalStream(constraints:MediaStreamConstraints,mountDom:React.RefObject<HTMLMediaElement>) {

    useEffect(()=>{

        initLocalStream(constraints).then(stream=>{
       
           mountDom.current!.srcObject=stream as MediaProvider
        }
    )
    },[constraints,mountDom])
}

/**
 * 创建点对点连接
 */
const useP2PConnection=()=>{

}

//创建多人会话连接
const useMultipleConnection=()=>{

}