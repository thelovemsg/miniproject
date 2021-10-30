/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Link from 'next/link';
import {useMemo} from 'react';
import {Form, Input} from 'antd';

const NicknameEditForm = () => {
    const style = useMemo(() => {

    }, [])
    return(
        <Form>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    );
}

export default NicknameEditForm;  