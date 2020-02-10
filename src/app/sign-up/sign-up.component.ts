import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  confirmation= 'Successfully created an account';
  clientAdded= false;
  client: object= {};

  addNewClient(client) {
    this.client = {
      'username': client.username,
      'password': client.password
    };
    this.http.post('http://localhost:3000/clients', this.client).subscribe(
      (res: any) => {this.clientAdded = true; });
  }

  ngOnInit() {
  }

}
