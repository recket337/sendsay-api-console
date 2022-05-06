import React, { FC, useEffect, useRef, useState } from "react";
import OnCopyAnimation from "./CopyAnimation";
import Dropdown from "./Dropdown";

const HistoryElement: FC = () => {
  const ref = useRef<any>();
  //

  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [OnCopyAnimationRef, setOnCopyAnimationRef] = useState<any>(null);
  const [menuStyle, setMenuStyle] = useState({ width: "", left: "" });

  function menuHandleClick(e) {
    console.log(e)
    e.stopPropagation();
    switch (e.target.name) {
      case "copy":
        // navigator.clipboard.writeText(props.data.request);
        let copyAnimationPos = e.target.getBoundingClientRect().left; //+margin
        OnCopyAnimationRef.style.left = copyAnimationPos + "px";
        OnCopyAnimationRef.classList.add("actionItem-onCopyAnimation-active");
        break;
      case "send":

        break;
      case "delete":

        break;
      default:
        break;
    }
  }

  const openMenu = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    if (!menuIsOpened) {
    //   props.setRequest(props.data.request);
      let { width, height, left } = e.currentTarget.getBoundingClientRect();
      setMenuIsOpened(true);
      setMenuStyle({ width, left });
    }
  }

  function closeMenu() {
    setMenuIsOpened(false);
  }

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <li className="historyList__item" ref={ref}>
      <div className="good" />
      <span className="info">fewfew</span>
      <Dropdown />
    </li>
  );
};

export default HistoryElement;
