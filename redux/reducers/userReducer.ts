import {UserAction, UserModel} from '../actions/userActions'
import {Alert} from "react-native";

type UserState = {
    user: UserModel,
    error: string | undefined
}

const initialState = {
    user: {} as UserModel,
    error: undefined,
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {

    switch (action.type) {
        case "ON_LOGIN":

            return {
                ...state,
                user: action.payload
            }
        case "ON_ERROR":

            Alert.alert('', action.payload)

            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export { UserReducer }
