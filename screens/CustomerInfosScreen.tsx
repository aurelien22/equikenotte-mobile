import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function CustomerInfosScreen (props: any) {

    const customer = props.route.params.customer

    return(

        customer != null ? (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.customerInfoContainer}>
                    <Text style={styles.labels}>Nom</Text>
                    <Text style={styles.infos}>{customer.surname}</Text>

                    <Text style={styles.labels}>Prénom</Text>
                    <Text style={styles.infos}>{customer.name}</Text>

                    <Text style={styles.labels}>Adresse</Text>
                    <Text style={styles.infos}>{customer.address}</Text>

                    <View style={styles.addressPostalCode}>
                        <View>
                            <Text style={styles.labels}>CP</Text>
                            <Text style={styles.infos}>{customer.postalCode}</Text>
                        </View>
                        <View>
                            <Text style={styles.labels}>Ville</Text>
                            <Text style={styles.infos}>{customer.city}</Text>
                        </View>
                    </View>

                    <Text style={styles.labels}>Téléphone</Text>
                    <Text style={styles.infos}>{customer.phone}</Text>

                    <Text style={styles.labels}>Email</Text>
                    <Text style={styles.infos}>{customer.mail}</Text>

                </View>
            </SafeAreaView>
        ) : (
            <ActivityIndicator />
        )
    )

}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white'
    },
    customerInfoContainer: {
        padding: 20,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },
    labels: {
        fontSize: 22,
        fontWeight: "bold"
    },
    infos: {
        fontSize: 22,
        color: '#808080',
        marginTop: 10,
        marginBottom: 20
    },
    addressPostalCode: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
})
