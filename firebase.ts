// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCic97DK_-mvWnIZ7obbi_WbGhTk0DvDvs',
  authDomain: 'netflix-clone-next-ca9b6.firebaseapp.com',
  projectId: 'netflix-clone-next-ca9b6',
  storageBucket: 'netflix-clone-next-ca9b6.appspot.com',
  messagingSenderId: '665555664825',
  appId: '1:665555664825:web:9a550b474e20e0ad158068',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
