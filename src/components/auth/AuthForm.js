import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';
import Button from '../common/Button';

//로그인, 회원가입 폼을 보여줌
const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

//input에 스타일 적용
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &: focus{
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

//폼 하단에 로그인, 회원가입 링크를 보여주는 거
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color: ${palette.gray[6]};
        text-decoration: underline;
        &: hover{
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem
`;

const textmap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({type, form, onChange, onSubmit}) => {
    const text = textmap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                    autoComplete="username" 
                    name="username" 
                    placeholder="이메일"
                    onChange={onChange} 
                    value={form.username}
                />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    //value={form.passwordConfirm}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="paswordComfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="myname"
                        name="myname"
                        placeholder="이름"
                        type="myname"
                        onChange={onChange}
                        value={form.myname}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="nickname"
                        name="nickname"
                        placeholder="닉네임"
                        type="nickname"
                        onChange={onChange}
                        value={form.nickname}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplete="phoneauth"
                        name="phoneauth"
                        placeholder="핸드폰 인증('-없이')"
                        type="phoneauth"
                        onChange={onChange}
                        value={form.phoneauth}
                    />
                )}
                <ButtonWidthMarginTop cyan fullWidth style={{margin: '1rem'}}>
                    {text}
                </ButtonWidthMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;