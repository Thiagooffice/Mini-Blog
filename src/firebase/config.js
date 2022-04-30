


import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApyjCsC244-aaY9JTrdZoRjjFRmflnOj4",
  authDomain: "miniblog-13d65.firebaseapp.com",
  projectId: "miniblog-13d65",
  storageBucket: "miniblog-13d65.appspot.com",
  messagingSenderId: "398801987025",
  appId: "1:398801987025:web:60648f647d4d5985566cf0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}