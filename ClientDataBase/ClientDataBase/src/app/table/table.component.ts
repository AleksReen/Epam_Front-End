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

  constructor() {}

  ngOnInit() {}

  public deleteClient(id: number){
    this.deleteClientTable.emit(id);
  }

   public editeClient(id: number){
    this.editeClientTable.emit(id);
  }

}
