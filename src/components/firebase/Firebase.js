import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config={
  apiKey: "AIzaSyCVpsuX3fHLwYlFCMd1esNUumURXN-ieaY",
  authDomain: "jx-clothing-eb266.firebaseapp.com",
  databaseURL: "https://jx-clothing-eb266.firebaseio.com",
  projectId: "jx-clothing-eb266",
  storageBucket: "",
  messagingSenderId: "947103291680",
  appId: "1:947103291680:web:35cfce3d66a4a3f8"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore =firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const signInWithGoogle=()=> auth.signInWithPopup(provider);

 export default firebase;

//  firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;