import React, { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { sendsay } from "../../../init";
import { setError, setIsFetching, setResponse } from "../../../store/consoleSlice";
import { Action } from "../../../store/historySlice";
import OnCopyAnimation from "./CopyAnimation";
import Dropdown from "./Dropdown";

type PropsType = {
  data: Action
}

const HistoryElement: FC<PropsType> = ({data}) => {
  const ref = useRef<any>();
  const [OnCopyAnimationRef, setOnCopyAnimationRef] = useState(null);
  const [isAnimation, setAnimation] = useState(false);

  useEffect(() => {
    console.log(isAnimation)
  }, [isAnimation]);

  return (
    <li className="historyList__item" ref={ref}>
      <div className={data.isSuccessful ? 'good' : 'bad'} />
      <span className="info">fewfew</span>
      <Dropdown data={data} onCopyAnimationRef={OnCopyAnimationRef} setAnimation={setAnimation} />
      <OnCopyAnimation setOnCopyAnimationRef={setOnCopyAnimationRef} isAnimation={isAnimation} setAnimation={setAnimation}/>
    </li>
  );
};

export default HistoryElement;
