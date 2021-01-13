import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export const CustomerListItem = (props: any) => (

    <TouchableOpacity style={styles.customerListItemContainer} onPress={() => console.log('Afficher une fiche client')} >
        <Text style={styles.customerName} >{props.customer.name} {props.customer.surname}</Text>
        <Text style={styles.customerCredit}>120,00€</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    customerListItemContainer: {
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#c6c6c6',
        borderColor: '#929292',
        borderWidth: 1,
    },
    customerName: {
    },
    customerCredit: {
    }
})
