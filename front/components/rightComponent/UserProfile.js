import { Avatar, Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { logoutRequestAction } from '../../reducers/user';
import { array } from 'prop-types';

const UserProfile = () => {
    
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    });
    return(
        <>
            <Card
                actions={[
                    <div key="writeNum">적은 글 수 <br />{me.postLength.length}</div>,
                    <div key="following">팔로잉<br />{0}</div>,
                    <div key="following">팔로워<br />{0}</div>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{"nickname"}</Avatar>}
                    title={"nickname"}
                />
                <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;