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
  public inValid:boolean = false;
  public valid:boolean = false;
  public hiddenAttention:boolean = true;
  public showAttention:boolean = false;


  constructor() {}

  ngOnInit() {}

  public createClient(): boolean {
        if (this.name === undefined || this.name.length <= 0) {
           this.inValid = true;
           this.valid = false;
           this.showAttention = true;
           return false;
        } else {
           this.inValid = false;
           this.valid = true;
           this.showAttention = false;
        }

        this.newClient = new Client (this.name, this.phone, this.address, this.email)
        this.createClientForm.emit(this.newClient);
        return true;
    }

  public updateClient(name: string, phone: string, address: string, email: string){

        if (name === undefined || name.length <= 0) {
           this.inValid = true;
           this.valid = false;
           this.showAttention = true;
           return false;
        } else {
           this.inValid = false;
           this.valid = true;
           this.showAttention = false;
        }

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
    this.valid = false;
    this.inValid = false;
    this.hiddenAttention = true;
    this. showAttention = false;
  }

  public clearForm(): void {
    this.name = '';
    this.phone = '';
    this.address = '';
    this.email = '';
    this.valid = false;
    this.inValid = false;
    this.hiddenAttention = true;
    this. showAttention = false;
  }
}
