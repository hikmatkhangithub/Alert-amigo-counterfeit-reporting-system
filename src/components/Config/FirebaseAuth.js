import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBMk20ZH_PtKUeirgu8rCQz4s7dB4XGwUg",
  authDomain: "alert-amigo.firebaseapp.com",
  databaseURL: "https://alert-amigo.firebaseio.com",
  projectId: "alert-amigo",
  storageBucket: "alert-amigo.appspot.com",
  messagingSenderId: "484751317474",
  appId: "1:484751317474:web:7b928a0d48f80a7f5a81bb",
  measurementId: "G-7KJ8EPJ5TE"
};

const fire = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { fire, facebookProvider };
