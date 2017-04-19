import { Client } from './../client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-base',
  templateUrl: './client-base.component.html',
  styleUrls: ['./client-base.component.css']
})
export class ClientBaseComponent implements OnInit {

  // INPUT сверху в низ

  public clientBase: Client[] = [];
  public newClientBase: Client;


    public test;
    
    createClientBase(newClient:Client){
        this.newClientBase = newClient;
        console.log("BASE OK")
        console.log(this.newClientBase)
    }

  TESTBASE(){
    console.log("TEST BASE ---------")
    console.log(this.test)
  }

  constructor() { }

  ngOnInit() {
  }

}
