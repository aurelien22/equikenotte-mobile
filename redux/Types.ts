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

export interface CustomerModel {
    id: number | null,
    name: string,
    surname: string,
    address: string,
    postalCode: string,
    city: string,
    phone: string,
    mail: string,
    dentist: number | string | null
}

export interface HorseModel {
    id: number | null,
    sire: string,
    name: string,
    dateOfBirth: Date,
    owner: number | string | null,
    acts: any
}
