import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import moment from "moment";

export default function ActListItem (props: any) {

    let billedText;

    if (props.act.billed) {
        billedText = <View style={styles.billed}><Text style={styles.billedText}>Facturé</Text></View>
    } else {
        billedText = <View style={styles.unBilled}><Text style={styles.billedText}>Non facturé</Text></View>
    }

    return (
        <TouchableOpacity style={styles.listItemContainer}
                          onPress={() => props.navigation.navigate('ActInfos', {act: props.act})}>
            <View style={styles.informations}>
                <Text style={styles.id}>Acte n°{props.act.id}</Text>
                <Text style={styles.name}>{props.act.horse.name}</Text>
                <Text style={styles.date}>{moment(props.act.date).format('d/MM/YYYY')}</Text>
            </View>
            <View style={styles.containerBilled}>
                {billedText}
            </View>


        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    listItemContainer: {
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'white',
        borderBottomColor: '#929292',
        borderBottomWidth: 1,
    },
    informations: {
        flexDirection: "column"
    },
    id: {
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5
    },
    date: {
        marginBottom: 5
    },
    billed: {
        width: 90,
        height: 30,
        color: '#008000',
        backgroundColor: '#70DD7B',
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5
    },
    unBilled: {
        width: 90,
        height: 30,
        color: '#FF0000',
        backgroundColor: '#DD7070',
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5
    },
    billedText: {
        textAlign: "center",
        color: 'white'
    },
    containerBilled: {
        justifyContent: "center"
    }
})
