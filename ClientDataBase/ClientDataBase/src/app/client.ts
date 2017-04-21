export class Client {

    private _id: number;
    private _name: string = '';
    private _address: string = '';
    private _phone: string = '';
    private _email: string = '';


    public static toJson(client: Client): any {
        return {
            getId: client.getId,
            getName: client.getName,
            getPhone: client.getPhone,
            getAddress: client.getAddress,
            getEmail: client.getEmail,
        }
    }

    public static fromJson(client: any): Client {
        return new Client(client.setName, client.setPhone, client.setAddress, client.setEmail);
    }

    constructor(name: string, phone: string, address: string, email: string) {
        this._id = Math.random();
      /*  if (name === null || name === undefined){
           this._address = '';
        } else {
            this._address = name;
        }
        if (phone === null || phone === undefined){
            this._phone = '';
        } else {
            this._address = address;
        }
        if (address === null || address === undefined){
            this._address = '';
        } else {
            this._address = address;
        }
        if (email === null || email === undefined){
            this._email = '';
        } else {
            this._email = email;
        }*/
        this._name = name;
        this._address = address;
        this._phone = phone;
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

     public get getId(): number {
        return this._id;
    }

    public get getName(): string {
        return this._name;
    }

    public get getPhone(): string {
        return this._phone;
    }

    public get getAddress(): string {
        return this._address;
    }

    public get getEmail(): string {
        return this._email;
    }
}
