import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class LoginForm extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email ID"
          placeholderTextColor="#808080"
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry
        />
        <Button title="Login" color="#0000FF" />
        <Button title="Cancel" color="#FF0000" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  }
});

export default LoginForm;
