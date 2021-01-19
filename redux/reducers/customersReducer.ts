import {CustomerAction, CustomerModel} from "../actions/customerActions";


type CustomersState = {
    customers: CustomerModel[]
}

const initialState = {
    customers: []
}

const CustomersReducer = (state: CustomersState = initialState, action: CustomerAction) => {

    switch (action.type) {

        case "SET_CUSTOMERS":

            console.log(action.payload)

            return {
                ...state,
                customers: action.payload
            }
        default:
            return state;
    }

}

export { CustomersReducer }
