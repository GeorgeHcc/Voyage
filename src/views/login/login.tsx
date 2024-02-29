import React from "react";
import {
  LockOutlined,
  UserOutlined,
  GithubFilled,
  WechatFilled,
  TikTokOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, theme, Avatar, Card, ConfigProvider, message } from "antd";
import styled from "styled-components";
import IconButton from "@/components/icons/iconButton";
import { loginApi } from "@/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: unknown) => {
    axios.post(loginApi, values).then((res) => {
      if (res.data.status) {
        message.success(`${res.data.msg} Hi,${res.data.user.nick_name}!`);
        navigate("/");
      } else {
        message.error(res.data.msg);
      }
    });
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Form: { verticalLabelPadding: 6 },
        },
      }}
    >
      <Container>
        <Card className="login-panel">
          <div className="logo">
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
          <div className="title">Sign in to Voyage</div>
          <div className="form-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
            >
              {/* 用户名 */}
              <Form.Item
                name="account"
                label="Account"
                className="login-form-account"
                rules={[{ required: true, message: "Please input username" }]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Account"
                />
              </Form.Item>
              {/* 密码 */}
              <Form.Item
                name="password"
                label="Password"
                className="login-form-password"
                rules={[{ required: true, message: "Please input your Password!" }]}
                // help={<span style={{fontSize:12}}>至少包含数字、字符</span>}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item className="login-remember">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                  forget password?
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Sign in
                </Button>
              </Form.Item>

              <div className="login-form-bottom">
                <span>
                  <IconButton icon={<GithubFilled />} />
                  <IconButton icon={<WechatFilled />} />
                  <IconButton icon={<TikTokOutlined />} />
                </span>
                <span className="login-form-rigster">
                  no account? <a href="">sign up</a>
                </span>
              </div>
            </Form>
          </div>
        </Card>
      </Container>
    </ConfigProvider>
  );
};

const Container = styled.body`
  color: black;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: black;
  & .login-panel {
    height: auto;
    margin-right: 100px;
    & .ant-card-body {
      padding-bottom: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & .form-container {
        min-width: 320px;
        max-width: 360px;
        & .login-form-account {
          margin-bottom: 16px;
        }
        & .login-form-password {
          margin-bottom: 6px;
        }
        & .login-form-button {
          width: 100%;
        }

        & .login-form-rigster {
          float: right;
        }

        & .login-form-forgot {
          font-size: 12px;
          float: right;
        }
        & .login-form-bottom {
          vertical-align: middle;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
      }
      & .title {
        font-size: 30px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Login;
