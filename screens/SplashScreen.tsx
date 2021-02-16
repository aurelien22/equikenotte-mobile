import React from "react";
import {StyleSheet} from "react-native";
import {Layout, Spinner, Text} from "@ui-kitten/components";

export default function SplashScreen() {
    return (
        <Layout style={styles.container}>
            <Text
                category='s1'
                style={styles.text}
            >
                Chargement
            </Text>
            <Spinner
                size='giant'
                status='info'
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#31393C',
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"
    },
    text: {
        color: '#1796D4',
        marginBottom: 30
    },
})
