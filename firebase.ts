import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTnN88jvxm4bGBUu7HF2XLloJtFYlkErQ",
  authDomain: "chatgpt-messenger-23f2f.firebaseapp.com",
  projectId: "chatgpt-messenger-23f2f",
  storageBucket: "chatgpt-messenger-23f2f.appspot.com",
  messagingSenderId: "724645494821",
  appId: "1:724645494821:web:c5c1d26481734b0cafbfcc",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
