import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service in Angular';
  memberDetails=[
    {name:'Harshad',email:'Harsh@gmail.com'},
    {name:'vishal',email:'vis@gmail.com'},
    {name:'Subodh',email:'Su@gmail.com'},
    {name:'Rajat',email:'Ra@gmail.com'},
  ]
}