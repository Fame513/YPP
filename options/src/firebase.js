import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAlYdK3Bpb_qAsFn733rqbhiUbxLh-0e48",
  authDomain: "yppy-1356c.firebaseapp.com",
  databaseURL: "https://yppy-1356c.firebaseio.com",
  projectId: "yppy-1356c",
  storageBucket: "yppy-1356c.appspot.com",
  messagingSenderId: "95008419704"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
