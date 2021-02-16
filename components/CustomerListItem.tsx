import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, ListItem, Text} from "@ui-kitten/components";

export default function CustomerListItem (props: any) {

    const renderArrowIcon = (props) => (
        <Icon {...props} name='arrow-ios-forward' />
    );

    const renderPersonIcon = (props) => (
        <Icon {...props} name='person' />
    );

    return (

        <ListItem
            title={() => (<View style={styles.informations}>
                <Text style={styles.surname}>{props.customer.surname} </Text>
                <Text style={styles.name}>{props.customer.name}</Text>
            </View>)}
            style={styles.container}
            onPress={() => props.navigation.navigate('CustomerInfos', {customer: props.customer})}
            accessoryLeft={renderPersonIcon}
            accessoryRight={renderArrowIcon}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20
    },
    informations: {
        flexDirection: "row"
    },
    surname: {
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    name: {
    }
})
