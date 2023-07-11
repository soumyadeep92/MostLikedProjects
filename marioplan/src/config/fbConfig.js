import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBul1M8Y4fJXMJgZhskLR8exDShWX45nLw",
  authDomain: "marioapp-dded8.firebaseapp.com",
  projectId: "marioapp-dded8",
  storageBucket: "marioapp-dded8.appspot.com",
  messagingSenderId: "403146739325",
  appId: "1:403146739325:web:845358929d5111254d6b14",
  measurementId: "G-43WR7EZ20Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;