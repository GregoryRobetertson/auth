// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50Rdkhp3EHbXIbeNRXp6eSAkQm1WFqN4",
  authDomain: "auth-27c14.firebaseapp.com",
  projectId: "auth-27c14",
  storageBucket: "auth-27c14.appspot.com",
  messagingSenderId: "28608723062",
  appId: "1:28608723062:web:1a44502844176b325f0757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {provider, auth};