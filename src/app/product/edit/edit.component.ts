
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Product} from "../product";
import {ProductService } from "../product.service";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    let productId = window.localStorage.getItem("editProductId");
    if(!productId) {
      alert("Invalid action.")
      this.router.navigate(['list']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.productService.getProductById(+productId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data) {
            alert('Product updated successfully.');
            this.router.navigate(['list']);
          }else {
            alert('Something went wrong!');
          }
        },
        error => {
          alert(error);
        });
  }


  onBack() {
    this.router.navigate(['list']);
  }

}
