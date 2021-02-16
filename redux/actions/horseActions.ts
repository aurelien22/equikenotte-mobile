import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {HorseModel} from "../Types";
import {BASE_URL} from "../../utils";

export interface SetHorsesAction {
    readonly type: 'SET_HORSES';
    payload: any;
}

export interface AddHorseAction {
    readonly type: 'ADD_HORSE';
    payload: any;
}

export type HorseAction = SetHorsesAction | AddHorseAction

// We need to dispatch action

export const setHorses = (id: number) => {

    return async (dispatch: Dispatch<HorseAction>) => {

        try {
            const response = await axios.get<HorseModel>(BASE_URL + 'dentists/' + id + '/horses');

            if (response.data['hydra:member']) {
                dispatch({
                        type: "SET_HORSES",
                        payload: response.data['hydra:member']
                    }
                )
            }

        } catch (e) {
            console.log(e)
        }
    }
}

export const addHorse = (horse: HorseModel) => {

    return async (dispatch: Dispatch<HorseAction>) => {

        try {

            const response = await axios.post(BASE_URL + 'horses', {
                ...horse
            });

            if (response.status == 201) {
                dispatch({
                    type: "ADD_HORSE",
                    payload: response.data
                })
            }

        } catch (e) {
            console.log(e)
        }
    }
}
