import React, { Suspense } from "react";
import { Switch } from "antd";
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';

import { FloatButton } from 'antd';
import { MoonFilled, SunFilled } from "@ant-design/icons";
import useThemeStore from "@/store/modules/useThemeStore";
function Setting() {
  const setTheme = useThemeStore((state) => state.setTheme);
  return (
    <Suspense fallback="loading">
      <div>
        夜间模式：
        <Switch
          checkedChildren={<MoonFilled />}
          unCheckedChildren={<SunFilled />}
          onChange={(checked) => {
            checked ? setTheme("dark") : setTheme("light");
          }}
        />
      </div>
      <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
    </Suspense>
  );
}

export default Setting;
