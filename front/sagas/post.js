import { delay, fork, all, takeLatest, put, call, takeLeading, throttle, debounce, take} from "redux-saga/effects";
import axios from 'axios';
// import Axios from 'axios';
// import qs from 'query-string';
import Cookies from 'universal-cookie';
import { 
    ADD_COMMENT_FAILURE, 
    ADD_COMMENT_REQUEST, 
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE, 
    ADD_POST_REQUEST, 
    ADD_POST_SUCCESS, 
    generateDummyPost, 
    LIKE_POST_FAILURE, 
    LIKE_POST_REQUEST, 
    LIKE_POST_SUCCESS, 
    LOAD_POST_FAILURE, 
    LOAD_POST_REQUEST, 
    LOAD_POST_SUCCESS, 
    REMOVE_POST_FAILURE, 
    REMOVE_POST_REQUEST, 
    REMOVE_POST_SUCCESS, 
    UNLIKE_POST_FAILURE, 
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS
} from "../reducers/post";
import { warningMsg } from "../utils/sweetAlertUtils";
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from "../reducers/user";
const cookies = new Cookies();
function addPostAPI(data) {
    const accessToken = cookies.get("accessToken");
    const userEmail = cookies.get("userEmail");
    const newObj = {
        description : data,
        email : userEmail
    }
    return axios.post('/auth/post', newObj,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    }).then(res => res.data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        console.log("result after add post :: ", result);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result,
        })
        yield put({
            type: ADD_POST_TO_ME,
            data: result.postId,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: ADD_POST_FAILURE,
            data: error.data
        })
    }
}

function likePostAPI(data) {
    const accessToken = cookies.get("accessToken");
    const userEmail = cookies.get("userEmail");
    const newObj = {
        email : userEmail
    };
    // return axios.patch(`/auth/post/${data}/like`, newObj,{
    //     headers:{
    //         "Authorization": `Bearer ${accessToken}`,
    //         "Content-Type": "application/json",
    //     },
    //     withCredentials : true
    // });
    return axios.post(`/auth/post/${data}/like`, newObj,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        withCredentials : true
    });
}

/**
 * ????????? ????????? ?????? ?????? ????????? ?????? ???????????? ???????????? ??????. 
 * ????????? like??? ???????????????, ???????????? ????????? ?????? ???????????? ???????????? ?????????. 
 * ???????????? ???????????? ????????? ?????? ??????????????? ?????? ????????? post??? ?????? ???????????? ??????????????? ??????. 
 */
function* likePost(action) {
    try {
        console.log("postid for like post  :: ", action.data);
        const result = yield call(likePostAPI, action.data);
        console.log("likePostSuccess!!", result);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: {
                postId : action.data,
                result : result.data
            },
        }); 
    } catch (error) {
        warningMsg("??????! ???????????? ???????????????!");
        yield put({
            type: LIKE_POST_FAILURE,
            data: error.data 
        })
    }
}

function unlikePostAPI(data) {
    const accessToken = cookies.get("accessToken");
    const userEmail = cookies.get("userEmail");
    const newObj = {
        email : userEmail
    };
    return axios.post(`/auth/post/${data}/unlike`, newObj,{
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        }
    });
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: {
                postId : action.data,
                result : result.data
            },
        }); 
    } catch (error) {
        yield put({
            type: UNLIKE_POST_FAILURE,
            data: error.data 
        })
    }
}

function loadPostAPI(data) {
    return axios.get(`/api/posts?page=${data.pageNumber}&size=${data.pageSize}`);
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        console.log("load post success :: ", result);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data.result,
        }); 
    } catch (error) {
        console.log(error);
        yield put({
            type: LOAD_POST_FAILURE,
            data: error.data 
        })
    }
}

function removePostAPI(data) {
    return axios.post('/api/post', data);
}

function* removePost(action) {
    try {

        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data
        });
        yield put({ 
            type: REMOVE_POST_OF_ME,
            data: action.data
        })
    } catch (error) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.data
        })
    }
}

function addCommentAPI(data) {
    const accessToken = cookies.get("accessToken");
    const userEmail = cookies.get("userEmail");
    const newObj = {
        description : data.description,
        email : userEmail,
        postId : data.postId,
    }
    return axios.post('/auth/comment', newObj, {
            headers:{
                'Authorization': `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        }
    );
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: error.data
        })
    }
}

function* watchLikePost(){
    yield takeLatest(LIKE_POST_REQUEST, likePost); // ??????????????? ?????? ????????? takeLeading
}

function* watchUnlikePost(){
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost); // ??????????????? ?????? ????????? takeLeading
}


function* watchAddPost(){
    yield takeLeading(ADD_POST_REQUEST, addPost); // ??????????????? ?????? ????????? takeLeading
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST, loadPost); // ??????????????? ?????? ????????? takeLeading
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost); // ??????????????? ?????? ????????? takeLeading
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment); // ??????????????? ?????? ????????? takeLeading
}

export default function* postSaga(){
    yield all([
        fork(watchLikePost), 
        fork(watchUnlikePost), 
        fork(watchLoadPost), 
        fork(watchAddPost), 
        fork(watchRemovePost), 
        fork(watchAddComment), 
    ])
};