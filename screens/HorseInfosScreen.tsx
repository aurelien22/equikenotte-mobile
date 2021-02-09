import React, {Component} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from "moment";
import ActItemHorseInfo from "../components/ActItemHorseInfo";

export default function HorseInfosScreen (props: any) {

    const horse = props.route.params.horse

    return(

        horse != null ? (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.customerInfoContainer}>
                    <Text style={styles.labels}>SIRE</Text>
                    <Text style={styles.infos}>{horse.sire}</Text>

                    <Text style={styles.labels}>Nom</Text>
                    <Text style={styles.infos}>{horse.name}</Text>

                    <Text style={styles.labels}>Naissance</Text>
                    <Text style={styles.infos}>{moment(horse.dateOfBirth).format('d/MM/YYYY')}</Text>

                    <Text style={styles.labels}>Propriétaire</Text>
                    <Text style={styles.infos}>A remplir</Text>

                    <Text style={styles.labels}>Actes réalisés</Text>
                    <FlatList
                        data={horse.acts}
                        renderItem={({item}) => <ActItemHorseInfo act={item} />}
                        keyExtractor={(item) => item.id.toString()}
                    />

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
})
