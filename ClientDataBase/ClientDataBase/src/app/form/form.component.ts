import { Client } from './../client';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public name: string;
  public phone: string;
  public address: string;
  public email: string;
  @Output() createClientForm = new EventEmitter <Client> ();
  public newClient: Client;

  constructor() { 

  }

  ngOnInit() {
  }

   public createClient(): void {
        this.newClient = new Client (this.name, this.phone, this.address, this.email)
        this.createClientForm.emit(this.newClient);
        console.log('FORMA WORK');
        console.log(this.newClient);
    }

  TESTFORM(){
    console.log("TEST FORM ---------")
    
  }

  public clearForm(): void{
    this.name = '';
    this.phone = '';
    this.address = '';
    this.email = '';
  }
}
