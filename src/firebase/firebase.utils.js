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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log({collection: collectionSnapshot.docs.map(doc => doc.data()) });

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName: 'Test User',
          email: 'randomEmail@gmail.com',
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    console.log(snapShot.data());
    return userRef;
  }

  export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;