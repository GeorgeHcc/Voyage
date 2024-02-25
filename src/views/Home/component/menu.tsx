import React from "react";
import { ConfigProvider,Menu } from "antd";
import type { MenuProps } from "antd";
import { purple } from "@ant-design/colors";
import { VideoCameraFilled, MessageFilled, SettingFilled } from "@ant-design/icons";
import { ContactListFilled } from "@/assets/icons";

type MenuItem = Required<MenuProps>["items"][number];

function genItem(title: React.ReactNode, key: React.Key, icon?: React.ReactNode): MenuItem {
  return { key, icon, title } as MenuItem;
}
const items: MenuItem[] = [
  genItem("消息", "1", <MessageFilled />),
  genItem("视频会议", "2", <VideoCameraFilled />),
  genItem("通讯录", "3", <ContactListFilled />),
  genItem("设置", "4", <SettingFilled />),
];
const V_Menu: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBorderRadius: 0,
            iconSize: 20,
            itemHeight: 50,
            itemMarginInline: 0,
            itemMarginBlock: 0,
            itemPaddingInline: "",
            itemSelectedBg: purple[5], //菜单项选中态背景色
            itemHoverBg: "rgba(0, 0, 0, 0.06)", //菜单项悬浮态背景色
            itemSelectedColor: "#fff", //菜单项文字选中颜色
            itemHoverColor: purple[2], //"#fff", //菜单项文字悬浮颜色
            itemActiveBg: "",
            itemColor: "#fff", //"#c5c5c5",
          },
        },
      }}
    >
      <Menu
        items={items}
        mode="inline"
        defaultSelectedKeys={["1"]}
        // inlineCollapsed={true}
        style={{ height: "100%", backgroundColor: `${purple[6]}` }}
      ></Menu>
    </ConfigProvider>
  );
};

export default V_Menu;
