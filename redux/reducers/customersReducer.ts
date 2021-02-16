import {CustomerAction} from "../actions/customerActions";
import {CustomerModel} from "../Types";

type CustomersState = {
    customers: CustomerModel[]
}

const initialState = {
    customers: []
}

const CustomersReducer = (state: CustomersState = initialState, action: CustomerAction) => {

    switch (action.type) {

        case "SET_CUSTOMERS":

            return {
                ...state,
                customers: action.payload
            }

        case "ADD_CUSTOMER":

            return {
                ...state,
                customers: [
                    ...state.customers,
                    action.payload
                ]
            }

        default:
            return state;
    }

}

export { CustomersReducer }
