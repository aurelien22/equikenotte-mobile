import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {addCustomer} from "../redux";
import {useDispatch} from "react-redux";
import {CustomerModel} from "../redux/Types";
import {useForm, Controller} from "react-hook-form";
import {Divider, Input, Layout, Text, Button} from "@ui-kitten/components";

export default function NewCustomerScreen ({ navigation }) {

    const dispatch = useDispatch();

    const {handleSubmit, errors, control} = useForm<CustomerModel>();

    const onValidateNewCustomer = (data: CustomerModel) => {

        dispatch(addCustomer(data));
        navigation.navigate('Customers');

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

        <ScrollView style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                <View>
                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Nom</Text>
                            <Controller
                                control={control}
                                render={({ onChange, onBlur, value }) => (
                                    <Input
                                        size='small'
                                        style={styles.inputs}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        caption={displayError('surname')}
                                    />
                                )}
                                name="surname"
                                rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g }}
                                defaultValue=""
                            />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <React.Fragment>
                    <Layout level='1' style={styles.lines}>
                        <Text
                            appearance='hint'
                            category='s1'
                        >Prénom</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    style={styles.inputs}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('name')}
                                />
                            )}
                            name="name"
                            rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g }}
                            defaultValue=""
                        />
                    </Layout>
                    <Divider />
                    </React.Fragment>

                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Adresse</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('address')}
                                />
                            )}
                            name="address"
                            rules={{ required: true, minLength: 3, maxLength: 20, pattern: /^[a-zA-ZÀ-ú\-\s]*/ }}
                            defaultValue=""
                        />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Code postal</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('postalCode')}
                                />
                            )}
                            name="postalCode"
                            rules={{ required: true, minLength: 5, maxLength: 5, pattern: /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/ }}
                            defaultValue=""
                        />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Ville</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('city')}
                                />
                            )}
                            name="city"
                            rules={{ required: true, minLength: 3, maxLength: 15, pattern: /^[a-zA-ZÀ-ú\-\s]*/ }}
                            defaultValue=""
                        />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Téléphone</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('phone')}
                                />
                            )}
                            name="phone"
                            rules={{ required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]*$/ }}
                            defaultValue=""
                        />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <React.Fragment>
                        <Layout level='1' style={styles.lines}>
                            <Text
                                appearance='hint'
                                category='s1'
                            >Email</Text>
                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Input
                                    size='small'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    style={styles.inputs}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    caption={displayError('mail')}
                                />
                            )}
                            name="mail"
                            rules={{ required: true, maxLength: 50, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i }}
                            defaultValue=""
                        />
                        </Layout>
                        <Divider />
                    </React.Fragment>

                    <Button
                        size='medium'
                        status='success'
                        style={styles.button}
                        onPress={handleSubmit(onValidateNewCustomer)}>
                        AJOUTER
                    </Button>

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
    inputs: {
        width: '70%'
    },
    lines: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
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
    button: {
        width: 250,
        alignSelf: "center",
        marginTop: 20,
    },
    errors: {
        color: 'red'
    }
})
