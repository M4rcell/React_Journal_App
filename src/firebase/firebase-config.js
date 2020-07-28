
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBvshdYHa4-wj8Lj7DeZZikcatfQA-CFp8",
    authDomain: "react-app-cursos-e05dd.firebaseapp.com",
    databaseURL: "https://react-app-cursos-e05dd.firebaseio.com",
    projectId: "react-app-cursos-e05dd",
    storageBucket: "react-app-cursos-e05dd.appspot.com",
    messagingSenderId: "775913684815",
    appId: "1:775913684815:web:c5d3d01578a27e20ef8f3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase,
  }