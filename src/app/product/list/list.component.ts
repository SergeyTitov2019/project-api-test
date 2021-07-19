import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductService } from "../product.service";

@Component({
  selector: 'app-list1',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  products!: Product[];

  constructor(
    private readonly router: Router,
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProduct(product: Product): void {
    console.log('edit:', product.id)
    this.router.navigate(['edit/', product.id.toString()]);
  };

  // editProduct(product: Product): void {
  //   window.localStorage.removeItem("editProductId");
  //   window.localStorage.setItem("editProductId", product.id.toString());
  //   this.router.navigate(['edit']);
  // };

  addProduct(): void {
    this.router.navigate(['add']);
  };

}
