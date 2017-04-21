import { Client } from './client';


export class Base {

    public clientBase: Client [] = [];
    private _findClient: Client;

     public static toJson(base: Base): any {
        return {
            clientBase: base.clientBase.map(c => Client.toJson(c)),
            findClient: base._findClient
        };
    }

    public static fromJson(json: any): Base {
        let base: Base = new Base();
        base.setClientBase = json.clientBase.map(c => Client.toJson(c));
        base._findClient = json.findClient;
        return base;
    }

    constructor() {}

    public set setClientBase (v: Client []){
        this.clientBase = v;
    }

    public get getClientBase (){
        return this.clientBase;
    }

    public set setFindClient(v: Client) {
    this._findClient = v;
    }

    public get getFindClient(): Client {
    return this._findClient;
    }

    public addClient (newClient: Client): Client []{
        this.clientBase.push(newClient);
        return this.clientBase;
    }

    public deleteClient (id: number): Client [] {
        this.clientBase = this.clientBase.filter(client => client.getId != id)
        return this.clientBase;
    }

    public findClient (id: number): Client {

        for (let i = 0; i < this.clientBase.length; i++){
            if (this.clientBase[i].getId === id){
                this._findClient = this.clientBase[i];
            }
        }
        return this._findClient;
    }
}
