import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any;
  constructor(private router:Router, private user:UserService, private http:HttpClient) { }
  
  clients=[]; 
  
  getClient(){
    return this.http.get("http://localhost:3000/clients").subscribe((res:any[])=>{
      this.clients = res});
  }
  
  ngOnInit() {
    this.getClient();
  }

  login(e){
    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    var isValid = this.clients.find(item => item.username === userName && item.password === password);
    
    if (isValid){
      this.user.setUserLoggedIn();
      this.router.navigate(['/home'])
    }else {
      this.error='Invalid Username or Password!!'
    }
  }
}