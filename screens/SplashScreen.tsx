import React from "react";
import {ActivityIndicator, Text, View} from "react-native";

export default function SplashScreen() {
    return (
        <View style={{backgroundColor: "#31393C", alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator style={{marginBottom: 20}} />
            <Text style={{color: 'white'}}>Chargement</Text>
        </View>
    )
}
