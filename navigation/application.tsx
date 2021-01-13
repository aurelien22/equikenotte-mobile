import React from "react";

import CustomersScreen from "../screens/CustomersScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function ApplicationStack() {
    return (
        <Stack.Navigator initialRouteName="Customers">
            <Stack.Screen name="Customers" component={CustomersScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
