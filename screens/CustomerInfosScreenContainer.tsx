import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {CustomerInfos} from "../components/CustomerInfos";

export default class CustomerInfosScreenContainer extends Component {

    private customer: any;

    state = {
        customer: {
            id: 1,
            name: "aurélien",
            surname: "dincuff"
        }
    }

    render() {
        return this.state.customer != null ? (
            <CustomerInfos customer = {this.state.customer} />
        ) : (
            <ActivityIndicator />
        );
    }

}
