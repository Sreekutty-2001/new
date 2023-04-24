import {call, put, takeEvery} from 'redux-saga/effects';
import {post} from '../actions/api';
import {SUCCESS_USERS,GET_USERS_REQ, POST_USER_REQ, POST_SUCCESS} from '../types';

function* getUsers({type, payload}) {
    try {
        const data = yield  call(post, "user/0", payload);
        yield put({"type":SUCCESS_USERS,"users": data});

    }catch(error){
        console.log(error)
    }
}
function* saveUser({type, payload}) {
    try {
        const data = yield  call(post, "user/", payload);
        yield put({"type":POST_SUCCESS,"users": data});
    }catch(error){
        console.log(error)
    }
}
function* userSaga(){
    yield takeEvery(GET_USERS_REQ, getUsers);
    yield takeEvery(POST_USER_REQ, saveUser);
}
export default userSaga