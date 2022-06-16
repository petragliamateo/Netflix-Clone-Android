/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAAan55ZxymPvxfsKDEawrwzkgpsuZ3hcA',
  authDomain: 'netflix-clone-app-b00bf.firebaseapp.com',
  projectId: 'netflix-clone-app-b00bf',
  storageBucket: 'netflix-clone-app-b00bf.appspot.com',
  messagingSenderId: '647020621190',
  appId: '1:647020621190:web:82db61da301ca8f3379007',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Creo la database por única vez:
// seedDatabase(firebase);

export { firebase };
