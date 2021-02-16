import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {ApplicationState} from "../redux";
import ActListItem from "../components/ActListItem";

export default function ActsScreen (props: any) {

    const { acts } = useSelector((state: ApplicationState) => state.actsReducer);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={acts}
                renderItem={({item}) => <ActListItem act={item} navigation={props.navigation}/>}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        marginTop: 10,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },

})
