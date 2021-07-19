import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ProductService} from "../../services/product.service";
import {ProductInterface} from "../../interfeses/product.interface";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  addForm!: FormGroup;
  editForm: FormGroup;
  product: ProductInterface;
  productTitle: string;
  buttonTitle: string;
  option: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log('product:', this.product)
    let productId = this.route.snapshot.paramMap.get('id');
    console.log('productId:', productId)

    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.productTitle = "Add Product"
    this.buttonTitle = "Add"

    if (productId) {
      this.productService.getProductById(+productId)
        .subscribe(data => {
          this.editForm.setValue(data);
        });
      this.productTitle = "Edit Product"
      this.buttonTitle = "Update"
    }
  }

  onSubmit(): void {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            alert('ProductInterface updated successfully.');
            this.router.navigate(['list']);
          } else {
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

