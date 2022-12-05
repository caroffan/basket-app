import {getAuth, onAuthStateChanged } from "firebase/auth";
import {useState} from "react";

export default function Connected(){
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            setConnected(true);
            // ...
        } else {
            // User is signed out
            setConnected(false);
        }
        setLoading(true)
    });
    return {connected, loading};
}