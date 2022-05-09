import React, { FC, memo, useEffect } from "react";
// import { isAuth } from "../../App";
import Button from "../../components/styled/Button";
import { sendsay } from "../../init";
import format from "./../../assets/img/align-right.svg";
import Link from "../../components/styled/Link";
import SplittedTextarea from "./components/SplitPane";
import History from "./components/History";
import { useAppDispatch, useAppSelector } from "../../hook";
import {
  setError,
  setExecute,
  setIsFetching,
  setRequest,
  setResponse,
} from "../../store/consoleSlice";
import { saveAction } from "../../store/historySlice";
import Header from "./components/Header";
import { validateRequest } from "../../utils";

const Console: FC = () => {
  const dispatch = useAppDispatch();

  const history = useAppSelector((s) => s.history.actionsHistory);
  const execution = useAppSelector((s) => s.console.execute);

  useEffect(() => {
    if(execution) {
      handleSubmit();
      dispatch(setExecute(false));
    }
  }, [execution]);

  const handleFormat = () => {
    dispatch(setRequest(JSON.stringify(JSON.parse(request), undefined, "\t")));
  };

  const isFetching = useAppSelector((s) => s.console.isFetching);
  const session = useAppSelector((s) => s.user.session);
  const request = useAppSelector((s) => s.console.request);

  const handleSubmit = () => {
    if (isFetching) return;
    if (validateRequest(request)) {
      dispatch(setIsFetching(true));
      sendsay.setSession(session);
      sendsay
        .request(JSON.parse(request))
        .then((response) => {
          dispatch(saveAction({ request: request, isSuccessful: true }));
          dispatch(setResponse(JSON.stringify(response, undefined, "\t")));
        })
        .catch((error) => {
          dispatch(saveAction({ request: request, isSuccessful: false }));
          dispatch(setResponse(JSON.stringify(error, undefined, "\t")));
          dispatch(setError({ req: false, res: true }));
        })
        .finally(() => dispatch(setIsFetching(false)));
      return;
    } else {
      dispatch(setError({ req: true, res: false }));
    }
  };

  return (
    <div className="ConsolePage">
      <Header />
      <History />
      <SplittedTextarea />
      <footer className="footer">
        <Button width="120px" onClick={handleSubmit}>
          Отправить
        </Button>
        <Link href="https://github.com/recket337">@github:recket337</Link>
        <button className="footer__format" onClick={handleFormat}>
          <img src={format} />
          Форматировать
        </button>
      </footer>
    </div>
  );
};
export default memo(Console);
