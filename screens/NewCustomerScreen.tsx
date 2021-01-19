import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Font} from "expo/build/removed.web";

export default function NewCustomerScreen (props: any) {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labels}>Nom</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>Prénom</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>Adresse</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>CP</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>Ville</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>Téléphone</Text>
                    <TextInput style={styles.inputs} />
                </View>
                <View>
                    <Text style={styles.labels}>Email</Text>
                    <TextInput style={styles.inputs} />
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
