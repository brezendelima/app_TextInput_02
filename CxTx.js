import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

function CxTx({ placeholder, autoCapitalize, maxLength, keyboardType, editable, multiline, secureTextEntry }) {
  return (
    <TextInput
      style={[estilos.input, multiline && { height: 100, textAlignVertical: 'top' }]}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize || 'none'}
      maxLength={maxLength}
      keyboardType={keyboardType || 'default'}
      editable={editable !== undefined ? editable : true}
      multiline={multiline || false}
      secureTextEntry={secureTextEntry || false}
    />
  );
}

const estilos = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 4,
  },
});

export default CxTx;