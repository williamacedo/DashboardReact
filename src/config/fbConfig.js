import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCOigdAUvRfGOPDB8mCGpqzrcLfKB-YuhY",
  authDomain: "dashboard-ac554.firebaseapp.com",
  databaseURL: "https://dashboard-ac554.firebaseio.com",
  projectId: "dashboard-ac554",
  storageBucket: "",
  messagingSenderId: "688453365851"
};

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
