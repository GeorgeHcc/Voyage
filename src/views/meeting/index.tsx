import React, { Suspense, useState } from "react";
import { createFromIconfontCN, UpOutlined, DownOutlined } from "@ant-design/icons";

import styled from "styled-components";
import JoinMeeting from "./joinMeeting";
import { GlobalToken, theme, Button, Flex, Dropdown, ConfigProvider, Divider, message } from "antd";
import MainLayout from "@/layout/mainLayout";
// const IconFont = createFromIconfontCN({
//   scriptUrl: ["//at.alicdn.com/t/c/font_4432684_dk043ihaok7.js"],
//   extraCommonProps: {
//     style: {
//       fontSize: "20px",
//     },
//   },
// });

// enum Icon {
//   AudioOff = "icon-audio-off-light",
//   AudioOn = "icon-audio-fill-light",
//   VideoOff = "icon-icon-video-off-light",
//   VideoOn = "icon-video-light",
// }

const { useToken } = theme;

const Meeting: React.FC = () => {
  const { token } = useToken();
  const [joinMeetingOpen, setJoinMeetingOpen] = useState(false);

  return (
    <>
      <Suspense fallback="loading">
        <MainLayout>
          <Container token={token}>
            <div className="meeting-wrap">
              <div className="content">
                <p className="title">流畅可协同的视频会议</p>

                <Button type="primary" size="large" className="btn">
                  发起新会议
                </Button>
                <Button size="large" className="btn" onClick={() => setJoinMeetingOpen(true)}>
                  加入会议
                </Button>

                <div className="gap">
                  <span className="gap-line"></span>
                  <span className="gap-text">或</span>
                  <span className="gap-line"></span>
                </div>
                <div className="some-info">
                  <p>
                    已安装Voyage客户端？ <a href="#">打开</a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </MainLayout>
        <JoinMeeting
          open={joinMeetingOpen}
          // title="加入会议"
          close={() => {
            setJoinMeetingOpen(false);
            message.info(1111);
          }}
        />
      </Suspense>
    </>
  );
};

export default Meeting;

const Container = styled.div<{ token: GlobalToken }>`
  display: flex;
  width: 100%;
  height: 100%;
  & .meeting-wrap {
    padding: 20px 105px;
    margin: auto;
    width: 550px;
    height: 450px;
    border-radius: 10px;
    box-shadow: ${(t) => ` ${t.token.boxShadowSecondary}`};
    color: ${(t) => t.token.colorTextHeading};
    background-color: ${(t) => t.token.colorBgContainer};
    & .content {
      display: flex;
      height: 100%;
      flex-direction: column;
      flex: 1;
      & .title {
        font-size: 2rem;
      }
      & .btn {
        margin-inline: 30px;
        margin-top: 20px;
      }
      & .gap {
        padding-inline: 30px;
        margin: 70px 0 20px;
        display: flex;
        &-line {
          flex: 1;
          height: 10px;
          border-bottom: 1px solid #a9a9a94e;
        }
      }
      & .some-info {
        margin: 0 auto;
      }
    }
  }
`;
