// import { SpeakerLayou } from "./layout/speakerLayout";
// import { DefaultLayout } from "./layout/defaultLayout";
import routes from "./router";
import GlobalStyl from "./style/theme";
import { useRoutes } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyl themes="light" />

     {useRoutes(routes)}
    </>
  );
}

export default App;
