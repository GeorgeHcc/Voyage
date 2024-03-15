import React, { type ReactNode } from "react";
import { theme, GlobalToken } from "antd";
import styled from "styled-components";

const { useToken } = theme;
const GlobalContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useToken();
  return <InnerContainer token={token}>{children}</InnerContainer>;
};
const InnerContainer = styled.div<{ token: GlobalToken }>`
  width: 100%;
  height: 100%;

  color: ${(t) => t.token.colorTextHeading};
  background-color: ${(t) => t.token.colorBgContainer};
  & div {
    color: ${(t) => t.token.colorTextHeading};
    background-color: ${(t) => t.token.colorBgContainer};
  }
`;
export default GlobalContainer;
