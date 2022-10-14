import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

export function connectUser(email, password) {
    return new Promise((res, rej) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                res(userCredential.user);
                // ...
            })
            .catch((error) => {
                rej(error.message);
            });
    })
}

export function createUser(email, password) {
    return new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                res(userCredential.user);
                // ...
            })
            .catch((error) => {
                rej(error.message);
                // ..
            });
    })
}