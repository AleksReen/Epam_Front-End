export class Client {

    private _id: number;
    private _name: string;
    private _address: string;
    private _phone: string;
    private _email: string;

    constructor(name: string, phone: string, address?: string, email?: string) {
        this._id = Math.random();
        this._name = name;
        this._address = address;
        this._phone = phone;
        this._email = email;
    }

}
