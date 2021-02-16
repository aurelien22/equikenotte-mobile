import React from 'react';
import {
    ScrollView,
    StyleSheet, TextInput,
    View,
} from 'react-native';

import { useDispatch } from "react-redux";
import {onLogout, onModif, store} from "../redux";
import {CustomerModel, UserModel} from "../redux/Types";
import {Avatar, Divider, Layout, Text, Button, Input} from "@ui-kitten/components";
import logo from '../assets/logoProfil.png';
import {Controller, useForm} from "react-hook-form";

export default function profileScreen(props: any) {

    const {navigation} = props
    const dispatch = useDispatch();

    const {handleSubmit, control} = useForm();

    let user: UserModel
    user = store.getState().userReducer.user

    const onTapLogout = () => {
        dispatch(onLogout())
        navigation.navigate('Auth', { screen: 'Login' });
    }

    const onTapModificationsValid = data => {
        dispatch(onModif(data))
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View>
                <Avatar
                    style={styles.avatar}
                    source={logo}
                />
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Nom commercial
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.tradename}
                                    value={value}
                                />
                            )}
                            name="tradename"
                            defaultValue={user.tradename}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            SIRET
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.siret}
                                    value={value}
                                />
                            )}
                            name="siret"
                            defaultValue={user.siret}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Prénom
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.name}
                                    value={value}
                                />
                            )}
                            name="name"
                            defaultValue={user.name}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Nom
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.surname}
                                    value={value}
                                />
                            )}
                            name="surname"
                            defaultValue={user.surname}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Adresse
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.address}
                                    value={value}
                                />
                            )}
                            name="address"
                            defaultValue={user.address}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Code postal
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.postalCode}
                                    value={value}
                                />
                            )}
                            name="postalCode"
                            defaultValue={user.postalCode}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Ville
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.city}
                                    value={value}
                                />
                            )}
                            name="city"
                            defaultValue={user.city}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Telephone
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.phone}
                                    value={value}
                                />
                            )}
                            name="phone"
                            defaultValue={user.phone}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>
                <React.Fragment>
                    <Layout level='1' style={styles.profileSetting}>
                        <Text
                            appearance='hint'
                            category='s1'>
                            Email
                        </Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    size='small'
                                    onChangeText={value => onChange(value)}
                                    defaultValue={user.mail}
                                    value={value}
                                />
                            )}
                            name="mail"
                            defaultValue={user.mail}
                        />
                    </Layout>
                    <Divider />
                </React.Fragment>

                <Button
                size='medium'
                status='success'
                onPress={handleSubmit(onTapModificationsValid)}
                style={styles.buttons}
                >VALIDER LES MODIFICATIONS</Button>

                <Button
                    size='medium'
                    status='danger'
                    onPress={onTapLogout}
                    style={styles.buttons}
                >DECONNEXION</Button>
            </View>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 24
    },
    avatar: {
        alignSelf: "center",
        aspectRatio: 1.0,
        height: 124,
        marginBottom: 25
    },
    text: {
        color: '#1796D4'
    },
    profileSetting: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16
    },
    buttons: {
        width: 250,
        alignSelf: "center",
        marginTop: 20,
    }
})
