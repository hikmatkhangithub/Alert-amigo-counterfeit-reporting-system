import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA2fwCwoHOTOjleY1dmEU2Ys5rdblTwGE0",
  authDomain: "alert-amigo-app.firebaseapp.com",
  databaseURL: "https://alert-amigo-app.firebaseio.com",
  projectId: "alert-amigo-app",
  storageBucket: "alert-amigo-app.appspot.com",
  messagingSenderId: "641128062406",
  appId: "1:641128062406:web:eb2c35b6c64405d825e6c7",
  measurementId: "G-Y0N9XES4LE"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
