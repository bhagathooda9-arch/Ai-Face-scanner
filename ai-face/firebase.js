apiKey: "YOUR_KEY"
 
const firebaseConfig = {
  apiKey: "AIzaSyDPDKUCZ_QJ_Lx_Q_S-stDwk9eaIFGJhko",
  authDomain: "face-recognization-de9e6.firebaseapp.com",
  projectId: "face-recognization-de9e6",
  storageBucket: "face-recognization-de9e6.firebasestorage.app",
  messagingSenderId: "1081281860352",
  appId: "1:1081281860352:web:ed1e2c40d2906bdda799e5",
  measurementId: "G-FC1XQDYGKR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
