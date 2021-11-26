import styled from "styled-components";

export const StyledItemPrice = styled.div`
  & span {
    font-size: 14px;
  }

  & .discount {
    color: #bf0000;

    .price {
      font-size: 18px;
    }

    .description {
      margin-left: 1px;
      font-size: 12px;
    }
  }

  & .origin {
    margin-left: 3px;

    .description {
      margin-left: 1px;
      font-size: 10px;
    }
  }
`;
