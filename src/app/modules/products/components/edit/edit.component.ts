import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ProductInterface} from "../../interfeses/product.interface";
import {ProductService } from "../../services/product.service";
import {first} from "rxjs/operators";
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  product: ProductInterface;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('product:', this.product)
    let productId = this.route.snapshot.paramMap.get('id');
    console.log('productId:', productId)
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

  onSubmit(): void {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data) {
            alert('ProductInterface updated successfully.');
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
