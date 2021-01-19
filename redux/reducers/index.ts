import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import {CustomersReducer} from "./customersReducer";

const rootReducer = combineReducers({
    userReducer: UserReducer,
    customerReducer: CustomersReducer
    // some more reducers will come
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer }
