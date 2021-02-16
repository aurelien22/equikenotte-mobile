import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import moment from "moment";
import {Card, Divider, Layout, List, Text} from "@ui-kitten/components";

export default function ActInfosScreen (props: any) {

    const act = props.route.params.act

    return(

        <View style={styles.container}>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        Date
                    </Text>
                    <Text
                        appearance='hint'
                        category='s1'>
                        {moment(act.date).format('d/MM/YYYY')}
                    </Text>
                </Layout>
                <Divider />
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        Cheval
                    </Text>
                    <Text
                        appearance='hint'
                        category='s1'>
                        {act.horse.name}
                    </Text>
                </Layout>
                <Divider />
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <Text
                        appearance='default'
                        category='s1'>
                        Prestations effectuées
                    </Text>
                </Layout>
            </React.Fragment>
            <React.Fragment>
                <Layout level='1' style={styles.lines}>
                    <List
                        data={act.benefits}
                        scrollEnabled={false}
                        renderItem={(item) => <Card status='info'><Text>{item.item.designation}</Text></Card> }
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
        padding: 16,
    },
    listItem: {
        paddingLeft: 0,
        margin: 0,
    },
    text: {
        marginRight: 20
    },
})
