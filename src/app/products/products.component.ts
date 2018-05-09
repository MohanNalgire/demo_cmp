import { Component, OnInit, Input } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { HttpClient,HttpClientModule  } from '@angular/common/http';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  private products;
  constructor(
    private http:HttpClient,
    private modalService: NgbModal
  ) { }


  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe(data => {
      console.log(data);
      this.products=data;
    });
  }
  
  productCreate(){
    alert("Create product");
  }

  productView(){
    const modalRef = this.modalService.open(ProductsComponent);
    modalRef.componentInstance.name = 'World';
  }

  productEdit(){
    alert("component");
  }

  productDelete(){
    alert("component");
  }
}
