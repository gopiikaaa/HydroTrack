import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = { 
  apiKey: "AIzaSyBPmXdGloXI32QizSXKTu6Yf3U1N4xAImg",
  authDomain: "mini-project-54c40.firebaseapp.com",
  projectId: "mini-project-54c40",
  storageBucket: "mini-project-54c40.appspot.com",
  messagingSenderId: "498838884715",
  appId: "1:498838884715:web:ee69b1a1b697e6254bbc2e",
  measurementId: "G-5ZWJFT4Y57"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage=getStorage()




