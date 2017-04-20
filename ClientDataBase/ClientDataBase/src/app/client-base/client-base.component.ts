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

/*INPUT сверху в низ - OUTPUT снизу в верх*/

  public clientBase: Client[] = [];
  public base: Base;
  public editeClient: Client;
  public toggleFormState = 'default';
  private someToken: string;


  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.base = new Base ();
    this.base = this._dataService.getClientBase();
    this.clientBase = this.base.getClientBase;
  }

  public addClientBase(newClient: Client): void {
    this.clientBase = this.base.addClient(newClient);
    this._dataService.setClientBase(this.base);
  }

  public deleteClientBase(id: number): void {
    this.clientBase = this.base.deleteClient(id);
    this._dataService.setClientBase(this.base);
  }

  public editeClientBase (id: number): void {
    this.editeClient = this.base.findClient(id);
    this.toggleFormState = 'edite';
  }

   public updateClientBase(updates: string[]): void {

     this.editeClient.setName = updates[0];
     this.editeClient.setPhone = updates[1];
     this.editeClient.setAddress = updates[2];
     this.editeClient.setEmail = updates[3];
   }

   public toggleForm (toggle: string): void {
        this.toggleFormState = toggle;
   }
}
