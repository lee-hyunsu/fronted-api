import React from 'react';
//import Button from '../components/common/Button';
import AuthTemplate from '../components/auth/AuthTemplate';
//import AuthForm from '../components/auth/AuthForm';
import LoginForm from '../container/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;