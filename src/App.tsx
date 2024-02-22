// import { SpeakerLayou } from "./layout/speakerLayout";
// import { DefaultLayout } from "./layout/defaultLayout";
import routes from "./router";
import GlobalStyl from "./style/theme";
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { purple } from "@ant-design/colors";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${purple[4]}`,
            controlItemBgHover: purple[0],
            // fontSize: 12,
            // borderRadius: 15,
          },
        }}
      >
        <GlobalStyl themes="light" />

        {useRoutes(routes)}
      </ConfigProvider>
    </>
  );
}

export default App;
