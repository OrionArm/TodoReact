import * as actions from "../actions";
import { call, fork, select, takeEvery } from 'redux-saga/effects';
import {dbfirestore, auth} from '../../firebaseIndex';

// export function* initProjectsSaga(action) {
//     try {
//         const databaseRef = firebase.database().ref();
//         const projectsRef = databaseRef.child("projects");
//
//         const response = yield projectsRef.on(
//             "value", snapshot => {
//                 console.log("response", snapshot.val())
//             }
//         );
//         yield put(actions.setProjects(response.data));
//     } catch (error) {
//         yield put(actions.initProjectsFail());
//     }
// }

// const projectTransformer = project => {
//     const res = [];
//     project.forEach(doc => res.push({
//         id: doc.id,
//         ...doc.data()
//     }));
//     return res
// };
//
// export function* initProjectsSaga () {
//     yield fork(
//         rsf.firestore.syncCollection,
//         'projects',
//         {
//             successActionCreator: actions.setProjects(),
//             transform: projectTransformer
//         }
//     )
// }


export function* initProjectsSaga () {
    // yield dbfirestore.collection("projects").get().then(querySnapshot => {
    //     querySnapshot.forEach((doc) => {
    //         doc.data().map(element => {
    //             console.log(element)
    //         });
    //     });
    // });

    // yield dbfirestore.collection("projects")
    // yield login().createUserWithEmailAndPassword("Doom@ya.ru", "123").catch(function(error) {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('errorMessage', errorMessage);
    // });
    yield auth()
}