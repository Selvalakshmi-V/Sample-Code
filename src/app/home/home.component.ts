import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Declaration
  post:any;
  emails: string;
  passwords: string;
  choices: string;
  a = "20px";

  constructor(private dataService: DataService, private http: Http) {

    // Getdata from service file
    this.post = this.dataService.getData();
    this.emails = this.post.email;
    this.passwords = this.post.password;
    this.choices = this.post.choice;

    console.log("Displayed Successfully");
  }

  ngOnInit() {
  }

}
