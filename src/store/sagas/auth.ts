import {push} from 'react-router-redux';
import {put, call} from "redux-saga/effects";

import * as actions from "../actions/index";
import {
    createNewUserInDB,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword
} from "../../firebase/api";

export function* logoutSaga() {
    yield call(signOut);
    yield put(actions.removeUser());
    yield put(actions.logoutSucceed());
}

export function* authUserSagaLogIn(action) {
    yield put(actions.logInStart());
    try {
        const user = yield call(signInWithEmailAndPassword, {email: action.email, password: action.password});
        yield put(push('/todo'));
        yield put(actions.logInSuccess(user));
    } catch (error) {
        yield put(actions.logInFail(error));
    }
}

export function* authUserSagaSignUp(action) {
    yield put(actions.signUpStart());
    try {
        const user = yield call(createUserWithEmailAndPassword, {email: action.email, password: action.password});
        const userEmail = user.email;
        const userId = user.uid;

        yield call(createNewUserInDB, {id: userId, email: userEmail});
        yield put(push('/todo'));
        yield put(actions.signUpSucceed(user));
    } catch (error) {
        yield put(actions.signUpFail(error));
    }
}

export function* authUserSagaCheck() {
    try {
        const user = yield call(onAuthStateChanged);
        yield put(actions.isLogin(user));
    } catch (error) {
        yield put(actions.isNotLogin(error));
    }

}