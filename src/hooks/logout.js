import { getAuth, signOut } from "firebase/auth";
import {message} from "antd";

export default function logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        message.success("disconnected");
        window.location.href = "/";
    }).catch((error) => {
        message.error(error.code);
    });
}