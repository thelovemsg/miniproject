import { Router } from 'next/router';
import Head from 'next/head';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/middleComponent/FollowList';
import NicknameEditForm from '../components/middleComponent/NicknameEditForm';

const Profile = () => {
    // const followingList = [{nickname: 'nickname1'},{nickname: 'nickname2'},{nickname: 'nickname3'},{nickname: 'nickname4'}];
    // const followerList = [{nickname: 'nickname1'},{nickname: 'nickname2'},{nickname: 'nickname3'},{nickname: 'nickname4'}];
    useEffect(() => {
        if(!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);
    if(!me) {
        return null;
    }
    const { me } = useSelector((state) => state.user);
    return (
        <AppLayout>
            <Head>
                <title>내 프로필</title>
            </Head>
            <NicknameEditForm/>
            <FollowList header="팔로잉" data={me.Followings} /> 
            <FollowList header="팔로워" data={me.Followers} /> 
        </AppLayout>
    )
}

export default Profile;
