import {Dispatch} from "react";
import axios from "axios";
import {store} from "../store";
import {ActModel} from "../Types";

export interface SetActsAction {
    readonly type: 'SET_ACTS';
    payload: any;
}

export interface AddActAction {
    readonly type: 'ADD_ACT';
    payload: any;
}

export type ActAction = SetActsAction | AddActAction

// We need to dispatch action

export const setActs = (id: number) => {

    return async (dispatch: Dispatch<ActAction>) => {

        try {
            const response = await axios.get<ActModel>('http://192.168.1.51:8000/api/dentists/' + id + '/acts', {
                headers: {
                    Authorization: `Bearer ${store.getState().userReducer.user.token}`
                }
            });

            if (response.data['hydra:member']) {
                dispatch({
                        type: "SET_ACTS",
                        payload: response.data['hydra:member']
                    }
                )
            }

        } catch (e) {
            console.log(e)
        }
    }
}

export const addAct = (act: ActModel) => {

    return async (dispatch: Dispatch<ActAction>) => {

        try {

            const response = await axios.post('http://192.168.1.51:8000/api/acts', {
                ...act
            }, {
                headers: {
                    Authorization: `Bearer ${store.getState().userReducer.user.token}`
                }
            });

            if (response.status == 201) {
                dispatch({
                    type: "ADD_ACT",
                    payload: response.data
                })
            }

        } catch (e) {
            console.log(e)
        }
    }
}
