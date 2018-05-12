import {takeEvery} from "redux-saga/effects";
import {INIT_TODO} from "../actions/tasks";
import {INIT_PROJECTS, ADD_PROJECT} from "../actions/projects";
import {actionTypes as actionAction} from "../actions/auth";
import { all } from "redux-saga/effects";

import { authUserSagaLogIn, authUserSagaSignUp, authUserSagaCheck, logoutSaga} from "./auth";
import {addProjectSaga, initProjectSaga} from "./projects";


export function* watchAuth() {
    yield all([
        takeEvery(ADD_PROJECT, addProjectSaga),
        takeEvery(actionAction.SIGNUP.SIGNUP, authUserSagaSignUp),
        takeEvery(actionAction.LOGIN.LOGIN, authUserSagaLogIn),
        takeEvery(actionAction.LOGOUT.REQUEST, logoutSaga),
        takeEvery(actionAction.AUTH.CHECK_STATE, authUserSagaCheck),

    ]);
}
export function* watchProjects() {
    yield all([
        takeEvery(ADD_PROJECT, addProjectSaga),
        takeEvery(INIT_PROJECTS, initProjectSaga),

    ]);
}