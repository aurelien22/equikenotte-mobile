import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import moment from "moment";

export default function ActItemHorseInfo (props: any) {

    return (
        <TouchableOpacity style={styles.container}
                          onPress={() => console.log('Fiche acte')} >
            <Text style={styles.name}>Acte du {moment(props.act.date).format('d/MM/YYYY')}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: 'white',
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
        marginTop: 10,
    },
    name: {
        fontSize: 22,
        color: '#808080',
    },

})
