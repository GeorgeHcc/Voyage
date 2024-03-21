import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";

function AccountSetting() {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <strong>基本信息设置</strong>
        <p>昵称</p>
        <p>性别</p>
        <p>出生日期</p>
        <p>邮箱</p>
        <p>职业</p>
        <p>兴趣标签</p>
        <p>选择头像</p>
      </section>

      <section>
        <strong>账号设置</strong>
        <p>设置手机号</p>
        <p>绑定其他三方账号</p>
        <p>更改邮箱</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("account-info");
            sessionStorage.removeItem("current-chat-data");
            startTransition(() => {
              navigate("/login");
            });
          }}
        >
          退出登录
        </p>
      </section>

      <section>
        <strong>安全设置</strong>

        <p>修改密码</p>
        <p>多重验证</p>
      </section>
    </div>
  );
}

export default AccountSetting;
