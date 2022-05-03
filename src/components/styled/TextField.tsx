import { FC, memo } from "react";
import styled from "styled-components";

type TextFieldProps = {
  width?: string;
  isError?: boolean;
  disabled?: boolean;
  titleText?: string;
  optionalText?: string;
  error?: boolean;
};

const StyledTextField = styled.input<TextFieldProps>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : "100%")};
  &[type="password"] {
    font-family: Verdana;
    font-size: 18px;
    font-weight: 1000;
  }
  border: 1px solid ${({ error }) => (error ? "#CF2C00" : "rgba(0, 0, 0, 0.2)")};
  border-radius: 5px;
  background: #ffffff;
  height: 40px;
  padding: 0 10px;

  box-shadow: ${({ error }) =>
    error ? "0px 0px 5px rgba(207, 44, 0, 0.5)" : "none"};

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: "#0d0d0d";

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const TextField: FC<
  React.InputHTMLAttributes<HTMLInputElement> & TextFieldProps
> = (props) => {
  console.log(props)
  const input = <StyledTextField type="text" {...props} />;

  return props.titleText ? (
    <div style={{ width: `${props.width ? props.width : "100%"}` }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <p
          className="titleText"
          style={{ color: props.error ? "#CF2C00" : "#0D0D0D" }}
        >
          {props.titleText}
        </p>
        {props.optionalText && (
          <p className="optionalText">{props.optionalText}</p>
        )}
      </div>
      {input}
    </div>
  ) : (
    input
  );
};

export default memo(TextField);
