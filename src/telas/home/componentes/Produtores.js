import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { carregaProdutores } from '../../../servicos/carregarDados'

export default function Produtores({ topo: Topo }) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([])

    useEffect(() => {
        const dados = carregaProdutores()
        setTitulo(dados.titulo)
        setLista(dados.lista)
    }, [])

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }
    return <FlatList style={estilos.lista} data={lista}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item: { nome } }) => <Text style={{ color: '#000' }}>{nome}</Text>}
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