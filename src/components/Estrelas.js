import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Estrela from './Estrela'

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = false
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const estilos = estilosFuncao(grande)


    const RenderEstrelas = () => {
        const listEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            )
        }
        return listEstrelas
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
        marginRight: 2
    }
})