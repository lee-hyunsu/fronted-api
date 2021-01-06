import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';

function App(){
  return(
    <>
      <Route component={PostListPage} path=""/>
      <Route component={LoginPage} path="/login"/>
      <Route component={RegisterPage} path="/register"/>
    </>
  );
}

export default App;