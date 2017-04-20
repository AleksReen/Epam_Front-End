export class Client {

    private _id: number;
    private _name: string;
    private _address: string;
    private _phone: string;
    private _email: string;

    constructor(name: string, phone: string, address: string, email: string) {
        this._id = Math.random();
        this._name = name;
        this._phone = phone;
        this._address = address;
        this._email = email;
    }


    public set setName(name: string) {
        this._name = name;
    }

    public set setPhone(phone: string) {
        this._phone = phone;
    }

    public set setAddress(address: string) {
        this._address = address;
    }

    public set setEmail(email: string) {
        this._email = email;
    }

     public get getId() : number {
        return this._id;
    }

    public get getName() : string {
        return this._name;
    }

    public get getPhone() : string {
        return this._phone;
    }

    public get getAddress() : string {
        return this._address;
    }

    public get getEmail() : string {
        return this._email;
    }

     public static toJson(client: Client): any {
        return {
            id: client.getId,
            name: client.getName,
            phone:client.getPhone,
            address: client.getAddress,
            email:client.getEmail
        }
    }

    public static fromJson(client: any): Client {
        return new Client(client.getName, client.getPhone, client.getAddress,client.getEmail);
    }
}
