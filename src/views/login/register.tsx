import React, { useState, startTransition, Suspense } from "react";

import { Button, Checkbox, Col, Form, Input, Row, Select, DatePicker, Card, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const toLogin = (timer: NodeJS.Timeout) => {
    startTransition(() => {
      clearTimeout(timer);
      navigate("/login");
    });
  };

  const key = "register-success";

  const successMessage = (delay: number) => {
    const t = setTimeout(() => {
      navigate("/login");
    }, delay * 1000);
    const timer = setInterval(() => {
      if (delay > 0) {
        messageApi.open({
          key,
          type: "loading",
          content: (
            <>
              <span
                style={{ marginInline: 5 }}
              >{`注册成功！即将在${delay}秒后自动跳转登录页`}</span>

              <Button type="primary" size="small" onClick={() => toLogin(t)}>
                立即登录
              </Button>
            </>
          ),
          duration: 1,
        });
      } else {
        clearInterval(timer);
      }
      delay--;
    }, 1000);
  };
  const navigate = useNavigate();

  const onFinish = (fieldsValue: any) => {
    setLoading(true);
    const values = {
      ...fieldsValue,
      birthday: fieldsValue["birthday"].format("YYYY-MM-DD"),
    };
    console.log("Received values of form: ", values);
    try {
      axios.post(`${import.meta.env.VITE_API_URL}/user/register`, values).then((res) => {
        if (res.data.status) {
          setLoading(false);
          successMessage(5);
         form.resetFields()
        } else {
          message.error(`${res.data.msg}`);
        }
      });
    } catch (e) {
      new Error(`${e}`);
      message.error(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  const prefixSelector = (
    <Form.Item name="phone_prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Suspense fallback={"loading"}>
      <>
        {contextHolder}
        <Card style={{ overflow: "scroll" }}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ["zhejiang", "hangzhou", "xihu"], prefix: "86" }}
            style={{ maxWidth: 600, height: "100%" }}
            scrollToFirstError
          >
            {/* 账号 */}
            <Form.Item
              name="account"
              label="设置账号ID"
              hasFeedback
              tooltip="设置唯一账号ID"
              validateDebounce={1000}
              rules={[
                {
                  required: true,
                  message: "Please input your account ID !",
                },

                {
                  validator(_, value: string) {
                    return new Promise((resolve, reject) => {
                      if (/\s/.test(value)) {
                        reject(new Error("不能包含空格"));
                      }
                      if (/^(?=.{3,20}$)[0-9a-zA-Z@_]+$/g.test(value)) {
                        axios
                          .get(`${import.meta.env.VITE_API_URL}/user/checkAccount/${value}`, {
                            timeout: 5000,
                          })
                          .then((res) => {
                            if (!res.data.status) {
                              reject(new Error(`${res.data.msg}`));
                            } else {
                              resolve(`${res.data.msg}`);
                            }
                          })
                          .catch((e) => {
                            new Error(e);
                          });
                      } else {
                        reject(new Error("无效的字符！"));
                      }
                    });
                  },
                },
              ]}
            >
              <Input placeholder="输入3-20个任意数字、字母、@、_等组合" />
            </Form.Item>
            {/* 昵称 */}
            <Form.Item
              name="nick_name"
              label="昵称"
              tooltip="What do you want others to call you?"
              rules={[{ required: true, message: "Please input your nickname!", whitespace: true }]}
            >
              <Input />
            </Form.Item>

            {/* 邮箱 */}
            <Form.Item
              name="email"
              label="邮箱"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* 密码 */}
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            {/* 确认密码 */}
            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* 生日 */}
            <Form.Item
              name="birthday"
              label="生日"
              rules={[
                {
                  type: "object" as const,
                  required: true,
                  message: "Please select your birthday!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            {/* 电话号码 */}
            <Form.Item
              name="phone"
              label="电话号码"
              rules={[{ message: "Please input your phone number!" }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="性别"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">男</Option>
                <Option value="female">女</Option>
              </Select>
            </Form.Item>

            <Form.Item label="验证码" extra="We must make sure that your are a human.">
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[{ message: "Please input the captcha you got!" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </>
    </Suspense>
  );
};

export default Register;
