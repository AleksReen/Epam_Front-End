import { Injectable } from '@angular/core';
import { Init } from '../app/init-database';
import { Base } from './base';
import { ClientBaseRecord } from './client-base-record';

@Injectable()
export class DataService extends Init {

  constructor() {
    super();
    console.log('Data service ОК!');
    this.load();
   }

 private KEY: string = 'teacherBookBox';

 public putTeacherBook(baseName: string, clientBase: Base): void {

    let teacherBookRecord = new ClientBaseRecord (baseName, clientBase);
    
    let teacherBookRecords: ClientBaseRecord[] = this.getTeacherBookRecords();
    let teacherBooksData = [];

    teacherBookRecords = teacherBookRecords.filter(r => r.getBaseName !== baseName);
    teacherBookRecords.push(teacherBookRecord);

    for (let tbRecord of teacherBookRecords) {
      teacherBooksData.push(ClientBaseRecord.toJson(tbRecord));
    }

    localStorage.setItem(this.KEY, JSON.stringify(teacherBooksData));
  }

   public getTeacherBookRecords(): ClientBaseRecord[] {
    let teacherBooksData = JSON.parse(localStorage.getItem(this.KEY)) || [];
    let teacherBookRecords = [];

    for (let teacherBookRecord of teacherBooksData) {
      teacherBookRecords.push(ClientBaseRecord.fromJson(teacherBookRecord));
    }
    return teacherBookRecords;
  }

   /*public getDatas(){
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
     return dB;
   }

   public addClient (newClient){
      let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
      dB.push(newClient);
      localStorage.setItem('ClientDataBase', JSON.stringify(dB));
      console.log('service ADD');
   }

   public deleteClient(deleteName: string) {
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));
     dB = dB.filter(client => client.name != deleteName);
     localStorage.setItem('ClientDataBase', JSON.stringify(dB));
     console.log('service DELETE');
  }

   public updateClient(oldName, oldAddress, oldPhone, oldEmail, name, address, phone, email) {
     let dB = JSON.parse(localStorage.getItem('ClientDataBase'));

      for (let i = 0; i < dB.length; i++) {
         if (dB[i].name === oldName && dB[i].address === oldAddress && dB[i].phone === oldPhone && dB[i].email === oldEmail ) {
           dB[i].name = name;
           dB[i].address = address;
           dB[i].phone = phone;
           dB[i].email = email;
          }
       }
     localStorage.setItem('ClientDataBase', JSON.stringify(dB));
     console.log('service UDATE');
   }*/

}
