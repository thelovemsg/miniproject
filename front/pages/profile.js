import Router from 'next/router';
import Head from 'next/head';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/middleComponent/FollowList';
import NicknameEditForm from '../components/middleComponent/NicknameEditForm';
import Cookies from 'universal-cookie';

const Profile = () => {
    const { me } = useSelector((state) => state.user);
    const cookies = new Cookies();
    useEffect(() => {
        cookies.get("refreshToken");
        if(cookies.get("refreshToken")) {
            Router.push('/');
        }
    });
    if(!cookies.get("refreshToken")) {
        return null;
    }
    return (
        <AppLayout>
            <Head>
                <title>내 프로필</title>
            </Head>
            <NicknameEditForm/>
            <FollowList header="팔로잉" data={0} /> 
            <FollowList header="팔로워" data={0} /> 
        </AppLayout>
    )
}

export default Profile;
