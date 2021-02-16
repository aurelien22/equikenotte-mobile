import React, {createContext, useContext, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";

// IMPORT ROUTES
import AuthStack from "./auth";
import ApplicationStack from "../navigation/application";
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux";

const Stack = createStackNavigator()

export default function Routes() {

    const { user } = useSelector((state: ApplicationState) => state.userReducer);
    const { token } = user

    return (
            <Stack.Navigator>
                { !token ? (
                    <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="Application" component={ApplicationStack} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
    )
}



