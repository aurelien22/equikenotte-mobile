import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {BenefitModel, UserModel} from "../Types";
import {BASE_URL} from "../../utils";

export interface SetBenefitsAction {
    readonly type: 'SET_BENEFITS';
    payload: any;
}

export type BenefitAction = SetBenefitsAction

export const setBenefits = (id: number) => {

    return async (dispatch: Dispatch<BenefitAction>) => {

        try {
            const response = await axios.get<BenefitModel>(BASE_URL + 'dentists/'+ id +'/benefits');

            if (response.data['hydra:member']) {
                dispatch({
                        type: "SET_BENEFITS",
                        payload: response.data['hydra:member']
                    }
                )
            }

        } catch (e) {
            console.log(e)
        }
    }
}
