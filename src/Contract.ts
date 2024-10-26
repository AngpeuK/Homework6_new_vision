import {UserEstonia} from "./UserEstonia";
import {UserLatvia} from "./UserLatvia";

export class Contract {
    title: string
    signed: undefined | boolean

    constructor(title: string, signed: boolean | undefined) {
        this.title = title;
        this.signed = signed;
    }

    signUserEstonia(user: UserEstonia)
    signUserLatvia(user:UserLatvia)
}