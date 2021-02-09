import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function BenefitItemActInfos (props: any) {

    return (
        <TouchableOpacity style={styles.container} >
            <Text style={styles.name}>{props.benefit.designation}</Text>
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
