import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2uBBt0pQ9Mjp_ukpUk8F3cD5KfTfA340",
    authDomain: "linkedin-clone-b0c09.firebaseapp.com",
    projectId: "linkedin-clone-b0c09",
    storageBucket: "linkedin-clone-b0c09.appspot.com",
    messagingSenderId: "523213580243",
    appId: "1:523213580243:web:e82860653b9435415ab126"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };