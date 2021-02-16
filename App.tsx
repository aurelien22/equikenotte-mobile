import React from 'react';
import Routes from './navigation/Routes';
import { Provider } from 'react-redux'
import { store } from "./redux";
import {NavigationContainer} from "@react-navigation/native";
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {

    return (
        <Provider store={store}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </ApplicationProvider>
        </ Provider>
    )
}
