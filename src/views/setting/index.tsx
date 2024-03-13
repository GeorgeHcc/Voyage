import React, { Suspense } from "react";
import { Switch } from "antd";

import { MoonFilled, SunFilled } from "@ant-design/icons";
function Setting() {
  return (
    <Suspense fallback="loading">
      <div>
        夜间模式：
        <Switch checkedChildren={<MoonFilled />} unCheckedChildren={<SunFilled />} />
      </div>

     
    </Suspense>
  );
}

export default Setting;
