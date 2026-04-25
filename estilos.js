import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: 'white',      flex: 1,
        padding: '20px'
    },
    cabecalho: {
        backgroundColor: 'lightgray',  width: '100%',
        flexDirection: "column",        justifyContent: 'center',
        alignItems: 'center',           borderRadius: '20px',
        flex: 0.35,
    },
    cabTitulo: {
        fontSize: '25px',       color: 'darkred'
    },
    cabSubTitulo: {
        fontSize: '45px',       fontWeight: 'bold',
    },
    cabTexto: {
        fontSize: '25px',       color: 'blue',
    },
    conteudo: {
        flex: 0.45,             backgroundColor: 'whire',
        marginTop: '10px',
    },