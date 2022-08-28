"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",
//   authDomain: "prompt-maker.firebaseapp.com",
//   projectId: "prompt-maker",
//   storageBucket: "prompt-maker.appspot.com",
//   messagingSenderId: "449676529770",
//   appId: "1:449676529770:web:470531242f944aa58dfa13",
//   measurementId: "G-DWN7577Z1B",
// });

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");
