import { Layout, GlobalToken, theme } from "antd";
import styled from "styled-components";
import React, { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MainLayout from "@/layout/mainLayout";
const { Sider, Content } = Layout;

const { useToken } = theme;
const settingOptions: { label: string; path: string }[] = [
  { label: "账户设置", path: "/setting/account" },
  { label: "系统设置", path: "/setting/system" },
  { label: "其他设置", path: "/setting/other" },
];
const Setting: React.FC = () => {
  const [selectItem, setSelectedItem] = useState<string | number>(0);
  const { token } = useToken();

  return (
    <Suspense fallback={"load"}>
      <MainLayout>
        <Container token={token}>
          <InnerSider width={300}>
            <ul className="setting-options">
              {settingOptions.map((item, index) => (
                <NavLink to={item.path}>
                  <li
                    key={item.path}
                    className={`setting-item ${index === selectItem && "selected"}`}
                    onClick={() => {
                      setSelectedItem(index);
                    }}
                  >
                    <div>{item.label}</div>
                  </li>
                </NavLink>
              ))}
            </ul>
          </InnerSider>
          <Content className="content">
            <Resizer />
            {/* <Flex> */}
            <Outlet />
            {/* </Flex> */}
          </Content>
        </Container>
      </MainLayout>
    </Suspense>
  );
};

const Container = styled(Layout)<{ token: GlobalToken }>`
  & .setting-options {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style-type: none;
    /* background-color: ${(t) => t.token.colorBgLayout}; */
    /* color: ${(t) => t.token.colorTextHeading}; */
    background-color: ${(t) => t.token.colorBgContainer};
    & .setting-item {
      width: 100%;
      height: 50px;
      padding: 0px 10px;
      display: flex;
      align-items: center;
      /* border-radius: 8px; */
      & > div {
        color: ${(t) => t.token.colorTextHeading};
      }
      /* border:1px solid red; */
      &:hover {
        background-color: ${(t) => t.token.colorBgTextHover};
      }
      &.selected {
        background-color: ${(t) => t.token.colorBgTextActive};
      }
    }
  }
  & .content {
    display: flex;
    flex-direction: row;
    color: ${(t) => t.token.colorTextHeading};
    background-color: ${(t) => t.token.colorBgLayout};
  }
`;
const InnerSider = styled(Sider)`
  background-color: transparent !important;
  height: 100%;
`;


const Resizer = styled.div`
  display: inline-block !important;
  width: 2px;
  height: 100%;
  cursor: ew-resize;
`;
export default React.memo(Setting);
