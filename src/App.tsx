import React from 'react';
import Sendsay from 'sendsay-api';
import './App.scss';
import LoginPage from './pages/login';

var sendsay = new Sendsay({
  auth: {
    login: 'login', 
    sublogin: 'optional', 
    password: 'secret',     
  }
});
 
sendsay.request({ action: 'sys.settings.get', list: ['about.id']}).then(function(res: any) {
  console.log(res.list['about.id']);
})

function App() {
  return (
    <LoginPage />
  );
}

export default App;
