import React, { FC, useEffect, useState } from "react";
import Button from "../../components/styled/Button";
import Form from "../../components/styled/Form";
import Link from "../../components/styled/Link";
import RequestError from "../../components/styled/RequestError";
import TextField from "../../components/styled/TextField";
import logo from "./../../assets/img/LOGO.svg";
import Sendsay from 'sendsay-api';

const LoginPage: FC = () => {
  const [formValues, setFormValues] = useState({
    login: "",
    sublogin: "",
    password: "",
  });

  useEffect(() => {
    console.log(formValues)
  }, [formValues]);

  const handleFieldValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendsay = new Sendsay({
      auth: formValues
    });
     
    sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res: any) {
      console.log(res.list['about.id']);
    })
  }

  return (
    <main className="LoginPage">
      <img src={logo} />
      <Form onSubmit={handleSubmit}>
        <h1 className="LoginPage__headline">API-консолька</h1>
        <RequestError errorBody="errrrrroooor" />
        <TextField
          titleText="Логин"
          maxLength={32}
          name="login"
          onChange={handleFieldValue}
          value={formValues.login}
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
        />
        <Button type="submit" width="110px">Войти</Button>
      </Form>
      <Link href="https://github.com/recket337">@github:recket337</Link>
    </main>
  );
};
export default LoginPage;
