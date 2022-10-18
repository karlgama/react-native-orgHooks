import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/telas/home';

function App() {
  return <SafeAreaView style={estilos.area}>
    <Home />
  </SafeAreaView>;
}

export default App;

const estilos = StyleSheet.create({
  area: {
    backgroundColor: '#fff',
    flex: 1,
    color: '#000'
  }
})