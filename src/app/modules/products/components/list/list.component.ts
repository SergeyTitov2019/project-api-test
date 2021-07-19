import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductInterface} from "../../interfeses/product.interface";
import {ProductService } from "../../services/product.service";

@Component({
  selector: 'app-list1',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  products!: ProductInterface[];

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

  deleteProduct(product: ProductInterface): void {
    this.productService.deleteProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
  };

  editProduct(product: ProductInterface): void {
    // console.log('edit:', product.id)
    this.router.navigate(['edit/', product.id.toString()]);
  };


  addProduct(): void {
    this.router.navigate(['add']);
  };

  // addTest(): void {
  //   this.router.navigate(['test']);
  // };
}
