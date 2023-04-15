import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn1r3hcPo2CZY-y0fNM0AvLQQtZ_1C9LU",
  authDomain: "stock-analyzer-4b89b.firebaseapp.com",
  projectId: "stock-analyzer-4b89b",
  storageBucket: "stock-analyzer-4b89b.appspot.com",
  messagingSenderId: "252457952904",
  appId: "1:252457952904:web:054c37558c590537a5a13d",
  measurementId: "G-E30NM1EQS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const auth = getAuth();
export {database};
export {auth};