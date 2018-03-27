import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { HttpClient,HttpClientModule  } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products;
  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe(data => {
      console.log(data);
      this.products=data;
    });
  }

}
