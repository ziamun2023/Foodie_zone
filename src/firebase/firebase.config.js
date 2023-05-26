// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: import.meta.VITE_authDomain,
  projectId: import.meta.VITE_projectId,
  storageBucket: import.meta.VITE_storeBucket,
  messagingSenderId: import.meta.VITE_messagingSenderId,
  appId: import.meta.deta.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app