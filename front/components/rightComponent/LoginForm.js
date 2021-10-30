/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useCallback, useState } from 'react';
import Link from 'next/link';

import {
  Form,
  Input,
  Button,
  DatePicker,
} from 'antd';
import ChattingForm from './ChattingForm';

const buttonStyle = css`
    margin-top: 20px;
`;

const LoginForm = ( {setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // const [passwordCheck, setPasswordCheck] = useState('');
    // const [birthDate, setBirthDate] = useState('');

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id,password]);

    const onChangeId = useCallback((e) => {
      setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
    }, []);

    // const onChangeBirthdate = useCallback((date, dateString) => {
    //     console.log(dateString);
    // }, []);
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