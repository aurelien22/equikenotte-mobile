import React, {useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addHorse, ApplicationState} from "../redux/";
import {HorseModel} from "../redux/Types";
import {useDispatch, useSelector} from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";
import {Controller, useForm} from "react-hook-form";

export default function NewHorseScreen ({ navigation }) {

    const {register, handleSubmit, setValue, errors, control} = useForm<HorseModel>();

    const { customers } = useSelector((state: ApplicationState) => state.customerReducer);

    const dispatch = useDispatch();

    let horse: HorseModel

    const onValidateNewHorse = data => {

        // On hydrate l'objet horse avec les données du formulaire

        horse = {
            id: null,
            sire: data.sire,
            name: data.name,
            dateOfBirth: data.dateOfBirth,
            owner: data.owner,
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
                        name="sire"
                        rules={{ required: true, minLength: 9, maxLength: 9}}
                        defaultValue=""
                    />
                    { errors.sire && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                </View>
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
                        name="name"
                        rules={{ required: true, minLength: 3, maxLength: 25, pattern: /^[a-zA-ZÀ-ú\-\s]*/g }}
                        defaultValue=""
                    />
                    { errors.name && <Text style={styles.errors}>Veuilez corriger votre saisie</Text> }
                </View>
                <View>
                    <Text style={styles.labels}>Date de naissance</Text>
                    <Controller
                        control={control}
                        name="dateOfBirth"
                        defaultValue={new Date()}
                        render={({ value }) => (
                            <DateTimePicker
                                style={styles.datePicker}
                                onChange={(event, selectedDate) => { setValue('dateOfBirth', selectedDate) }}
                                value={value}
                            />
                        )}

                    />
                </View>
                <View>
                    <Text style={styles.labels}>Propriétaire</Text>
                    <Controller
                        control={control}
                        name="owner"
                        defaultValue={new Date()}
                        render={({ value }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={(itemValue, itemIndex) =>
                                    setValue('owner', itemValue)
                                }
                                style={styles.ownerPicker}
                            >
                                { customers.map((item) => <Picker.Item label={item.surname + " " + item.name} value={item['@id']} key={item.id}/> ) }
                            </Picker>
                        )}

                    />
                </View>

                <Button title="Valider" onPress={handleSubmit(onValidateNewHorse)} />

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
    },
    errors: {
        color: 'red'
    }
})
