import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userData: any;
  constructor(private userdata:UserdataService) {
    this.userData=userdata.getUserDetails();
   }
  ngOnInit(): void {
  }
}
