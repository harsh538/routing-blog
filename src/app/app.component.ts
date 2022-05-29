import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service in Angular';
  userD:any;
  constructor(private userdata:UserdataService){
   this.userD= userdata.getUserDetails();
  }
}