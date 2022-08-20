import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

let navProps;

const Navigation = (screen) => {
    navProps = screen;
    return (
        <View style={styles.navigationContainer}>
            <Button
                title="Go to Components Screen"
                onPress={() => routeToScreen('component')}
            />
            <TouchableOpacity
                onPress={() => routeToScreen('list')}>
                <Text style={styles.navBtn}>Go To List Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const routeToScreen = (screen) => {
    switch(screen) {
        case 'component':
            navProps.props.navigation.navigate("Components")
            break;
        case 'list':
            navProps.props.navigation.navigate("List")
            break;
        default:
            console.log("OH, what")
    } 
}

const styles = StyleSheet.create({
    navigationContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 30,
        backgroundColor: "white"
    },
    navBtn: {
        fontSize: 20,
        backgroundColor: "lightgray",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden"
    }
});

export default Navigation;
