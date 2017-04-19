import { Injectable } from '@angular/core';
import { Init } from '../app/init-database';

@Injectable()
export class DataService extends Init {

  constructor() {
    super();
    console.log('Data Service ОК!')
    this.load();
   }

   public getDatas(){
     let dataBase = JSON.parse(localStorage.getItem('ClientDataBase'));
     return dataBase;
   }

   public addClient (newClient){
      let dataBase = JSON.parse(localStorage.getItem('ClientDataBase'));
      dataBase.push(newClient);
      localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
   }

   public deleteClient(deleteName:string){ 
     let dataBase = JSON.parse(localStorage.getItem('ClientDataBase'));
     dataBase = dataBase.filter(client => client.name != deleteName);
     localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
  }

   public updateClient(oldName, oldAddress, oldPhone, oldEmail, name, address, phone, email){
     let dataBase = JSON.parse(localStorage.getItem('ClientDataBase'));
     
     for (var i = 0; i < dataBase.length; i++){
         if (dataBase[i].name == oldName){
               dataBase[i].name = name }
       }
       for (var i = 0; i < dataBase.length; i++){
         if (dataBase[i].address == oldAddress){
               dataBase[i].address = address }
       }
       for (var i = 0; i < dataBase.length; i++){
         if (dataBase[i].phone == oldPhone){
               dataBase[i].phone = phone }
       }
       for (var i = 0; i < dataBase.length; i++){
         if (dataBase[i].email == oldEmail){
               dataBase[i].email = email }
       }

     localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
   }

}
