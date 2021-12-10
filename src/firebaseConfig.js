import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8IboVHdvJklcQr9RxeLTBlV-WZ0-8Sv0",
    authDomain: "pata-lk-test.firebaseapp.com",
    projectId: "pata-lk-test",
    storageBucket: "pata-lk-test.appspot.com",
    messagingSenderId: "451926409183",
    appId: "1:451926409183:web:0d2f02d55a2e9d9e190e6a",
    measurementId: "${config.measurementId}"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});
firebaseApp.firestore().enablePersistence();
const fireStore = firebaseApp.firestore();
const database = firebaseApp.database();
const storage = firebaseApp.storage();
const auth = firebase.auth();
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    fireStore,
    storage,
    firebase,
    database,
    auth,
    googleAuthProvider,
};