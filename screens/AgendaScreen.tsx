import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Datepicker, Divider, Icon, Layout, List, Text} from "@ui-kitten/components";
import {ApplicationState, setAppointments} from "../redux";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment/moment";

export default function AgendaScreen (props: any) {

    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();
    const { appointments } = useSelector((state: ApplicationState) => state.appointmentsReducer);
    const { user } = useSelector((state: ApplicationState) => state.userReducer);


    useEffect(() => {
        dispatch(setAppointments(user.id, date))
    }, [date])

    const renderItem = (item) => {

        return (

            <Card status='info' style={styles.card}>
                <View style={styles.cardContainer}>
                    <View>
                        <Text appearance='default' style={styles.texts}>
                            {moment(item.item.startTime).format('HH:mm')} - {moment(item.item.endTime).format('HH:mm')}
                        </Text>
                        <Text appearance='default' style={styles.name}>
                            {item.item.customer.surname} {item.item.customer.name}
                        </Text>
                        <Text appearance='hint' style={styles.texts}>
                            {item.item.numberOfHorses} {item.item.numberOfHorses == 1 ? 'cheval' : 'chevaux' }
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => console.log('Supprimer le rendez-vous')}>
                        <Icon style={styles.icon} name='trash-outline' fill='red'/>
                    </TouchableOpacity>
                </View>
            </Card>
        )
    }


    return (
        <Layout style={styles.container} level='1'>
            <Datepicker
                date={date}
                style={styles.datePicker}
                onSelect={selectedDate => setDate(selectedDate)}
            />
            <Divider />
            <List
                data={appointments}
                renderItem={renderItem}
                style={styles.list}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    datePicker: {
        margin: 15
    },
    texts: {
        marginBottom: 5
    },
    list: {
        backgroundColor: 'white',
        height: '100%',
    },
    card: {
        width: '100%',
        marginBottom: 15,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    icon: {
        width: 20,
        height: 20,
    }
})
