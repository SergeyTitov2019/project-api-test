import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";
import {ProductService} from "../product.service";

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
  ) {
  }

  addForm!: FormGroup;

  public selectType: Array<any> = [
    {value: 'fridge', name: 'Холодильник'},
    {value: 'micro-oven', name: 'Микроволновая печь'},
    {value: 'tv', name: 'Телевизор'},
    {value: 'washing-machine', name: 'Посудомоечная машина'},
  ]

  name = new FormControl(
    '',
    [Validators.minLength(5), Validators.required]
  )
  description = new FormControl(
    '',
    [Validators.minLength(6), Validators.required]
  )

  type = new FormControl(
    '',
    [Validators.required]
  )


  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      name: this.name,
      type: this.type,
      description: this.description
    });
  }

  onSubmit() {
    this.productService.createProduct(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list']);
      });
  }

  onBack() {
    this.router.navigate(['list']);
  }

}
