import firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyBrc7c9gQIO7gsfsYVtV-io7Ekmp85dr5s",
    authDomain: "personal-blockk.firebaseapp.com",
    projectId: "personal-blockk",
    storageBucket: "personal-blockk.appspot.com",
    messagingSenderId: "443995231593",
    appId: "1:443995231593:web:230a8d400679abb9a599f8"
  });
  
 const db = firebase.firestore();


export {db};


// import axios from 'axios';
// export default axios.create(
//     {
//         baseURL:'https://personal-block-69f4e-default-rtdb.firebaseio.com/'
//     }
// )





