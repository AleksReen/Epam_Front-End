import { Client } from './client';


export class Base {

    private _clientBase: Client [] = [];

    constructor(){
        
    }

    public get getClientBase (){
        return this._clientBase; 
    }

}
