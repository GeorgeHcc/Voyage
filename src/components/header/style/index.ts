import styled from "styled-components";

export const headerWrapStyl = styled.div`
  width: 50px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: white;
  & ul {
    flex: 1;
    list-style: none;
    & li {
      width: 50px;
      display: inline-block;
    }
  }
`;
