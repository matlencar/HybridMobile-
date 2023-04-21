import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Platform, ImageBackground } from "react-native";
import { SearchInput } from './src/components/SearchInput'
import getImage from "./src/Utils/ImagesForWeather";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        resizeMode = 'cover'
        
        source={getImage('Thunderstorm')}>
        <Text style={[styles.text, styles.textLarge]}>São Paulo</Text>
        <Text style={[styles.text, styles.textSmall]}>Chuva</Text>
        <Text  style={[styles.text, styles.textLarge]}>26°</Text>

        
        <SearchInput dica="Digite a cidade" />
        <SearchInput dica="Digite o estado" />
        <SearchInput dica="Digite o pais" />
        <SearchInput dica="Digite o CEP" />
        
        <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
