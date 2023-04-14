import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
import { SearchInput } from './components/SearchInput'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.textLarge]}>São Paulo</Text>
        <Text style={[styles.text, styles.textSmall]}>Chuva</Text>
        <Text  style={[styles.text, styles.textLarge]}>26°</Text>
        <SearchInput dica="Digite a cidade" />
        <SearchInput dica="Digite o estado" />
        <SearchInput dica="Digite o pais" />
        <SearchInput dica="Digite o CEP" />
        
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: '#fff',
    backgroundColor: '#666',
    textAlign: 'center',
    width: '80%',
    padding: 8,
    marginTop: 16,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNextRegular': 'Roboto',
  },
  textLarge: {
    fontSize: 44,
  },
  textSmall: {
    fontSize: 18
  }
});
