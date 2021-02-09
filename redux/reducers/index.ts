import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import {CustomersReducer} from "./customersReducer";
import {HorsesReducer} from "./horsesReducer";
import {ActsReducer} from "./actsReducer"

const rootReducer = combineReducers({
    userReducer: UserReducer,
    customerReducer: CustomersReducer,
    horseReducer: HorsesReducer,
    actsReducer: ActsReducer
    // some more reducers will come
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer }
