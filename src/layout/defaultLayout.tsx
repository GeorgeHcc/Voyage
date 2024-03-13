import React, { ReactNode } from "react";

import { Layout } from "antd";
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

export interface ILayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  content?: ReactNode;
  sider?: ReactNode;
}
interface LayoutWrapProp {
  FlexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
}

export const LayoutWrap = styled(Layout)<LayoutWrapProp>`
  display: flex;
  flex-direction: ${(props) => (props.FlexDirection ? props.FlexDirection : "column")};
  width: 100%;
  height: 100%;
`;

export const DefaultLayout: React.FC<ILayoutProps> = ({ header, footer, content }) => {
  return (
    <>
      <LayoutWrap>
        <Header style={{ height: "50px" }}>{header}</Header>
        <Content style={{ flex: 1 }}>{content}</Content>
        <Footer style={{ padding: 0 }}>{footer}</Footer>
      </LayoutWrap>
    </>
  );
};


