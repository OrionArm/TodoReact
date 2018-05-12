import firebase from "firebase";

export const fireConfig = {
    apiKey: "AIzaSyAU1QhrBS8RGhBqVRXxx0CsISxJ-rO62II",
    authDomain: "todoforyoureact.firebaseapp.com",
    databaseURL: "wss://todoforyoureact.firebaseio.com",
    projectId: "todoforyoureact",
    storageBucket: "todoforyoureact.appspot.com",
    messagingSenderId: "291845714480",
    timestampsInSnapshots: true
};

firebase.initializeApp(fireConfig);

export const auth = firebase.auth();
export const dbrealtime = firebase.database();

export default firebase;