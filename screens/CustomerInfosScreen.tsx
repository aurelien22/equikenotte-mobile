import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Layout, Text} from "@ui-kitten/components";

export default function CustomerInfosScreen (props: any) {

    const customer = props.route.params.customer

    return(

            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Nom
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.surname}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Prénom
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.name}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Adresse
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.address}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Code postal
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.postalCode}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Ville
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.city}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Téléphone
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.phone}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>

                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Email
                        </Text>
                        <Text
                            appearance='hint'
                            category='s1'>
                            {customer.mail}
                        </Text>
                    </Layout>
                    <Divider />
                </React.Fragment>
            </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 24,
    },
    lines: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
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
