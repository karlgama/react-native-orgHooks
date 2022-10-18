import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = false
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const estilos = estilosFuncao(grande)

    const getImage = (index) => {
        if (index < quantidade) return estrela
        return estrelaCinza
    }

    const RenderEstrelas = () => {
        const listEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listEstrelas.push(
                <TouchableOpacity key={i} disabled={!editavel} onPress={() => setQuantidade(i + 1)}>
                    <Image style={estilos.estrela} source={getImage(i)} />
                </TouchableOpacity>
            )
        }
        return listEstrelas
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    },
    estrelas: {
        flexDirection: 'row',
        marginRight: 2
    }
})