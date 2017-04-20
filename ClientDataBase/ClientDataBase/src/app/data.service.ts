import { Injectable } from '@angular/core';
import { Base } from './base';

@Injectable()
export class DataService {

private KEY = 'ClientDataBase';

constructor() {}

 public setClientBase(tb: Base): void {
    localStorage.setItem(this.KEY, JSON.stringify(Base.toJson(tb)));
  }

  public getClientBase ()  {

      let db = localStorage.getItem(this.KEY)
      if(db !==null) {
        return Base.fromJson(JSON.parse(db));
      }
      else {
        let newBase: Base = new Base ();
        localStorage.setItem(this.KEY, JSON.stringify(Base.toJson(newBase)));
      }
  }
}
