import React from "react";
import CustomersScreen from "../screens/CustomersScreen";
import {createStackNavigator} from "@react-navigation/stack";
import CustomerInfosScreen from "../screens/CustomerInfosScreen";
import { AntDesign } from '@expo/vector-icons'
import NewCustomerScreen from "../screens/NewCustomerScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HorsesScreen from "../screens/HorsesScreen";
import HorseInfosScreen from "../screens/HorseInfosScreen";
import NewHorseScreen from "../screens/NewHorseScreen";
import ActsScreen from "../screens/ActsScreen";
import ActInfosScreen from "../screens/ActInfosScreen";
import NewActScreen from "../screens/NewActScreen";
import ProfileScreen from "../screens/ProfileScreen"
import AgendaScreen from "../screens/AgendaScreen";
import NewAppointmentScreen from "../screens/NewAppointmentScreen";

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
            <BottomStack.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                    tabBarLabel: 'Réglages',
                    tabBarIcon: () => (
                        <AntDesign name="setting" size={28} color={'#1796D4'} />
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

function AppointmentNavigator(props: any) {

    return (
        <AppointmentStack.Navigator>
            <AppointmentStack.Screen
                name="Agenda"
                component={AgendaScreen}
                options={{
                    headerTitle: 'Agenda',
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <AntDesign name="pluscircle" size={32} color="#1796D4" style={{ marginRight: 15 }} onPress={() => props.navigation.navigate('NewAppointment')} />
                    )
                }}
            />
            <AppointmentStack.Screen name="NewAppointment" component={NewAppointmentScreen} options={{
                headerTitle: 'Nouveau rendez-vous',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }} />
        </AppointmentStack.Navigator>
    )
}

const ActsStack = createStackNavigator();

function ActsNavigator(props: any) {

    return (
        <ActsStack.Navigator>
            <ActsStack.Screen
                name="Acts"
                component={ActsScreen}
                options={{
                    headerTitle: 'Actes',
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                    headerRight: () => (
                        <AntDesign name="pluscircle" size={32} color="#1796D4" style={{ marginRight: 15 }} onPress={() => props.navigation.navigate('NewAct')} />
                    )
                }}
            />
            <ActsStack.Screen name="ActInfos" component={ActInfosScreen} options={{
                headerTitle: 'Fiche acte',
                headerBackTitle: 'Actes',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20
                },
            }}/>
            <ActsStack.Screen name="NewAct" component={NewActScreen} options={{
                headerTitle: 'Nouvel acte',
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                },
            }} />
        </ActsStack.Navigator>

    )

}

const BillsStack = createStackNavigator();

function BillsNavigator() {

}

const SettingsStack = createStackNavigator();

function SettingsNavigator(props: any) {

    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Logout"
                component={ProfileScreen}
                options={{
                    headerTitle: 'Profil',
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                }}
            />
        </SettingsStack.Navigator>

    )

}
