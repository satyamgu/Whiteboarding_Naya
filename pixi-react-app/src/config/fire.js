// import { initializeApp} from 'firebase/app'
// import {getAuth}  from "firebase/auth";

// var firebaseConfig = {
//     apiKey: "AIzaSyC7lxJ0s7JEnyuoCZs_n6i9xRPWOO4-Ycc",
//     authDomain: "collab-whiteboard-d8578.firebaseapp.com",
//     projectId: "collab-whiteboard-d8578",
//     storageBucket: "collab-whiteboard-d8578.appspot.com",
//     messagingSenderId: "435639916275",
//     appId: "1:435639916275:web:751c809c2278b76cd2c986"
//   };

//   const fire = initializeApp(firebaseConfig);

//   export const auth = getAuth(fire);
//   export default fire;

import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC7lxJ0s7JEnyuoCZs_n6i9xRPWOO4-Ycc",
    authDomain: "collab-whiteboard-d8578.firebaseapp.com",
    projectId: "collab-whiteboard-d8578",
    storageBucket: "collab-whiteboard-d8578.appspot.com",
    messagingSenderId: "435639916275",
    appId: "1:435639916275:web:751c809c2278b76cd2c986"
})

export const auth = app.auth()
export default app