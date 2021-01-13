import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export const CustomerInfos = (props: any) => (

    <View>
        <Text>Prénom du client : {props.customer.name}</Text>
        <Text>Nom du client : {props.customer.surname}</Text>
        <Text>Solde du client : 120,00 €</Text>
    </View>

)

const styles = StyleSheet.create({
    customerListItemContainer: {
    }
})
