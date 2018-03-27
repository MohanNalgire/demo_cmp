import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsdata:ProductdataService) { }

  ngOnInit() {
    console.log('products',this.productsdata);
  }

}
