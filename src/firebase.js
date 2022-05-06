// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSNku3Qktl2r14l-fdckWe2j55KmnKqDs",
  authDomain: "eindproject-349208.firebaseapp.com",
  projectId: "eindproject-349208",
  storageBucket: "eindproject-349208.appspot.com",
  messagingSenderId: "199063914665",
  appId: "1:199063914665:web:64dab11290fa64516341b8"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore()
const storage = getStorage(app);
export const db = getFirestore(app)

//https://firebaseopensource.com/projects/rakannimer/react-firebase/modules/react-firebase-docs/docs/react-firebase-realtime-database/getting-started#components


