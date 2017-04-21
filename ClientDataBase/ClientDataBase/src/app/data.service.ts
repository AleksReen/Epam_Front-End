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

      let date = localStorage.getItem(this.KEY)
      if(date !== null) {
        return Base.fromJson(JSON.parse(date));
      }
      else {
        let newBase: Base = new Base ();
        localStorage.setItem(this.KEY, JSON.stringify(Base.toJson(newBase)));
      }
  }
  
}
