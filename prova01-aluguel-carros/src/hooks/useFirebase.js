import { useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase';

const useFirebase = () => {
  const [loading, setLoading] = useState(false);


  const fetchCarros = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'carro'));
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
      return [];
    }
  };


  const deleteCarro = async (id) => {
    await deleteDoc(doc(db, 'carros', id));
  };

  const addUser = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'pessoa'), data);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'pessoa'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'pessoa', id));
  };

  const getUserById = async (id) => {
    const document = await getDoc(doc(db, 'pessoa', id));
    return document.data();
  };

  return {
    fetchCarros,
    deleteCarro,
    addUser,
    fetchUsers,
    deleteUser,
    getUserById,
    loading
  };
};

export default useFirebase;
