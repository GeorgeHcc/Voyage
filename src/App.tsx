// import { SpeakerLayou } from "./layout/speakerLayout";
// import { DefaultLayout } from "./layout/defaultLayout";
import routes from "./router";
// import GlobalStyl from "./style/theme";
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
            colorBgSpotlight: `rgba(0, 0, 0, 0.75)`,
            controlOutlineWidth:5
            // fontSize: 12,
            // borderRadius: 15,
          },
        }}
      >
     

        {useRoutes(routes)}
      </ConfigProvider>
    </>
  );
}

export default App;
