import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtL1B7S64jySBJi0LO7coZErU_E2Lwp-c",
    authDomain: "bakuhatodo-19c22.firebaseapp.com",
    databaseURL: "https://bakuhatodo-19c22.firebaseio.com",
    projectId: "bakuhatodo-19c22",
    storageBucket: "bakuhatodo-19c22.appspot.com",
    messagingSenderId: "585492592483",
    appId: "1:585492592483:web:f4ae3653a7d16d5db40556",
    measurementId: "G-R22D66N3SL"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default config;

