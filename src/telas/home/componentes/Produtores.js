import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores()

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }
    return <FlatList style={estilos.lista} data={lista}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item }) => <Produtor {...item} />}
        ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create(
    {
        titulo: {
            fontSize: 20,
            lineHeight: 32,
            marginHorizontal: 16,
            marginTop: 16,
            fontWeight: 'bold',
            color: '#464646'
        },
        lista: {
            color: '#000'
        }
    }
)