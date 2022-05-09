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
  //
  // const isFetching = useAppSelector(s => s.console.isFetching)
  // const session = useAppSelector(s => s.user.session)
  // const dispatch = useAppDispatch()

  // function handleSubmit() {
  //   if (isFetching) return;
  //   if (validateRequest()) {
  //     send();
  //     return;
  //   } else {
  //     dispatch(setError({ req: true, res: false }));
  //   }
  // }
  // function validateRequest() {
  //   try {
  //     JSON.parse(props.request);
  //     if (!isNaN(parseInt(props.request))) {
  //       throw new Error("Только число");
  //     }
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }
  // function send() {
  //   dispatch(setIsFetching(true));
  //   sendsay.setSession(session);
  //   sendsay
  //     .request(JSON.parse(props.request))
  //     .then((response) => {
  //       props.saveAction({ request: props.request, isSuccessful: true });
  //       dispatch(setResponse(JSON.stringify(response, undefined, "\t")));
  //     })
  //     .catch((error) => {
  //       props.saveAction({ request: props.request, isSuccessful: false });
  //       dispatch(setResponse(JSON.stringify(error, undefined, "\t")));
  //       dispatch(setError({ req: false, res: true }));
  //     })
  //     .finally(() => dispatch(setIsFetching(false)));
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // const [menuIsOpened, setMenuIsOpened] = useState(false);
  // const [OnCopyAnimationRef, setOnCopyAnimationRef] = useState<any>(null);
  // const [menuStyle, setMenuStyle] = useState({ width: "", left: "" });

  // function menuHandleClick(e) {
  //   console.log(e)
  //   e.stopPropagation();
  //   switch (e.target.name) {
  //     case "copy":
  //       // navigator.clipboard.writeText(props.data.request);
  //       let copyAnimationPos = e.target.getBoundingClientRect().left; //+margin
  //       OnCopyAnimationRef.style.left = copyAnimationPos + "px";
  //       OnCopyAnimationRef.classList.add("actionItem-onCopyAnimation-active");
  //       break;
  //     case "send":

  //       break;
  //     case "delete":

  //       break;
  //     default:
  //       break;
  //   }
  // }

  // const openMenu = (e) => {
  //   e.nativeEvent.stopImmediatePropagation();
  //   if (!menuIsOpened) {
  //   //   props.setRequest(props.data.request);
  //     let { width, height, left } = e.currentTarget.getBoundingClientRect();
  //     setMenuIsOpened(true);
  //     setMenuStyle({ width, left });
  //   }
  // }

  // function closeMenu() {
  //   setMenuIsOpened(false);
  // }

  // useEffect(() => {
  //   document.addEventListener("click", closeMenu);
  //   return () => {
  //     document.removeEventListener("click", closeMenu);
  //   };
  // }, []);

  return (
    <li className="historyList__item" ref={ref}>
      <div className={data.isSuccessful ? 'good' : 'bad'} />
      <span className="info">fewfew</span>
      <Dropdown data={data}/>
    </li>
  );
};

export default HistoryElement;
