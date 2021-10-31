import { Avatar, Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { logoutAction } from '../../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    });

    return(
        <>
            <Card
                actions={[
                    <div key="writeNum">적은 글 수 <br />0</div>,
                    <div key="following">팔로잉<br />0</div>,
                    <div key="followers">팔로워<br />0</div>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>MSG</Avatar>}
                    title="test"
                />
                <Button onClick={onLogOut}>로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;