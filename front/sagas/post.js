import { delay, fork, all, takeLatest, put} from "redux-saga/effects";
import shortId from "shortid";
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
     ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_TO_ME, generateDummyPost, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS } from "../reducers/post";
import { REMOVE_POST_OF_ME } from "../reducers/user";

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        delay(2000);
        // const result = yield call(addPostAPI, action.data);
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data
            }
        })
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        })
    } catch (error) {
        yield put({
            type: ADD_POST_FAILURE,
            data: error.data
        })
    }
}

function loadPostAPI(data) {
    return axios.get('/api/posts', data);
}

function* loadPost(action) {
    try {
        delay(1000);
        console.log("loading Post...");
        const id = shortId.generate();
        yield put({
            type: LOAD_POST_SUCCESS,
            data: generateDummyPost(10)
        });
    } catch (error) {
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

        delay(1000);
        // const result = yield call(addPostAPI, action.data);
        const id = shortId.generate();
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
    return axios.post('/api/post', data);
}

function* addComment(action) {
    try {
        delay(1000);
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        })
    } catch (error) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: error.data
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST, loadPost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost); // 첫번째것만 하고 싶으면 takeLeading
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment); // 첫번째것만 하고 싶으면 takeLeading
}

export default function* postSaga(){
    yield all([
        fork(watchLoadPost), 
        fork(watchAddPost), 
        fork(watchRemovePost), 
        fork(watchAddComment), 
    ])
};