import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCXu-KTp8tIJg2Ej2qb_RktxXYDxDOjeaI",
    authDomain: "todoist-tut-daef1.firebaseapp.com",
    projectId: "todoist-tut-daef1",
    storageBucket: "todoist-tut-daef1.appspot.com",
    messagingSenderId: "388959020992",
    appId: "1:388959020992:web:fdd672fa9b9a5419344a25"
});

export {firebaseConfig as firebase};