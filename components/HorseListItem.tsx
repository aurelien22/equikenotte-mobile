import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function HorseListItem (props: any) {

    return (
        <TouchableOpacity style={styles.container}
                          onPress={() => props.navigation.navigate('HorseInfos', {horse: props.horse})} >
            <Text style={styles.name}>{ props.horse.name }</Text>
            <Text style={styles.credit}>Solde : 120,00€</Text>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'white',
        borderBottomColor: '#929292',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    name: {
        fontWeight: "bold"
    },
    credit: {
        color: '#1796D4'
    }
})
