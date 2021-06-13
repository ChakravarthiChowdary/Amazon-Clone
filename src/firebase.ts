import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQ7YY2-OsP6T0FIP405DvcZOGAV-JrZN4",
  authDomain: "clone-9cd7a.firebaseapp.com",
  projectId: "clone-9cd7a",
  storageBucket: "clone-9cd7a.appspot.com",
  messagingSenderId: "958187402594",
  appId: "1:958187402594:web:75cd7594c1528f92c3a83b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
