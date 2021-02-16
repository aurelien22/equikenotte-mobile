import {BenefitAction} from "../actions/benefitActions";
import { BenefitModel } from "../Types"

type BenefitsState = {
    benefits: BenefitModel[]
}

const initialState = {
    benefits: []
}

const BenefitsReducer = (state: BenefitsState = initialState, action: BenefitAction) => {

    switch (action.type) {

        case "SET_BENEFITS":

            return {
                ...state,
                benefits: action.payload
            }

        default:
            return state;
    }

}

export { BenefitsReducer }
