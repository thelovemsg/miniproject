import { all, fork, put, delay, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';

import {
    LOG_IN_FAILURE, 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_OUT_FAILURE, 
    LOG_OUT_REQUEST, 
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_REQUEST, 
    FOLLOW_REQUEST, 
    UNFOLLOW_REQUEST, 
    FOLLOW_FAILURE, 
    FOLLOW_SUCCESS, 
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    SIGN_UP_FAIL_DUPLICATE
} from "../reducers/user";
import { warningMsg } from "../utils/sweetAlertUtils";

export const FAIL = "FAIL";
export const SUCCESS = "SUCCESS";
export const DUPLICATE = "DUPLICATE";

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* login(action) {
    try {
        const result = yield call(logInAPI, action.data);
        console.log(result);
        if(result.data.statusCode != 200){
            warningMsg(result.data.responseMessage);
            yield put({
                type: LOG_IN_FAILURE,
            })
        }else{
            yield put({
                type: LOG_IN_SUCCESS,
                data: result.data
            });
        }
    } catch (error) {
        yield put({
            type: LOG_IN_FAILURE,
            error: error.data
        })
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logout() {
    try {
        yield delay(1000);
        const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: error.data
        })
    }
}

function signUpAPI(data) {
    let test = axios.post('/api/member', data);
    return test;
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 
        if(result.data === SUCCESS){
            yield put({
                type: SIGN_UP_SUCCESS,
            });
        } else if(result.data === DUPLICATE){
            yield put({
                type: SIGN_UP_FAIL_DUPLICATE,
            });
        } else if(result.data === FAIL){
            yield put({
                type: SIGN_UP_FAIL,
            });
        }
    } catch (error) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.data
        })
    }
}

function followAPI(data) {
    return axios.post('/api/login', data);
}

function* follow(action) {
    try {
        yield delay(1000);
        // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data
        });
    } catch (error) {
        yield put({
            type: FOLLOW_FAILURE,
            error: error.data
        })
    }
}

function unFollowAPI(data) {
    return axios.post('/api/login', data);
}

function* unfollow(action) {
    try {
        yield delay(1000);
        // const result = yield call(logInAPI, action.data); // 첫번째 자리가 함수고 그 다음자리부터는 함수의 매개변수가 온다. 
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data
        });
    } catch (error) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: error.data
        })
    }
}

function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST, follow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchUnfollow(){
    yield takeLatest(UNFOLLOW_REQUEST, unfollow); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST, login); // LOG_IN이라는 action이 실행될 때 까지 기다리겠다는 말
}

function* watchLogOut(){
    // yield takeEvery('LOG_OUT_REQUEST', logout); // 여러번 클릭해도 그만큼 응답이 감
    yield takeLatest(LOG_OUT_REQUEST, logout); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
    // yield throttle('LOG_OUT_REQUREST', logout, 10000); // 얼마동안 한번만 요청을 보내도록 제한 가능
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp); //동시에 요청이 여러번 들어요면 마지막꺼만 실행한다. 응답을 취소하지 요청은 취소하지 않음
}

export default function* userSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}