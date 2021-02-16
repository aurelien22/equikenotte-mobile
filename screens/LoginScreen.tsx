import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import logo from '../assets/logo.png';

import { useDispatch } from "react-redux";
import { onLogin } from "../redux";
import {Controller, useForm} from "react-hook-form";
import {UserModel} from "../redux/Types";

export default function loginScreen(props: any) {

    const {navigation} = props

    const {handleSubmit, errors, control} = useForm<UserModel>();

    const dispatch = useDispatch();

    const onTapLogin = data => {
        dispatch(onLogin(data.username, data.password))
    }

    return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            autoCapitalize="none"
                            placeholder="username"
                            autoCorrect={false}
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="username"
                    rules={{ required: true, minLength: 3, maxLength: 15}}
                    defaultValue=""
                />
                { errors.username && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="password"
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            secureTextEntry={true}
                        />
                    )}
                    name="password"
                    rules={{ required: true, minLength: 3, maxLength: 20}}
                    defaultValue=""
                />
                <Text style={styles.motdepasseoublie} onPress={() => navigation.navigate("ForgotPassword")}>Mot de passe oublié</Text>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onTapLogin)}>
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
    },
    errors: {
        color: 'red'
    }
})
