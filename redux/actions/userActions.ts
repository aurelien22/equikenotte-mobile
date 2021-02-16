import axios from "axios";
import { Dispatch } from "react";
import jwtDecode from "jwt-decode";
import {UserModel} from "../Types";
import {store} from "../store";
import {BASE_URL} from "../../utils";

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

export interface LogoutAction {
    readonly type: 'ON_LOGOUT';
}

export interface ModifAction {
    readonly type: 'ON_MODIF';
    payload: UserModel;
}

export type UserAction = LoginAction | ErrorAction | LogoutAction | ModifAction

// We need to dispatch action

export const onLogin = (username: string, password: string) => {

    let user : UserModel

    return async (dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.post<UserResponseModel>(BASE_URL + 'login_check', {
                username,
                password
            });

            user = jwtDecode(response.data.token)
            user.token = response.data.token

            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: 'Erreur serveur'
                })
            } else {

                axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`

                dispatch({
                    type: "ON_LOGIN",
                    payload: user
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

export const onLogout = () => {

    return async (dispatch: Dispatch<UserAction>) => {

        dispatch({
            type: "ON_LOGOUT",
        })
    }
}

export const onModif = (modifiedUser: UserModel) => {

    return async (dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.patch<UserModel>(BASE_URL + 'dentists/'+ store.getState().userReducer.user.id,
                {
                    "tradename": modifiedUser.tradename,
                    "siret": modifiedUser.siret,
                    "name": modifiedUser.name,
                    "surname": modifiedUser.surname,
                    "address": modifiedUser.address,
                    "postalCode": modifiedUser.postalCode,
                    "city": modifiedUser.city,
                    "phone": modifiedUser.phone,
                    "mail": modifiedUser.mail,
                },
                {
                headers: {
                    'Content-type': 'application/ld+json'
                }
            });

            if (response) {
                dispatch({
                    type: "ON_MODIF",
                    payload: modifiedUser
                })
            }

        } catch (error) {
            dispatch({
                type: "ON_ERROR",
                payload: error.message
            })
        }
    }
};
