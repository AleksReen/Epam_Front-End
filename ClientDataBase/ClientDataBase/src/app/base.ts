import { Client } from './client';


export class Base {

    private _clientBase: Client [] = [];
    private _findClient: Client;

     public static toJson(base: Base): any {
        return {
            clientBase: base._clientBase.map(c => Client.toJson(c)),
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
        this._clientBase = v;
    }

    public get getClientBase (){
        return this._clientBase;
    }

    public set setFindClient(v: Client) {
    this._findClient = v;
    }

    public get getFindClient(): Client {
    return this._findClient;
    }

    public addClient (newClient: Client): Client []{
        this._clientBase.push(newClient);
        return this._clientBase;
    }

    public deleteClient (id: number): Client [] {
        this._clientBase = this._clientBase.filter(client => client.getId != id)
        return this._clientBase;
    }

    public findClient (id: number): Client {

        for (let i = 0; i < this._clientBase.length; i++){
            if (this._clientBase[i].getId === id){
                this._findClient = this._clientBase[i];
            }
        }
        return this._findClient;
    }
}
