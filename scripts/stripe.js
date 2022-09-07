"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const checkoutButton = document.querySelector(".checkout");

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",
  authDomain: "prompt-maker.firebaseapp.com",
  projectId: "prompt-maker",
  storageBucket: "prompt-maker.appspot.com",
  messagingSenderId: "449676529770",
  appId: "1:449676529770:web:470531242f944aa58dfa13",
  measurementId: "G-DWN7577Z1B",
});

const auth = getAuth(firebaseApp);

//Check if user is logged in
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //   console.log(user.email);
    } else {
      console.log("No user");
    }
  });
};
monitorAuthState();

let stripe = Stripe(
  "pk_test_51Lf8qkIAQEobM5okYXntFcUGzSPwNkeB4QfnUbY6tAKkpS1Wz9zrS5jh00AVBdVHSKwTZoP1npJDhySg4SjimfQO00TKjGe4wa"
);

export let amount;
export let name;
export let sku;

const startCheckout = async () => {
  const { error } = await stripe
    .redirectToCheckout({
      lineItems: [{ price: "price_1Lf952IAQEobM5okUYxfHk1z", quantity: 1 }],
      mode: "subscription",
      successUrl: "https://google.com/",
      cancelUrl: "https://youtube.com/",
    })
    .then((result) => {
      alert(result);
    });

  if (error) {
    alert("Our payment system is broken!");
  }
};

checkoutButton.addEventListener("click", startCheckout);
