import React, {createContext, useEffect, useMemo, useState} from 'react';
import CustomersScreen from "./CustomersScreen";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from "@react-navigation/stack";

export default function HomeContainer() {

    const Tab = createBottomTabNavigator();
    const CustomersStack = createStackNavigator();

    function CustomersStackScreen({navigation}) {
        return (
            <CustomersStack.Navigator>
                <CustomersStack.Screen name="customers" component={CustomersScreen} />
            </CustomersStack.Navigator>
        )
    }

    function HorsesStackScreen({navigation}) {
        return (
            <CustomersStack.Navigator>
                <CustomersStack.Screen name="customers" component={CustomersScreen} />
            </CustomersStack.Navigator>
        )
    }

    function CustomersScreen({navigation}) {
        return (
            <CustomersScreen navigation = {navigation}/>
        )
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Clients"
                component={CustomersStackScreen}
            />
            <Tab.Screen
                name="Horses"
                component={HorsesStackScreen}
            />
        </Tab.Navigator>
    );
}
