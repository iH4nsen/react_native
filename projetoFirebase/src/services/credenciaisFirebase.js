// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-sajYf37xWCpdnP_qenQfqppRvf_tRzg",
  authDomain: "unipam-80302.firebaseapp.com",
  projectId: "unipam-80302",
  storageBucket: "unipam-80302.firebasestorage.app",
  messagingSenderId: "969649524708",
  appId: "1:969649524708:web:7e40deefa3f86c7f8f41f1"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
