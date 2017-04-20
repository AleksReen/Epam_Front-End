
import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { Client } from '../client';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-base',
  templateUrl: './client-base.component.html',
  styleUrls: ['./client-base.component.css']
})
export class ClientBaseComponent implements OnInit {

  // INPUT сверху в низ

  public clientBase: Client[] = [];
  public base: Base;
  public editeClient: Client;
  public toggleFormState: string = 'default';
  private someToken: string;


  constructor(private _dataService: DataService) {
    this.base = new Base ();
  }

  ngOnInit() {
    let tb = localStorage.getItem('teacherBookBox');
    this.base = Base.fromJson(JSON.parse(tb));
  }

  public addClientBase(newClient: Client): void {
        this.clientBase = this.base.addClient(newClient);
        this._dataService.putTeacherBook('test',this.base)
    }

  public deleteClientBase(id: number): void {
        this.clientBase = this.base.deleteClient(id);
    }

  public editeClientBase (id: number){
      this.editeClient = this.base.findClient(id);
      this.toggleFormState = 'edite';
  }

   public updateClientBase(updates:string[]){

     this.editeClient.setName = updates[0];
     this.editeClient.setPhone = updates[1];
     this.editeClient.setAddress = updates[2];
     this.editeClient.setEmail = updates[3];

     console.log(this.base)
   }
   public toggleForm (toggle:string){
        this.toggleFormState = toggle;
   }
}
