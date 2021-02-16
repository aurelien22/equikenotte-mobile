import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState, setActs, setCustomers, setHorses} from "../redux";
import CustomerListItem from "../components/CustomerListItem";
import {Divider, List} from "@ui-kitten/components";
import {setBenefits} from "../redux/actions/benefitActions";

export default function CustomersScreen (props: any) {

    const dispatch = useDispatch();
    const { customers } = useSelector((state: ApplicationState) => state.customerReducer);
    const { user } = useSelector((state: ApplicationState) => state.userReducer);

    useEffect(() => {
        dispatch(setCustomers(user.id))
        dispatch(setHorses(user.id))
        dispatch(setActs(user.id))
        dispatch(setBenefits(user.id))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <List
                data={customers}
                ItemSeparatorComponent={Divider}
                renderItem={({item}) => <CustomerListItem customer={item} navigation={props.navigation}/>}
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
    customersList: {
        marginTop: 10,
        borderTopColor: '#1796D4',
        borderTopWidth: 2,
    },
    searchBar: {

    }
})
