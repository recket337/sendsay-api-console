import React, { FC, useEffect, useState } from "react";
import Button from "../../components/styled/Button";
import Form from "../../components/styled/Form";
import Link from "../../components/styled/Link";
import TextField from "../../components/styled/TextField";
import logo from "./../../assets/img/LOGO.svg";
import { sendsay } from "../../init";
import RequestError from "./components/RequestError";
import { useAppDispatch } from "../../hook";
import { setAuthenticated, setSession } from "../../store/userSlice";

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState({
    login: "",
    sublogin: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: false,
    login: false,
    request: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    typeof errors?.[e.target.name] === "boolean" &&
      setErrors({ ...errors, [e.target.name]: false });
  };

  const successLog = (session) => {
    console.log(typeof session);
    localStorage.setItem("session", session);
    dispatch(setAuthenticated(true));
    dispatch(setSession(session));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.password || !formValues.login) {
      setErrors({
        ...errors,
        password: !formValues.password,
        login: !formValues.login,
      });
      return;
    }

    setIsLoading(true);
    setErrors({ ...errors, request: "" });
      let userData
     if (formValues.sublogin) {
      userData = { ...formValues };
    } else {
      userData = {login: formValues.login, password: formValues.password};
    }

    sendsay
      .login(formValues)
      .then(() => {
        setIsLoading(false);
        successLog(sendsay.session);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setErrors({
          ...errors,
          request: `id: "${error?.id}", explain: "${error?.explain}"`,
        });
      });
  };

  return (
    <main className="LoginPage">
      <img src={logo} />
      <Form onSubmit={handleSubmit}>
        <h1 className="LoginPage__headline">API-??????????????????</h1>
        {errors.request && <RequestError errorBody={errors.request} />}
        <TextField
          titleText="??????????"
          maxLength={32}
          name="login"
          onChange={handleFieldValue}
          value={formValues.login}
          error={errors.login}
        />
        <TextField
          titleText="????????????????"
          name="sublogin"
          optionalText="??????????????????????"
          maxLength={32}
          onChange={handleFieldValue}
          value={formValues.sublogin}
        />
        <TextField
          titleText="????????????"
          type="password"
          name="password"
          maxLength={32}
          onChange={handleFieldValue}
          value={formValues.password}
          error={errors.password}
        />
        <Button type="submit" width="110px" isLoading={isLoading}>
          ??????????
        </Button>
      </Form>
      <Link href="https://github.com/recket337">@github:recket337</Link>
    </main>
  );
};
export default LoginPage;
