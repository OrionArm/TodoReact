import * as actions from "../actions";
import {take, call, put, takeEvery, fork, cancel} from 'redux-saga/effects'
import {auth} from '../../firebase/firebaseIndex'
import {addProject, getProjects} from '../../firebase/api';
import {
    ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT,
    ADD_PROJECT_SUCCESS, EDIT_PROJECT_SUCCESS, DELETE_PROJECT_SUCCESS
} from "../actions/projects";
import {actionTypes} from "../actions/auth";


export function* addProjectSaga(action) {
    const uid = auth.currentUser.uid;
    const newProject = {
        completed: false,
        title: action.title,
    };
    yield call(addProject, {uid, project: newProject});
    yield put(ADD_PROJECT_SUCCESS);

}

export function* initProjectSaga() {
    yield take(actionTypes.LOGIN.SUCCESS);
    const uid = yield select(state => state.auth.userId);
    try {
        const projects = yield call(getProjects, uid);
        // yield projects.then(snapshot => data = snapshot.val);
        // yield console.dir( 'data', );
    } catch (e) {
        console.log(e)
    }
}
