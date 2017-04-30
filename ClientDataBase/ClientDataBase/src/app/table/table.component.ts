import { Client } from './../client';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public listClients: Client [] = [];
  @Output()
  public deleteClientTable = new EventEmitter <number> ();
  @Output()
  public editeClientTable = new EventEmitter <number> ();
  public searchState = 'default';
  public searchArray: Client [] = [];
  public searchName: string;
  public selectedClient: Client;


  constructor() {}

  ngOnInit() {}

   public searchClient() {
    this.searchState = 'search';
    this.searchArray = [];
    this.listClients.forEach( client => {if (client.getName === this.searchName) {this.searchArray.push(client); }; });
  }

  public returnBase() {
    this.searchState = 'default';
  }

  public deleteClient(id: number) {
    this.deleteClientTable.emit(id);
    if (this.searchArray.length >= 0) {
     this.searchArray = this.searchArray.filter(client => client.getId !== id);
    }
  }

   public editeClient(id: number) {
    this.editeClientTable.emit(id);
  }

  public onSelect(item: Client) {
     this.selectedClient = item;
  }
}
