import { Form, Input, Button } from 'antd';
import { useCallback, useEffect } from 'react';
import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../../../reducers/post';
import { compose } from 'redux';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const {addCommentDone, addCommentLoading} = useSelector((state) => state.post);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if(addCommentDone){
            setCommentText('');
        }
    }, [addCommentDone])

    const onSubmitComment = useCallback(() => {
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {description: commentText, postId: post.postId}
        });
    }, [commentText, id]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{positon:'relative', margin:0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button 
                    style={{position: 'absolute', right:0, bottom:-40, zIndex: 1}} 
                    htmlType="submit" 
                    type="primary"
                    loading={addCommentLoading}>
                        댓글 달기
                </Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}
export default CommentForm;