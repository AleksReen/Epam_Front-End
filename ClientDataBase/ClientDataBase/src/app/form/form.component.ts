import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name: string;
  public address: string;
  public phone: string;
  public email: string;
  public newClient: Client;

 @Output() onChanged = new EventEmitter<Client>();
 
  constructor() { }

  ngOnInit() {
  }

  public createClient(){
   this.newClient = new Client(this.name, this.address, this.phone, this.email);
   this.onChanged.emit(this.newClient);
  }
}
