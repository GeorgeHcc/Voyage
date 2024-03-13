// import { SpeakerLayou } from "./layout/speakerLayout";
// import { DefaultLayout } from "./layout/defaultLayout";
import routes from "../router";
// import GlobalStyl from "./style/theme";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, GlobalToken, theme } from "antd";
import { purple } from "@ant-design/colors";
import MainLayout from "../layout/mainLayout";
import SocketProvider from "@/components/SocketProvider";
import styled from "styled-components";
const { useToken } = theme;
function App() {
  // const socket = io("http://localhost:5000");
  // socket.emit("chat", Date.now(), "111");
  const { token } = useToken();
  return (
    <SocketProvider>
      <ConfigProvider
        theme={{
          // algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: `${purple[4]}`,
            controlItemBgHover: `${purple[0]}`,
            colorBgSpotlight: `rgba(0, 0, 0, 0.75)`,
            controlOutlineWidth: 5,
          },
        }}
      >
        <MainLayout>{useRoutes(routes)}</MainLayout>
      </ConfigProvider>
    </SocketProvider>
  );
}

// const AppContainer = styled.div<{ token: GlobalToken }>`
//   color: ${(t) => t.token.colorText};
//   background-color: ${(t) => t.token.colorBgContainer};
// `;
export default App;
