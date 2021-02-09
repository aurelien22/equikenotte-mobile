import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addCustomer} from "../redux";
import {useDispatch} from "react-redux";
import {CustomerModel} from "../redux/Types";
import {useForm, Controller} from "react-hook-form";

export default function NewCustomerScreen ({ navigation }) {

    const dispatch = useDispatch();

    const {register, handleSubmit, setValue, errors, control} = useForm<CustomerModel>();

    let customer: CustomerModel

    const onValidateNewCustomer = data => {

        // On hydrate l'objet customer avec les données du formulaire

        customer = {
            id: null,
            name: data.name,
            surname: data.surname,
            address: data.address,
            postalCode: data.postalCode,
            city: data.city,
            phone: data.phone,
            mail: data.mail,
            dentist: null
        }

        dispatch(addCustomer(data));
        navigation.navigate('Customers');

    }

    return(

        <SafeAreaView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.labels}>Nom</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="surname"
                            rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-ZÀ-ú\-\s]/g }}
                            defaultValue=""
                        />
                        { errors.surname && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Prénom</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="name"
                            rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-ZÀ-ú\-\s]*/g }}
                            defaultValue=""
                        />
                        { errors.name && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Adresse</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="address"
                            rules={{ required: true, minLength: 3, maxLength: 20, pattern: /^[a-zA-ZÀ-ú\-\s]*/g }}
                            defaultValue=""
                        />
                        { errors.address && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Code Postal</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="postalCode"
                            rules={{ required: true, minLength: 5, maxLength: 5, pattern: /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/ }}
                            defaultValue=""
                        />
                        { errors.postalCode && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Ville</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="city"
                            rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-ZÀ-ú\-\s]*/ }}
                            defaultValue=""
                        />
                        { errors.city && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Téléphone</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="phone"
                            rules={{ required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]*$/ }}
                            defaultValue=""
                        />
                        { errors.phone && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <View>
                        <Text style={styles.labels}>Email</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="mail"
                            rules={{ required: true, maxLength: 50, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i }}
                            defaultValue=""
                        />
                        { errors.mail && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                    </View>
                    <Button title="Valider" onPress={handleSubmit(onValidateNewCustomer)} />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },
    labels: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 5
    },
    inputs: {
        marginRight: 5,
        marginBottom: 20,
        height: 35,
        borderColor: "#000000",
        borderWidth: 1,
        paddingLeft: 10
    },
    containerButton: {
        alignItems: "center",
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
    errors: {
        color: 'red'
    }
})
