import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {
<<<<<<< HEAD

  public dataBase: Client [] = []; 
  public newclient: Client;

  constructor(private _dataService: DataService) {
=======
>>>>>>> parent of ddb3f9e... load local storage

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
     this.dataBase = this._dataService.getDatas();
  }

  addClient(newclient){
      this.dataBase.push(newclient);
  }

  deleteClient(deleteName: string, i: number){
     this.dataBase = this.dataBase.filter(client => client.name != deleteName)
  }
=======
  }

>>>>>>> parent of ddb3f9e... load local storage
}