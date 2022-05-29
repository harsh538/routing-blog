import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  memberDetails=[
    {name:'Harshad',email:'Harsh@gmail.com'},
    {name:'vishal',email:'vis@gmail.com'},
    {name:'Subodh',email:'Su@gmail.com'},
    {name:'Rajat',email:'Ra@gmail.com'},
  ]
  constructor() { }
  ngOnInit(): void {
  }
}
