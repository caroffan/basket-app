import {getAuth, onAuthStateChanged} from "firebase/auth";

export default function getUserConnected() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            return user;
            // ...
        } else {
            // User is signed out
            return null;
        }
    });
}