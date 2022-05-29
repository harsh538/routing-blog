import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getUserDetails(){
 
   return [{name:'Harshad',email:'Harsh@gmail.com',age:18},
    {name:'vishal',email:'vis@gmail.com',age:24},
    {name:'Subodh',email:'Su@gmail.com',age:34},
    {name:'Rajat',email:'Ra@gmail.com',age:22}]
}
}
