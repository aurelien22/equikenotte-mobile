import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import moment from "moment";
import {Card, Divider, Layout, List, Text} from "@ui-kitten/components";

export default function HorseInfosScreen (props: any) {

    const horse = props.route.params.horse

    return(

        <View style={styles.container}>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        SIRE
                    </Text>
                    <Text
                        appearance='hint'
                        category='s1'>
                        {horse.sire}
                    </Text>
                </Layout>
                <Divider />
            </React.Fragment>
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
                        {horse.name}
                    </Text>
                </Layout>
                <Divider />
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        Date de naissance
                    </Text>
                    <Text
                        appearance='hint'
                        category='s1'>
                        {moment(horse.dateOfBirth).format('d/MM/YYYY')}
                    </Text>
                </Layout>
                <Divider />
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        Historique des actes
                    </Text>
                </Layout>
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <List
                        data={horse.acts}
                        scrollEnabled={false}
                        renderItem={(item) => <Card status='info'><Text>Acte n°{item.item.id} du {moment(item.item.date).format('d/MM/YYYY')}</Text></Card>}
                    />
                </Layout>
            </React.Fragment>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 24
    },
    lines: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
    },
})
