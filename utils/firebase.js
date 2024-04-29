// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'patrikblog-dc674.firebaseapp.com',
  projectId: 'patrikblog-dc674',
  storageBucket: 'patrikblog-dc674.appspot.com',
  messagingSenderId: '401626043804',
  appId: '1:401626043804:web:75d5f7dca010fde04b6459'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
