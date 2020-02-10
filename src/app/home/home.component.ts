import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private http: HttpClient, private user: UserService, private router: Router) { }

  id: number;
  private header = new HttpHeaders ({'Content-Type': 'application/json'});

  products= [];

  getProduct() {
    return this.http.get('http://localhost:3000/products').subscribe((res: any[]) => {
      this.products = res; });
  }


  deleteProduct(id) {
    if (confirm('Are you sure?')) {
      const url = `${'http://localhost:3000/products'}/${id}`;
      return this.http.delete(url, {headers: this.header}).toPromise()
      .then(() => {
        this.getProduct();
      });
    }
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.getProduct();
  }
}
