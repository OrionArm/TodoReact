import firebase from 'firebase';
import firestore from "firebase/firestore";

export const fireConfig = {
    apiKey: "AIzaSyAU1QhrBS8RGhBqVRXxx0CsISxJ-rO62II",
    authDomain: "todoforyoureact.firebaseapp.com",
    databaseURL: "wss://todoforyoureact.firebaseio.com",
    projectId: "todoforyoureact",
    storageBucket: "todoforyoureact.appspot.com",
    messagingSenderId: "291845714480",
    timestampsInSnapshots: true
};


// export const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '/todo',
//     // We will display Google and Facebook as login providers.
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//
//     ]
// };

firebase.initializeApp(fireConfig);

export const auth = firebase.auth();
export const dbfirestore = firebase.firestore();
export const dbrealtime = firebase.database();

