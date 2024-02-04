import React from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";
const BottomToolBar: React.FC = () => {
  return (
    <ToolBarWrap>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="right">
        <Button type="primary" danger>
          结束会议
        </Button>
      </div>
      {/* <ToolItem></ToolItem>
      <ToolItem></ToolItem>
      <ToolItem></ToolItem>
      <ToolItem>
        <Button type="primary" danger>
          结束会议
        </Button>
      </ToolItem> */}
    </ToolBarWrap>
  );
};
export default BottomToolBar;

const ToolBarWrap = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #fff;
  display: flex;
  & div.item {
    border: 1px solid red;
    min-width: 180px;
    flex: 1;
  }
  & div.left,
  & div.right {
    flex-shrink: 0;
    width: 50px;
  }
`;

// const ToolItem = styled.div`
//   flex: 1;
// `;
