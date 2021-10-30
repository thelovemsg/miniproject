import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/middleComponent/FollowList';
import NicknameEditForm from '../components/middleComponent/NicknameEditForm';

const Profile = () => {
    const followingList = [{nickname: 'nickname1'},{nickname: 'nickname2'},{nickname: 'nickname3'},{nickname: 'nickname4'}];
    const followerList = [{nickname: 'nickname1'},{nickname: 'nickname2'},{nickname: 'nickname3'},{nickname: 'nickname4'}];

    return (
        <AppLayout>
            <Head>
                <title>내 프로필</title>
            </Head>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList} /> 
            <FollowList header="팔로워 목록" data={followerList} /> 
        </AppLayout>
    )
}

export default Profile;
