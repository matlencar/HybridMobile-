import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Platform } from "react-native";

export  class SearchInput extends React.Component {
    render() {
        return(
            <TextInput
            autoCorrect={false}
            placeholder={this.props.dica}
            placeholderTextColor="#fff"
            style={styles.textInput}
          />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
      color: '#fff',
      backgroundColor: '#666',
      textAlign: 'center',
      width: '80%',
      padding: 8,
      marginTop: 16,
    },
  });
  