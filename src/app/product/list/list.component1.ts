
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductService } from "../product.service";

@Component({
  selector: 'app-list1',
  templateUrl: './list.component1.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent1 implements OnInit {

  products!: Product[];

  constructor(private router: Router, private studentService: ProductService) { }

  ngOnInit(): void {
    this.studentService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  deleteProduct(product: Product): void {
    this.studentService.deleteProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProduct(product: Product): void {
    window.localStorage.removeItem("editProductId");
    window.localStorage.setItem("editProductId", product.id.toString());
    this.router.navigate(['edit']);
  };

  addProduct(): void {
    this.router.navigate(['add']);
  };

}
