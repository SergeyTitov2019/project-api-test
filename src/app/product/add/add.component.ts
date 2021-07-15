import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {Router} from "@angular/router";
import {ProductService } from "../product.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

   addForm!: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit() {
    this.productService.createProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list']);
      });
  }
  onBack() {
    this.router.navigate(['list']);
  }
}
