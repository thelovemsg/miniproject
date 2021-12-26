/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';
import {
  Form,
  Input,
  Button,
} from 'antd';
import useInput from '../../hooks/useInput';

const buttonStyle = css`
    margin-top: 20px;
`;
const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, me } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback((e) => {
        dispatch(loginRequestAction({email,password}));
    }, [email,password]);

    return (
        <>
        <Form onFinish={onSubmitForm}> 
            <div>
                <label htmlFor="user-email">아이디</label>
                <br /> 
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br /> 
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <div>
                <Button css={buttonStyle} type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    </>
  );
};

export default LoginForm;