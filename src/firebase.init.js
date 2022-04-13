// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaV4f3rqBF2OSX9OqkgetWtklTMtUIg4s",
    authDomain: "ema-jhon-simple-8b30f.firebaseapp.com",
    projectId: "ema-jhon-simple-8b30f",
    storageBucket: "ema-jhon-simple-8b30f.appspot.com",
    messagingSenderId: "964699567235",
    appId: "1:964699567235:web:f6cdd5603ec6ababff57b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;