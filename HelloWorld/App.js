import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.titulo}>Ola mundo</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    alignContent : 'center',
    justifyContent : 'center',
    textAlign : 'center',
  },
  titulo: {
    fontSize: 20,
    backgroundColor: 'green'
  }
})