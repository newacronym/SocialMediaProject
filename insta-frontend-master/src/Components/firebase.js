import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDlt9CxEAgaC_0p6N8ScpvdhrtMjzPZ6MU",
  authDomain: "instalclone-8df3a.firebaseapp.com",
  projectId: "instalclone-8df3a",
  storageBucket: "instalclone-8df3a.appspot.com",
  messagingSenderId: "243620146728",
  appId: "1:243620146728:web:b8c0545f787cbc97770f1d",
  measurementId: "G-X5V1WLS1H3"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};




// import firebase from 'firebase/compat/app';

// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlt9CxEAgaC_0p6N8ScpvdhrtMjzPZ6MU",
//   authDomain: "instalclone-8df3a.firebaseapp.com",
//   projectId: "instalclone-8df3a",
//   storageBucket: "instalclone-8df3a.appspot.com",
//   messagingSenderId: "243620146728",
//   appId: "1:243620146728:web:b8c0545f787cbc97770f1d",
//   measurementId: "G-X5V1WLS1H3"
// };
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// // const storage=firebase.storage();
// export {auth};