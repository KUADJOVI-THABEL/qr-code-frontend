import styled from "styled-components";
import { BrandColor } from "../../styled-components/GlobalStyles";

export const Legend = styled.legend`
  font-weight: 600;
  font-size: 1rem;
  color: ${BrandColor.DARK_PURPLE};
 
`;

export const StyledRadio = styled.input`
  appearance: none;
  cursor:pointer;
  margin: 0;
  width: 17px;
  height: 17px;
  border: 2px solid gray;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &:checked{
  border: 6px solid var(--btn-primary);
  
  }
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &:checked::after {
  
  }



  &:focus {
  margin:0;
    border: 6px solid var(--btn-primary);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${BrandColor.DARK_PURPLE_FADED};
    background-color: ${BrandColor.PURPLE};

    &::after {
      background-color: ${BrandColor.PURPLE};
    }

    &:checked::after {
      background-color: ${BrandColor.DARK_PURPLE_FADED};
    }
  }
`;

export const StyledLabel = styled.label<{ disabled?: boolean }>`
 
  font-size: 1rem;
  cursor: default;

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    &::after {
      margin-left: 8px;
      width: 12px;
      height: 15px;
      display: inline-block;
      content: " ";
      -webkit-mask: url("/lock.svg") no-repeat 50% 50%;
      -webkit-mask-size: cover;
    }
  `}
`;
