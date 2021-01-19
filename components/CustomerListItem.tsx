import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function CustomerListItem (props: any) {

    return (
        <TouchableOpacity style={styles.customerListItemContainer}
                          onPress={() => props.navigation.navigate('CustomerInfos', {customer: props.customer})}>
            <View style={styles.customerNameSurname}>
                <Text style={styles.customerSurname}>{props.customer.surname} </Text>
                <Text style={styles.customerName}>{props.customer.name}</Text>
            </View>

            <Text style={styles.customerCredit}>Solde : 120,00€</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    customerListItemContainer: {
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'white',
        borderBottomColor: '#929292',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    customerNameSurname: {
        flexDirection: "row"
    },
    customerName: {

    },
    customerSurname: {
        textTransform: "uppercase",
        fontWeight: "bold"

    },
    customerCredit: {
        color: '#1796D4'
    }
})
