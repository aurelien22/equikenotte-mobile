import React, {createContext, useContext, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import SignInContainer from "../screens/LoginScreen"
import HomeContainer from "../screens/HomeContainer";
import {createAppContainer, createSwitchNavigator} from "react-navigation";

// IMPORT ROUTES
import AuthStack from "./auth";
import ApplicationStack from "../navigation/application";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux";

const Stack = createStackNavigator()

export default function Routes() {

    const { user, error} = useSelector((state: ApplicationState) => state.userReducer);

    const { token } = user

    return (
            <Stack.Navigator>
                { token === undefined ? (
                    <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="Application" component={ApplicationStack} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
    )
}



