"use state";

import React from "react";
import { auth } from '@/app/api/firebase/firebase'
var firebase = require("firebase");
var firebaseui = require("firebaseui");

const page = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
};

export default page;
