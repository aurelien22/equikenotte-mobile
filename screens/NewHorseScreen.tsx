import React, {useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addHorse, ApplicationState, HorseModel} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";

export default function NewHorseScreen ({ navigation }) {

    const [sire, setSire] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
    const [owner, setOwner] = useState<string>('');

    const { customers } = useSelector((state: ApplicationState) => state.customerReducer);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setDateOfBirth(currentDate);
    }

    const dispatch = useDispatch();

    let horse: HorseModel

    const onValidateNewHorse = () => {

        // On hydrate l'objet horse avec les données du formulaire

        horse = {
            id: null,
            sire: sire,
            name: name,
            dateOfBirth: dateOfBirth,
            owner: owner,
            acts: []
        }

        dispatch(addHorse(horse));
        navigation.navigate('Horses')
    }

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labels}>SIRE</Text>
                    <TextInput
                        value={sire}
                        style={styles.inputs}
                        onChangeText = { text => setSire(text) }
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Nom</Text>
                    <TextInput
                        value={name}
                        style={styles.inputs}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Naissance</Text>
                    <DateTimePicker
                        value={dateOfBirth}
                        onChange={onChange}
                        style={styles.datePicker}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Propriétaire</Text>
                    <Picker
                        selectedValue={owner}
                        onValueChange={(itemValue, itemIndex) =>
                            setOwner(itemValue)
                        }
                        style={styles.ownerPicker}
                    >
                        { customers.map((item) => <Picker.Item label={item.surname + " " + item.name} value={item['@id']} key={item.id}/> ) }
                    </Picker>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.submitButton} onPress={onValidateNewHorse}>
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
        marginBottom: 8
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
    ownerPicker: {

    },
    datePicker: {
        marginBottom: 20
    }
})
