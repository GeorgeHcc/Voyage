import { createGlobalStyle } from "styled-components";

// const themeStyl = css`
//   background-color: "var( --${theme}-panel-color)";

// `;
const GlobalStyl = createGlobalStyle<{ themes: "dark" | "light" }>`
:root{
    --dark-bg-color:#242424;
    --light-bg-color: #e0e3e8;
    --dark-panel-color:black;
    --light-panel-color:white;
}
body,html{
    width: 100vw;
    height: 100vh;
    margin: 0;
    color:${(props) =>
      props.themes === "dark" ? "var( --light-panel-color)" : "var( --dark-panel-color)"};
    background-color:${(props) => `var(--${props.themes}-bg-color)`};
}
`;

export default GlobalStyl;
