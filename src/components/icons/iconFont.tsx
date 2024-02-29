import { createFromIconfontCN } from "@ant-design/icons";
const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/c/font_4432684_stbae185zqq.js"],
  extraCommonProps: {
    style: {
      fontSize: "20px",
    },
  },
});

export const ContactListFilled: React.FC = () => <IconFont type="icon-jishitongxun-tongxunlu" />;
export const TeamFilled: React.FC = () => <IconFont type="icon-tubiao-" />;
export const EmojiOutlined: React.FC = () => <IconFont type="icon-emoji" />;
