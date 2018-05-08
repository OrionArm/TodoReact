import {takeEvery} from "redux-saga/effects";
import {INIT_TODO} from "../actions/tasks";
import {INIT_PROJECTS} from "../actions/projects";
import {actionTypes as actionAction} from "../actions/auth";
import { all } from "redux-saga/effects";

import {initTasksSaga} from "./tasks";
import {initProjectsSaga} from "./projects";
import { authUserSagaLogIn, authUserSagaSignUp, authUserSagaCheck, logoutSaga} from "./auth";

// export function* watchTasksInit() {
//     yield takeEvery(INIT_TODO, initTasksSaga);
// }
//
export function* watchProjectsInit() {
    yield takeEvery(INIT_PROJECTS, initProjectsSaga);
}

export function* watchAuth() {
    yield all([
        takeEvery(actionAction.SIGNUP.SIGNUP, authUserSagaSignUp),
        takeEvery(actionAction.LOGIN.LOGIN, authUserSagaLogIn),
        takeEvery(actionAction.LOGOUT.REQUEST, logoutSaga),
        takeEvery(actionAction.AUTH.CHECK_STATE, authUserSagaCheck),
    ]);
}
