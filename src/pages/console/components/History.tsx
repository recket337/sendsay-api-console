import { relative } from "path";
import React, { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { clearHistory, setHistory } from "../../../store/historySlice";
import settings from "./../../assets/img/drag-element.svg";
import Dropdown from "./Dropdown";
import HistoryElement from "./HistoryElement";

const History: FC = () => {
  const dispatch = useAppDispatch();
  const actionsHistory = useAppSelector((s) => s.history.actionsHistory);

  const scroll = (e) => {
    let scrolled = e.deltaY || e.detail || e.wheelDelta;
    let container = e.currentTarget;
    container.scrollLeft += scrolled;
  };

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  useEffect(() => {
    window.onbeforeunload = () =>
      localStorage.setItem("actionsHistory", JSON.stringify(actionsHistory));
  }, [actionsHistory]);

  useEffect(() => {
    let actionsHistoryLocal = localStorage.getItem("actionsHistory");
    console.log(actionsHistoryLocal)
    if (actionsHistoryLocal) {
      console.log(actionsHistoryLocal)
      dispatch(setHistory(JSON.parse(actionsHistoryLocal)));
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <ul className="historyList" onWheel={scroll}>
        {actionsHistory.map((i) => (
          <HistoryElement data={i} />
        ))}
        <div className="historyList__fade" />
        <button className="historyList__clear" onClick={handleClearHistory} />
      </ul>
    </div>
  );
};

export default History;
