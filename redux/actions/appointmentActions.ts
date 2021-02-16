import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {ActModel, AppointmentModel} from "../Types";
import {BASE_URL} from "../../utils";
import moment from "moment/moment";
import {ActAction} from "./actActions";
import {Alert} from "react-native";

export interface SetAppointmentsAction {
    readonly type: 'SET_APPOINTMENTS';
    payload: any;
}

export interface AddAppointmentAction {
    readonly type: 'ADD_APPOINTMENT';
    payload: any;
}

export type AppointmentAction = SetAppointmentsAction | AddAppointmentAction

// We need to dispatch action

export const setAppointments = (id: number, date: Date) => {

    return async (dispatch: Dispatch<AppointmentAction>) => {

        try {
            const response = await axios.get<AppointmentModel>(BASE_URL + 'dentists/' + id + '/appointments', { params: { date: moment(date).format('Y-M-D') }});

            if (response.data['hydra:member']) {
                dispatch({
                        type: "SET_APPOINTMENTS",
                        payload: response.data['hydra:member']
                    }
                )
            }

        } catch (e) {
            console.log(e)
        }
    }
}

export const addAppointment = (appointment: AppointmentModel) => {

    return async (dispatch: Dispatch<AppointmentAction>) => {

        try {

            const response = await axios.post(BASE_URL + 'appointments', {
                ...appointment,
                dentist: "/api/dentists/" + store.getState().userReducer.user.id
            });

            if (response.status == 201) {
                dispatch({
                    type: "ADD_APPOINTMENT",
                    payload: response.data
                })

                Alert.alert('', 'Rendez-vous bien ajouté')

            }

        } catch (e) {
            console.log(e)
        }
    }
}
