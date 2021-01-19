import React from "react";
import CustomersScreen from "../screens/CustomersScreen";
import {createStackNavigator} from "@react-navigation/stack";
import CustomerInfosScreen from "../screens/CustomerInfosScreen";
import { AntDesign } from '@expo/vector-icons'
import {Button} from "react-native";
import NewCustomerScreen from "../screens/NewCustomerScreen";

const Stack = createStackNavigator()

export default function ApplicationStack(props: any) {

    return (
        <Stack.Navigator initialRouteName="Customers">
            <Stack.Screen name="Customers" component={CustomersScreen} options={{
                headerTitle: 'Clients',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
                headerRight: () => (
                    <AntDesign name="pluscircle" size={32} color="#1796D4" style={{ marginRight: 15 }} onPress={() => props.navigation.navigate('NewCustomer')}/>
                )
            }} />
            <Stack.Screen name="CustomerInfos" component={CustomerInfosScreen} options={{
                headerTitle: 'Fiche client',
                headerBackTitle: 'Clients',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20
                },
            }}/>
            <Stack.Screen name="NewCustomer" component={NewCustomerScreen} options={{
                headerTitle: 'Nouveau client',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
                headerRight: () => (
                    <Button title={'Valider'} onPress={() => console.log('Dispatch action add customer')} />
                )
            }} />
        </Stack.Navigator>
    )
}
