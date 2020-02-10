import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  confirmString = 'New Product Added';
  isAdded = false;
  product: object = {};

  addNewProduct(product) {
    // console.log(product);
    this.product = {
      'name': product.name,
      'color': product.color,
      'company': product.company,
      'quantity': product.quantity
    };

    this.http.post('http://localhost:3000/products/', this.product).subscribe(
      (res: any) => {this.isAdded = true; }
    );
  }

  ngOnInit() {

  }

}
