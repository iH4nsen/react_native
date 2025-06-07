import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function ListScreen({ navigation }) {
    const [carros, setCarros] = useState([]);
    const { fetchCarros, deleteCarro } = useFirebase();

    useEffect(() => {
        (async () => {
            const data = await fetchCarros();
            console.log("Carros do Firebase:", data);
            setCarros(data);
        })();
    }, []);


    const handleDelete = async (id) => {
        try {
            await deleteCarro(id);
            setCarros((prev) => prev.filter((x) => x.id !== id));
            Alert.alert('Sucesso', 'Carro excluído');
        } catch {
            Alert.alert('Erro', 'Não foi possível excluir');
        }
    };

    const goToForm = () => {
        navigation.navigate('FormScreen');
    };

    const renderItem = ({ item }) => (
        <View style={globalStyles.listItem}>
            <Text>Carro: {item.nomeCarro}</Text>
            <Text>Cliente: {item.nomeCliente}</Text>
            <Text>Valor: R$ {item.valorAluguel}</Text>
            <Text>Data: {item.dataAluguel}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={globalStyles.link}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Carros Cadastrados</Text>
            <FlatList
                data={carros}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity style={globalStyles.button} onPress={goToForm}>
                <Text style={globalStyles.buttonText}>Registrar Carro</Text>
            </TouchableOpacity>
        </View>
    );
}
