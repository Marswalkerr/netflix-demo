import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBscv3tvGMKYgk7mRp6xh3qxfXIyF_suUw",
    authDomain: "netflix-clone-a15d4.firebaseapp.com",
    projectId: "netflix-clone-a15d4",
    storageBucket: "netflix-clone-a15d4.appspot.com",
    messagingSenderId: "135654238872",
    appId: "1:135654238872:web:71215943ad0b5d5b1cbeed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();

  export { auth };
  export default db;