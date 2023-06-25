// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAH5Bfdf6WYluwf2CYXe3-TA1HMMp_V3QY',
  authDomain: 'resume-mapper.firebaseapp.com',
  projectId: 'resume-mapper',
  storageBucket: 'resume-mapper.appspot.com',
  messagingSenderId: '124775955718',
  appId: '1:124775955718:web:bfe4d67596bbc8b3f7f287',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
