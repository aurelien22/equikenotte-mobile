import {ActAction} from "../actions/actActions";
import {ActModel} from "../Types";

type ActsState = {
    acts: ActModel[]
}

const initialState = {
    acts: []
}

const ActsReducer = (state: ActsState = initialState, action: ActAction) => {

    switch (action.type) {

        case "SET_ACTS":

            return {
                ...state,
                acts: action.payload
            }

        case "ADD_ACT":

            return {
                ...state,
                acts: [
                    ...state.acts,
                    action.payload
                ]
            }

        default:
            return state;
    }

}

export { ActsReducer }
