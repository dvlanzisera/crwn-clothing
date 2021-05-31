import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVI0A-VDBOLyWaegSh_lbAwxSfJdlIAig",
    authDomain: "crwn-db-f10b1.firebaseapp.com",
    projectId: "crwn-db-f10b1",
    storageBucket: "crwn-db-f10b1.appspot.com",
    messagingSenderId: "846082832502",
    appId: "1:846082832502:web:853791422210a1913a0757",
    measurementId: "G-TGT52J2036"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;