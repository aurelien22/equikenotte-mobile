import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon, ListItem} from "@ui-kitten/components";

export default function HorseListItem (props: any) {

    const renderArrowIcon = (props) => (
        <Icon {...props} name='arrow-ios-forward' />
    );
    const renderLeftArrowIcon = (props) => (
        <Icon {...props} name='radio-button-off-outline' />
    );

    return (

        <ListItem
            title={() => <Text style={styles.name}>{props.horse.name}</Text>}
            style={styles.container}
            onPress={() => props.navigation.navigate('HorseInfos', {horse: props.horse})}
            accessoryLeft={renderLeftArrowIcon}
            accessoryRight={renderArrowIcon}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20
    },
    name: {
        textTransform: "capitalize"
    }
})
