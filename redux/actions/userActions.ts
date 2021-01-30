import axios from "axios";
import { BASE_URL } from "../../utils";
import { Dispatch } from "react";
import jwtDecode from "jwt-decode";

export interface UserModel {
    id: number,
    name: string,
    surname: string,
    tradename: string,
    siret: string,
    address: string,
    postalCode: string,
    city: string,
    phone: string,
    mail: string,
    token: string
}

export interface UserResponseModel {
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

    let user : UserModel

    return async (dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.post<UserResponseModel>('http://192.168.1.51:8000/api/login_check', {
                username,
                password
            });

            user = jwtDecode(response.data.token)
            user.token = response.data.token

            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: 'identifiant ou mot de passe incorrect'
                })
            } else {

                dispatch({
                    type: "ON_LOGIN",
                    payload: user
                })
            }
        } catch (error) {
            dispatch({
                type: "ON_ERROR",
                payload: 'Erreur autre'
            })
        }
    }
};
