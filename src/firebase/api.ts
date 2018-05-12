import firebase, {auth, dbrealtime} from "./firebaseIndex";


export function getProjectsPath(uid) {
    return `users/${uid}/projects`
}

export function signOut() {
    return new Promise((resolve, reject) => {
        auth.signOut()
            .catch(error => {
                reject(`${error.code} - ${error.message}`)
            })
            .then(res => {
                resolve(res)})
    })
}

export function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(
            user => {
                unsubscribe();
                resolve(user);
            },
            error => {
                unsubscribe();
                reject(`${error.code} - ${error.message}`);
            },
        )
    })
}

export function addProject({uid, project}) {
    let projectsRef = dbrealtime.ref(getProjectsPath(uid));
    return projectsRef.push(project);
}

export function createNewUserInDB(userdata) {
    const uid = userdata.id;
    const path = (id) => `memberlist/${id}`;
    const projectsRef = dbrealtime.ref(path(uid));
    return projectsRef.push(userdata);

}

export function getProjects(uid) {
    let projectsRef = dbrealtime.ref(getProjectsPath(uid));
    debugger;
    return projectsRef.once('value')
}

export function signInWithEmailAndPassword({email, password}) {
    return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                reject(`${error.code} - ${error.message}`)
            })
            .then(res => {
                resolve(auth.currentUser)
            })
    })
}

export function createUserWithEmailAndPassword({email, password}) {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch(error => {
                reject(`${error.code} - ${error.message}`)
            })
            .then(res => {
                resolve(auth.currentUser)
            })
    })
}

export function firebaseLoginGoogle() {
    return new Promise((resolve, reject) => {
        let googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithRedirect(googleProvider)
        .catch(error => {
            reject(`${error.code} - ${error.message}`)
        })
        .then(res => {
            resolve(auth.currentUser)
        })
    })
}