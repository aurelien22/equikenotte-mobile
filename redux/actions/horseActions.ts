import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {CustomerAction, CustomerModel} from "./customerActions";

export interface HorseModel {
    id: number | null,
    sire: string,
    name: string,
    dateOfBirth: Date,
    owner: number | string | null,
    acts: any
}

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
            const response = await axios.get<HorseModel>('http://192.168.1.51:8000/api/dentists/' + id + '/horses', {
                headers: {
                    Authorization: `Bearer ${store.getState().userReducer.user.token}`
                }
            });

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

            const response = await axios.post('http://192.168.1.51:8000/api/horses', {
                ...horse
            }, {
                headers: {
                    Authorization: `Bearer ${store.getState().userReducer.user.token}`
                }
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
