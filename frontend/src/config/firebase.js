import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCc4eMyuJnKAR9o_4WWKUIs7ymRl2I1wI8",
  authDomain: "doe-se-2cf07.firebaseapp.com",
  databaseURL: "https://doe-se-2cf07-default-rtdb.firebaseio.com",
  projectId: "doe-se-2cf07",
  storageBucket: "doe-se-2cf07.appspot.com",
  messagingSenderId: "914090913320",
  appId: "1:914090913320:web:381a3c6106f54b159b0f1d",
  measurementId: "G-SEH5Y8ZJ8C",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
