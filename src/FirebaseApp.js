import * as firebase from "firebase/app";
import {firebaseConfig} from "./firebaseConfig";

const FirebaseApp = firebase.initializeApp(firebaseConfig);
export default FirebaseApp;