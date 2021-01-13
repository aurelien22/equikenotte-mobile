import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TopBar} from "./TopBar";
import {SearchBar} from "./SearchBar";
import {CustomerListItem} from "./CustomerListItem";

export const CustomersListView = (props: { customers: any; }) => {

    const {customers} = props

    return (
        <SafeAreaView style={styles.main_container}>
            <TopBar />
            <SearchBar />
            <FlatList
                data={customers}
                renderItem={({item}) => <CustomerListItem customer={item}/>}
                keyExtractor={(item) => item.id.toString()}
                style={styles.customersList}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    main_container: {
        display: "flex",
    },
    customersList: {
        marginTop: 10
    },
})
