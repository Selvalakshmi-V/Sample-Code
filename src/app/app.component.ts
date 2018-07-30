import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private dataService: DataService) {}
  
  //Declaration
  post:any;
  email: string;
  password: string;
  choice: string;
  searchValue:string = '';
  searchValue1:string = '';
  // a:boolean = false;

  addPost(data) {

    // Get value from html
    this.email = data.value.email;
    this.password = data.value.password;
    this.choice = data.value.choice;

    // Store data in service  file
    this.dataService.putData(this.email, this.password, this.choice);

    console.log(this.email);
    console.log(this.password);
    console.log(this.choice);
    console.log("Sent Successfully");
    // this.a = true;
  }

  clickMethod() {
    if(confirm("Are you sure to reset the form ")) {
      console.log('Reseted Successfully');
      this.searchValue = null;
      this.searchValue1 = null;     
    }
  }
}
