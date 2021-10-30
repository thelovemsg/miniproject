import { Avatar, Card, Button } from 'antd';
import { useCallback } from 'react';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
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