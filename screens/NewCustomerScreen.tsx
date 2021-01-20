import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {onLogin} from "../redux";
import {AntDesign} from "@expo/vector-icons";

export default function NewCustomerScreen ({ navigation }) {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const onValidateNewCustomer = () => {
        // TO DO : Dispatch une action 'NEW_CUSTOMER' en envoyant les données du formulaie
        console.log('Ajout du nouveau client');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Nouveau client',
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
            },
            headerRight: () => (
                <Button color="#1796D4" title={'Valider'} onPress={() => onValidateNewCustomer} />
            )
        })
    }, [navigation])


    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labels}>Nom</Text>
                    <TextInput
                        value={surname}
                        style={styles.inputs}
                        onChangeText={(surname) => setSurname(surname)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Prénom</Text>
                    <TextInput
                        value={name}
                        style={styles.inputs}
                        onChangeText={(name) => setName(name)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Adresse</Text>
                    <TextInput
                        value={address}
                        style={styles.inputs}
                        onChangeText={(address) => setAddress(address)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>CP</Text>
                    <TextInput
                        value={postalCode}
                        style={styles.inputs}
                        onChangeText={(postalCode) => setPostalCode(postalCode)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Ville</Text>
                    <TextInput
                        value={city}
                        style={styles.inputs}
                        onChangeText={(city) => setCity(city)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Téléphone</Text>
                    <TextInput
                        value={phone}
                        style={styles.inputs}
                        onChangeText={(phone) => setPhone(phone)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Email</Text>
                    <TextInput
                        value={mail}
                        style={styles.inputs}
                        onChangeText={(mail) => setMail(mail)}
                    />
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
})
