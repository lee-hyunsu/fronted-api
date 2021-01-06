import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

function App(){
  return(
    <>
      <Route component={MainPage} path=""/>
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
    </>
  );
}

export default App;