import userSaga from "./users";
import authSaga from "./login";
import {all} from 'redux-saga/effects';
export default  function* rootSaga() {
    yield all([
        userSaga(),
        authSaga(),
    ]);
}
