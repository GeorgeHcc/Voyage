import styled, { css } from "styled-components";

export interface IContainerStylProps {
  $width: string | number;
  $height: string | number;
}

export const containerStyl = css`
  width: 100px;
  height: 200px;
  background-color: red;
`;

export const Container = styled.div`
  ${containerStyl}
`;
