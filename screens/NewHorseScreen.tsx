import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {addHorse, ApplicationState} from "../redux/";
import {HorseModel} from "../redux/Types";
import {useDispatch, useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";
import {Controller, useForm} from "react-hook-form";
import {Divider, Layout, Text, Datepicker, Input, Button} from "@ui-kitten/components";

export default function NewHorseScreen ({ navigation }) {

    const {handleSubmit, setValue, errors, control} = useForm<HorseModel>();

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

    const displayError = (inputName: string) => {
        if (errors[inputName]) {
            return (
                <Text appearance='hint' category='c1'>Veuilez corriger votre saisie</Text>
            )
        } else {
            return undefined
        }
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
                            SIRE
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
                                caption={displayError('sire')}
                            />
                        )}
                        name="sire"
                        rules={{ required: true, minLength: 9, maxLength: 9}}
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
                            Nom
                        </Text>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                size='small'
                                onChangeText={value => onChange(value)}
                                value={value}
                                style={styles.inputs}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onBlur={onBlur}
                                caption={displayError('name')}
                            />
                        )}
                        name="name"
                        rules={{ required: true, minLength: 3, maxLength: 25, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g }}
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
                            Date de naissance
                        </Text>
                    <Controller
                        control={control}
                        name="dateOfBirth"
                        defaultValue={new Date()}
                        render={({ value }) => (
                            <Datepicker
                                date={value}
                                min={new Date('1995/01/01')}
                                max={new Date()}
                                onSelect={nextDate => setValue('dateOfBirth', nextDate)}
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
                        category='s1'

                    >
                        Propriétaire
                    </Text>
                    </Layout>
                        <Controller
                            control={control}
                            name="owner"
                            defaultValue={new Date()}
                            render={({ value }) => (
                                <Picker
                                    selectedValue={value}
                                    onValueChange={(itemValue) =>
                                        setValue('owner', itemValue)
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
                    onPress={handleSubmit(onValidateNewHorse)}
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
        width: '60%'
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
