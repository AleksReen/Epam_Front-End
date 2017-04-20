import { Client } from './../client';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name: string; public updateName: string;
  public phone: string; public updatePhone: string;
  public address: string; public updateAddress: string;
  public email: string; public updateEmail: string;
  @Output()
  createClientForm = new EventEmitter <Client> ();
  public newClient: Client;
  @Input()
  editeClientForm: Client;
  @Input()
  toggleForm: string;
  @Output() 
  updatesClientForm = new EventEmitter <string []> ();
  updatesClient: string [] = [];
  @Output() 
  toglleOff = new EventEmitter <string> ();

  constructor() {}

  ngOnInit() {}

  public createClient(): void {
        this.newClient = new Client (this.name, this.phone, this.address, this.email)
        this.createClientForm.emit(this.newClient);
    }

  public updateClient(name: string, phone: string, address: string, email: string){

     for (let i = 0; i < arguments.length; i++){
        this.updatesClient.push(arguments[i]);
     }
        this.updatesClientForm.emit(this.updatesClient);
        this. updatesClient = [];
    }

  public finishEdite(): void {
    this.toglleOff.emit('default');
    this.name = '';
    this.phone = '';
    this.address = '';
    this.email = '';
  }

  public clearForm(): void {
    this.name = '';
    this.phone = '';
    this.address = '';
    this.email = '';
  }
}
