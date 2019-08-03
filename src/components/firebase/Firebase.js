import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVpsuX3fHLwYlFCMd1esNUumURXN-ieaY",
  authDomain: "jx-clothing-eb266.firebaseapp.com",
  databaseURL: "https://jx-clothing-eb266.firebaseio.com",
  projectId: "jx-clothing-eb266",
  storageBucket: "",
  messagingSenderId: "947103291680",
  appId: "1:947103291680:web:35cfce3d66a4a3f8"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const joined = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        joined,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating new user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//  firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
