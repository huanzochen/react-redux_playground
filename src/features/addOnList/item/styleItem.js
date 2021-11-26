import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 6px;
  max-width: 200px;
  font-size: 14px;
`;

export const StyledItemImg = styled.img`
  border-radius: 6px;
  height: 200px;
`;

export const StyledItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  height: 100%;

  & .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const StyledBuyButton = styled.button`
  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
  padding: 10px 16px;

  & > span {
    margin-left: 3px;
    font-size: 15px;
  }
`;
