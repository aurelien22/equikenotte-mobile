import {HorseAction, HorseModel} from "../actions/horseActions";


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
