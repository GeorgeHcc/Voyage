import React from "react";
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { ILayoutProps, LayoutWrap } from "./defaultLayout";
export const SpeakerLayout: React.FC<ILayoutProps> = ({ header, content, footer, sider }) => {
  return (
    <LayoutWrap>
      <LayoutWrap>
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </LayoutWrap>
      <Sider>{sider}</Sider>
    </LayoutWrap>
  );
};
