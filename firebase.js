import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr-o2QA1HEQsn9gp4u3pXpKlz5DjI_sBA",
  authDomain: "portfolio-91141.firebaseapp.com",
  projectId: "portfolio-91141",
  storageBucket: "portfolio-91141.appspot.com",
  messagingSenderId: "534727293191",
  appId: "1:534727293191:web:f134ce50086dcbb5d32da2",
  measurementId: "G-SDYBWT1R4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);