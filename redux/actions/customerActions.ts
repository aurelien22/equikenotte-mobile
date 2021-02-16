import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {CustomerModel} from "../Types";
import {BASE_URL} from "../../utils";

export interface SetCustomersAction {
    readonly type: 'SET_CUSTOMERS';
    payload: any;
}

export interface AddCustomerAction {
    readonly type: 'ADD_CUSTOMER';
    payload: any;
}

export type CustomerAction = SetCustomersAction | AddCustomerAction

// We need to dispatch action

export const setCustomers = (id: number) => {

    return async (dispatch: Dispatch<CustomerAction>) => {

        try {
            const response = await axios.get<CustomerModel>(BASE_URL + 'dentists/'+ id + '/customers');

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

export const addCustomer = (customer: CustomerModel) => {

    return async (dispatch: Dispatch<CustomerAction>) => {

        try {

            const response = await axios.post(BASE_URL + 'customers', {
                ...customer,
                dentist: "/api/dentists/" + store.getState().userReducer.user.id
            });

            if (response.status == 201) {
                dispatch({
                    type: "ADD_CUSTOMER",
                    payload: response.data
                })
            }

        } catch (e) {
            console.log(e)
        }
    }
}
