import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export const SearchBar = () => (
    <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
)

const styles = StyleSheet.create({
    searchBarContainer: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    searchInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 30,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 7
        ,
        paddingLeft: 10
    }

})
