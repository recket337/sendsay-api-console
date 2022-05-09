import React, { FC, useEffect, useRef } from "react";

type PropsType = {
  setOnCopyAnimationRef: (ref: any) => void;
  isAnimation: boolean;
  setAnimation: (is: boolean) => void;
};

const OnCopyAnimation: FC<PropsType> = ({ isAnimation, setAnimation }) => {

  const handleAnimationEnd = () => {
    setAnimation(false)
    console.log('end')
  }

  useEffect(() => {
    console.log('here')
    if(isAnimation) {
      setTimeout(() => setAnimation(false), 1000)
    }
  }, [isAnimation])

  return (
    <div
      className={`historyList-onCopyAnimation ${
        isAnimation ? "historyList-onCopyAnimation-active" : ""
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      Скопировано
    </div>
  );
};

export default OnCopyAnimation;
