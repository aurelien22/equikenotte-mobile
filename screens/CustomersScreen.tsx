import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {CustomersListView} from '../components/CustomersListView'

export default class CustomersScreen extends Component {


    state = {
        customers: [
            {
                id: 1,
                name: "aurélien",
                surname: "dincuff"
            },
            {
                id: 2,
                name: "jennifer",
                surname: "bouyou"
            },
        ]
    }

    render() {
        return this.state.customers != null ? (
            <CustomersListView customers = {this.state.customers} />
        ) : (
            <ActivityIndicator />
        );
    }

}
