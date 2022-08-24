let firebaseConfig = {
  apiKey: "AIzaSyBa3dCrnwL63kNnjI78HhSosLPXpWxMNhs",
  authDomain: "blogging-website-8a922.firebaseapp.com",
  projectId: "blogging-website-8a922",
  storageBucket: "blogging-website-8a922.appspot.com",
  messagingSenderId: "896195490271",
  appId: "1:896195490271:web:acc2ec6c36a83537bc546a",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();