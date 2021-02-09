import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, setActs, store} from "../redux";
import {SearchBar} from "../components/SearchBar";
import ActListItem from "../components/ActListItem";

export default function ActsScreen (props: any) {

    const dispatch = useDispatch();

    const { acts } = useSelector((state: ApplicationState) => state.actsReducer);

    useEffect(() => {
        dispatch(setActs(store.getState().userReducer.user.id))
    }, [])

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <SearchBar />
                <FlatList
                    data={acts}
                    renderItem={({item}) => <ActListItem act={item} navigation={props.navigation}/>}
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
