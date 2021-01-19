import axios from "axios";
import { BASE_URL } from "../../utils";
import { Dispatch } from "react";

export interface UserModel {
    token: string
}

export interface LoginAction {
    readonly type: 'ON_LOGIN';
    payload: UserModel;
}

export interface ErrorAction {
    readonly type: 'ON_ERROR';
    payload: any;
}

export type UserAction = LoginAction | ErrorAction

// We need to dispatch action

export const onLogin = (username: string, password: string) => {

    return async (dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.post<UserModel>('http://192.168.1.51:8000/api/login_check', {
                username,
                password
            });

            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: 'identifiant ou mot de passe incorrect'
                })
            } else {
                dispatch({
                    type: "ON_LOGIN",
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: "ON_ERROR",
                payload: 'identifiant ou mot de passe incorrect'
            })
        }
    }
};
