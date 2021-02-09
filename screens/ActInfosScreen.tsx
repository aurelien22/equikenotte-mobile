import React, {Component} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from "moment";
import BenefitItemActInfos from "../components/BenefitItemActInfos";

export default function ActInfosScreen (props: any) {

    const act = props.route.params.act

    const benefits = [
        {
            designation: 'Sédation'
        },
        {
            designation: 'Profilage molaires'
        }
    ]


    return(

        act != null ? (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.customerInfoContainer}>
                    <Text style={styles.labels}>Date</Text>
                    <Text style={styles.infos}>{moment(act.date).format('d/MM/YYYY')}</Text>

                    <Text style={styles.labels}>Cheval</Text>
                    <Text style={styles.infos}>{act.horse.name}</Text>

                    <Text style={styles.labels}>Prestations</Text>
                    <FlatList
                        data={benefits}
                        renderItem={({item}) => <BenefitItemActInfos benefit={item} />}
                        keyExtractor={(item) => item.designation}
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
