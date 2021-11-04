//saga의 effects로 all, fork, call, put이 있다. 
//fork, call - generate함수를 실행한다. call은 동기함수, fork는 비동기 함수 호출
//yield - 그곳에서 멈춘다. 
//put - dispatch라고 생각하면 편하다. 
import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootsaga() {
    yield all([
        fork(postSaga), // fork대신에 call로 사용도 가능. 조금 차이가 있다. 
        fork(userSaga),
    ]);
}