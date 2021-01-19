import {Dispatch} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {ApplicationState} from "../reducers";
import {store} from "../store";

export interface CustomerModel {
    id: number,
    name: string,
    surname: string,
    address: string,
    postalCode: string,
    city: string,
    phone: string,
    mail: string
}

export interface SetCustomersAction {
    readonly type: 'SET_CUSTOMERS';
    payload: any
}

export type CustomerAction = SetCustomersAction

// We need to dispatch action

export const setCustomers = (id: number) => {

    return async (dispatch: Dispatch<CustomerAction>) => {

        try {
            const response = await axios.get<CustomerModel>('http://192.168.1.51:8000/api/dentists/1/customers', {
                headers: {
                    Authorization: `Bearer ${store.getState().userReducer.user.token}`
                }
            });

            if (response.data['hydra:member']) {
                dispatch({
                        type: "SET_CUSTOMERS",
                        payload: response.data['hydra:member']
                    }
                )
            }

        } catch (e) {
            console.log(e)
        }
    }
}
