import React, {useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addCustomer, CustomerModel} from "../redux";
import {useDispatch} from "react-redux";

export default function NewCustomerScreen ({ navigation }) {

    const [surname, setSurname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    const dispatch = useDispatch();

    let customer: CustomerModel

    const onValidateNewCustomer = () => {

        // On hydrate l'objet customer avec les données du formulaire

        customer = {
            id: null,
            name: name,
            surname: surname,
            address: address,
            postalCode: postalCode,
            city: city,
            phone: phone,
            mail: mail,
            dentist: null
        }

        dispatch(addCustomer(customer));
        navigation.navigate('Customers')
    }

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labels}>Nom</Text>
                    <TextInput
                        value={surname}
                        style={styles.inputs}
                        onChangeText = { text => setSurname(text) }
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Prénom</Text>
                    <TextInput
                        value={name}
                        style={styles.inputs}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Adresse</Text>
                    <TextInput
                        value={address}
                        style={styles.inputs}
                        onChangeText={text => setAddress(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>CP</Text>
                    <TextInput
                        value={postalCode}
                        style={styles.inputs}
                        onChangeText={text => setPostalCode(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Ville</Text>
                    <TextInput
                        value={city}
                        style={styles.inputs}
                        onChangeText={text => setCity(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Téléphone</Text>
                    <TextInput
                        value={phone}
                        style={styles.inputs}
                        onChangeText={text => setPhone(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Email</Text>
                    <TextInput
                        value={mail}
                        style={styles.inputs}
                        onChangeText={text => setMail(text)}
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.submitButton} onPress={onValidateNewCustomer}>
                        <Text style={styles.buttonText}>Valider</Text>
                    </TouchableOpacity>
                </View>
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
})
