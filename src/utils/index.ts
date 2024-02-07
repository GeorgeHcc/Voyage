export const createLocalStream = async (constraints: MediaStreamConstraints) => {
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    return stream;
  });
};

export const getLocalDevices = async() => {
  let devices;
  navigator.mediaDevices.enumerateDevices().then((device) => {
    devices = device;
   
  });
  return devices;
};
