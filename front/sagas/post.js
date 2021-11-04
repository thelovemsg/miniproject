import { delay, fork, all, takeLatest, put} from "redux-saga/effects";
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
     ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../reducers/post";

function addPostAPI(data) {
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        })
    } catch (error) {
        yield put({
            type: ADD_POST_FAILURE,
            data: error.data
        })
    }
}

function addCommentAPI(data) {
    return axios.post('/api/post', data);
}

function* addComment(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
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

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment); // 첫번째것만 하고 싶으면 takeLeading
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost), 
        fork(watchAddComment), 
    ])
};