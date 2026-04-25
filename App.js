import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CxTx from './src/CxTx';

const campos = [
  {
    placeholder: 'Digite seu nome',
    autoCapitalize: 'characters',
    maxLength: 30,
    keyboardType: 'default',
    editable: true,
    multiline: false,
    secureTextEntry: false,
  },
  {
    placeholder: 'qual a sua idade?',
    autoCapitalize: 'none',
    maxLength: 2,
    keyboardType: 'number-pad',
    editable: true,
    multiline: false,
    secureTextEntry: false,
  },
  {
    placeholder: 'CPF:999.999.999-00',
    autoCapitalize: 'none',
    maxLength: 14,
    keyboardType: 'default',
    editable: false,
    multiline: false,
    secureTextEntry: false,
  },
  {
    placeholder: 'Digite seu e-mail',
    autoCapitalize: 'none',
    maxLength: 100,
    keyboardType: 'email-address',
    editable: true,
    multiline: false,
    secureTextEntry: false,
  },
  {
    placeholder: 'Digite seu número celular:',
    autoCapitalize: 'none',
    maxLength: 15,
    keyboardType: 'phone-pad',
    editable: true,
    multiline: false,
    secureTextEntry: false,
  },
  {
    placeholder: 'Observações:',
    autoCapitalize: 'sentences',
    maxLength: 200,
    keyboardType: 'default',
    editable: true,
    multiline: true,
    secureTextEntry: false,
  },
  {
    placeholder: 'Digite sua senha',
    autoCapitalize: 'none',
    maxLength: 5,
    keyboardType: 'default',
    editable: true,
    multiline: false,
    secureTextEntry: true,
  },
];

function App() {
  return (
    <ScrollView style={estilos.fundo}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabTitulo}>Aula 06 - Desafio 02</Text>
        <Text style={estilos.cabSubTitulo}>Componente InputText</Text>
      </View>

      <View style={estilos.conteudo}>
        <Text style={estilos.label}>BRUNO REZENDE DE LIMA</Text>

        {campos.map((campo, index) => (
          <CxTx
            key={index}
            placeholder={campo.placeholder}
            autoCapitalize={campo.autoCapitalize}
            maxLength={campo.maxLength}
            keyboardType={campo.keyboardType}
            editable={campo.editable}
            multiline={campo.multiline}
            secureTextEntry={campo.secureTextEntry}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  cabecalho: {
    backgroundColor: 'lightgray',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  cabTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cabSubTitulo: {
    fontSize: 18,
  },
  conteudo: {
    flex: 1,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;