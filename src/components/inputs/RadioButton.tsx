import styled from "styled-components";
import { InputElementProps } from "./InputInterface";
import { StyledLabel, StyledRadio } from "./InputStyles";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;


const RadioButton = ({ label, id,name, disabled,defaultChecked,value ,...rest }: InputElementProps) => {

  return (
  <Wrapper>
    <StyledRadio type="radio" name={name} id={id} onChange={rest.onChange} defaultChecked={defaultChecked} value={value} />
    <StyledLabel htmlFor={id} disabled={disabled}>
      {label}
    </StyledLabel>
  </Wrapper>)
};

export default RadioButton;
