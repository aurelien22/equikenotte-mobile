import React from 'react';
import {StyleSheet, View} from 'react-native';
import {addAct, ApplicationState} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";
import {ActModel, HorseModel} from "../redux/Types";
import MultiSelect from "react-native-multiple-select";
import {Controller, useForm} from "react-hook-form";
import {Datepicker, Divider, Layout, Button, Text} from "@ui-kitten/components";

export default function NewActScreen ({ navigation }) {

    const { horses } = useSelector((state: ApplicationState) => state.horseReducer);
    const { benefits } = useSelector((state: ApplicationState) => state.benefitsReducer);
    const dispatch = useDispatch();
    const {handleSubmit, setValue, control} = useForm<ActModel>();

    let act: ActModel

    const onValidateNewAct = ( data: ActModel ) => {

        // On hydrate l'objet horse avec les données du formulaire
        act = {
            id: null,
            date: data.date,
            horse: data.horse,
            billed: false,
            benefits: data.benefits
        }

        dispatch(addAct(act))
        navigation.navigate('Acts')

    }

    return(

        <View style={styles.container}>
            <View>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Date
                        </Text>
                        <Controller
                            control={control}
                            name="date"
                            defaultValue={new Date()}
                            render={({ value }) => (
                                <Datepicker
                                    date={value}
                                    min={new Date('1995/01/01')}
                                    max={new Date()}
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
                            appearance='hint'
                            category='s1'>
                            Cheval
                        </Text>
                    </Layout>
                    <Controller
                        control={control}
                        name="horse"
                        defaultValue={new Date()}
                        render={({ value }) => (
                            <Picker
                                selectedValue={value}
                                onValueChange={(itemValue) =>
                                    setValue('horse', itemValue)
                                }
                            >
                                { horses.map((item: HorseModel) => <Picker.Item label={item.name} value={item['@id']} key={item.id}/> ) }
                            </Picker>
                        )}

                    />
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Prestations
                        </Text>
                    </Layout>
                    <View style={styles.selectBenefits}>
                    <Controller
                        control={control}
                        name="benefits"
                        defaultValue={[]}
                        render={({ value }) => (
                            <MultiSelect
                                items={benefits}
                                uniqueKey= "@id"
                                onSelectedItemsChange={selectedItems => { setValue('benefits', selectedItems) }}
                                selectedItems={value}
                                selectText={"Selectionnez les prestations"}
                                displayKey="designation"
                                selectedItemIconColor="#CCC"
                                submitButtonText="Valider"
                            />
                            )}
                        />
                    </View>
                </React.Fragment>

                <Button
                    size='medium'
                    status='success'
                    onPress={handleSubmit(onValidateNewAct)}
                    style={styles.button}
                >AJOUTER</Button>

            </View>
        </View>
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
    button: {
        width: 250,
        alignSelf: "center",
        marginTop: 20,
    },
    selectBenefits: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    }
})
