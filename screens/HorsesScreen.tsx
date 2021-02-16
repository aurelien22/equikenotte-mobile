import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, store} from "../redux";
import {SearchBar} from "../components/SearchBar";
import HorseListItem from "../components/HorseListItem";
import {setHorses} from "../redux";
import {Divider, List} from "@ui-kitten/components";
import CustomerListItem from "../components/CustomerListItem";

export default function HorsesScreen (props: any) {

    const { horses } = useSelector((state: ApplicationState) => state.horseReducer);

    return (
        <SafeAreaView style={styles.container}>
            <List
                data={horses}
                ItemSeparatorComponent={Divider}
                renderItem={({item}) => <HorseListItem horse={item} navigation={props.navigation}/>}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        marginTop: 10,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },

})
