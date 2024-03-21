import routes from "../router";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { purple } from "@ant-design/colors";
import MainLayout from "../layout/mainLayout";
import useThemeStore from "@/store/modules/useThemeStore";
import { enableMapSet } from "immer";
enableMapSet();

function App() {

  const curTheme = useThemeStore((state) => state.theme);

  const lastTheme = JSON.parse(localStorage.getItem("theme")!).state.theme;

  return (
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
          // controlItemBgHover: `${purple[0]}`,
          colorBgSpotlight: `rgba(0, 0, 0, 0.75)`,
          controlOutlineWidth: 5,
        },
      }}
    >
      {useRoutes(routes)}
      {/* <MainLayout>{useRoutes(routes)}</MainLayout> */}
    </ConfigProvider>
  );
}

export default App;
