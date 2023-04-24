import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {post} from '../actions/api';
import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILED, LOGOUT_REQ,LOGOUT} from '../types';

function* auth({type, payload,navigate}) {
    try {
        const data = yield  call(post, "token/", payload);
        if (data) {
            console.log("saga -auth", data)
            localStorage.setItem("user", JSON.stringify(data));
            yield put({"type": LOGIN_SUCCESS, "user": data});
            navigate("/hrdashboard");
        }
    } catch (error) {
        console.log(error)
        yield put({"type": LOGIN_FAILED, "error": {"message": "Invalid Credentials"}});
        navigate("/");
    }
}

function* logout({type, navigate}) {
    try {
        console.log("saga logout");
        localStorage.setItem("user",null);
        yield put({"type": LOGOUT});
        navigate("/");
    } catch (error) {
        console.log(error)
        yield put({"type": LOGIN_FAILED, "error": {"message": "Invalid Credentials"}});
    }
}

function* authSaga() {
    yield takeEvery(LOGIN_REQUEST, auth);
    yield takeEvery(LOGOUT_REQ, logout);
}

export default authSaga