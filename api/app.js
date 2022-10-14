import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR6zY8h1D5MB8KfxUQbG3_v1UT9DHedbI",
    authDomain: "todo-ean.firebaseapp.com",
    databaseURL: "https://todo-ean-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-ean",
    storageBucket: "todo-ean.appspot.com",
    messagingSenderId: "797173009366",
    appId: "1:797173009366:web:25cb03c223afd5414b7277"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
