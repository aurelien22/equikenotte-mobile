import {AppointmentModel} from "../Types";
import {AppointmentAction} from "../actions/AppointmentActions";

type AppointmentsState = {
    appointments: AppointmentModel[]
}

const initialState = {
    appointments: []
}

const AppointmentsReducer = (state: AppointmentsState = initialState, action: AppointmentAction) => {

    switch (action.type) {

        case "SET_APPOINTMENTS":

            return {
                ...state,
                appointments: action.payload
            }

        case "ADD_APPOINTMENT":

            return {
                ...state,
                appointments: [
                    ...state.appointments,
                    action.payload
                ]
            }

        default:
            return state;
    }

}

export { AppointmentsReducer }
