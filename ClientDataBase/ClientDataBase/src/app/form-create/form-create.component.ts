import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/client';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  public name: string;
  public phone: string;
  public address: string;
  public email: string;
  @Output()
  clientFormCreate = new EventEmitter <Client> ();
  public inValid = false;
  public valid = false;
  public hiddenAttention = true;
  public showAttention = false;

  constructor() { }

  ngOnInit() {
  }

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

        let newClient = new Client (this.name, this.phone, this.address, this.email);
        this.clientFormCreate.emit(newClient);
        return true;
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
