import { ConfigProvider, Button } from "antd";
// import { purple } from "@ant-design/colors";
import type { ButtonProps } from "antd";
export const IconButton: React.FC<ButtonProps> = (props) => (
  <ConfigProvider
    theme={{
      components: {
        Button: {
          paddingBlock: 3,
          paddingBlockLG: 3,
          onlyIconSize: 18,
          onlyIconSizeLG: 20,
          //   textHoverBg: purple[1],
        },
      },
    }}
  >
    <Button type="text" {...props} />
  </ConfigProvider>
);
