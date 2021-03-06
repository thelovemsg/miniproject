/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import Cookies from 'universal-cookie';
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../../reducers/post';
const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state) => state.post);
    const [commentFormOpend, setCommentFormOpened] = useState(false); 
    
    const onLike = useCallback(() => {
        dispatch({
            type: LIKE_POST_REQUEST,
            data: post.postId
        })
    }, []);

    const onUnlike = useCallback(() => {
        dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.postId
        })
    }, []);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    
    const id = useSelector((state) => state.user.me?.id); // optional chaining
    // const id = me && me.id;
    const liked = post.likers.find((v) => {
        if(v.memberId == id) {
            return true
        }
    }) || false;
    customElements
    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id
        })
    }, []);

    console.log("===================");
    return (
       <div>
           <Card key={post.postId}
                cover={post.imageList[0] && <PostImages images={post.imageList} />}
                actions={[
                    <RetweetOutlined key="retweet"/>, 
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                        : <HeartOutlined key="heart" onClick={onLike}/>
                    ,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.memberId === id ? (
                            <>
                                <Button>??????</Button>
                                <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>??????</Button>
                            </>
                            ) : <Button>??????</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                // extra={ id && <FollowButton post={post} />}
            >
            <Card.Meta
                avatar={<Avatar>{post.writer[0]}</Avatar>}
                title={post.writer} 
                description={<PostCardContent postData={post.description} />}
            />
            </Card>
            {commentFormOpend && (
                <div>
                    {/* ?????? ???????????? ????????? ?????? ????????? ?????? - ????????? id */}
                    <CommentForm post={post}/>
                    <List 
                        header={`${post.commentList.length}?????? ??????`}
                        itemLayout="horizontal"
                        dataSource={post.commentList}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.writer}
                                    avatar={<Avatar>{item.writer[0]}</Avatar>}
                                    content={item.description}
                                />
                            </li>
                        )}
                    />
                </div>)}
           {/* <CommentForm />
           <Comments /> */}
       </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;