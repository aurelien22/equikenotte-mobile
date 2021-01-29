import React from "react";
import CustomersScreen from "../screens/CustomersScreen";
import {createStackNavigator} from "@react-navigation/stack";
import CustomerInfosScreen from "../screens/CustomerInfosScreen";
import { AntDesign } from '@expo/vector-icons'
import NewCustomerScreen from "../screens/NewCustomerScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {UserOutlined} from "@ant-design/icons";
import HorsesScreen from "../screens/HorsesScreen";
import HorseInfosScreen from "../screens/HorseInfosScreen";
import NewHorseScreen from "../screens/NewHorseScreen";

const Stack = createStackNavigator()
const BottomStack = createBottomTabNavigator()

export default function ApplicationStack(props: any) {

    return (
        <BottomStack.Navigator
            initialRouteName="Customers"
        >
            <BottomStack.Screen
                name="Appointments"
                component={AppointmentNavigator}
                options={{
                    tabBarLabel: 'Agenda',
                    tabBarIcon: () => (
                        <AntDesign name="calendar" size={28} color={'#1796D4'} />
                    )
                }}
            />
            <BottomStack.Screen
                name="Customers"
                component={CustomersNavigator}
                options={{
                    tabBarLabel: 'Clients',
                    tabBarIcon: () => (
                        <AntDesign name="user" size={28} color={'#1796D4'} />
                    )
                }}
            />
            <BottomStack.Screen
                name="Horses"
                component={HorsesNavigator}
                options={{
                    tabBarLabel: 'Chevaux',
                    tabBarIcon: () => (
                        <AntDesign name="gitlab" size={28} color={'#1796D4'} />
                    )
                }}
            />
            <BottomStack.Screen
                name="Acts"
                component={ActsNavigator}
                options={{
                    tabBarLabel: 'Actes',
                    tabBarIcon: () => (
                        <AntDesign name="medicinebox" size={28} color={'#1796D4'} />
                    )
                }}
            />
            <BottomStack.Screen
                name="Bills"
                component={BillsNavigator}
                options={{
                    tabBarLabel: 'Factures',
                    tabBarIcon: () => (
                        <AntDesign name="form" size={28} color={'#1796D4'} />
                    )
                }}
            />
        </BottomStack.Navigator>
    )
}

const CustomersStack = createStackNavigator();

function CustomersNavigator(props: any) {
    return (
        <CustomersStack.Navigator>
            <CustomersStack.Screen
                name="Customers"
                component={CustomersScreen}
                options={{
                    headerTitle: 'Clients',
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <AntDesign name="pluscircle" size={32} color="#1796D4" style={{ marginRight: 15 }} onPress={() => props.navigation.navigate('NewCustomer')}/>
                    )
                }}
            />
            <CustomersStack.Screen name="CustomerInfos" component={CustomerInfosScreen} options={{
                headerTitle: 'Fiche client',
                headerBackTitle: 'Clients',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20
                },
            }}/>
            <CustomersStack.Screen name="NewCustomer" component={NewCustomerScreen} options={{
                headerTitle: 'Nouveau client',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }} />
        </CustomersStack.Navigator>
    )
}

const HorsesStack = createStackNavigator();

function HorsesNavigator(props: any) {

    return (
        <HorsesStack.Navigator>
            <HorsesStack.Screen
                name="Horses"
                component={HorsesScreen}
                options={{
                    headerTitle: 'Chevaux',
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <AntDesign name="pluscircle" size={32} color="#1796D4" style={{ marginRight: 15 }} onPress={() => props.navigation.navigate('NewHorse')} />
                    )
                }}
            />
            <HorsesStack.Screen name="HorseInfos" component={HorseInfosScreen} options={{
                headerTitle: 'Fiche cheval',
                headerBackTitle: 'Chevaux',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20
                },
            }}/>
            <HorsesStack.Screen name="NewHorse" component={NewHorseScreen} options={{
                headerTitle: 'Nouveau cheval',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }} />
        </HorsesStack.Navigator>

        )
}

const AppointmentStack = createStackNavigator();

function AppointmentNavigator() {

}

const ActsStack = createStackNavigator();

function ActsNavigator() {

}

const BillsStack = createStackNavigator();

function BillsNavigator() {

}
