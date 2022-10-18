import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../../assets/logo.png';
import { carregarTopo } from '../../../servicos/carregarDados'

function Topo() {
    const [topoState, setTopoState] = useState({
        boasVindas: 'Estado inicial',
        legenda: 'estado inicial',
    })

    let dados = carregarTopo();

    useEffect(() => {
        setTopoState(dados)
    }, [dados])

    return (
        <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo} />
            <Text style={estilos.boasVindas}>{topoState.boasVindas}</Text>
            <Text style={estilos.legenda}>{topoState.legenda}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3',
    },
});

export default Topo;