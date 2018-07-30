import { Injectable } from '@angular/core';
import { Http } from '@angular/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  email: string;
  password: string;
  choice: string;
  post:any;
 

  constructor() { }
 
  // Store the data in putData function
  putData(email: string, password: string, choice: string) {
  this.email = email;
  this.password = password;
  this.choice = choice;
  this.post = {
    'email': this.email,
    'password': this.password,
    'choice': this.choice
  }
  }

  // Return the data 
  getData() {
    return this.post;
  }
}
