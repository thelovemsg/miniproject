/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Head from 'next/head';
import Router from 'next/router';
import { Form, Input, Button, DatePicker, Space, Checkbox } from 'antd';
import AppLayout from '../components/AppLayout';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_END, SIGN_UP_FAIL } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { warningMsg } from '../utils/sweetAlertUtils';
import Cookies from 'universal-cookie';
const errorMsg = css`
  color: red;
`
const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, signUpErrorReason, me } = useSelector((state) => state.user);
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get("refreshToken")){
      Router.replace('/');
    }
  });   

  useEffect(() => {
    if (signUpDone){
      Router.replace('/');
    } else if(signUpError){
      warningMsg(signUpErrorReason);
    }
    dispatch({
      type : SIGN_UP_END
    })

  }, [signUpDone, signUpError])

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  
  const [birthday, setBirthday] = useState('');

  const chooseDate = useCallback((date, dateString) => {
    setBirthday(dateString);
  }, [birthday]);
  
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if(password !== passwordCheck){
      return setPasswordError(true);
    }
    if (!term){
      return setTermError(true);
    }
    console.log("birthday :: ", birthday);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, birthday, nickname}
    })
  }, [email, password, passwordCheck, term, birthday]);
  return (
    <AppLayout>
      <Head>???????????? | Miniproject</Head>
      <Form 
        onFinish={onSubmit}
        layout="vertical"
        >
        <Form.Item
          label="?????????"
          name="user-email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} />
        </Form.Item>
        <Form.Item
          label="?????????"
          name="user-nickname"
          rules={[{ required: true, message: 'Please input your nickname!' }]}
        >
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} />
        </Form.Item>
        <Form.Item
          label="????????????"
          name="user-password"
          rules={[{required:true, message: 'Please input your password!'}]}
        >
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          label="???????????? ??????"
          name="user-password-check"
        >
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <div css={errorMsg  }>??????????????? ???????????? ????????????.</div>}
        </Form.Item>
        <Form.Item
          label="??????"
          name="user-birthday"
          rules={[{required:true, message: 'Please input your birthday!'}]}
        >
          <DatePicker onChange={chooseDate}/>
        </Form.Item>
        <Form.Item
          name="user-term"
        >
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>?????? ?????? ????????? ???????????????.</Checkbox>
          {termError && <div css={errorMsg}>????????? ??????????????????</div>}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>????????????</Button>
        </Form.Item>
      </Form>
    </AppLayout>
  )
}

export default Signup;