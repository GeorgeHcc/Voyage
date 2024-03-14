// import { SpeakerLayou } from "./layout/speakerLayout";
// import { DefaultLayout } from "./layout/defaultLayout";
import routes from "../router";
// import GlobalStyl from "./style/theme";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { purple } from "@ant-design/colors";
import MainLayout from "../layout/mainLayout";
import SocketProvider from "@/components/SocketProvider";
import useThemeStore from "@/store/modules/useThemeStore";

function App() {
  const curTheme = useThemeStore((state) => state.theme);

  const lastTheme = JSON.parse(localStorage.getItem("theme")!).state.theme;

  return (
    <SocketProvider>
      <ConfigProvider
        theme={{
          algorithm:
            lastTheme === "dark"
              ? theme.darkAlgorithm
              : curTheme === "dark"
              ? theme.darkAlgorithm
              : undefined,
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

export default App;
