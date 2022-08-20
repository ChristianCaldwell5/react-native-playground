import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import Navigation from "../shared/Navigation";

const ComponentsScreen = (props) => {

    const greeting = "Hi there";
    const arrayGreeting = ["Hi", "There", "This", "Is", "From", "An", "Array."];
    const numberGreeting = 1;
    const numberArray = [1, 2, 3];
    const booleanGreeting = false; // doesn't print boolean, just white space
    const objectGreeting = {message: "hello"}; // will cause an error if you try to print full object in Text. 
                                               // You can print props of object though

    const variableSetJSXElement = <Text>I am injected by a java script variable! I also can hold a varibale: {greeting}</Text>

    return (
        <View style={styles.componentsWrapper}>
            <Text style={styles.textStyle}>React Native Component!!</Text>
            <Text>{greeting}</Text>
            <Text>{arrayGreeting}</Text>
            <Text>{numberGreeting}</Text>
            <Text>{numberArray}</Text>
            <Text>{booleanGreeting}</Text>
            <Text>{objectGreeting.message}</Text>
            {variableSetJSXElement}
            <Navigation props={props}></Navigation>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "black"
    },
    componentsWrapper: {
        flex: 1
    }
});

export default ComponentsScreen;
