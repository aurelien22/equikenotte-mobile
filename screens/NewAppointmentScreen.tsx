import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {addAppointment, ApplicationState} from "../redux/";
import {AppointmentModel} from "../redux/Types";
import {useDispatch, useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";
import {Controller, useForm} from "react-hook-form";
import {Divider, Layout, Text, Datepicker, Input, Button, Select, SelectItem} from "@ui-kitten/components";

export default function NewAppointmentScreen ({ navigation }) {

    const {handleSubmit, setValue, errors, control} = useForm<AppointmentModel>();

    const { customers } = useSelector((state: ApplicationState) => state.customerReducer);

    const dispatch = useDispatch();

    let appointment: AppointmentModel

    const onValidateNewAppointment = data => {

        // On hydrate l'objet horse avec les données du formulaire

        appointment = {
            id: null,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            numberOfHorses: Number(data.numberOfHorses),
            customer: data.customer
        }

        dispatch(addAppointment(appointment));
    }

    return(

        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Date du rendez-vous
                        </Text>
                        <Controller
                            control={control}
                            name="date"
                            defaultValue={new Date()}
                            render={({ value }) => (
                                <Datepicker
                                    date={value}
                                    min={new Date()}
                                    onSelect={nextDate => setValue('date', nextDate)}
                                />
                            )}

                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Heure de début
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    style={styles.inputs}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onBlur={onBlur}
                                />
                            )}
                            name="startTime"
                            defaultValue=""
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Heure de fin
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    style={styles.inputs}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onBlur={onBlur}
                                />
                            )}
                            name="endTime"
                            defaultValue=""
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'>
                            Nombre de chevaux
                        </Text>
                        <Controller
                            control={control}
                            render={({ onBlur, value }) => (
                                <Input
                                    size='small'
                                    style={styles.inputs}
                                    onChangeText={value => setValue('numberOfHorses', value)}
                                    value={value}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onBlur={onBlur}
                                />
                            )}
                            name="numberOfHorses"
                            defaultValue=""
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='default'
                            category='s1'
                        >
                            Client
                        </Text>
                    </Layout>
                    <Controller
                        control={control}
                        name="customer"
                        defaultValue={new Date()}
                        render={({ value }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={(itemValue) =>
                                    setValue('customer', itemValue)
                                }
                            >
                                { customers.map((item) => <Picker.Item label={item.surname + " " + item.name} value={item['@id']} key={item.id}/> ) }
                            </Picker>
                        )}

                    />
                </React.Fragment>

                <Button
                    size='medium'
                    status='success'
                    onPress={handleSubmit(onValidateNewAppointment)}
                    style={styles.button}
                >AJOUTER</Button>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        paddingVertical: 24
    },
    lines: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
    },
    inputs: {
        width: '28%'
    },
    button: {
        width: 250,
        alignSelf: "center",
        marginTop: 20,
    },
    errors: {
        color: 'red'
    }
})
