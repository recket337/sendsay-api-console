import React, { useEffect } from "react";

export default function OnCopyAnimation(props) {
  const ref = React.useRef<any>();
  function hide() {
    ref.current.classList.remove("historyList-onCopyAnimation-active");
  }
  useEffect(() => {
    props.setOnCopyAnimationRef(ref.current);
    ref.current.addEventListener("animationend", hide);
  }, []);
  return (
    <div ref={ref} className={"historyList-onCopyAnimation"}>
      Скопировано
    </div>
  );
}