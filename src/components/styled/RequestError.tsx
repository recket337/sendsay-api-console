import { FC } from "react";
import styled from "styled-components";
import meh from "./../../assets/img/meh.svg";

type PropsType = {
  errorBody: string;
};

const RequestError: FC<PropsType> = ({ errorBody }) => {
  return (
    <div className="requestError">
      <img src={meh} className="icon" />
      <div className="info">
        <p className="info__title">Вход не вышел</p>
        <span className="info__body">{errorBody}</span>
      </div>
    </div>
  );
};

export default RequestError;
