import { Injectable } from '@angular/core';
import { Init } from '../app/init-database';

@Injectable()
export class DataService extends Init {

  constructor() {
    super();
    console.log("dataBase service working!!!")
    this.load();
   }

   public getDatas(){

     /* this.dataBase = [
      {name:"Aleksandr Reentovich", address:"Mogilev, Lenina str., 18-29", phone:"8-029-331-26-46", email:"aleks@tut.by"},
       {name:"Kovaloy Kirill", address:"Mogilev, Dimitrova str., 45-15", phone:"8-029-125-52-84", email:"kiril@tut.by"},
        {name:"Ardenov Ivan", address:"Mogilev, Solnechnaya str., 45-69", phone:"8-029-859-69-45", email:"ivan@tut.by"}
    ]*/

    let dataBase =JSON.parse(localStorage.getItem('ClientDataBase'));
     return dataBase;
   }

}
