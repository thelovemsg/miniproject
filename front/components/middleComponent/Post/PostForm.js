import { Form, Input, Button } from 'antd';
import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    })
    const onSubmit = useCallback(() => {
        console.log("addPost");
        dispatch(addPost); // addPost는 객체임.  action은 원래 객체임 
        setText('');
    }, []);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current])
    return (
        <Form style={{ margin: '10px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float:'right'}} htmlType="submit">쨰잭</Button>
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