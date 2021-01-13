import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

const rootReducer = combineReducers({
    userReducer: UserReducer,
    // some more reducers will come
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer }
