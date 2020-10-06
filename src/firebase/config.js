import * as firebase from 'firebase/app';  
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPXrTL-BfIWKEDXbxV-ZGOrGD5cmxHdUk",
    authDomain: "firegram-caab6.firebaseapp.com",
    databaseURL: "https://firegram-caab6.firebaseio.com",
    projectId: "firegram-caab6",
    storageBucket: "firegram-caab6.appspot.com",
    messagingSenderId: "1019247887677",
    appId: "1:1019247887677:web:10bb8c918bdef421803154"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp  }
