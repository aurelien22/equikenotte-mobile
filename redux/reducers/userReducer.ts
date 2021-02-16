import {UserAction} from '../actions/userActions'
import {Alert} from "react-native";

type UserState = {
    user: any,
}

const initialState = {
    user:
        {
            id: 0,
            name: '',
            surname: '',
            tradename: '',
            siret: '',
            address: '',
            postalCode: '',
            city: '',
            phone: '',
            mail: '',
            token: '',
            username: ''
        },
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {

    switch (action.type) {
        case "ON_LOGIN":

            return {
                ...state,
                user: action.payload
            }
        case "ON_LOGOUT":

            return {
                ...state,
                user: {}
            }
        case "ON_MODIF":

            Alert.alert('', 'Modification effectuée')

            return {
                ...state,
                tradename: action.payload.tradename,
                siret: action.payload.siret,
                name: action.payload.name,
                surname: action.payload.surname,
                address: action.payload.address,
                postalCode: action.payload.postalCode,
                cit: action.payload.city,
                phone: action.payload.phone,
                mail: action.payload.mail,
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
