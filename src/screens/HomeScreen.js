import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from '../shared/Navigation'

const HomeScreen = (props) => {
  console.log("Home Screen Props: ", props.navigation.navigate)
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.text}>Hello World of React!!</Text>
      <Navigation props={props}></Navigation>
    </View>
  )
};

const styles = StyleSheet.create({
  homeContainer: {
    position:"relative",
    flex: 1,
    backgroundColor: "aliceblue"
  },
  text: {
    position: "relative",
    fontSize: 30,
  },
});

export default HomeScreen;
