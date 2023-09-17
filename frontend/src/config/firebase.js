import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxyJovApa2De_B62y5y6eZRyWZcbCQ5lE",
  authDomain: "stickyboard-5e131.firebaseapp.com",
  projectId: "stickyboard-5e131",
  storageBucket: "stickyboard-5e131.appspot.com",
  messagingSenderId: "377091587302",
  appId: "1:377091587302:web:6d5956612601d081580f27"
};

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
