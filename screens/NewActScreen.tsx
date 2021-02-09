import React, {useLayoutEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addHorse, ApplicationState} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";
import {ActModel, CustomerModel} from "../redux/Types";
import MultiSelect from "react-native-multiple-select";
import {useForm} from "react-hook-form";

export default function NewActScreen ({ navigation }) {

    const [date, setDate] = useState<Date>(new Date());
    const [horse, setHorse] = useState<string>('');
    const [benefits, setBenefits] = useState([])

    const { horses } = useSelector((state: ApplicationState) => state.horseReducer);
    const dispatch = useDispatch();
    const {register, handleSubmit, setValue, errors, control} = useForm<ActModel>();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }



    let act: ActModel

    const benefitsValues = [
        {
            id: 1,
            designation: 'Sédation'
        },
        {
            id: 2,
            designation: 'Profilage molaires'
        }
    ]

    const onValidateNewAct = () => {

        // On hydrate l'objet horse avec les données du formulaire

        act = {
            id: null,
            date: date,
            horse: horse,
            benefits: benefits
        }

        console.log(act)
    }

    const onSelectedItemsChange = (selectedItems) => {
        setBenefits(selectedItems)
    }

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.labels}>Date</Text>
                    <DateTimePicker
                        value={date}
                        onChange={onChange}
                        style={styles.datePicker}
                    />
                </View>
                <View>
                    <Text style={styles.labels}>Cheval</Text>
                    <Picker
                        selectedValue={horse}
                        onValueChange={(itemValue, itemIndex) =>
                            setHorse(itemValue)
                        }
                        style={styles.ownerPicker}
                    >
                        { horses.map((item) => <Picker.Item label={item.name} value={item['@id']} key={item.id}/> ) }
                    </Picker>
                </View>
                <View>
                    <Text style={styles.labels}>Prestations</Text>
                    <MultiSelect
                        items={benefitsValues}
                        uniqueKey="id"
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={benefits}
                        selectText={"Selectionnez les prestations"}
                        displayKey="designation"
                        selectedItemIconColor="#CCC"
                        submitButtonText="Valider"
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.submitButton} onPress={onValidateNewAct}>
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
