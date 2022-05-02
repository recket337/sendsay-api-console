import { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
    children?: any,
    width?: string,
    isLoading?: boolean,
    disabled?: boolean,
}

const StyledButton = styled.button<ButtonProps>`
    width: ${({width}) => width};
    height: 40px;
    border: none;
    background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    -webkit-transition: all 1s;
    &:hover {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        cursor: pointer;
    }
    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
    }
    &:disabled {
        background: linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%);
    }
    &:focus {
        background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        outline: none;
        border: 3px solid #9ecefb;
    }
`;

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>= (props) => {
  return <StyledButton disabled={props.disabled ?? props.isLoading} {...props}>{props.isLoading ? 'loading' : props.children}</StyledButton>
}

export default Button;