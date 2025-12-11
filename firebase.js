// firebase.js - (pre-filled with your config)
const firebaseConfig = {
  apiKey: "AIzaSyAdACqh6hsiA-ylP3cWxjrdGTYO7PnRLFc",
  authDomain: "durgachoicecenter-admin.firebaseapp.com",
  databaseURL: "https://durgachoicecenter-admin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "durgachoicecenter-admin",
  storageBucket: "durgachoicecenter-admin.firebasestorage.app",
  messagingSenderId: "458140785138",
  appId: "1:458140785138:web:eab9a7055725cce6a3736b",
  measurementId: "G-7E9H77Y94F"
};

// Initialize (using compat-friendly global SDKs loaded in HTML)
if (!window.firebaseAppsInitialized) {
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.database();
  window.auth = firebase.auth();
  window.storage = firebase.storage();
  window.firebaseAppsInitialized = true;
}
