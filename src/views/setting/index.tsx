import React, { Suspense, useEffect, useState } from "react";
import { Switch, Flex } from "antd";

import { MoonFilled, SunFilled } from "@ant-design/icons";
import useThemeStore from "@/store/modules/useThemeStore";

import { ThemeType } from "@/store/modules/useThemeStore";
function Setting() {
  const setTheme = useThemeStore((state) => state.setTheme);
  const localTheme = JSON.parse(localStorage.getItem("theme") || "").state.theme;
  const [curentTheme, setCurrentTheme] = useState<ThemeType>(localTheme);

  useEffect(() => {
    setTheme(curentTheme);
  }, [curentTheme]);
  return (
    <Suspense fallback="loading">
      <Flex>
        <div>
          夜间模式：
          <Switch
            checked={curentTheme === "dark"}
            checkedChildren={<MoonFilled />}
            unCheckedChildren={<SunFilled />}
            onChange={(checked) => {
              checked ? setCurrentTheme("dark") : setCurrentTheme("light");
            }}
          />
        </div>
      </Flex>
    </Suspense>
  );
}

export default Setting;
