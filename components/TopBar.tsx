import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const TopBar = () => (
    <View style={styles.topBar}>
        <View style={styles.topBarTitleContainer}>
            <Text style={styles.topBarTitle}>Clients</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.addCustomerButton}>
                Ajouter un client
            </Text>
        </TouchableOpacity>
    </View>
    )

const styles = StyleSheet.create({
    topBar: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        height: 60,
        padding: 10
    },
    topBarTitle: {
        fontSize: 30,
        fontWeight: "bold"
    },
    topBarTitleContainer: {
        flex: 2,
        fontSize: 30,
        fontWeight: "bold"
    },
    addCustomerButton: {
        flex: 1,
        height: 60,
        marginTop: 10
    }

})
