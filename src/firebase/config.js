// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
import firebase  from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyByVN8L0pCvS1eXaMJaR0CGZP0DJhLf4ag",
  authDomain: "art-dump.firebaseapp.com",
  projectId: "art-dump",
  storageBucket: "art-dump.appspot.com",
  messagingSenderId: "201371471646",
  appId: "1:201371471646:web:71ce7900ab4551f541c30f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }