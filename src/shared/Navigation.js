import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

let navProps;

const Navigation = (screen) => {
    navProps = screen;
    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => routeToScreen('component')}>
                <MaterialIcons name="apps" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => routeToScreen('home')}>
                <MaterialIcons name="home" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => routeToScreen('list')}>
                <MaterialIcons name="list" size={32} color="black" />
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
        case 'home':
            navProps.props.navigation.navigate("Home")
            break;
        default:
            console.log("OH, what")
    } 
}

const styles = StyleSheet.create({
    navigationContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        //paddingBottom: 30,
        flex: 1,
        backgroundColor: "white"
    },
    navBtn: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

export default Navigation;
