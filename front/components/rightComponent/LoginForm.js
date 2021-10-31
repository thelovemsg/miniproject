/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../reducers';
import {
  Form,
  Input,
  Button,
} from 'antd';
import useInput from '../../hooks/useInput';

const buttonStyle = css`
    margin-top: 20px;
`;

const LoginForm = ( {setIsLoggedIn }) => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        dispatch(loginAction({id,password}));
    }, [id,password]);

    return (
    <>
        <Form onFinish={onSubmitForm}> 
            <div>
                <label htmlFor="user-id">아이디</label>
                <br /> 
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br /> 
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <div>
                <Button css={buttonStyle} type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    </>
  );
};

export default LoginForm;