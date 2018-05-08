// import { delay } from "redux-saga";
import {push} from 'react-router-redux';
import {put, call} from "redux-saga/effects";
import {auth} from '../../firebaseIndex';
import * as actions from "../actions/index";

export function* logoutSaga() {
    yield call([auth, auth.signOut]);
    yield put(actions.logoutSucceed());
}

export function* authUserSagaLogIn(action) {
    yield put(actions.logInStart());
    try {
        yield call(
            [auth, auth.signInWithEmailAndPassword],
            action.email,
            action.password
        );
        const user = auth.currentUser;
        const idToken = user.getToken(true);
        const userId = user.uid;
        yield put(push('/todo'));
        yield put(
            actions.logInSuccess({idToken, userId, user})
        );
    } catch (error) {
        yield put(actions.logInFail(error));
    }
}

export function* authUserSagaSignUp(action) {
    yield put(actions.signUpStart());
    try {
        yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.email,
            action.password
        );
        const user = auth.currentUser;
        const idToken = user.getToken(true);
        const userId = user.uid;
        yield put(
            actions.signUpSucceed({idToken, userId, user})
        );
    } catch (error) {
        yield put(actions.signUpFail(error));
    }

}

export function* authUserSagaCheck() {
    try {
        const user = yield call(auth, auth.onAuthStateChanged);
        yield put(actions.isLogin(user));
    } catch (error) {
        yield put(actions.isNotLogin(error));
    }

}