import React from 'react';
//import Button from '../components/common/Button';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login"/>
        </AuthTemplate>
    );
};

export default LoginPage;