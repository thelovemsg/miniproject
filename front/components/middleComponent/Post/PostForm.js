import { Form, Input, Button } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { addPost } from '../../../reducers/post';

const PostForm = () => { 
    const { imagePaths, addPostDone, addPostLoading } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');
    
    useEffect(() => {
        if(addPostDone){
            setText('');
        }
    }, [addPostDone])
    
    const onSubmit = useCallback(() => {
        dispatch(addPost(text)); // addPost는 객체임.  action은 원래 객체임 
    }, [text]);
    
    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])
    return (
        <Form style={{ margin: '10px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float:'right'}} htmlType="submit" loading={addPostLoading}>쨰잭</Button>
            </div>
            <div>
                {imagePaths && imagePaths.map((v) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={v} style={{width: '200px'}} alt={v}/>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default PostForm;