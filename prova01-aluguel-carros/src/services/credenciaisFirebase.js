// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-yPS9Iw-yqYppKZESsEyBjb5o8VYX8dc",
  authDomain: "prova01-aluguel-carros-8ab6b.firebaseapp.com",
  projectId: "prova01-aluguel-carros-8ab6b",
  storageBucket: "prova01-aluguel-carros-8ab6b.firebasestorage.app",
  messagingSenderId: "896546757969",
  appId: "1:896546757969:web:8eca06008d161bd3998770"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
