/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { Input } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const menuStyle = css`
    margin-left: 20px;
`;

const LeftSider = () => {
    return(
        <Menu css={menuStyle}>
            <Menu.Item>
                <Link href="/"><a>메인</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
        </Menu>
    );
}

export default LeftSider;  