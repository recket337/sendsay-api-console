import React, { FC, useEffect, useRef, useState } from "react";
import SplitPane from "react-split-pane";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { setError, setRequest } from "../../../store/consoleSlice";
import drag from "./../../../assets/img/drag-element.svg";

const SplitPaneStyled = styled.div`
  min-width: 800px;
  overflow-x: scroll;
  width: 100%;
  position: relative;
  flex: 2;
  padding: 10px 15px;
  display: flex;
  .split {
    width: 98%;
    margin: 0 auto;
    height: 97.5% !important;

      .Resizer {
        width: 8px;
        margin: 0 3px 0 1px;
        height: 100%;
        background: url(${drag}) no-repeat center;
        &:hover {
          cursor: pointer;
        }
        &:active {
          cursor: col-resize;
        }
      }

      div {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 3px;

        h2 {
          font-family: 'SF Pro Text';
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #999999;
        }

        textarea {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          resize: none;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          margin-bottom: 5px;
          font-size: 14px;
        &:hover, &:focus {
          border: 1px solid rgba(0, 0, 0, 0.5);
          outline: none;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;

const SplittedTextarea: FC = () => {
  const splitRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  const request = useAppSelector((s) => s.console.request);
  const response = useAppSelector((s) => s.console.response);
  const error = useAppSelector((s) => s.console.error);

  function handleChange(e) {
    dispatch(setRequest(e.target.value));
    if (error.req || error.res) {
      dispatch(setError({ req: false, res: false }));
    }
  }

  const [size, setSize] = React.useState<number>(0);

  const resizeHandler = () => {
    const { clientWidth } = splitRef.current.splitPane || {};
    setSize(clientWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <SplitPaneStyled>
      {/* @ts-ignore */}
      <SplitPane
        ref={splitRef}
        split="vertical"
        minSize={400}
        maxSize={size - 400}
        defaultSize="50%"
        className="split"
      >
        <div>
          <h2>Запрос:</h2>
          <textarea value={request} onChange={handleChange} />
        </div>
        <div>
          <h2>Ответ:</h2>
          <textarea value={response} readOnly />
        </div>
      </SplitPane>
    </SplitPaneStyled>
  );
};

export default SplittedTextarea;
