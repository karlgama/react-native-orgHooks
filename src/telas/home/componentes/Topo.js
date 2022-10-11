import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../../assets/logo.png'

export default function Topo() {
    return <View style={estilos.topo}>
        <Image style={estilos.imagem} source={logo} />
        <Text style={estilos.boasVindas}>Olá pessoa!</Text>
        <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#000'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#000'
    }
})