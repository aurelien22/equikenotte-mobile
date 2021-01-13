import React from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';



export default function loginScreen(props) {

    const {navigation} = props

    return (
        <SafeAreaView style={styles.container}>
            <Text>Mot de passe oublié :-(</Text>
            <Button title='Ah si ca y est !' onPress={() => navigation.navigate('Login')}/>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#31393C',
        height: '100%',
        alignItems: 'center',
    },
})
