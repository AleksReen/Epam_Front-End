import { Client } from './../client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public listClients: Client [];

  constructor() { }

  ngOnInit() {
  }

}
