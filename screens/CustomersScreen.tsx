import React, {Component, useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, setCustomers} from "../redux";
import {TopBar} from "../components/TopBar";
import {SearchBar} from "../components/SearchBar";
import CustomerListItem from "../components/CustomerListItem";

export default function CustomersScreen (props: any) {

    const dispatch = useDispatch();

    const { customers } = useSelector((state: ApplicationState) => state.customerReducer);

    useEffect(() => {
        dispatch(setCustomers(1))
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.main_container}>
                <SearchBar />
                <FlatList
                    data={customers}
                    renderItem={({item}) => <CustomerListItem customer={item} navigation={props.navigation}/>}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.customersList}
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    main_container: {
        display: "flex",
        backgroundColor: 'white'
    },
    customersList: {
        marginTop: 10,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },
    searchBar: {

    }
})
