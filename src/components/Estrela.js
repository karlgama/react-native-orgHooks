import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({ onPress,
    desabilitada = true, preenchida, grande = false }) {

    const getImage = (preenchida) => {
        if (preenchida) return estrela
        return estrelaCinza
    }
    const estilos = estilosFuncao(grande)
    return <TouchableOpacity disabled={desabilitada}
        onPress={onPress}>
        <Image style={estilos.estrela} source={getImage(preenchida)} />
    </TouchableOpacity>
}
estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    },
})