import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  edit_data:any;
  id:number;
  data:object={};
  product:object={};
  private header = new HttpHeaders ({'Content-Type':'application/json'});

  constructor(private router:Router ,private route:ActivatedRoute, private http:HttpClient) { }
  
  editProduct(product){
    this.product = {
      "name":product.name,
      "color":product.color,
      "company":product.company,
      "quantity":product.quantity
    }
    const url = `${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.data),{headers:this.header}).toPromise()
    .then(()=>{
      this.router.navigate(['/home']);
    })
  }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = + params['id'];
      // console.log(this.id)
    });
    this.http.get( `http://localhost:3000/products/${this.id}`).subscribe((res:any[])=>{
    this.data = res});
  }
}

