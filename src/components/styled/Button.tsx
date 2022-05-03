import { FC } from "react";
import styled from "styled-components";
import { Spinner } from "./Spinner";

type ButtonProps = {
  children?: any;
  width?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: 40px;
  border: none;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  border-radius: 5px;
  color: #ffffff;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  -webkit-transition: all 1s;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
    cursor: pointer;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:disabled {
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
  &:focus {
    background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
    outline: none;
    border: 3px solid #9ecefb;
  }
`;

const Button: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = (props) => {
  return (
    <StyledButton disabled={props.disabled ?? props.isLoading} {...props}>
      {props.isLoading ? <Spinner /> : props.children}
    </StyledButton>
  );
};

export default Button;
