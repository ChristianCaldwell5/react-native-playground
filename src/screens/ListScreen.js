import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Navigation from '../shared/Navigation';

const ListScreen = (props) => {
    // Add 'key' to object with unique STRING value as a solution to FlatList Virtualized List warning
    const friends = [
        {name: "Joe", legend: 'Rico'},
        {name: "Jane", legend: 'Mia'},
        {name: "Moe", legend: 'Maldo'},
        {name: "Missy", legend: 'Maldo'},
        {name: "Blair", legend: 'Rico'},
        {name: "Garret", legend: 'Dr. Q'},
        {name: "Kenna", legend: 'Rico'},
        {name: "Kenny", legend: 'Mia'},
        {name: "Murphy", legend: 'Dr. Q'}
    ];

    return (
        <View>
            <FlatList
                data={friends}
                renderItem={({item})=>{
                    return (
                        <View style={styles.itemStyle}>
                            <Text style={styles.username}>{item.name}</Text>
                            <Text style={styles.legend}>{item.legend}</Text>
                        </View>
                    )
                }}
                keyExtractor={(friend) => friend.name} // second solution. More widely used
            ></FlatList>
            <Navigation props={props}></Navigation>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        paddingVertical: 35,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    username: {
        fontSize: 30,
        fontWeight: "bold"
    },
    legend: {
        fontSize: 20
    }
});

export default ListScreen;
