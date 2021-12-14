// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgaUmhfXNs2k3AFKJTXoeaP8wBcQwvGlc",
  authDomain: "naturalbornwinners-4b2be.firebaseapp.com",
  projectId: "naturalbornwinners-4b2be",
  storageBucket: "naturalbornwinners-4b2be.appspot.com",
  messagingSenderId: "659414897832",
  appId: "1:659414897832:web:e01ac700b554a479e35e9d",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
