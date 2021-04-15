import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyASb86hlK1THlE5yhrLulJ8KHGYaVjA28Y",
    authDomain: "gosocial-6acb5.firebaseapp.com",
    projectId: "gosocial-6acb5",
    storageBucket: "gosocial-6acb5.appspot.com",
    messagingSenderId: "290581637081",
    appId: "1:290581637081:web:99d724d141ba6d8d475bc8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;