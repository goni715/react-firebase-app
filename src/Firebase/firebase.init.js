import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const initializeAuthentication = () => {
    // Initialize Fireba
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;