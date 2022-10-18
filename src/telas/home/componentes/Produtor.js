import React, { useMemo, useReducer, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Estrelas from '../../../components/Estrelas'

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )

    const distanciaTexto = useMemo(() => { distanciaEmMetros(distancia) }, [distancia])

    return <TouchableOpacity onPress={inverterSelecionado} style={estilos.card}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} editavel={selecionado} grande={selecionado} />
            </View>

            <Text style={estilos.distancia} >{distanciaTexto}</Text>
        </View>

    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        // propriedade android
        elevation: 4,
        //propriedade ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        color: '#000',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        color: '#000',
        fontSize: 12,
        lineHeight: 19
    }
})