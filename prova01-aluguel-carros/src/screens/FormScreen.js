import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import { addDoc, collection } from 'firebase/firestore'; 
import { db } from '../services/credenciaisFirebase';
import globalStyles from '../styles/globalStyles';

export default function FormScreen({ navigation }) {
    const [form, setForm] = useState({
        nomeCarro: '',
        nomeCliente: '',
        valorAluguel: '',
        dataAluguel: ''
    });

    const handleChange = (field, value) =>
        setForm({ ...form, [field]: value });

    const handleSalvar = async () => {
        try {
            await addDoc(collection(db, 'carro'), {
                nomeCarro: form.nomeCarro,
                nomeCliente: form.nomeCliente,
                valorAluguel: form.valorAluguel,
                dataAluguel: form.dataAluguel,
            });

            Alert.alert('Sucesso', 'Salvo com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar.');
            console.error('Erro ao salvar:', error);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro</Text>

            {['nomeCarro', 'nomeCliente', 'valorAluguel', 'dataAluguel'].map((field) => (
                <TextInput
                    key={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    style={globalStyles.input}
                    value={form[field]}
                    onChangeText={(v) => handleChange(field, v)}
                />
            ))}

            <TouchableOpacity
                style={globalStyles.button}
                onPress={handleSalvar}
            >
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}