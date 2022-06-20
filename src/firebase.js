import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvet6sNLNqtTsQZ0JVUIWYkbhWxr8C0aI",
    authDomain: "linkedin-clone-bfc3b.firebaseapp.com",
    projectId: "linkedin-clone-bfc3b",
    storageBucket: "linkedin-clone-bfc3b.appspot.com",
    messagingSenderId: "900989718004",
    appId: "1:900989718004:web:3b1ee032b34bacf112fda1",
    measurementId: "G-R4G7Y3GM6X"
  };

//   this code connect to firebase by setting up the database
  const firebaseApp= firebase.initializeApp(firebaseConfig)