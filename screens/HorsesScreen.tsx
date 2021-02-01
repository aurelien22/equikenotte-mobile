import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, store} from "../redux";
import {SearchBar} from "../components/SearchBar";
import HorseListItem from "../components/HorseListItem";
import {setHorses} from "../redux";

export default function HorsesScreen (props: any) {

    const dispatch = useDispatch();

    const { horses } = useSelector((state: ApplicationState) => state.horseReducer);

    useEffect(() => {
        dispatch(setHorses(store.getState().userReducer.user.id))
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <SearchBar />
                <FlatList
                    data={horses}
                    renderItem={({item}) => <HorseListItem horse={item} navigation={props.navigation}/>}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: 'white'
    },
    list: {
        marginTop: 10,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },

})
