import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login </Text>
        <View>
          <LoginForm />
          <Button title="Signup" color="#0000FF" />
          <Button title="Home" color="#008000" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default Login;
