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
  public selectedClient: Client;

  constructor() {}

  ngOnInit() {}

   public searchClient(name: string) {
    this.searchState = 'search';
    this.searchArray = [];
    this.listClients.forEach( client => {if (client.getName === name) {this.searchArray.push(client); }; });
  }

  public returnBase(state: string) {
    if ( state !== 'default') {
      throw new  Error ('State is not correct');
    }
    this.searchState = state;
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
