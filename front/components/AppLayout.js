/** @jsxImportSource @emotion/react */
import { Global, jsx, css } from '@emotion/react'
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu, Input, Select, Row, Col } from 'antd'; // 필요한 컴포넌트를 가져온다
import { useEffect, useState } from 'react';
const { Header, Content } = Layout;
import UserProfile from './rightComponent/UserProfile';
import SitesContent from './middleComponent/SitesContent';
import LoginForm from '../components/rightComponent/LoginForm';
import SearchForm from './headerComponent/SearchForm';
import LeftSider from './leftComponent/LeftSider';
import ChattingForm from './rightComponent/ChattingForm';
import { useSelector} from 'react-redux';
import { isLoggedIn } from '../utils/JwtRegisterUtils';
const contentStyle = css`
    margin-top:20px;
`;
    
const rightComponentStyle = css`
    margin-right:20px;
    height:100%;
`;

const globalStyle = css`
    *{
        .ant-row {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }

        .ant-col:first-child {
            padding-left: 0 !important;
        }

        .ant-col:last-child {
            padding-right: 0 !important;
        }
    }
`

// const loginCheck = isLoggedIn();
const AppLayout = ({ children }) => {
    const {me, loadMyInfoDone} = useSelector((state) => state.user);
    return (
        <Layout>
            <Global style={globalStyle} />
            <Header>
                <SearchForm />
            </Header>
            <Layout>
                <Content css={contentStyle}> 
                    <Row gutter={20}> 
                        <Col xs={24} md={6}>
                           <LeftSider/>
                        </Col>
                        <Col xs={24} md={12}>
                            {children}
                        </Col>
                        <Col xs={24} md={6}>
                            <div css={rightComponentStyle}>
                                { loadMyInfoDone ? <UserProfile /> : <LoginForm />} 
                                <ChattingForm/>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;