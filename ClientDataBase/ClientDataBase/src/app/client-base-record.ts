import { Base } from './base';
export class ClientBaseRecord {

    private _baseName: string;
    private _clientBase: Base;

    constructor(baseName: string, clientBase: Base) {
        this._baseName = baseName;
        this._clientBase = clientBase;
    }

    public get getBaseName(): string {
        return this._baseName;
    }

    public get getClientBase(): Base {
        return this._clientBase;
    }

    public static toJson(clientBaseRecord: ClientBaseRecord): any {
        return {
            baseName: clientBaseRecord.getBaseName,
            base: Base.toJson(clientBaseRecord.getClientBase)
        }
    }

    public static fromJson(json: any): ClientBaseRecord {

        let baseName = json.baseName;
        let base = Base.fromJson(json.base);

        return new ClientBaseRecord(baseName, base);
    }

}
