import { useState, useEffect } from "react";
import { carregaProdutores } from '../servicos/carregarDados'


export default function useProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([])
    useEffect(() => {
        const dados = carregaProdutores()
        setTitulo(dados.titulo)
        setLista(dados.lista)
    }, [])

    return [titulo, lista]
}