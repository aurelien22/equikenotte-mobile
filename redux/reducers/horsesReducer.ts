import {HorseAction} from "../actions/horseActions";
import { HorseModel } from "../Types"

type HorsesState = {
    horses: HorseModel[]
}

const initialState = {
    horses: []
}

const HorsesReducer = (state: HorsesState = initialState, action: HorseAction) => {

    switch (action.type) {

        case "SET_HORSES":

            return {
                ...state,
                horses: action.payload
            }

        case "ADD_HORSE":

            return {
                ...state,
                horses: [
                    ...state.horses,
                    action.payload
                ]
            }

        default:
            return state;
    }

}

export { HorsesReducer }
