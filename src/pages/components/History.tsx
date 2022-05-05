import { relative } from "path";
import React, { FC, useEffect, useRef } from "react";
import settings from "./../../assets/img/drag-element.svg";
import Dropdown from "./Dropdown";

const History: FC = () => {
  const scroll = (e) => {
    let scrolled = e.deltaY || e.detail || e.wheelDelta;
    let container = e.currentTarget;
    container.scrollLeft += scrolled;
  };
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <ul className="historyList" onWheel={scroll}>
        <li className="historyList__item">
          <div className="good" />
          <span className="info">fewfew</span>
          <Dropdown />
        </li>

        <div className="historyList__fade" />
        <button className="historyList__clear" />
      </ul>
    </div>
  );
};

export default History;
