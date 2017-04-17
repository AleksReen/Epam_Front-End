import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { DataService } from '../data.service';


@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  public dataBase: Client [] = []; 
  public newclient: Client;

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
     this.dataBase = this._dataService.getDatas();
  }

  addClient(newclient){
      this.dataBase.push(newclient);
  }

  deleteClient(deleteName: string, i: number){
     this.dataBase = this.dataBase.filter(client => client.name != deleteName)
  }
}
