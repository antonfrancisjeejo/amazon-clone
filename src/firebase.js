import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVfse4r8DV2AmB9Sg010n35WtwEzLTQ0E",
  authDomain: "clone-dd0a5.firebaseapp.com",
  databaseURL: "https://clone-dd0a5.firebaseio.com",
  projectId: "clone-dd0a5",
  storageBucket: "clone-dd0a5.appspot.com",
  messagingSenderId: "790286716411",
  appId: "1:790286716411:web:acad1b9bd068aa5cb44f5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
