import React, {useState, useEffect} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import logo from '../assets/logo.png';

import { useSelector, useDispatch } from "react-redux";
import { ApplicationState, onLogin } from "../redux";

export default function loginScreen(props) {

    const {navigation} = props
    const {navigate} = navigation

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const { user, error} = useSelector((state: ApplicationState) => state.userReducer);

    const { token } = user

    useEffect(() => {
        if (token !== undefined) {
            navigate('Application')
        }
    })

    const onTapLogin = () => {
        dispatch(onLogin(username, password))
    }

    return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <TextInput
                    value={username}
                    style={styles.textInput}
                    placeholder={'leslie29'}
                    autoCapitalize='none'
                    onChangeText={userUsername => setUsername(userUsername)}
                />
                <TextInput
                    value={password}
                    style={styles.textInput}
                    placeholder={'password'}
                    secureTextEntry={true}
                    onChangeText={userPassword => setPassword(userPassword)}
                />
                <Text style={styles.motdepasseoublie} onPress={() => navigation.navigate("ForgotPassword")}>Mot de passe oublié</Text>
                <TouchableOpacity style={styles.submitButton} onPress={onTapLogin}>
                    <Text style={styles.buttonText}>CONNEXION </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#31393C',
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        marginTop: 100,
        marginBottom: 120
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        width: '80%',
        marginTop: 30,
        padding: 10,
        borderRadius: 3
    },
    submitButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#1796D4',
        width: '80%',
        height: 40,
        marginTop: 60,
        borderRadius: 3
    },
    buttonText: {
        color: 'white'
    },
    motdepasseoublie: {
        color: 'white',
        marginTop: 8
    }
})
