/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Head from 'next/head';
import { Form, Input, Button, DatePicker, Space, Checkbox } from 'antd';
import AppLayout from '../components/AppLayout';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';

const errorMsg = css`
  color: red;
`
const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password])
  
  const changeBirthDay = useCallback((date, dateString) => {
    console.log(date);
    console.log(dateString);
  })
  
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
    console.log(term);
    if (!term){
      return setTermError(true);
    }
    console.log(id, nickname, passwordCheck);
  }, [password, passwordCheck, term]);
  return (
    <AppLayout>
      <Head>회원가입 | Miniproject</Head>
      <Form 
        onFinish={onSubmit}
        layout="vertical"
        >
        <Form.Item
          label="아이디"
          name="user-id"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input name="user-id" value={id} onChange={onChangeId} />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="user-nickname"
          rules={[{ required: true, message: 'Please input your nickname!' }]}
        >
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="user-password"
          rules={[{required:true, message: 'Please input your password!'}]}
        >
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="user-passwor-check"
          rules={[{required:true, message: 'Please input your password again!'}]}
        >
          <Input name="user-password-check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <div css={errorMsg}>비밀번호가 일치하지 않습니다.</div>}
        </Form.Item>
        <Form.Item
          label="생일"
          name="user-birthday"
          rules={[{required:true, message: 'Please input your birthday!'}]}
        >
          <DatePicker onChange={changeBirthDay}/>
        </Form.Item>
        <Form.Item
          name="user-term"
          rules={[{required:true, message: 'Please check agreement!'}]}
        >
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>위 사항에 대해 동의합니다.</Checkbox>
          {termError && <div css={errorMsg}>동의를 체크해주세요</div>}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </Form.Item>
      </Form>
    </AppLayout>
  )
}

export default Signup;