import React, {createContext, useEffect, useMemo, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './navigation/Routes';

import { Provider } from 'react-redux'
import { store } from "./redux";
import {NavigationContainer} from "@react-navigation/native";
import CustomersScreen from "./screens/CustomersScreen";
import NewCustomerScreen from "./screens/NewCustomerScreen";

export default function App() {

    const MainStack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ Provider>
    )
}
