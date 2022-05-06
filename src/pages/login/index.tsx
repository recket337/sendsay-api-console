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
// import { isAuth } from "../../App";

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
    typeof errors?.[e.target.name] === 'boolean' && setErrors({...errors, [e.target.name]: false})
  }; 

  const successLog = (session) => {
    localStorage.setItem("session", session);
      dispatch(setAuthenticated(true));
      dispatch(setSession(session));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.password || !formValues.login) {
      setErrors({...errors, password: !formValues.password, login: !formValues.login})
      return
    }
    
    setIsLoading(true);
    setErrors({ ...errors, request: "" });

    sendsay.login(formValues).then(() => {
        setIsLoading(false);
        successLog(sendsay.session)
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
        setErrors({
          ...errors,
          request: `id: "${error?.id}", explain: "${error?.explain}"`,
        });
      }
    );
  };

  return (
    <main className="LoginPage">
      <img src={logo} />
      <Form onSubmit={handleSubmit}>
        <h1 className="LoginPage__headline">API-консолька</h1>
        {errors.request && <RequestError errorBody={errors.request} />}
        <TextField
          titleText="Логин"
          maxLength={32}
          name="login"
          onChange={handleFieldValue}
          value={formValues.login}
          error={errors.login}
        />
        <TextField
          titleText="Сублогин"
          name="sublogin"
          optionalText="Опционально"
          maxLength={32}
          onChange={handleFieldValue}
          value={formValues.sublogin}
        />
        <TextField
          titleText="Пароль"
          type="password"
          name="password"
          maxLength={32}
          onChange={handleFieldValue}
          value={formValues.password}
          error={errors.password}
        />
        <Button type="submit" width="110px" isLoading={isLoading}>
          Войти
        </Button>
      </Form>
      <Link href="https://github.com/recket337">@github:recket337</Link>
    </main>
  );
};
export default LoginPage;
